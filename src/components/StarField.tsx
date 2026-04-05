import { useMemo } from "react";
import "./styles/StarField.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = [
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#c0e8ff",
  "#11292f",
  "#11292f",
  "#70b0ff",
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const StarField = ({ count = 180 }: { count?: number }) => {
  const stars = useMemo<Star[]>(() => {
    const rand = seededRandom(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 2.2 + 0.4,
      opacity: rand() * 0.6 + 0.2,
      duration: rand() * 4 + 2,
      delay: rand() * 6,
      color: COLORS[Math.floor(rand() * COLORS.length)],
    }));
  }, [count]);

  const shootingStars = useMemo(() => {
    const rand = seededRandom(99);
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: rand() * 60,
      delay: rand() * 8 + i * 3,
      duration: rand() * 1.5 + 1.2,
    }));
  }, []);

  return (
    <div className="starfield-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {shootingStars.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
