"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b0b] via-[#111] to-[#151515] text-gray-300 border-t border-white/10">
      {/* ======= MAIN WRAPPER ======= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ================================= */}
        {/* 1. Brand + Description */}
        {/* ================================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-3">
            Namo Gange Trust
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Promoting Ayurveda, Yoga, holistic living and natural lifestyle for
            a healthy and compassionate society.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/NamogangeTrust/",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/namogangetrust",
              },
              { icon: Twitter, href: "https://x.com/namogange" },
              { icon: Youtube, href: "https://www.youtube.com/@NamoGange" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/company/namo-gange-trust/",
              },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ================================= */}
        {/* 2. Quick Links */}
        {/* ================================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Events", link: "/events" },
              { name: "Gallery", link: "/gallery" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-[#f36b2a] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================================= */}
        {/* 3. Objectives */}
        {/* ================================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Objectives
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              "Health Awareness",
              "Nature Conservation",
              "Women Empowerment",
              "Cultural Values",
            ].map((text, i) => (
              <li key={i} className="hover:text-[#f36b2a] transition-colors">
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================================= */}
        {/* 4. Contact Info */}
        {/* ================================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-14 h-14 text-[#f36b2a] mt-1" />
              <span>
                12/52, Site - 2, Sunrise Industrial Area, Mohan Nagar,
                Sahibabad, Ghaziabad, Uttar Pradesh 201007
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#f36b2a]" />
              <a
                href="mailto:info@namogange.org"
                className="hover:text-[#f36b2a]"
              >
                info@namogange.org
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#f36b2a]" />
              <a href="tel:+911234567890" className="hover:text-[#f36b2a]">
                +91 96549 00525
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ======= BOTTOM Copyright ======= */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Namo Gange Trust — All Rights Reserved.
      </div>
    </footer>
  );
}
