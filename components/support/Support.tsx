"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axiosClient from "@/lib/axiosClient";

interface SupportFormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  ageGroup: string;
  supportType: string;
  address: string;
  city: string;
  state: string;
  contribution: string;
  message: string;
}

const initialForm: SupportFormData = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  ageGroup: "",
  supportType: "",
  address: "",
  city: "",
  state: "",
  contribution: "",
  message: "",
};

interface SEOData {
  page_banner?: string;
  banner_alt?: string;
  h1tag?: string;
}

const Support = () => {
  const [form, setForm] = useState<SupportFormData>(initialForm);
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  // Separate OTP States for Phone
  const [phoneOtp, setPhoneOtp] = useState<string>("");
  const [isPhoneOtpSent, setIsPhoneOtpSent] = useState<boolean>(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false);
  const [mockPhoneOtp, setMockPhoneOtp] = useState<string>("");

  // Separate OTP States for Email
  const [emailOtp, setEmailOtp] = useState<string>("");
  const [isEmailOtpSent, setIsEmailOtpSent] = useState<boolean>(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [mockEmailOtp, setMockEmailOtp] = useState<string>("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState<"verify" | "success">("verify");

  // Separate useEffect for SEO data
  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        const res = await axiosClient.get(
          `/seo/page/${encodeURIComponent("/support")}`,
        );
        const seo = res?.data?.data;
        if (seo) {
          setSeoData({
            page_banner: seo.page_banner,
            banner_alt: seo.banner_alt,
            h1tag: seo.h1tag,
          });
        }
      } catch (error) {
        console.error("Error fetching SEO data for support page:", error);
      }
    };
    fetchSEOData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    // Reset phone verification status if phone is changed
    if (e.target.name === "phone") {
      setIsPhoneVerified(false);
      setIsPhoneOtpSent(false);
      setPhoneOtp("");
      setMockPhoneOtp("");
    }
    // Reset email verification status if email is changed
    if (e.target.name === "email") {
      setIsEmailVerified(false);
      setIsEmailOtpSent(false);
      setEmailOtp("");
      setMockEmailOtp("");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and max length 10
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      handleChange(e);
    }
  };

  // Logic to send OTP to Phone
  const handleSendPhoneOtp = async () => {
    if (form.phone.length !== 10) {
      alert("कृपया एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    // --- MOCK PHONE OTP SIMULATION ---
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    setMockPhoneOtp(generatedOtp);
    setIsPhoneOtpSent(true);
    alert(`MOCK: Phone OTP sent to ${form.phone}. Use OTP: ${generatedOtp}`);
    // ---------------------------------
  };

  // Logic to verify Phone OTP
  const handleVerifyPhoneOtp = () => {
    if (phoneOtp === mockPhoneOtp && phoneOtp.length === 6) {
      setIsPhoneVerified(true);
      alert("Mobile OTP Verified Successfully!");
    } else {
      setIsPhoneVerified(false);
      alert("Invalid Mobile OTP. Please try again.");
    }
  };

  // Logic to send OTP to Email
  const handleSendEmailOtp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("कृपया एक मान्य ईमेल पता दर्ज करें।");
      return;
    }

    // --- MOCK EMAIL OTP SIMULATION ---
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    setMockEmailOtp(generatedOtp);
    setIsEmailOtpSent(true);
    alert(`MOCK: Email OTP sent to ${form.email}. Use OTP: ${generatedOtp}`);
    // ---------------------------------
  };

  // Logic to verify Email OTP
  const handleVerifyEmailOtp = () => {
    if (emailOtp === mockEmailOtp && emailOtp.length === 6) {
      setIsEmailVerified(true);
      alert("Email OTP Verified Successfully!");
    } else {
      setIsEmailVerified(false);
      alert("Invalid Email OTP. Please try again.");
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!isPhoneVerified || !isEmailVerified) {
  //     alert(
  //       "कृपया सबमिट करने से पहले मोबाइल नंबर और ईमेल दोनों को OTP का उपयोग करके सत्यापित करें।"
  //     );
  //     return;
  //   }
  //   console.log("Form Data:", form);
  //   alert("Support Form Submitted Successfully!");
  // };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      alert("कृपया सभी आवश्यक जानकारी भरें।");
      return;
    }

    // Send OTPs
    handleSendEmailOtp();
    handleSendPhoneOtp();

    setShowOtpModal(true);
  };

  const isFormComplete =
    form.name &&
    form.gender &&
    form.ageGroup &&
    form.supportType &&
    form.address &&
    form.city &&
    form.state &&
    form.contribution &&
    form.message;

  return (
    <section>
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('${seoData?.page_banner || "/banner/support.png"}')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative w-full h-42 md:h-56 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full px-4 text-center z-10"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wide drop-shadow-lg">
              {seoData?.h1tag || "Our Support"}
            </h1>
            <p className="text-sm md:text-lg text-white mt-2 font-light tracking-wider">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:text-orange-400 transition-colors"
              >
                Home
              </Link>{" "}
              - {seoData?.h1tag || "Our Support"}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full px-2 md:px-12  lg:px-12 relative py-4 md:py-6 overflow-hidden">
        <div className=" w-full lg:px-0">
          {/* Header */}
          <h2 className="text-sm text-center md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-[#f36b2a] to-[#1e7ed3] bg-clip-text text-transparent">
              {" "}
              Our Support
            </span>
          </h2>
          <p className="text-gray-600 text-[13px] md:text-sm text-center italic leading-relaxed">
            “We extend our support through wellness initiatives, cultural
            upliftment, women empowerment, compassionate service, and the
            protection of our environment.”
          </p>
          <div className="flex justify-center w-full">
            <div className=" w-full py-4 relative  overflow-hidden text-center ">
              {/* Decorative Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />

              <p className="text-gray-700 text-xs md:text-[15px] text-justify leading-relaxed font-normal">
                Each milestone we achieve brings us closer to a more
                compassionate, environmentally balanced society. Our programs
                are growing thanks to the dedication of volunteers, partners,
                and supporters who believe in positive change. As we expand, we
                remain committed to empowering communities through education,
                healthcare, spiritual development, and environmental
                conservation. Guided by integrity and transparency, we strive to
                build a future that inspires hope, unity and lasting
                transformation — nurturing meaningful progress for generations
                to come. Your support helps us innovate, stay inclusive, and
                scale sustainable solutions for all.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 md:gap-8 bg-gray-50 py-2 md:py-4 px-2 md:px-4 rounded-lg shadow-inner">
          {/* ================= LEFT INFO PANEL ================= */}
          <div
            className="
    w-full lg:w-[45%]
    rounded-2xl
    bg-gradient-to-br from-[#0C55A0] via-[#0b4f96] to-[#08467c]
    text-white
    p-4 lg:p-10
    flex flex-col justify-between
    shadow-xl
    relative overflow-hidden
  "
          >
            <div className="relative z-10">
              <h3 className="text-lg lg:text-2xl font-semibold mb-6 tracking-wide">
                Support Our Mission
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-white/95 mb-6">
                By submitting this form, you step into a purpose-driven journey
                dedicated to compassion, responsibility, and service to
                humanity. Your involvement enables us to design, implement, and
                scale initiatives that create meaningful and sustainable impact
                at the grassroots level.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-white/90 mb-8">
                Every contribution—whether through time, skills, resources, or
                strategic partnerships—strengthens our collective mission.
                Together, we work toward empowering communities, uplifting
                lives, and fostering long-term social transformation guided by
                ethical values and shared responsibility.
              </p>

              <ul className="space-y-4 text-sm md:text-base text-white/95">
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>
                    Volunteer in social, environmental, and humanitarian
                    initiatives
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>
                    Contribute professional skills, expertise, or mentorship
                    support
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>
                    Support programs through donations, resources, or funding
                    assistance
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>
                    Partner with us for long-term, high-impact community
                    development
                  </span>
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          {/* ================= RIGHT FORM PANEL ================= */}
          <div
            className="
      w-full lg:w-[55%]
      bg-white
      border border-gray-200
      rounded-2xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      p-4 md:p-7 lg:p-9
      relative overflow-hidden
    "
          >
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
              {/* FORM TITLE */}
              <div className="flex items-center justify-between md:col-span-2 lg:col-span-2 border-b border-gray-200 ">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Support Form
                </h2>
                <p className="text-xs md:text-sm text-gray-500">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>
              </div>

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={isEmailVerified}
                  className={`border border-gray-300 rounded px-4 py-1.5 text-sm focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200 ${
                    isEmailVerified ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  value={form.phone}
                  onChange={handlePhoneChange}
                  required
                  disabled={isPhoneVerified}
                  className={`border border-gray-300 rounded px-4 py-1.5 text-sm focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200 ${
                    isPhoneVerified ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm bg-white focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* DOB */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="ageGroup"
                  value={form.ageGroup}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm bg-white focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                />
              </div>

              {/* State */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm bg-white focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                >
                  <option value="">Select State</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Haryana">Haryana</option>
                </select>
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm bg-white focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                >
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </select>
              </div>

              {/* Contribution */}
              <div className="flex flex-col md:col-span-1 lg:col-span-1">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Preferred Contribution <span className="text-red-500">*</span>
                </label>
                <select
                  name="contribution"
                  value={form.contribution}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm bg-white focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                >
                  <option value="">Choose contribution</option>
                  <option value="Time">Time (Volunteering)</option>
                  <option value="Skills">Skills / Services</option>
                  <option value="Financial">Financial Contribution</option>
                  <option value="Resources">Resources Support</option>
                </select>
              </div>

              {/* Address */}
              <div className="flex flex-col md:col-span-2 lg:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                  placeholder="Enter your complete address"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2 lg:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Message / Reason to Support{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border border-gray-300 rounded px-4 py-1.5 text-sm focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200 resize-none"
                  placeholder="Write your message"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 lg:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  onClick={handleInitialSubmit}
                  disabled={!isFormComplete}
                  className={`px-8 py-1.5 text-sm md:text-base font-medium rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 ${
                    !isFormComplete
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#0C55A0] to-[#08467c] hover:from-[#08467c] hover:to-[#0C55A0] text-white"
                  }`}
                >
                  Submit Support Form
                </button>
              </div>
            </form>
          </div>
        </div>

        {showOtpModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl transform transition-all duration-300 scale-100">
              {otpStep === "verify" ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Verify Your Details
                    </h3>
                    <p className="text-sm text-gray-600">
                      We've sent OTPs to your email and mobile number
                    </p>
                  </div>

                  {/* Email OTP */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email OTP
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={emailOtp}
                      onChange={(e) =>
                        setEmailOtp(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      className="w-full border border-gray-300 rounded px-4 py-1.5 text-center text-lg font-mono tracking-widest focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                      placeholder="000000"
                    />
                  </div>

                  {/* Phone OTP */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile OTP
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={phoneOtp}
                      onChange={(e) =>
                        setPhoneOtp(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      className="w-full border border-gray-300 rounded px-4 py-1.5 text-center text-lg font-mono tracking-widest focus:border-[#1e7ed3] focus:ring-2 focus:ring-[#1e7ed3]/20 outline-none transition-all duration-200"
                      placeholder="000000"
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (
                        phoneOtp === mockPhoneOtp &&
                        emailOtp === mockEmailOtp
                      ) {
                        setIsPhoneVerified(true);
                        setIsEmailVerified(true);
                        setOtpStep("success");
                      } else {
                        alert("Invalid OTPs. Please try again.");
                      }
                    }}
                    className="w-full bg-gradient-to-r from-[#0C55A0] to-[#08467c] hover:from-[#08467c] hover:to-[#0C55A0] text-white py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Verify & Submit
                  </button>
                </>
              ) : (
                /* SUCCESS SCREEN */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Support Submitted Successfully!
                  </h3>
                  <p className="text-sm text-gray-700 mb-6">
                    Thank you for supporting Namo Gange Trust. We truly
                    appreciate your contribution and commitment.
                  </p>

                  <button
                    onClick={() => {
                      setShowOtpModal(false);
                      setForm(initialForm);
                      setOtpStep("verify");
                    }}
                    className="bg-gradient-to-r from-[#0C55A0] to-[#08467c] hover:from-[#08467c] hover:to-[#0C55A0] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Support;
