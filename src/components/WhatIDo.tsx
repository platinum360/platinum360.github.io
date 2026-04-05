import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  const handleClick = (container: HTMLDivElement) => {
    const isActive = container.classList.contains("what-content-active");
    const siblings = Array.from(container.parentElement?.children || []);

    // Reset all boxes to their base state
    siblings.forEach((sibling) => {
      sibling.classList.remove("what-content-active");
      sibling.classList.remove("what-sibling");
    });

    // If the clicked box was not already active, activate it and mark others as siblings
    if (!isActive) {
      container.classList.add("what-content-active");
      siblings.forEach((sibling) => {
        if (sibling !== container) {
          sibling.classList.add("what-sibling");
        }
      });
    }
  };

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
        }
      });
    }
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="what-h2">
          The
          <br />
          WORK
          <br />
          <span className="shop-h2">Shop</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            onClick={(e) => handleClick(e.currentTarget)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>STATIC & SOLID</h3>
              <h4>Making Brands Impossible To Ignore.</h4>
              <p>
                I build visual systems, logos, and packaging that look sharp, feel right, and actually work in the real world. No clutter, just clean design.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Photoshop</div>
                <div className="what-tags">Illustrator</div>
                <div className="what-tags">InDesign</div>
                <div className="what-tags">CorelDRAW</div>
                <div className="what-tags">Visual Strategy</div>
                <div className="what-tags">Brand Ecosystem</div>
                <div className="what-tags">Campaign Management</div>
                <div className="what-tags">Execution Guarantee</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            onClick={(e) => handleClick(e.currentTarget)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PIXELS & MOTION</h3>
              <h4>Catching Eyes On Modern Screens.</h4>
              <p>
                From snappy video edits to smooth motion graphics, I design digital content built to survive the endless scroll.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">After Effects</div>
                <div className="what-tags">DaVinci Resolve</div>
                <div className="what-tags">Capcut</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Motion Graphics</div>
                <div className="what-tags">Generative AI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
