"use client";

import React from "react";
import Image from "next/image";
import SpeakerButton from "./SpeakerButton";
import { Mail, Phone } from "lucide-react";
import logo from "@/public/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useRouter } from "next/navigation";

const TopBar: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className="hidden sm:block w-full bg-white shadow-sm border-b">
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-between 
          px-4 py-2 gap-4
        "
      >
        {/* ================= LOGO ================= */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <Image
            src={logo}
            alt="Namo Gange"
            width={180}
            className="object-contain"
          />
        </div>

        {/* ================= EMAIL + PHONE ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto gap-4">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="text-gray-600" size={22} />
            <div>
              <p className="text-xs text-gray-400">EMAIL US AT</p>
              <p className="text-sm font-semibold text-gray-700">
                info@namogange.org
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="text-gray-600" size={22} />
            <div>
              <p className="text-xs text-gray-400">CALL US NOW</p>
              <p className="text-sm font-semibold text-gray-700">
                +91-96549 00525
              </p>
            </div>
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          <button
            onClick={() => router.push("/join")}
            className="px-4 py-1.5 border border-[#DF562C] text-[#DF562C] hover:bg-[#DF562C] hover:text-white transition rounded"
          >
            Join With Us
          </button>

          <button
            onClick={() => router.push("/donate")}
            className="px-4 py-1.5 border border-[#DF562C] text-[#DF562C] hover:bg-[#DF562C] hover:text-white transition rounded"
          >
            Donate Now
          </button>

          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-[#0C55A0] text-white hover:bg-[#084783] transition rounded"
          >
            Login
          </button>

          {/* AUDIO + LANGUAGE SELECTORS */}
          <SpeakerButton />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
