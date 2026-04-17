import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";
import { gsap } from "gsap";

const setCharacter = (
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const clothingMaterials: THREE.MeshStandardMaterial[] = [];
  const skinMaterials: THREE.MeshStandardMaterial[] = [];

  const updateClothingTheme = (isLightMode: boolean) => {
    const targetColor = new THREE.Color(isLightMode ? "#285e2b" : "#008ea5");
    clothingMaterials.forEach((mat) => {
      gsap.to(mat.color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 1.2,
        ease: "power2.inOut"
      });
    });

    const targetSkinColor = new THREE.Color(isLightMode ? "#d2996a" : "#E4AE6A");
    skinMaterials.forEach((mat) => {
      gsap.to(mat.color, {
        r: targetSkinColor.r,
        g: targetSkinColor.g,
        b: targetSkinColor.b,
        duration: 1.2,
        ease: "power2.inOut"
      });
    });
  };

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        const isLightMode = document.body.getAttribute("data-theme") === "light";
        const initialColor = isLightMode ? "#285e2b" : "#008ea5";
        const initialSkinColor = isLightMode ? "#d2996a" : "#E4AE6A";

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          (gltf) => {
            character = gltf.scene;
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                // Change clothing colors to match site theme
                if (mesh.material) {
                  const name = mesh.name.toLowerCase();
                  const matName = (mesh.material as THREE.Material).name ? (mesh.material as THREE.Material).name.toLowerCase() : "";

                  // Shirt body = Cube006 + material.008
                  if (name === "cube006" && matName === "material.008") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color(initialColor);
                    newMat.map = null;
                    newMat.needsUpdate = true;
                    mesh.material = newMat;
                    clothingMaterials.push(newMat);
                  // Shirt collar/neckline trim = Cube006_1 + material.010
                  } else if (name === "cube006_1" && matName === "material.010") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color(initialColor);
                    newMat.map = null;
                    newMat.needsUpdate = true;
                    mesh.material = newMat;
                    clothingMaterials.push(newMat);
                  } else if (name === "cap001") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color(initialColor);
                    newMat.needsUpdate = true;
                    mesh.material = newMat;
                    clothingMaterials.push(newMat);
                  } else if (
                    name.includes("body") || 
                    name.includes("skin") || 
                    name.includes("face") || 
                    name.includes("head") || 
                    name.includes("arm") || 
                    name.includes("hand") || 
                    name.includes("leg") ||
                    name.includes("neck") ||
                    name.includes("ear")
                  ) {
                    if (!name.includes("hair") && !name.includes("eye") && !name.includes("tooth") && !name.includes("shoe")) {
                      const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                      newMat.color = new THREE.Color(initialSkinColor);
                      mesh.material = newMat;
                      skinMaterials.push(newMat);
                    }
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter, updateClothingTheme };
};

export default setCharacter;
