import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// Track the last width we rendered at so we can ignore height-only changes
// (e.g. mobile browser URL bar hiding/showing on scroll) which would otherwise
// cause camera.updateProjectionMatrix() to fire and zoom the model in.
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

  // On mobile, scrolling hides the browser's URL bar which changes innerHeight
  // but NOT innerWidth. Skip the resize entirely in that case — it would make
  // the camera recalculate its aspect/projection and cause a visible zoom-in.
  if (!force && width === _lastWidth) return;
  _lastWidth = width;

  renderer.setSize(width, height);
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
