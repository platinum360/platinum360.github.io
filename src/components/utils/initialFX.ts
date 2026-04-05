import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);
  
  const mainEl = document.querySelector(".main-body");
  if (mainEl) mainEl.classList.add("main-active");

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  window.dispatchEvent(new Event("hero-ready"));
}
