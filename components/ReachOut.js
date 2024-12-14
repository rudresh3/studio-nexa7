import React, { useState } from "react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
const ReachOut = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    
    // Name validation (minimum 3 characters)
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Name is required";
    } else if (formData.fullName.trim().length < 3) {
      tempErrors.fullName = "Name must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }

    // Description validation (minimum 10 characters)
    if (!formData.description.trim()) {
      tempErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      tempErrors.description = "Description must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      
      // Reset form data to initial state
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        description: ""
      });
      
      // Clear any existing errors
      setErrors({});
    }
  };

  return (
    <div className="mt-[27px] w-screen lg:mt-[85px] overflow-hidden relative" >
      {/* Background Images Container */}
      <div className="absolute h-full w-full bottom-[-20px] -z-10 flex justify-between gap-[30px] items-center">
        {/* Left Image */}
        <div className="absolute rotate-[10deg] left-[-200px] md:left-[-100px] lg:left-[30px] -bottom-10 lg:rotate-[10deg]">
          <img
            src={theme === "dark" 
              ? "/line/line-white-left.svg" 
              : "/line/line-black-left.svg"
            }
            alt={theme === "dark" ? "Left Pattern Dark" : "Left Pattern Light"}
            className="h-full w-[400px] [&>*]:stroke-[0.5] md:[&>*]:stroke-1 lg:[&>*]:stroke-2"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-[-300px] md:right-[-100px] lg:right-[100px] lg:rotate-[200deg] -bottom-[100px]">
          <img
            src={theme === "dark" 
              ? "/line/line-white-right.svg" 
              : "/line/line-black-right.svg"
            }
            alt={theme === "dark" ? "Right Pattern Dark" : "Right Pattern Light"}
            className="h-full w-[407px] stroke-[20px] md:[&>*]:stroke-[60] lg:[&>*]:stroke-2"
          />
        </div>
      </div>

      {/* Existing Content */}
      <div className="flex items-center justify-center flex-col mx-[20px] bg-[#121212]/1 shadow border-[0.217px] border-[#e1e1e1] dark:border-[#9292926e] backdrop-blur-[83.46px] pb-[23px] lg:pb-[72px] md:mx-[127px] lg:mx-[283px] lg:pt-[40px] lg:backdrop-blur-[75.08px] dark:bg-white/4 dark:lg:shadow-[0_3.302px_37.96px_8.23px_rgba(0,0,0,0.03)]">
        <p className="text-center text-[#121212] text-[14px] font-normal font-['Space_Mono'] uppercase mt-[12px] lg:text-[33px] lg:mt-[40pxpx] dark:text-white">
          reach out to us now!
        </p>

        {/* Form Section */}
        <div className="px-4 mt-6 w-full lg:flex lg:justify-center lg:text-[20px]">
          <form className="space-y-4 lg:w-[720px] " onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-['Space_Mono'] text-[#121212] dark:text-white font-normal leading-normal lg:text-[19.89px] mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., John Doe"
                  className={`w-full px-4 py-2 border  ${
                    errors.fullName 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-[#121212] dark:border-white'
                  } focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#817F7F] dark:placeholder:text-[#585858] border-[0.9px] lg:h-[60px] lg:text-[19.89px] lg:border-[2px] rounded-none`}
                />
                {errors.fullName && (
                  <img 
                    src="/error.svg"
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-['Space_Mono'] text-[#121212] dark:text-white font-normal leading-normal lg:text-[19.89px] mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., johndoe@gmail.com"
                  className={`w-full px-4 py-2 border ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-[#121212] dark:border-white'
                  } focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#817F7F] dark:placeholder:text-[#585858] border-[0.9px] lg:h-[60px] lg:text-[19.89px] lg:border-[2px] rounded-none`}
                />
                {errors.email && (
                  <img 
                    src="/error.svg"
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-['Space_Mono'] text-[#121212] mb-1 dark:text-white font-normal leading-normal lg:text-[19.89px]">
                Phone
              </label>
              <div className="flex gap-2">
              <select
  id="phone"
  className={`w-[65px] lg:w-20 px-2 py-2 border-[#121212] focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] dark:border-white text-[#121212] dark:text-[#fff] dark:placeholder:text-[#585858] lg:h-[60px] border-[0.9px] lg:border-[2px] rounded-none appearance-none
    ${theme === "dark" ? 'bg-[url("/arrowWhite.svg")]' : 'bg-[url("/downArrow.svg")]'}
    bg-no-repeat  bg-[length:16px_10px] bg-[right_7px_center] pr-[1rem]`}
>
  <option value="+91">+91</option>
  <option value="+1">+1</option>
  <option value="+44">+44</option>
</select>
             
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="XXXXX XXXXX"
                  className="flex-1 px-4 py-2 border-[#121212] dark:border-white   focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#817F7F] dark:placeholder:text-[#585858] lg:border-[2px] border-[0.9px] lg:h-[60px] lg:text-[19.89px] rounded-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-['Space_Mono'] text-[#121212] dark:text-white font-normal leading-normal lg:text-[19.89px] mb-1">
                Describe
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share a few details about you or your project..."
                  className="w-full px-4 py-2 border border-[#121212] dark:border-white focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#817F7F] dark:placeholder:text-[#585858] resize-none lg:border-[2px] lg:h-[157px] lg:pt-4 lg:mb-[4px] lg:text-[19.89px] rounded-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-[#121212] text-white py-[8px] lg:py-[14px] px-[59px] lg:px-[94px] hover:bg-[#121212]/90 transition-colors font-['Space_Mono'] uppercase dark:bg-white dark:text-[#121212] lg:text-[24px] lg:leading-normal lg:font-normal"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ReachOut;