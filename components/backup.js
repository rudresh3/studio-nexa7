'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const backup = () => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const textSpans = textContainerRef.current.querySelectorAll("span");

    // Set initial state
    gsap.set(textSpans, { 
      opacity: 1,
      x: 0,
      y: 0
    });

    // Create timeline for better control
    const tl = gsap.timeline({ repeat: -1 });

    // Animate text along the path
    tl.to(textSpans, {
      motionPath: {
        path: "#text-path",
        align: "#text-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 15,
      ease: "none",
      stagger: {
        each: 0.3,
        from: "end"
      }
    });
  }, []);

  // Triple the text to ensure no gaps
  const text = "DESIGN & DEVELOPMENT • UIUX DESIGN • APP DEVELOPMENT • BRANDING • ";
  const repeatedText = text + text + text; // Triple the text

  return (
    <div className="relative w-full h-[150px] md:h-[200px] lg:h-[300px] overflow-hidden">
      {/* SVG Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1920 515"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="text-path"
          d="M-142 404.818C-96.8335 280.152 29.7474 116.363 245.247 169.863C460.747 223.363 559.199 462.318 815.5 462.318C1044.25 462.318 926.5 167.318 1350.5 269.318C1774.5 371.318 1670.5 172.318 1949.5 47.8183"
          className="stroke-[104] stroke-[#121212] dark:stroke-white fill-none"
        />
      </svg>

      <div
        ref={textContainerRef}
        className="absolute top-0 left-0 flex whitespace-nowrap text-sm md:text-base lg:text-lg font-bold text-white dark:text-[#121212] leading-relaxed tracking-tight"
      >
        {repeatedText
          .split("")
          .reverse()
          .map((char, index) => (
            <span key={index} className="inline-block tracking-normal">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
      </div>
    </div>
  );
};

export default backup;



