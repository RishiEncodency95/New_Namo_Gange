"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutNGTrust3 from "@/public/home/how_we.png";
import MissionImg from "@/public/home/mission1.png";
import VisionImg from "@/public/home/our_vision.jpeg";

const AboutNGTrust = () => {
  // ✅ ONLY FOR THIS SECTION – COMMON P STYLE
  const paraStyle =
    "text-gray-700 text-xs md:text-[14px] leading-relaxed font-normal text-justify";

  return (
    <section className="relative py-1.5 md:py-2 px-4 md:px-12 lg:px-12 bg-gradient-to-b from-white via-gray-50 to-[#f8fafc] overflow-hidden">
      <div className="w-full  flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-10">
        {/* ================= LEFT SIDE TEXT ================= */}
        <div className="flex-1">
          <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 mb-2 leading-tight">
            Who{" "}
            <span className="bg-gradient-to-r from-[#DF562C] to-[#1e7ed3] bg-clip-text text-transparent">
              We Are
            </span>
          </h2>

          <div className="space-y-2 ">
            <p className={paraStyle}>
              <span className="font-medium text-gray-900">
                Namo Gange Trust
              </span>{" "}
              is wholeheartedly dedicated to the sacred mission of protecting,
              restoring, and uplifting the divine river Ganga—a lifeline that
              sustains millions of lives across the nation. Through continuous
              and impactful social initiatives, the Trust actively champions the
              vision of{" "}
              <span className="font-normal text-[#DF562C]">Aviral</span>{" "}
              (uninterrupted flow) and{" "}
              <span className="font-normal text-[#1e7ed3]">Nirmal Ganga</span>{" "}
              (clean and pure Ganga), ensuring that the river continues to
              symbolize purity, cultural heritage, and spiritual strength for
              generations to come.
            </p>

            <p className={paraStyle}>
              The mission of the Trust extends across diverse and interconnected
              domains, including{" "}
              <span className="font-normal text-gray-900">
                spiritual upliftment, education, healthcare, environmental
                protection, and cultural preservation
              </span>
              . These initiatives are thoughtfully designed to empower
              communities, encourage collective responsibility, and promote
              sustainable development. By fostering ecological balance and
              social harmony, the Trust strives to deepen the human connection
              with nature, culture, and moral values.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="flex-1 relative">
          <div className="overflow-hidden rounded shadow-lg md:mt-6 hover:shadow-xl transition-all duration-500">
            <Image
              src={AboutNGTrust3}
              alt="About Namo Gange Trust"
              className="w-full md:h-85 object-cover hover:scale-103 transition-transform duration-700 ease-in-out"
            />
          </div>

          <div className="absolute -inset-3 bg-gradient-to-r from-[#DF562C]/20 via-transparent to-[#1e7ed3]/20 blur-2xl rounded-3xl -z-10 opacity-70"></div>
        </div>
      </div>

      {/* ================== MISSION SECTION ================== */}
      <div className="w-full  mt-2">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-10">
          <div className="flex-1 relative">
            <div className="overflow-hidden rounded shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src={MissionImg}
                alt="Mission - Namo Gange Trust"
                className="w-full md:h-85 object-cover hover:scale-103 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#DF562C]/20 via-transparent to-[#1e7ed3]/20 blur-2xl rounded -z-10 opacity-70"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
              OUR{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#1e7ed3] bg-clip-text text-transparent">
                MISSION
              </span>
            </h2>

            <h4 className="text-[#DF562C] text-sm md:text-lg lg:text-lg font-medium py-1 md:py-3">
              सर्वे भवन्तु सुखिनः
            </h4>

            <p className={paraStyle}>
              Our mission is to support and promote Indian ideology{" "}
              <span className="font-medium text-[#DF562C]">
                सर्वे भवन्तु सुखिनः
              </span>{" "}
              — may each and every member of the world family live with health,
              peace, and harmony, without boundaries of caste, creed, or color.
              Inspired by this timeless Vedic mantra, we strive to cultivate a
              global culture rooted in compassion, mutual respect, and universal
              well-being.
            </p>

            <Link href="/joinAsVolunteer">
              <button className="mt-2 md:mt-4 relative overflow-hidden px-4 py-1 rounded md:px-6 md:py-1.5 text-xs md:text-sm text-white font-medium shadow-md bg-[#DF562C] hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
                Join As Volunteer
              </button>
            </Link>
          </div>
        </div>

        {/* ================== VISION SECTION ================== */}
        <div className="flex flex-col md:flex-row-reverse items-center mt-2 gap-5 md:gap-10 lg:gap-10">
          <div className="flex-1 relative">
            <div className="overflow-hidden rounded shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src={VisionImg}
                alt="Vision - Namo Gange Trust"
                className="w-full md:h-85  object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="absolute -inset-3 bg-gradient-to-l from-[#DF562C]/20 via-transparent to-[#1e7ed3]/20 blur-2xl rounded -z-10 opacity-70"></div>
          </div>

          <div className="flex-1 md:mt-2">
            <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 mb-2 leading-tight">
              OUR{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#1e7ed3] bg-clip-text text-transparent">
                VISION
              </span>
            </h2>

            <p className={paraStyle}>
              Our vision is to educate and inspire people for a{" "}
              <span className="font-medium text-[#1e7ed3]">
                peaceful, healthy
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#DF562C]">
                pollution-free life
              </span>
              , through initiatives, activities, and special attention to{" "}
              <span className="font-medium text-gray-900">
                “Holy Ganga” and water conservation.
              </span>
            </p>

            <p className={paraStyle}>
              We aim to build a society where individuals live in harmony with
              nature, guided by values of{" "}
              <span className="font-medium text-[#1e7ed3]">compassion</span>,{" "}
              <span className="font-medium text-[#DF562C]">selflessness</span>,
              and{" "}
              <span className="font-medium text-gray-900">
                spiritual awareness.
              </span>
            </p>

            <p className={paraStyle}>
              With a focus on sustainability, social responsibility, and
              community growth, we strive to empower people to contribute
              towards a{" "}
              <span className="font-medium text-[#1e7ed3]">cleaner</span>,{" "}
              <span className="font-medium text-[#DF562C]">greener</span>, and{" "}
              <span className="font-medium text-gray-900">
                spiritually enriched
              </span>{" "}
              future for the entire world.
            </p>

            <Link href="/joinAsVolunteer">
              <button className="mt-2 md:mt-4 relative overflow-hidden rounded px-4 md:px-6 py-1 md:py-1.5 text-xs md:text-sm text-white font-medium shadow-md bg-[#DF562C] hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
                Join As Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNGTrust;
