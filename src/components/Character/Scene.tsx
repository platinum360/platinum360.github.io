import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  const characterRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (canvasDiv.current) {
      const scene = sceneRef.current;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);
      // Set size immediately — don't wait for ResizeObserver to avoid
      // the renderer starting at its default 300x150 on mobile.
      renderer.setSize(window.innerWidth, window.innerHeight);

      const camera = new THREE.PerspectiveCamera(14.5, window.innerWidth / window.innerHeight, 0.1, 1000);
      if (window.innerWidth < 768) {
        camera.position.set(0, 13.8, 32.0);
      } else {
        camera.position.set(0, 13.1, 24.7);
      }
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(camera);
      let isMounted = true;

      const resizeObserver = new ResizeObserver(() => {
        if (characterRef.current) {
          handleResize(renderer, camera, canvasDiv, characterRef.current);
        } else {
          // Fallback before character loads: size to full viewport
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
      });

      if (canvasDiv.current) {
        resizeObserver.observe(canvasDiv.current);
      }

      loadCharacter()
        .then((gltf) => {
          if (gltf && isMounted) {
            // Prevent multiple instances if reloading hot
            const duplicate = scene.getObjectByName("Scene");
            if (duplicate) scene.remove(duplicate);

            const animations = setAnimations(gltf);
            hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
            mixer = animations.mixer;
            let character = gltf.scene;
            character.name = "Scene";
            characterRef.current = character;
            scene.add(character);
            headBone = character.getObjectByName("spine006") || null;
            screenLight = character.getObjectByName("screenlight") || null;
            progress.loaded().then(() => {
              document.body.classList.add("character-loaded");
              light.turnOnLights();
              animations.startIntro();
            });
            // Trigger manually once character is added to ensure GSAP timelines are set
            handleResize(renderer, camera, canvasDiv, character);
          }
        })
        .catch((err) => {
          console.error("[CharacterScene] Model failed to load:", err);
          // Show a visible error badge on mobile so the failure is obvious
          if (canvasDiv.current) {
            const errDiv = document.createElement("div");
            errDiv.id = "char-load-error";
            errDiv.style.cssText = "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);" +
              "background:rgba(255,0,0,0.8);color:#fff;padding:12px 18px;border-radius:8px;" +
              "font-size:13px;z-index:999;text-align:center;pointer-events:none;";
            errDiv.textContent = "3D model load error: " + (err?.message || String(err));
            canvasDiv.current.appendChild(errDiv);
          }
        });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        debounce = setTimeout(() => {
          // Map the first touch point into normalised [-1, 1] coordinates
          handleTouchMove(event, (x, y) => (mouse = { x, y }));
        }, 50);
      };

      const onTouchMove = (event: TouchEvent) => {
        handleTouchMove(event, (x, y) => (mouse = { x, y }));
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      // Use document-level listeners so touch events are captured even when
      // the canvas sits on top of the landing section (pointer-events: none).
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchstart", onTouchStart, { passive: true });
      document.addEventListener("touchmove", onTouchMove, { passive: true });
      document.addEventListener("touchend", onTouchEnd, { passive: true });
      let animateId: number;
      const animate = () => {
        animateId = requestAnimationFrame(animate);
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        // Always update mixer so the intro animation plays on all devices.
        // Idle body clips are stopped after intro on mobile (see below).
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        isMounted = false;
        clearTimeout(debounce);
        cancelAnimationFrame(animateId);
        scene.traverse((object) => {
          if (!(object as THREE.Mesh).isMesh) return;
          const mesh = object as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material instanceof THREE.Material) {
            mesh.material.dispose();
          } else if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          }
        });
        scene.clear();
        renderer.dispose();
        resizeObserver.disconnect();
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };
    }
  }, []);

  return (
    <>
      <div 
        className="character-container" 
        style={{ position: 'fixed', top: 0, left: 0, width: '100dvw', height: '100dvh', zIndex: 50, pointerEvents: 'none' }}
      >
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
