import { useEffect, useRef } from "react";

/**
 * SpotlightCursor
 *
 * A GPU-composited teal radial spotlight that follows the cursor.
 * Uses translate3d() on a fixed-size circular div — this triggers GPU layer
 * composition instead of a full-viewport repaint, completely eliminating
 * the Work section lag caused by the previous background-mutation approach.
 *
 * The inner bright core + outer soft halo gives a much more vivid, dramatic
 * look compared to the old single-layer gradient.
 */
const SpotlightCursor = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    let rafId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let innerX = mouseX;
    let innerY = mouseY;
    let outerX = mouseX;
    let outerY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      // Inner spotlight snaps faster (more responsive)
      innerX += (mouseX - innerX) * 0.18;
      innerY += (mouseY - innerY) * 0.18;
      // Outer halo lags behind for an organic trailing effect
      outerX += (mouseX - outerX) * 0.07;
      outerY += (mouseY - outerY) * 0.07;

      // translate3d triggers GPU composition — zero repaints
      inner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0) translate(-50%, -50%)`;
      outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) translate(-50%, -50%)`;

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
      {/* Inner bright core — tight, vivid spotlight */}
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,220,0.18) 0%, rgba(0,142,165,0.1) 45%, transparent 70%)",
          willChange: "transform",
          pointerEvents: "none",
        }}
      />
      {/* Outer soft halo — wide, ambient glow */}
      <div
        ref={outerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,142,165,0.06) 0%, rgba(0,100,120,0.03) 50%, transparent 70%)",
          willChange: "transform",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default SpotlightCursor;
