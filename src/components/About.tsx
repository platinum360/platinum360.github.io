import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import "./styles/About.css";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paraRefs = useRef<HTMLParagraphElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    // Filter out any nulls or duplicates to prevent stacking animations
    const paras = paraRefs.current.filter((el, index, self) => el && self.indexOf(el) === index);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            if (titleRef.current) {
              const splitTitle = new SplitText(titleRef.current, { type: "chars" });
              gsap.from(splitTitle.chars, {
                opacity: 0,
                y: 20,
                rotateX: -90,
                stagger: 0.05,
                duration: 1,
                ease: "back.out(1.7)",
              });
            }

            paras.forEach((para) => {
              const splitPara = new SplitText(para, { type: "lines,words" });
              gsap.from(splitPara.words, {
                opacity: 0,
                y: 20,
                stagger: 0.015,
                duration: 0.8,
                ease: "power2.out",
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <h3 className="title" ref={titleRef}>About Me</h3>
        <p className="para" ref={(el) => { if (el) paraRefs.current[0] = el; }}>
          Designer by craft. Thinker by habit.
        </p>
        <p className="para" ref={(el) => { if (el) paraRefs.current[1] = el; }}>
          I work where design meets clarity.
        </p>
        <p className="para" ref={(el) => { if (el) paraRefs.current[2] = el; }}>
          I do not believe design exists to decorate ideas. It exists to organise them. My work focuses on shaping brands, products, and digital experiences that reduce complexity, communicate intent, and stand up to real-world use.
        </p>
        <p className="para" ref={(el) => { if (el) paraRefs.current[3] = el; }}>
          I am drawn to meaningful problems, thoughtful collaboration, and building things that last.
        </p>
        <p className="para" ref={(el) => { if (el) paraRefs.current[4] = el; }}>
          If that resonates, we should connect.
        </p>
      </div>
    </div>
  );
};

export default About;
