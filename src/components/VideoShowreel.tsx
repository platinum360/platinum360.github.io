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
  "/Snappy%20Motions_Vidz/Tenth.mp4"
];

const VideoShowreel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle play/pause based on visibility and user control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, isPlaying]);

  // Handle track changes imperatively — avoids destroying/recreating the video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;
    video.src = videos[currentIdx];
    video.load();
    if (isPlaying) video.play().catch(() => {});
  }, [currentIdx]);

  return (
    <div className="vs-section">
      <div className="vs-container section-container">
        <h2 className="vs-title"><span style={{ color: "white" }}>Snappy</span> <span>Motions</span></h2>
        
        <div 
          className="vs-glass-wrapper" 
          ref={containerRef}
        >

          <div className="vs-video-container">
            <video
              ref={videoRef}
              src={videos[currentIdx]}
              className="vs-video"
              muted={isMuted}
              playsInline
              preload="auto"
              onEnded={handleNext}
            />
          </div>

          <div className="vs-controls" data-cursor="disable">
            <button 
              className="vs-control-btn play-btn" 
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                // Pause Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                // Play Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            
            <button 
              className="vs-control-btn mute-btn" 
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                // Mute Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
              ) : (
                // Sound Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
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
