"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HealthIcon from "@/public/objectives/health.png";
import NatureIcon from "@/public/objectives/nature.png";
import CultureIcon from "@/public/objectives/culture.png";
import WomenIcon from "@/public/objectives/women.png";

const objectives = [
  {
    title: "Health & Wellness",
    image: HealthIcon,
    description:
      "We spread awareness of holistic health and well-being through Yoga, Ayurveda, and wellness programs like Arogya Sangoshti and film festivals.",
    link: "/objectives/health",
  },
  {
    title: "Nature & Environment",
    image: NatureIcon,
    description:
      "We work passionately to protect and preserve nature — focusing on a clean, green, and sustainable future while restoring the purity of the holy Ganga.",
    link: "/objectives/nature",
  },
  {
    title: "Kala & Sanskriti",
    image: CultureIcon,
    description:
      "We promote India’s rich art and culture through live events, painting, dance, and photography competitions to connect the youth with traditions.",
    link: "/objectives/culture",
  },
  {
    title: "Women Empowerment",
    image: WomenIcon,
    description:
      "We support women’s education, equality, and empowerment — fostering confidence, leadership, and independence in every woman.",
    link: "/objectives/women",
  },
  {
    title: "Moksha Sewa",
    image: WomenIcon,
    description:
      "Moksha Sewa is devoted to serving humanity through spiritual upliftment, compassion, and selfless service — guiding individuals toward inner peace, purity.",
    link: "/objectives/women",
  },
];

const ObjectiveOfTrust = () => {
  return (
    <section className="relative py-4 md:py-8 lg:py-8 bg-gradient-to-b from-white via-gray-50 to-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0  lg:px-0 text-center">
        {/* Section Header */}
        <h2 className="text-[1rem] md:text-xl lg:text-xl font-semibold text-gray-900 mb-3">
          Objective of{" "}
          <span className="bg-gradient-to-r from-[#f36b2a] to-[#1e7ed3] bg-clip-text text-transparent">
            Trust
          </span>
        </h2>

        {/* ✨ Tagline under the header */}
        <p className="text-sm md:text-[15px] text-gray-800 italic mb-5">
          “Serving Humanity, Preserving Nature, Awakening Divinity.”
        </p>
        {/* <p className="w-full md:w-2/3 pb-8 mx-auto text-sm md:text-[15px] text-center text-gray-800 leading-relaxed">
          The goal of Trust is to build a strong connection with our users
          through openness, safety, and reliability. We want to create a place
          where everyone feels confident that their interests are our top
          priority. We promise to keep your trust in every step we take.
        </p> */}
        {/* Objective Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 25px rgba(30,126,211,0.15)",
              }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl 
                         transition-all duration-500 p-4 flex flex-col items-center text-center
                         border border-transparent hover:border-[#1e7ed3]/40"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f36b2a]/10 to-[#1e7ed3]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>

              {/* Icon */}
              <div className="w-25 h-25 md:w-28 md:h-28 lg:w-30 lg:h-30 mx-auto mb-5 rounded-full bg-gradient-to-tr from-[#f36b2a]/10 to-[#1e7ed3]/10 flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-18 h-18  md:w-20 md:h-20 lg:w-22 lg:h-22  object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-[1rem] lg:text-lg font-medium text-gray-900 mb-3 hover:text-[#1e7ed3] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs md:text-sm lg:text-sm  leading-relaxed mb-4 line-clamp-4">
                {item.description}
              </p>

              {/* Read More Button */}
              <Link href={item.link}>
                <button
                  className="mt-4 relative overflow-hidden px-6 py-1.5 text-xs lg:text-sm md:text-sm text-white font-normal 
                shadow-md bg-[#0C55A0] cursor-pointer
               hover:bg-sky-700 hover:shadow-lg transition-all duration-300"
                >
                  Read More...
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectiveOfTrust;
