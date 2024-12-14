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

const TextAnimation1 = () => {

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
    // Create the animation
    gsap.to("#animatedText", {
      duration: 20,
      repeat: -1,
      ease: "none",
      attr: {
        startOffset: "-50%"
      },
      motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: false,
      }
    });
  }, []);

  const repeatedText = "DESIGN & DEVELOPMENT • UIUX DESIGN • APP DEVELOPMENT • BRANDING";

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
          strokeWidth="82"
          fill="none"
        />
        <text className="text-[54px] text-center md:text-[31px] lg:text-[64px] font-bold fill-[#fff] dark:fill-[#121212] " dominant-baseline="middle" text-anchor="middle">
          <textPath id="animatedText" href="#path1" startOffset="0%" alignment-baseline="middle">
            {repeatedText.repeat(3)}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TextAnimation1;
