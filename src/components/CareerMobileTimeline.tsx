import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/CareerMobileTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const careerData = [
  {
    year: "2019",
    role: "Junior Graphic Designer",
    company: "AV Enterprises Pvt Ltd",
    desc: "Started out in the trenches with sports and fashion brands. Handled fast-paced logo designs and print layouts while learning exactly what it takes to build campaigns that actually work.",
  },
  {
    year: "2019",
    role: "Graphic Designer & Consultant",
    company: "Altian Solutions Pvt Ltd",
    desc: "Stepped up to run full-scale campaigns for finance and retail clients. Took raw concepts to final execution while juggling tight deadlines and keeping the visual quality razor sharp.",
  },
  {
    year: "2021",
    role: "Freelance Brand Designer",
    company: "Independent Clients",
    desc: "Went solo to craft distinct visual identities for lifestyle, fashion, and pet care brands. Built custom packaging and digital campaigns that gave niche businesses a massive visual upgrade.",
  },
  {
    year: "2022 – 2023",
    role: "Junior Graphic Designer",
    company: "Lumens Technologies Pvt Ltd",
    desc: "Joined the Lumens team to support core design initiatives for tech and semiconductor sectors. Focused on creating scalable marketing assets and refining visual consistency across diverse digital platforms.",
  },
  {
    year: "2023 – 2024",
    role: "Graphic Designer",
    company: "Lumens Technologies Pvt Ltd",
    desc: "Advanced to owning design projects from concept to delivery. Collaborated closely with cross-functional teams to produce high-impact visuals for product launches and global B2B marketing campaigns.",
  },
  {
    year: "2024 – NOW",
    role: "Senior Graphic Designer",
    company: "Lumens Technologies Pvt Ltd",
    desc: "Led the creative direction for major tech and semiconductor brands. Scaled up B2B marketing by delivering hundreds of high-impact assets, directing product launches, and keeping brand consistency absolutely locked down.",
  },
];

const CareerMobileTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth > 768) return;

    const container = containerRef.current;
    const track = trackRef.current;
    const dot = dotRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!container || !track || !dot || cards.length === 0) return;

    // Use safe scroller detection for ScrollSmoother
    const scroller = document.querySelector("#smooth-content") 
      ? "#smooth-content" 
      : window;

    // 1. The Glowing Dot follows the track down
    gsap.fromTo(
      dot,
      { y: 0 },
      {
        y: () => track.offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scroller,
          start: "top 60%", // Starts moving slightly earlier
          end: "bottom 60%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // 2. Cards ignite and slide in
    // Using a safer trigger point (top 85%) so they are guaranteed to fire
    // when they enter the viewport from the bottom.
    cards.forEach((card) => {
      // Set initial state without ScrollTrigger to ensure they hide immediately
      gsap.set(card, { opacity: 0, x: 40 });

      gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          scroller,
          start: "top 85%", // Triggers reliably when entering bottom of screen
          toggleActions: "play none none reverse",
        },
      });
    });

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container || cards.includes(t.vars.trigger as HTMLDivElement)) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <div className="career-mobile-section" ref={containerRef}>
      <h2>
        My Career <br />
        <span>and Experience</span>
      </h2>

      <div className="career-mobile-wrapper">
        {/* The Left Spine */}
        <div className="career-mobile-track" ref={trackRef}>
          <div className="career-mobile-dot" ref={dotRef} />
        </div>

        {/* The Content Stack */}
        <div className="career-mobile-list">
          {careerData.map((entry, i) => (
            <div
              key={i}
              className="career-mobile-card"
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <span className="career-mobile-index">0{i + 1}</span>
              <p className="career-mobile-year">{entry.year}</p>
              <h3 className="career-mobile-role">{entry.role}</h3>
              <p className="career-mobile-company">{entry.company}</p>
              <p className="career-mobile-desc">{entry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerMobileTimeline;
