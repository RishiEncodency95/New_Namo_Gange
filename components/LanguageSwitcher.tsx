"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "./Portal";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "mr", label: "Marathi" },
  { code: "pa", label: "Punjabi" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  // Calculate button position for perfect dropdown placement
  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({
        top: rect.bottom + 10,
        left: rect.right - 180,
        width: rect.width,
      });
    }
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button
        ref={btnRef}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        <Globe size={22} className="text-[#0C55A0]" />
      </button>

      {/* DROPDOWN IN PORTAL */}
      <Portal>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18 }}
              className="
                fixed bg-white shadow-lg rounded-md 
                border border-gray-200 
                py-2 px-2 z-[999999] 
                grid grid-cols-2 gap-1
                w-48
              "
              style={{
                top: pos.top,
                left: pos.left,
              }}
            >
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="
                    px-2 py-2 text-sm 
                    hover:bg-gray-100 
                    cursor-pointer text-gray-700 
                    rounded-md text-center
                  "
                >
                  {lang.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </Portal>
    </div>
  );
}
