import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import DecryptedText from "./DecryptedText";
import "./styles/Loading.css";

const Loading = () => {
  const { setIsLoading } = useLoading();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hold animation for 2.4 seconds (drawing + filling takes ~1.8s)
    const revealTimer = setTimeout(() => {
      setIsFadingOut(true);
      window.dispatchEvent(new Event("hero-intro-start"));
    }, 2400);

    const removeTimer = setTimeout(() => {
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
        setIsLoading(false);
      });
    }, 3000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, [setIsLoading]);

  return (
    <div className={`logo-reveal-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="logo-wrapper">
        <svg 
          viewBox="0 0 960.72 510.48" 
          className="reveal-svg-logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A path */}
          <path className="draw-fill-path" d="M519.78,509.48l.09.63c-34.01.29-68,.26-101.95-.11-.42.29-.8.26-1.12-.09l-156.44-306.83c-52.3,102.68-104.47,204.94-156.52,306.8l-1.12.09c-31.95.27-63.9.29-95.85.07l-6.36-.51c-.15-.87,0-1.87.45-3C86.28,339,172.25,170.3,258.85.42l1.25-.42h.48l206.23,404.99,52.98,104.48Z"/>
          {/* J path */}
          <path className="draw-fill-path" d="M887.78,0h72.94v403.97c-.18,2.26-.34,4.49-.48,6.72,1.08,26.03-7.75,54.18-26.49,72.86-18.57,18.51-46.39,27.15-71.88,26.45-1.84.34-3.93.39-5.76,0-98.45.29-197.03.37-295.74.24.01-4.13-.11-8.21-.37-12.24l-.12-47.48c-.01-4.37-.61-8.49.01-12.59l277.28-.07c7.98,0,15.44-1.61,22.72-4.08,19.72-7.62,26.72-24.08,28.03-44.36l-.14-389.42Z"/>
          {/* Dash polygon */}
          <polygon className="draw-fill-path" points="559.71 44.52 513.89 125.03 496.8 125.05 496.79 12.38 559.62 12.35 559.71 44.52"/>
        </svg>

        <p className="reveal-quote">
          <DecryptedText
            text='"Creativity is Intelligence having Fun."'
            animateOn="view"
            sequential={true}
            speed={30}
            revealDirection="start"
            className="decrypted-revealed"
            encryptedClassName="decrypted-encrypted"
          />
        </p>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  setLoading(100);
  const clear = () => {};
  const loaded = () => Promise.resolve(100);
  return { loaded, percent: 100, clear };
};
