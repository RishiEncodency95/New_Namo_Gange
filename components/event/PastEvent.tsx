"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ourIni1 from "@/public/OurInitiatives/ourIni1.png";
import ourIni2 from "@/public/OurInitiatives/ourIni2.png";
import ourIni3 from "@/public/OurInitiatives/ourIni3.png";
import ourIni4 from "@/public/OurInitiatives/ourIni4.png";
import ourIni5 from "@/public/OurInitiatives/ourIni5.png";
import ourIni6 from "@/public/OurInitiatives/ourIni6.png";
import ourIni7 from "@/public/OurInitiatives/ourIni7.png";
import ourIni8 from "@/public/OurInitiatives/ourIni8.png";
import ourIni9 from "@/public/OurInitiatives/ourIni9.png";

interface Initiative {
  title: string;
  image: StaticImageData | string;
  description: string;
  link: string;
}

const initiatives: Initiative[] = [
  {
    title: "International Council of AYUSH (ICOA)",
    image: ourIni1,
    description:
      "The International Council of AYUSH (ICOA) has played a vital role in promoting traditional Indian systems of medicine across the globe. Through conferences, collaborations, and policy dialogues, ICOA has strengthened awareness and acceptance of Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy as holistic healthcare solutions rooted in ancient wisdom.",
    link: "/initiatives/icoa",
  },
  {
    title: "Ministry of AYUSH Collaboration",
    image: ourIni2,
    description:
      "In association with the Ministry of AYUSH, this initiative supported the national mission of integrating Ayurveda and traditional healthcare practices into mainstream wellness. The collaboration focused on awareness programs, public health outreach, and strengthening trust in natural and preventive healthcare systems.",
    link: "/initiatives/ayush",
  },
  {
    title: "Arogya Mantra",
    image: ourIni3,
    description:
      "Arogya Mantra emerged as a holistic health awareness platform aimed at educating communities about preventive healthcare, balanced living, and natural wellness practices. Through workshops, seminars, and public engagement, this initiative encouraged individuals to adopt healthier lifestyles rooted in Indian traditions.",
    link: "/initiatives/arogya-mantra",
  },
  {
    title: "Yogshala Expo 2024",
    image: ourIni4,
    description:
      "Yogshala Expo 2024 brought together wellness experts, yoga practitioners, healthcare brands, and conscious communities under one roof. The event served as a global platform for promoting yoga, natural therapies, and sustainable health solutions, fostering meaningful dialogue and collaboration.",
    link: "/initiatives/yogshala-expo",
  },
  {
    title: "Yogshala Expo 2025",
    image: ourIni5,
    description:
      "The 8th edition of the Yogshala International Health Expo expanded the vision of holistic wellness by showcasing innovations in healthcare, yoga, Ayurveda, and lifestyle management. The expo strengthened global connections and reinforced the importance of integrative health for a balanced future.",
    link: "/initiatives/yogshala2025",
  },
  {
    title: "Swachh Bharat Sankalp",
    image: ourIni6,
    description:
      "Swachh Bharat Sankalp focused on promoting cleanliness, hygiene awareness, and environmental responsibility across communities. Through awareness drives, public participation, and grassroots engagement, the initiative reinforced the idea that a clean environment is the foundation of a healthy and dignified society.",
    link: "/initiatives/swachh-bharat",
  },
];

const PastEvent = () => {
  return (
    <section className="bg-[#f6f6f9] pb-16">
      {/* ------------------ BANNER ------------------ */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/events.jpg')" }}
      >
        <div className="bg-black/30 w-full h-full md:h-[250px] py-10 md:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
              Past Events
            </h2>

            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - Past Events
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:px-12  lg:px-12 text-center">
        {/* HEADER */}
        <div className="">
          <h2 className="text-lg md:text-xl font-semibold  rounded text-gray-900 mt-4 ">
            <span>
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
                Past Events
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] italic leading-relaxed">
            "Each past event stands as a milestone of our commitment to service,
            spirituality, and community upliftment—creating lasting impact
            across health, culture, and environmental awareness."
          </p>
        </div>
        <div className=" w-full  h-1 mt-3 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
        <p className="w-full pb:2 md:pb-10 text-sm md:text-[15px] text-justify text-gray-800 leading-relaxed mt-3">
          Our past events stand as meaningful milestones in our journey of
          service and social commitment. Each initiative reflects our dedication
          to spiritual well-being, healthy living, cultural preservation,
          environmental care, and community upliftment. From wellness programs
          and cultural celebrations to environmental drives and spiritual
          gatherings, these events have brought people together to learn, serve,
          and create lasting positive impact across society.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-200 
                 shadow-sm hover:shadow-xl transition-all duration-300
                 overflow-hidden flex flex-col"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#DF562C] to-[#0C55A0]" />

              {/* Image */}
              <div className="flex items-center justify-center h-32 bg-gray-50 p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-contain max-h-32 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 text-center">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {item.description}
                </p>

                {/* Button */}
                <Link href={item.link} className="mt-auto">
                  <button
                    className="w-full py-1.5 text-sm font-medium rounded-md
                       bg-[#0C55A0] text-white shadow
                       hover:bg-[#0a4786] transition-all"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvent;
