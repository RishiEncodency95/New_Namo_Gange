"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 to-[#ffe8d6] py-8 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-lg md:text-2xl font-medium text-black mb-3">
          Let’s Connect
        </h2>
        <p className="text-gray-800 text-sm md:text-sm max-w-2xl mx-auto">
          Have a question, feedback, or want to collaborate? We’d love to hear
          from you. Fill out the form below, and our team will get back to you
          soon.
        </p>
      </div>

      {/* ====== Contact Section ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* ---- Info Section ---- */}
        <div className="space-y-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded p-8 text-left">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <div className="bg-[#f36b2a]/10 p-3 rounded-xl">
                <MapPin className="text-[#f36b2a] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-sm">
                  12/52, Site - 2, Sunrise Industrial Area, Mohan Nagar,
                  Sahibabad, Ghaziabad, Uttar Pradesh 201007
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#1e7ed3]/10 p-3 rounded-xl">
                <Phone className="text-[#1e7ed3] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-sm">+91 96549 00525</p>
                <p className="text-sm">+91 7830241288</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#f36b2a]/10 p-3 rounded-xl">
                <Mail className="text-[#f36b2a] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm">info@namogange.org</p>
                {/* <p className="text-sm">care@krishnayan.com</p> */}
              </div>
            </div>
          </div>

          {/* ===== Social Icons (Hardcoded) ===== */}
          <div className="pt-6">
            <h4 className="font-medium text-gray-800 mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/NamogangeTrust/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#1877F2] bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5 " />
              </a>

              <a
                href="https://x.com/namogange"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#1DA1F2] bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/namogangetrust/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#E1306C] bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/namo-gange-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#0077B5] bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCkAQ_M8x5l3DvrH_VtuoiSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 bg-gray-100 hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ---- Form Section ---- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-xl rounded p-8 flex flex-col justify-between"
        >
          <h3 className="text-xl font-medium text-gray-800  mb-4">
            Send Us a Message
          </h3>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-0 focus:ring-[#f36b2a] transition-all"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-0 focus:ring-[#1e7ed3] transition-all"
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-0 focus:ring-[#f36b2a] transition-all"
                required
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                className="w-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-0 focus:ring-[#1e7ed3] transition-all resize-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#f36b2a] to-[#1e7ed3] text-white font-semibold py-2 hover:opacity-90 transition-all duration-300 shadow-md"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>

      <div className="mt-6 rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.423416262373!2d77.37740819352632!3d28.68331300254777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf07cc46dbd6f%3A0xdbf4390a96ef056e!2sNamo%20Gange%20Trust%20(Best%20NGO%20in%20Ghaziabad)!5e0!3m2!1sen!2sin!4v1763013400984!5m2!1sen!2sin"
          width="100%"
          height="450"
          //   allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl border border-gray-300"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
