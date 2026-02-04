import Link from "next/link";
import React from "react";

function AboutJoin() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#DF562C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0C55A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className="
          relative
          w-full
          bg-white/95
          backdrop-blur-xl
          p-6 md:p-10 lg:p-12
          flex flex-col items-center text-center
          shadow-xl
          border border-gray-100
        "
      >
        {/* Heading */}
        <span
          className="
            text-xs md:text-base lg:text-lg
            font-semibold
            mb-4
            bg-gradient-to-r from-[#DF562C] via-[#f28a55] to-[#0C55A0]
            bg-clip-text text-transparent
            tracking-wider
          "
        >
          ॐ Join Us in This Sacred Yatra ॐ
        </span>

        {/* Main Description */}
        <p className="text-xs md:text-[15px] lg:text-[16px] max-w-3xl leading-relaxed text-gray-700 mb-4">
          Become a part of{" "}
          <span className="font-semibold text-gray-900">Namo Gange</span> — a
          divine movement rooted in{" "}
          <span className="font-medium text-[#DF562C]">
            seva, compassion, and consciousness
          </span>
          . Together, we walk a sacred path where every small act of kindness
          creates meaningful ripples of transformation across society and
          nature.
        </p>

        {/* Secondary Description */}
        <p className="text-xs md:text-[15px] lg:text-[16px] max-w-3xl leading-relaxed text-gray-700 mb-6">
          By joining this mission, you become a guardian of timeless values —
          protecting{" "}
          <span className="font-medium text-[#0C55A0]">Gaumata</span>, feeding
          the needy, preserving{" "}
          <span className="font-medium text-[#DF562C]">Vedic wisdom</span>, and
          serving humanity with humility and devotion. This is more than service
          — it is a journey of inner awakening and collective upliftment.
        </p>

        {/* Action Line */}
        <p className="text-[12px] md:text-[15px] lg:text-[16px] text-gray-800 font-medium mb-8 tracking-wide">
          Protect • Serve • Inspire • Transform
        </p>

        {/* CTA Button */}
        <Link href="/joinAsVolunteer">
          <button
            className="
              relative
              overflow-hidden
              group
              border border-[#DF562C]
              rounded-full
              px-8 sm:px-12
              py-2 sm:py-2.5
              text-sm sm:text-base
              font-medium
              text-[#DF562C]
              shadow-md
              transition-all duration-500
              hover:shadow-2xl
              hover:-translate-y-[1px]
            "
          >
            {/* Button Text */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Join the Movement
            </span>

            {/* Hover Fill */}
            <span
              className="
                absolute inset-0
                bg-gradient-to-r from-[#DF562C] to-[#0C55A0]
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-700 ease-in-out
              "
            />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AboutJoin;
