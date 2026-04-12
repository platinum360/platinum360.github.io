import { useRef, useEffect, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import "./styles/VideoShowreel.css";

const videos = [
  "/Snappy%20Motions_Vidz/First.mp4",
  "/Snappy%20Motions_Vidz/Second.mp4",
  "/Snappy%20Motions_Vidz/Third.mp4",
  "/Snappy%20Motions_Vidz/Fourth.mp4",
  "/Snappy%20Motions_Vidz/Fifth.mp4",
  "/Snappy%20Motions_Vidz/Sixth.mp4",
  "/Snappy%20Motions_Vidz/Seventh.mp4",
  "/Snappy%20Motions_Vidz/Eight.mp4",
  "/Snappy%20Motions_Vidz/Ninth.mp4",
  "/Snappy%20Motions_Vidz/Tenth.mp4",
];

const VideoShowreel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Silent hidden element that pre-buffers the NEXT video
  const preloadRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inView, setInView] = useState(false);

  // Ref copies so effects can read latest values without re-running
  const isPlayingRef = useRef(true);
  const inViewRef = useRef(false);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { inViewRef.current = inView; }, [inView]);

  // ── Section visibility (play / pause based on scroll) ─────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Play / pause on scroll in/out ──────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && isPlaying) {
      video.play().catch(() => {});
    } else if (!inView) {
      video.pause();
    }
  }, [inView, isPlaying]);

  // ── Track change: switch src WITHOUT calling load() on the main video ──────
  //    video.load() flushes the buffer and forces a full network re-fetch,
  //    which is the primary cause of the stutter between tracks.
  //    Setting .src and calling .play() is sufficient in modern browsers.
  useEffect(() => {
    const video = videoRef.current;
    const preload = preloadRef.current;
    if (!video) return;

    // Switch the main video source — no load() call
    video.src = videos[currentIdx];
    video.currentTime = 0;
    if (inViewRef.current && isPlayingRef.current) {
      video.play().catch(() => {});
    }

    // Pre-buffer the NEXT track silently in the hidden video element
    if (preload) {
      const nextIdx = (currentIdx + 1) % videos.length;
      preload.src = videos[nextIdx];
      preload.load(); // Only the hidden preloader calls load()
    }
  }, [currentIdx]);

  // ── Controls ───────────────────────────────────────────────────────────────
  const handleNext = () =>
    setCurrentIdx((prev) => (prev + 1) % videos.length);
  const handlePrev = () =>
    setCurrentIdx((prev) => (prev - 1 + videos.length) % videos.length);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
    setIsPlaying((p) => !p);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) video.muted = !isMuted;
    setIsMuted((m) => !m);
  };

  return (
    <div className="vs-section" ref={sectionRef}>
      <div className="vs-container section-container">
        <h2 className="vs-title">
          <span className="light-green-text" style={{ color: "var(--textColor)" }}>Snappy</span>{" "}
          <span>Motions</span>
        </h2>

        <div className="vs-glass-wrapper">
          <div className="vs-video-container">
            {/* Main player — src is driven imperatively, never remounted */}
            <video
              ref={videoRef}
              src={videos[0]}
              className="vs-video"
              muted={isMuted}
              playsInline
              preload="auto"
              onEnded={handleNext}
            />

            {/*
             * Hidden preloader — silently pre-buffers the next track so
             * the switch feels instant. Width/height 0, display none keeps
             * it completely out of the layout and paint tree.
             */}
            <video
              ref={preloadRef}
              src={videos[1]}
              muted
              playsInline
              preload="auto"
              style={{
                display: "none",
                position: "absolute",
                width: 0,
                height: 0,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="vs-controls" data-cursor="disable">
            <button
              className="vs-control-btn play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              className="vs-control-btn mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>

          <div className="vs-nav-controls" data-cursor="disable">
            <button
              className="vs-control-btn nav-btn"
              onClick={handlePrev}
              aria-label="Previous Video"
            >
              <HiArrowLongLeft size={28} />
            </button>
            <span className="vs-index">
              {currentIdx + 1} / {videos.length}
            </span>
            <button
              className="vs-control-btn nav-btn"
              onClick={handleNext}
              aria-label="Next Video"
            >
              <HiArrowLongRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowreel;
