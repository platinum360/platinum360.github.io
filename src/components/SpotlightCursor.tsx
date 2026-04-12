import { useEffect, useRef } from "react";

/**
 * SpotlightCursor
 *
 * A lightweight radial-gradient spotlight that follows the cursor across the
 * dark portfolio background. Uses your teal brand colour (#008ea5) so the
 * interactive light feel stays on-brand.
 *
 * Replaces the WebGL-heavy SplashCursor fluid simulation — zero GPU cost,
 * pure CSS background-property mutation on each mousemove frame.
 */
const SpotlightCursor = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    let rafId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let currentX = -9999;
    let currentY = -9999;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Lerp the spotlight position slightly behind the cursor for a
    // smooth, organic feel rather than an instant snap.
    const loop = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (el) {
        el.style.background = [
          `radial-gradient(700px circle at ${currentX}px ${currentY}px,`,
          `rgba(0, 142, 165, 0.07) 0%,`,
          `rgba(0, 142, 165, 0.03) 30%,`,
          `transparent 65%)`,
        ].join(" ");
      }

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        willChange: "background",
      }}
      aria-hidden="true"
    />
  );
};

export default SpotlightCursor;
