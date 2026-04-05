import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import StarBorder from "./StarBorder";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
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
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href")!;
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/AJ_White.png" alt="Logo" style={{ height: "32px" }} />
        </a>

        <ul>
          <StarBorder as="li" color="#fdf44f" className="nav-star-border">
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </StarBorder>
          <StarBorder as="li" color="#fdf44f" className="nav-star-border">
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </StarBorder>
          <StarBorder as="li" color="#fdf44f" className="nav-star-border nav-resume-link">
            <a href="/Aditya Jadhav_Resume 2026.pdf" download="Aditya_Jadhav_Resume_2026.pdf" target="_blank" rel="noreferrer">
              <HoverLinks text="RESUME" />
            </a>
          </StarBorder>
          <StarBorder as="li" color="#fdf44f" className="nav-star-border">
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </StarBorder>
        </ul>
      </div>

      <div className="landing-circle2"></div>
      <div className="landing-circle3"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
