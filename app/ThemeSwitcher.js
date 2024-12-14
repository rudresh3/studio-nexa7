"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="w-[80px] lg:w-[113px] flex gap-1 bg-[#121212] dark:bg-[#fff] p-[4px] rounded-full
                    lg:fixed lg:bottom-[30px] lg:right-[70px] z-50 dark:lg:shadow-[0px_0px_35px_0px_rgba(0,0,0,0.60)] lg:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.40)] lg:p-[6px]">
      <button
        onClick={() => setTheme("light")}
        className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full lg:rounded-full  bg-white dark:bg-[#121212] flex items-center justify-center"
      >
        {theme === "dark" ? (
          <img
            src="/sun-white.svg"
            alt="Light mode logo"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]"
          />
        ) : (
          <img
            src="/sun-black.svg"
            alt="Light mode logo"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]"
          />
        )}
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full lg:rounded-full  dark:bg-black/10 bg-white/10 flex items-center justify-center"
      >
        {theme === "dark" ? (
          <img
            src="/moon-black.svg"
            alt="Light mode logo"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]"
          />
        ) : (
          <img
            src="/moon-white.svg"
            alt="Light mode logo"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px]"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
