"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between pt-[30px] lg:pt-[39px] mx-[18px] lg:mx-[67px]">
      <div>
        {theme === "dark" ? (
          <img
            src="/Logo-1.svg"
            alt="Dark mode logo"
            className="w-[106px] h-[33px] lg:w-[174px] lg:h-[53px]"
          />
        ) : (
          <img
            src="/Logo.svg"
            alt="Light mode logo"
            className="w-[106px] h-[33px] lg:w-[174px] lg:h-[53px]"
          />
        )}
      </div>
      
      <div className="bg-[#121212] dark:bg-white hover:bg-transparent dark:hover:bg-transparent group transition-all duration-300 h-[35px] px-[16px] flex gap-[6px] lg:gap-[10px] rounded-[27px] items-center lg:h-[65px] lg:py-[14px] md:px-[30px] lg:rounded-full cursor-pointer border-2 border-[#121212] dark:border-white">
        <div className="flex items-center gap-[8px] lg:gap-[12px]   transition-all duration-300">
          {/* Light mode phone icon (visible in normal state) */}
          <div className="w-[13px] h-[13px] lg:w-[22px] lg:h-[22px] relative">
            <img
              src="/phone.svg"
              alt="Light mode logo"
              className="w-full h-full block dark:hidden group-hover:hidden"
            />
            {/* Dark mode phone icon (visible in normal state) */}
            <img
              src="/phoneblack.svg"
              alt="Dark mode logo"
              className="w-full h-full hidden dark:block dark:group-hover:hidden "
            />
            {/* Light mode phone icon (visible on hover) */}
            <img
              src="/phoneblack.svg"
              alt="Dark mode logo"
              className="w-full h-full hidden group-hover:block dark:group-hover:hidden "
            />
            {/* Dark mode phone icon (visible on hover) */}
            <img
              src="/phone.svg"
              alt="Light mode logo"
              className="w-full h-full hidden dark:group-hover:block"
            />
          </div>
          <a 
            href="https://wa.me/8553393366"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white dark:text-[#121212] group-hover:text-[#121212] dark:group-hover:text-white transition-all duration-300 text-[12px] lg:text-[20px] lg:tracking-[-0.4px] font-semibold leading-normal"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
