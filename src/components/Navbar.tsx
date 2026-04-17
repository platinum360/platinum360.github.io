import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import StarBorder from "./StarBorder";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    // Check localStorage synchronously for initial render
    return typeof window !== "undefined" && localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);

    let links = document.querySelectorAll(".header ul a[data-href^='#']");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href")!;

        if (window.innerWidth > 1024) {
          e.preventDefault();
          smoother.scrollTo(section, true, "top top");
        } else if (section === "#work") {
          e.preventDefault();
          document.querySelector("#lego-pieces")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    
    // Set coordinates for the CSS clip-path animation
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const performToggle = () => {
      setIsLightMode((prev) => {
        const newTheme = !prev;
        if (newTheme) {
          document.body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        } else {
          document.body.removeAttribute("data-theme");
          localStorage.setItem("theme", "dark");
        }
        
        window.dispatchEvent(new CustomEvent("themechange", { detail: { isLightMode: newTheme } }));
        return newTheme;
      });
    };

    // Modern View Transition API with fallback
    if (!(document as any).startViewTransition) {
      performToggle();
      return;
    }

    document.body.classList.add("theme-transition-active");
    (document as any).startViewTransition(() => {
      performToggle();
    }).finished.finally(() => {
      document.body.classList.remove("theme-transition-active");
    });
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img 
            src="/AJ_White.png" 
            alt="Logo" 
            className="aj-logo"
            style={{ height: "32px", filter: "var(--logoFilter)", transition: "filter 0.5s ease" }} 
          />
        </a>

        <ul className="nav-list">
          <StarBorder as="li" color="var(--headingColor)" className="nav-star-border">
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </StarBorder>
          <StarBorder as="li" color="var(--headingColor)" className="nav-star-border">
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </StarBorder>
          <StarBorder as="li" color="var(--headingColor)" className="nav-star-border">
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </StarBorder>
          
          {/* Premium Sliding Theme Toggle (Option 4) */}
          <li className="nav-theme-toggle" data-cursor="disable">
            <div 
              onClick={(e) => toggleTheme(e)}
              className="premium-toggle-wrapper"
              style={{
                width: "56px",
                height: "28px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "2px",
                overflow: "hidden"
              }}
            >
              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: isLightMode ? "#285e2b" : "#fdf44f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isLightMode 
                    ? "0 0 10px rgba(40, 94, 43, 0.5)" 
                    : "0 0 10px rgba(253, 244, 79, 0.5)",
                  marginLeft: isLightMode ? "28px" : "0px"
                }}
              >
                <AnimatePresence mode="wait">
                  {isLightMode ? (
                    <motion.svg
                      key="moon"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="sun"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </li>
        </ul>
      </div>

      <div className="landing-circle2"></div>
      <div className="landing-circle3"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
