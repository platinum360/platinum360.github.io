import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// Track the last rendered width to detect real layout changes (e.g. orientation
// flip) vs. height-only changes (e.g. mobile URL bar hiding on scroll).
let _lastWidth = 0;

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D,
  force = false
) {
  if (!canvasDiv.current) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Always sync the renderer's pixel buffer to the actual display size.
  // If we skip this, the GL buffer stays at old dimensions while the canvas
  // CSS stretches to fill a taller 100dvh container (URL bar hiding), which
  // causes a visible horizontal squeeze of the character.
  renderer.setSize(width, height);

  // Only update camera projection when WIDTH changes (real layout change, e.g.
  // orientation flip). On mobile, scrolling hides the URL bar which changes
  // innerHeight but NOT innerWidth — updating camera.aspect in that case causes
  // the model to visually zoom in, which is the original bug we're fixing.
  if (!force && width === _lastWidth) return;
  _lastWidth = width;

  camera.aspect = width / height;
  if (width < 768) {
    camera.position.set(0, 13.8, 32.0);
  } else {
    camera.position.set(0, 13.1, 24.7);
  }
  camera.updateProjectionMatrix();
  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
