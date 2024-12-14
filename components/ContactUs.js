'use client'
import React from 'react'
import Image from "next/image";
import { useTheme } from "next-themes";

const ContactUs = () => {
  const { theme } = useTheme();

  return (
    <div className='-mt-[20px] md:-mt-[35px] z-50'>
        <div className=''>
            <p className='font-[Space_Mono] uppercase text-[10px]  text-[#5B5B5B] dark:text-[#939393] text-center  lg:text-[32px] '>Connect Today!</p>
        </div>
        <div className="flex justify-center mt-[13px] gap-[7px] lg:mt-[33px] lg:gap-[25px]">
            {[
                { 
                    link: "#",
                    imgLight: "/Vector.svg",
                    imgDark: "/Vector0.svg",
                    alt: "GitHub"
                },
                {
                    link: "#",
                    imgLight: "/Vector-1.svg",
                    imgDark: "/Vector-11.svg",
                    alt: "LinkedIn"
                },
                {
                    link: "#",
                    imgLight: "/Vector-2.svg",
                    imgDark: "/Vector-22.svg",
                    alt: "Twitter"
                },
                {
                    link: "#",
                    imgLight: "/Vector-3.svg",
                    imgDark: "/Vector-33.svg",
                    alt: "Email"
                },
                {
                    link: "#",
                    imgLight: "/Vector-4.svg",
                    imgDark: "/Vector-44.svg",
                    alt: "Instagram"
                }
            ].map((social, index) => (
                <a key={index} 
                   href={social.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className='w-[38px] h-[38px] md:w-[55px] md:h-[55px] lg:w-[113px] lg:h-[113px] rounded-full border-[1.69px] md:border-[2.69px] lg:border-[5px] dark:lg:border-[4px] border-[#121212] dark:border-[#fff] 
                             flex items-center justify-center gap-[7px]
                             hover:bg-[#121212] dark:hover:bg-[#fff] 
                             active:bg-[#121212] dark:active:bg-[#fff] 
                             transition-all duration-500 ease-in-out group'>
                    <img 
                        src={theme === "dark" 
                            ? social.imgDark 
                            : social.imgLight}
                        alt={social.alt}
                        className="cursor-pointer absolute transform transition-all duration-500 ease-in-out 
                                 group-hover:opacity-0 group-hover:scale-75
                                 w-[15px] h-[15px] md:w-[23px] md:h-[23px] lg:w-[44px] lg:h-[44px]"
                    />
                    <img 
                        src={theme === "dark" 
                            ? social.imgLight 
                            : social.imgDark}
                        alt={social.alt}
                        className="cursor-pointer transform transition-all duration-500 ease-in-out 
                                 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                                 w-[15px] h-[15px] md:w-[23px] md:h-[23px] lg:w-[44px] lg:h-[44px]"
                    />
                </a>
            ))}
        </div>
    </div>
  )
}

export default ContactUs