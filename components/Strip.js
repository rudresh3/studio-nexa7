'use client';

import React, { useEffect, useState  } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

// Custom hook for screen size
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
        });
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return screenSize;
  };

const TextAnimation = () => {

    const { width } = useScreenSize();
    const getViewBox = () => {
        if (width < 768) { // Mobile
          return "500 0 1500 550";
        } else if (width < 1024) { // Tablet
          return "200 0 1600 515";
        } else { // Desktop
          return "200 0 1920 515";
        }
      };

      // Get height based on screen size
  const getSvgHeight = () => {
    if (width < 768) { // Mobile
      return "300";
    } else if (width < 1024) { // Tablet
      return "415";
    } else { // Desktop
      return "515";
    }
  };

  useEffect(() => {
    // Reset any existing animations first
    gsap.killTweensOf("#animatedText");
    
    const startPosition = "100%";
    const endPosition = "-300%"; // Increased offset for longer text

    // Create infinite loop animation
    function startAnimation() {
      gsap.set("#animatedText", { attr: { startOffset: startPosition }});
      
      gsap.to("#animatedText", {
        duration: 60, // Reduced duration for better performance
        attr: { startOffset: endPosition },
        ease: "linear", // Changed to linear for smoother performance
        repeat: -1,
        onRepeat: function() {
          gsap.set("#animatedText", { attr: { startOffset: startPosition }});
        },
        force3D: true, // Enable hardware acceleration
        willChange: "transform" // Optimize for animations
      });
    }

    startAnimation();

    // Cleanup function
    return () => {
      gsap.killTweensOf("#animatedText");
      gsap.set("#animatedText", { attr: { startOffset: startPosition }});
    };
  }, [width]);

  const repeatedText = "WEBSITE DESIGN & DEVELOPMENT • UIUX DESIGN • APP DEVELOPMENT • BRANDING • ".repeat(10); // Reduced repetitions

  return (
    <div className=" w-full overflow-hidden">
    
      <svg
        className="w-full"
        height={getSvgHeight()}
        viewBox={getViewBox()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path1"
          d="M49 405C94.1667 280.333 220.748 116.545 436.248 170.045C651.748 223.545 750.199 462.5 1006.5 462.5C1235.25 462.5 1117.5 167.5 1541.5 269.5C1965.5 371.5 1861.5 172.5 2140.5 48"
          className="stroke-[#121212] dark:stroke-white"
          strokeWidth="102"
          fill="none"
        />
        <text 
          dy="5" 
          className="text-[54px] text-center md:text-[31px] lg:text-[64px] font-bold fill-[#fff] dark:fill-[#121212] tracking-[-1.28] " 
          dominantBaseline="middle" 
          textAnchor="middle"
        >
          <textPath id="animatedText" href="#path1" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TextAnimation;
