"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, User } from "lucide-react";

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className=" fixed left-4 bottom-14 z-50">
      {/* Popup Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ width: 240 }}
            className="bg-white rounded-2xl shadow-xl p-3 text-sm mb-3 origin-bottom-left border border-gray-100"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="space-y-3"
            >
              {[
                {
                  href: "mailto:info@namogange.org",
                  icon: <Mail className="w-5 h-5 text-[#1e7ed3]" />,
                  label: "Mail us: info@namogange.org",
                },
                {
                  href: "tel:+919654900525",
                  icon: <Phone className="w-5 h-5 text-[#1e7ed3]" />,
                  label: "Call us: +919654900525",
                },
                {
                  href: "https://wa.me/919654900525",
                  icon: <MessageCircle className="w-5 h-5 text-green-500" />,
                  label: "Chat with us",
                  target: "_blank",
                },
                {
                  href: "/contact",
                  icon: <User className="w-5 h-5 text-gray-700" />,
                  label: "Contact us",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    target={item.target || "_self"}
                    rel="noreferrer"
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#1e7ed3]/10 transition-all"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with animation */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        animate={{
          y: [0, -12, 0], // up → down → up
        }}
        transition={{
          duration: 2, // full cycle 2s
          repeat: Infinity, // loop forever
          ease: "easeInOut",
        }}
        whileTap={{ scale: 1 }}
        className="w-12 h-12 rounded-full bg-[#f36b2a] text-white shadow-xl flex items-center justify-center hover:scale-103 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
