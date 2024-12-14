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
      <div className="bg-[#121212] dark:bg-white h-[35px] px-[16px] flex gap-[6px] lg:gap-[10px] rounded-[27px] items-center lg:h-[65px] lg:py-[14px] md:px-[30px] lg:rounded-full cursor-pointer">
      {theme === "dark" ? (
          <img
            src="/phoneblack.svg"
            alt="Dark mode logo"
            className="w-[13px] h-[13px] lg:w-[22px] lg:h-[22px]"
          />
        ) : (
          <img
            src="/phone.svg"
            alt="Light mode logo"
            className="w-[13px] h-[13px] lg:w-[22px] lg:h-[22px]"
          />
        )}
        {/* <Image src="/phone.svg" width={13} height={13} alt="Light mode logo" /> */}
        <a 
          href="https://wa.me/8553393366"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#fff] dark:text-[#121212] text-[12px] lg:text-[20px] lg:tracking-[-0.4px] font-normal leading-normal"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Header;
