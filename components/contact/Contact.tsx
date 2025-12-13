"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";

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
    <section className="bg-gray-50 ">
      <div className="w-full  px-4 md:px-6  lg:px-6 text-center">
        <div className="">
          <h2 className="text-lg md:text-xl font-semibold  rounded text-gray-900 mt-4 ">
            <span>
              Let’s{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
                Connect
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] italic leading-relaxed">
            "Have a question, feedback, or want to collaborate? We’d love to
            hear from you. Fill out the form below, and our team will get back
            to you soon."
          </p>
        </div>
        <div className=" w-full  h-1 mt-3 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
        <p className="w-full pb-6 text-sm md:text-[15px] text-justify text-gray-800 leading-relaxed mt-3">
          At Namo Gange Trust, we believe in building meaningful connections
          rooted in service, compassion, and shared purpose. We welcome
          individuals who wish to associate with us not merely to participate,
          but to contribute selflessly towards initiatives in health, culture,
          education, environmental care, and community upliftment. By connecting
          with us, you become part of a collective journey dedicated to social
          responsibility, personal growth through service, and creating a
          positive impact for society with sincerity and integrity.
        </p>

        {/* ====== Contact Section ====== */}
        <div className="w-full mt-2 md:mt-5 lg:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* ---- Single Contact Card ---- */}
          <div className="bg-gradient-to-r from-[#4141b8] to-[#063D8E] text-white rounded p-6 md:p-8 shadow-xl w-full text-left">
            {/* Logo + Title */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/logo.png" // 👉 apna logo yaha path me daal dena
                alt="Namo Gange Trust"
                className="w-18 h-18 bg-white rounded-full p-2 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold tracking-wide">
                  Namo Gange Trust
                </h3>
                <p className="text-sm opacity-90">
                  Service • Compassion • Commitment
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 mt-1 opacity-90" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm opacity-90">+91 96549 00525</p>
                <p className="text-sm opacity-90">+91 78302 41288</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 mt-1 opacity-90" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm opacity-90">info@namogange.org</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 opacity-90" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  12/52, Site-2, Sunrise Industrial Area, Mohan Nagar,
                  Sahibabad, Ghaziabad, Uttar Pradesh – 201007
                </p>
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

        <div className="py-2 md:py-5 lg:py-5 rounded">
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
      </div>
    </section>
  );
};

export default Contact;
