"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import Header from "@/components/header";
import ThemeSwitcher from "./ThemeSwitcher";
import Strip from "@/components/Strip";
import ContactUs from "@/components/ContactUs";
import ReachOut from "@/components/ReachOut";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/Backgroud-Grid-dark.svg')"
            : "url('/Backgroud-Grid-light.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "80%",
        backgroundPosition: "top left",
      }}
    >
      <div />
      <Header />
      <div className="w-screen flex flex-col justify-center items-center mt-[31px] lg:mt-[10px]">
        <ThemeSwitcher />
        <div className="mt-[22px] lg:-mt-[10px]">
          <h1 className="text-[42px] font-[700] text-[#121212] dark:text-[#fff] md:text-[60px] lg:text-[128px] tracking-[-2.5]">
            Coming Soon!
          </h1>
          <p className="font-['Space_Mono'] uppercase text-[10px] font-normal text-[#5B5B5B] dark:text-[#939393] text-center md:text-[14px] lg:text-[32px]">
            No service charge while you wait for us
          </p>
        </div>
      </div>
      <div className="relative h-[170px] md:h-[330px] lg:h-[500px] w-screen"> 
        <div className="absolute -top-24 w-screen">
          <Strip />
        </div>
      </div>

      <ContactUs />
      <div className="mt-[40px] md:mt-[46px] flex justify-center lg:mt-[102px]">
        {theme === "dark" ? (
          <img
            src="/reva-logo-with-name-white.svg"
            alt="Dark mode illustration"
            className="w-[87px] h-[27px] md:w-[107px] md:h-[37px] lg:w-[197px] lg:h-[74px]"
          />
        ) : (
          <img
            src="/reva-logo-with-name-black.svg"
            alt="Light mode illustration"
            className="w-[87px] h-[27px] md:w-[107px] md:h-[37px] lg:w-[197px] lg:h-[74px]"
          />
        )}
      </div>
      <div className="mt-[46px]">
        <p className="text-[18px] text-center mx-[20px] font-medium	 tracking-[-0.36px] md:text-[24px] md:mx-[122px] lg:text-[49px] lg:mx-[350px] lg:tracking-[-0.98px]">
          While we're crafting something extraordinary, grab exclusive discounts
          before the big reveal
        </p>
      </div>
      <ReachOut />
      {/* <Footer /> */}
    </div>
  );
}
