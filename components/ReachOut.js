'use client';
import React, { useState } from "react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
const StarCorners = ({ position }) => {
  const { theme } = useTheme();
  const imageSrc = theme === "dark" ? "/start-dark.svg" : "/star.svg";

  return (
    <div
      className={`absolute ${position} flex items-center w-full justify-between p-3 lg:p-6`}
    >
      <div className="w-[16px] md:w-[16px] lg:w-auto">
        <img src={imageSrc} alt="decorative star" className="w-full h-auto" />
      </div>
      <div className="w-[16px] md:w-[16px] lg:w-auto">
        <img src={imageSrc} alt="decorative star" className="w-full h-auto" />
      </div>
    </div>
  );
};

const ReachOut = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        console.log('Sending data:', formData);
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('Response received:', response);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to send message');
        }

        const data = await response.json();
        console.log('Success data:', data);

        setSubmitStatus({
          type: 'success',
          message: 'Thanks for reaching out! We\’re brewing up something awesome for you!',
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          description: "",
        });
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus({
          type: 'error',
          message: error.message || 'Failed to send message. Please try again later.',
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log('Validation failed', errors);
    }
  };

  const statusStyles = {
    success: 'text-green-500',
    error: 'text-red-500',
  };

  return (
    <div className="mt-[27px] w-screen lg:mt-[85px] overflow-hidden relative">
      <div className="flex items-center justify-center flex-col mx-[20px] bg-[#121212]/1 shadow border-[0.217px] border-[#e1e1e1] pb-[23px] lg:pb-[72px] md:mx-[127px] lg:mx-[283px] lg:pt-[40px] bg-[#121212] dark:bg-white dark:lg:shadow-[0_3.302px_37.96px_8.23px_rgba(0,0,0,0.03)] relative">
        <StarCorners position="top-1" />
        <StarCorners position="bottom-0" />

        <p className="text-center text-[#fff] text-[14px] font-normal font-['Space_Mono'] uppercase my-[20px] lg:text-[33px] lg:mt-[40pxpx] dark:text-[#121212]">
          reach out to us now!
        </p>

        {/* Form Section */}
        <div className="px-4 mt-6 w-full lg:flex lg:justify-center lg:text-[20px]">
          <form className="space-y-4 lg:w-[720px]" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-['Space_Mono'] text-[#fff] dark:text-[#121212] font-normal leading-normal lg:text-[19.89px] mb-1"
              >
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
                      ? "border-red-500 dark:border-red-500"
                      : "border-[#fff] dark:border-[#121212]"
                  } focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#585858] dark:placeholder:text-[#817F7F] border-[0.9px] lg:h-[60px] lg:text-[19.89px] lg:border-[2px] rounded-none text-[#fff] dark:text-[#121212]`}
                />
                {errors.fullName && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 group">
                    <img
                      src="/error.svg"
                      alt="error"
                      className="w-4 h-4"
                    />
                    <span className="pointer-events-none absolute -top-9 right-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-2 py-1 rounded border-[2px] border-red-500">
                      This field is required
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-['Space_Mono'] text-[#fff] dark:text-[#121212] font-normal leading-normal lg:text-[19.89px] mb-1"
              >
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
                      ? "border-red-500 dark:border-red-500"
                      : "border-[#fff] dark:border-[#121212]"
                  } focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#585858] dark:placeholder:text-[#817F7F] border-[0.9px] lg:h-[60px] lg:text-[19.89px] lg:border-[2px] rounded-none text-[#fff] dark:text-[#121212]`}
                />
                {errors.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 group">
                    <img
                      src="/error.svg"
                      alt="error"
                      className="w-4 h-4"
                    />
                    <span className="pointer-events-none absolute -top-9 right-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-2 py-1 rounded border-red-500 border-[2px]">
                    This field is required
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-['Space_Mono'] text-[#fff] dark:text-[#121212] font-normal leading-normal lg:text-[19.89px]"
              >
                Phone
              </label>
              <div className="flex gap-2">
                <select
                  id="phone"
                  className={`w-[65px] lg:w-20 px-2 py-2  focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] border-[#fff] dark:border-[#121212] text-[#fff] dark:text-[#121212] dark:placeholder:text-[#585858] lg:h-[60px] border-[0.9px] lg:border-[2px] rounded-none appearance-none
    ${
      theme === "dark"
        ? 'bg-[url("/downArrow.svg")]'
        : 'bg-[url("/arrowWhite.svg")]'
    }
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
                  className="flex-1 px-4 py-2 border-[#fff] dark:border-[#121212]   focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#585858] dark:placeholder:text-[#817F7F] lg:border-[2px] border-[0.9px] lg:h-[60px] lg:text-[19.89px] rounded-none text-[#fff] dark:text-[#121212]"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-['Space_Mono'] text-[#fff] dark:text-[#121212] font-normal leading-normal lg:text-[19.89px] mb-1"
              >
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
                  className="w-full px-4 py-2 border border-[#fff] dark:border-[#121212]  focus:outline-none focus:ring-1 focus:ring-[#121212] bg-transparent font-['Space_Mono'] placeholder:font-['Space_Mono'] placeholder:text-[#585858] dark:placeholder:text-[#817F7F] resize-none lg:border-[2px] lg:h-[157px] lg:pt-4 lg:mb-[4px] lg:text-[19.89px] rounded-none text-[#fff] dark:text-[#121212]"
                ></textarea>
              </div>
            </div>

            {/* Add this before the submit button */}
            {submitStatus.message && (
              <div className={`text-center ${statusStyles[submitStatus.type]}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#fff] dark:bg-[#121212] py-[8px] lg:py-[14px] px-[59px] lg:px-[94px] transition-all duration-500 ease-in-out font-['Space_Mono'] uppercase text-[#121212] dark:text-[#fff] lg:text-[24px] lg:leading-normal lg:font-normal group relative overflow-hidden ${
                  isSubmitting ? 'cursor-not-allowed' : ''
                }`}
              >
                <div className="flex items-center justify-center relative">
                  <span className={`transition-all duration-500 ease-in-out absolute ${isSubmitting ? 'opacity-0 invisible' : ''} group-hover:-translate-x-5 inline-block`}>
                    Submit
                  </span>
                  <span className="invisible">Submit</span>
                  {isSubmitting ? (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 border-2 border-transparent border-t-current border-r-current rounded-full animate-[spin_0.6s_linear_infinite]" />
                    </div>
                  ) : (
                    <img
                      src="/right-arrow.svg"
                      alt="submit"
                      className="w-5 h-5 lg:w-6 lg:h-6 transition-all duration-500 ease-in-out absolute left-[calc(50%+40px)] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 [filter:invert(0)] dark:[filter:invert(1)]"
                    />
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReachOut;
