import { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import './styles/MagicBento.css';

/* ── Particle helpers ── */
const spawnParticle = (container: HTMLElement, x: number, y: number) => {
  const p = document.createElement('div');
  p.className = 'mb-particle';
  p.style.left = `${x}px`;
  p.style.top = `${y}px`;
  container.appendChild(p);
  gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.9, duration: 0.3, ease: 'back.out(1.7)' });
  gsap.to(p, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, duration: 2 + Math.random() * 2, repeat: -1, yoyo: true, ease: 'none' });
  gsap.to(p, { opacity: 0.2, duration: 1.5, repeat: -1, yoyo: true });
  return p;
};

/* ── Image Card ── */
interface ImgCardProps { src: string; spanClass: string; onOpen: () => void; }

const ImgCard = ({ src, spanClass, onOpen }: ImgCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hovered = useRef(false);

  const clear = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.25, onComplete: () => p.remove() });
    });
    particlesRef.current = [];
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => {
      hovered.current = true;
      const { width, height } = el.getBoundingClientRect();
      for (let i = 0; i < 7; i++) {
        const t = setTimeout(() => {
          if (!hovered.current || !cardRef.current) return;
          const p = spawnParticle(cardRef.current, Math.random() * width, Math.random() * height);
          particlesRef.current.push(p as HTMLElement);
        }, i * 90);
        timersRef.current.push(t);
      }
    };

    const onLeave = () => { hovered.current = false; clear(); };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const cx = rect.width / 2, cy = rect.height / 2;
      gsap.to(el, {
        rotateX: ((y - cy) / cy) * -7,
        rotateY: ((x - cx) / cx) * 7,
        duration: 0.12, ease: 'power2.out',
        transformPerspective: 800, transformStyle: 'preserve-3d'
      });
    };

    const onLeaveReset = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'back.out(1)' });

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeaveReset);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeaveReset);
      clear();
    };
  }, [clear]);

  return (
    <div ref={cardRef} className={`mb-card ${spanClass}`} onClick={onOpen}>
      <img src={src} alt="" className="mb-img" loading="lazy" decoding="async" />
      <div className="mb-hover-veil">
        <span className="mb-expand-icon">⤢</span>
      </div>
    </div>
  );
};

/* ── Lightbox ── */
const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <div className="mb-lightbox" onClick={onClose}>
    <button className="mb-lb-close" onClick={e => { e.stopPropagation(); onClose(); }}>✕</button>
    <img src={src} alt="Full image" className="mb-lb-img" loading="lazy" decoding="async" onClick={e => e.stopPropagation()} />
  </div>
);

/* ── Span class logic based on index + total ── */
function spanClass(i: number, total: number): string {
  // Mostly square, only span the first one for hero effect if many images
  if (total > 3 && i === 0) return 'mb-span-hero';
  return '';
}

/* ── Main Modal ── */
interface MagicBentoProps { images: string[]; projectName: string; onClose: () => void; }

const MagicBento = ({ images, projectName, onClose }: MagicBentoProps) => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('mb-scroll-lock');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { lightbox ? setLightbox(null) : onClose(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('mb-scroll-lock');
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className="mb-overlay" onClick={handleOverlayClick}>
      <div className="mb-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="mb-header">
          <h2 className="mb-title">{projectName}</h2>
          <button className="mb-close" onClick={onClose}>✕</button>
        </div>

        {/* Bento grid */}
        <div className="mb-grid">
          {images.map((src, i) => (
            <ImgCard
              key={i}
              src={src}
              spanClass={spanClass(i, images.length)}
              onOpen={() => setLightbox(src)}
            />
          ))}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>,
    document.body
  );
};

export default MagicBento;
