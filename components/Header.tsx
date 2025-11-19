"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, User, ChevronDown } from "lucide-react";
// import logo from "@/public/icons/logo.png";

// Sidebar props removed
export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full bg-white border border-gray-100 bg-gradient-to-r from-[#f36b2a]/10 to-[#1e7ed3]/10 backdrop-blur-md">
      <div className="flex items-center justify-between h-18 px-3 sm:px-5 md:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* ❌ MENU BUTTON REMOVED */}

          {/* KPB Icons */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f36b2a] to-[#1e7ed3] flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <div className="leading-tight">
              <h4 className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Kartika, Purnima
              </h4>
              <p className="text-[12px] text-gray-500 truncate max-w-[200px]">
                Anvadhan, Bhishma Panchak Ends, Dev Uthani Ekadashi
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
         

          {/* Login / Signup */}
          <Link href="/auth/login">
            <button
              className="relative overflow-hidden px-3 py-1 md:px-3 md:py-1 rounded-lg border border-[#f36b2a] 
               text-[#f36b2a] font-normal text-sm md:text-base transition-all duration-500 
               hover:text-white hover:border-[#f36b2a] group cursor-pointer"
            >
              <span
                className="absolute inset-0 bg-[#f36b2a] translate-x-[-100%] 
                 group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"
              ></span>
              <span className="relative z-10">Login / Signup</span>
            </button>
          </Link>

          {/* Donate Button */}
          <Link href="/donate">
            <button
              className="relative overflow-hidden px-3 py-1 md:px-3 md:py-1 rounded-lg border border-[#f36b2a] 
               text-[#f36b2a] font-normal text-sm md:text-base transition-all duration-500 
               hover:text-white hover:border-[#f36b2a] group cursor-pointer"
            >
              <span
                className="absolute inset-0 bg-[#f36b2a] translate-x-[-100%] 
                 group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"
              ></span>
              <span className="relative z-10">Donate Now</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
