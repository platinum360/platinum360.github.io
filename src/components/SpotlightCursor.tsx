import { useEffect, useRef } from "react";
import "./styles/AuroraCursor.css";

/**
 * AuroraCursor (SpotlightCursor replacement)
 *
 * Architecture — two separate div layers to avoid JS/CSS transform conflicts:
 *
 *  [Fixed container] overflow: hidden
 *    └─ [Wrapper div]  JS-controlled via translate3d (GPU composited, zero repaints)
 *         └─ [Blob div]  CSS-controlled aurora-morph + aurora-breathe animations
 *
 * The wrapper moves instantly with the mouse (but lerped at 0.05 for a dreamy
 * trailing feel). The blob independently breathes and morphs its shape.
 * hue-rotate in aurora-breathe shifts the teal between cyan and blue-green
 * without mutating the background property, keeping it compositor-only.
 */
const SpotlightCursor = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let rafId: number;
    // Start at viewport centre so the blob fades in gracefully
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let blobX = mouseX;
    let blobY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      // Low lerp factor = slow, dreamy lag that reinforces the aurora feel
      blobX += (mouseX - blobX) * 0.05;
      blobY += (mouseY - blobY) * 0.05;
      // translate3d triggers GPU layer composition — zero repaints
      wrapper.style.transform = `translate3d(${blobX}px, ${blobY}px, 0)`;
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
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/*
       * Wrapper: JS moves this with translate3d (GPU composited).
       * Pre-offset by -150px (half the 300px blob) so the blob centres
       * on the cursor position.
       */}
      <div
        ref={wrapperRef}
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          willChange: "transform",
          pointerEvents: "none",
        }}
      >
        {/*
         * Blob: only CSS animations touch this element.
         * aurora-morph shapes it organically.
         * aurora-breathe pulses scale, opacity, and hue.
         */}
        <div className="aurora-blob" />
      </div>
    </div>
  );
};

export default SpotlightCursor;
