"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const Career = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<null | (typeof jobs)[0]>(null);

  const jobs = [
    {
      title: "Telemarketing Executive",
      exp: "Minimum 1 Year",
      salary: "Not disclosed",
      location: "Ghaziabad",
      desc: [
        "Strong communication and persuasive skills.",
        "Experience in cold calling and lead generation.",
        "Ability to handle objections and negotiate effectively.",
        "Target-driven with focus on achieving goals.",
        "Basic knowledge of exhibitions, events & stall marketing.",
      ],
    },
    {
      title: "Receptionist",
      exp: "Minimum 1 Year",
      salary: "Not disclosed",
      location: "Ghaziabad",
      desc: [
        "Must have good communication skills.",
        "Should be presentable.",
        "Should have ability to manage guests.",
        "Manage front desk.",
      ],
    },
    {
      title: "Sr. Accountant",
      exp: "2 - 3 Years",
      salary: "Not disclosed",
      location: "Ghaziabad",
      desc: [
        "Daily accounting functions.",
        "Balance sheet preparation.",
        "Income Tax, GST, TDS handling.",
        "Account reconciliation.",
        "Statutory compliance & audits.",
      ],
    },
  ];
  return (
    <>
      {/* ===== NO CURRENT VACANCY MESSAGE ===== */}
      <div className="w-full py-6 px-6">
        <div className="bg-[#0C55A0] rounded-xl py-8 px-6 md:px-12 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Career Opportunities
          </h2>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-white/40 mx-auto my-4 rounded-full"></div>

          <p className="max-w-7xl mx-auto text-sm md:text-[15px] text-justify leading-relaxed text-white/90">
            Currently, there are no active job vacancies at Namo Gange Trust.
            However, our organisation is continuously evolving as we expand our
            initiatives across social welfare, cultural preservation,
            environmental care, and spiritual upliftment. As new projects and
            programmes take shape, career opportunities may arise in various
            roles and capacities. Any upcoming openings will be updated and
            clearly reflected on this page in due course. We encourage you to
            visit again periodically to stay informed about future opportunities
            and potential ways to contribute to our mission.
          </p>

          {/* Soft Footer Line */}
          <p className="mt-4 text-xs md:text-sm text-white/70 italic">
            We appreciate your interest in being a part of our mission.
          </p>
        </div>
      </div>

      {/* ================= job crads ================= */}
      <div className="w-full px-6 mt-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-2 md:px-6 md:py-4 hover:shadow-md 
                 transition-all flex flex-col justify-between h-full"
          >
            {/* Job Title */}
            <h3 className="text-lg font-semibold text-[#0C55A0] mb-2">
              {job.title}
            </h3>

            {/* Job Info */}
            <div className="text-sm text-gray-700 space-y-1 border-b pb-3">
              <p className="flex items-center gap-2">
                <Briefcase size={16} /> {job.exp}
              </p>

              <p className="flex items-center gap-2">
                <span className="ml-1">₹</span> {job.salary}
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} /> {job.location}
              </p>
            </div>

            {/* Description */}
            <div className="mt-3 text-sm text-gray-700 text-justify space-y-1 leading-relaxed flex-1">
              {job.desc.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="mt-5 w-full bg-[#0C55A0] hover:bg-[#08467c] text-white py-2 rounded-md text-sm shadow transition"
              onClick={() => {
                setSelectedJob(job);
                setOpenModal(true);
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* ========= POPUP MODAL ========= */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[95%] md:w-[90%] lg:w-[90%] h-[95vh] rounded-xl shadow-xl overflow-hidden relative flex">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-6 top-6 text-gray-600 text-2xl hover:text-black z-50"
            >
              ✕
            </button>

            {/* LEFT IMAGE SECTION */}
            <div className="hidden md:flex w-[40%] h-full relative overflow-hidden">
              {/* Background Image */}
              <Image
                src="/career/career.jpeg"
                alt="Namo Gange Trust"
                fill
                priority
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C55A0]/80 via-[#0C55A0]/40 to-transparent"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-end text-center w-full h-full">
                <h3 className="text-xl font-semibold tracking-wide">
                  Namo Gange Trust
                </h3>
                <p className="text-sm mt-2 opacity-90 leading-relaxed">
                  Join a mission-driven organisation working for social,
                  cultural, environmental & spiritual upliftment.
                </p>
              </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div className="w-full md:w-[60%] flex flex-col p-8">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Fill the form
              </h2>
              <p className="italic text-sm md:text-[15px] w-full text-gray-700 text-center mb-2">
                “This form is intended for individuals who wish to associate
                with us through a spirit of selfless service and sincere
                dedication. We encourage you to proceed only if your intent is
                guided by seva (service), compassion, and a desire to contribute
                meaningfully — not by commercial expectations or personal gain.”
              </p>

              {/* Scrollable Form Area */}
              <div className="flex-1 overflow-y-auto pr-2">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* NAME */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* CITY */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* STATE */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* CURRENT LOCATION */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="Current Location"
                      className="border rounded px-4 py-2 text-sm focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* ROLE */}
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-medium mb-1">
                      Role Applying For
                    </label>
                    <input
                      type="text"
                      readOnly
                      className="border rounded px-4 py-2 text-sm bg-gray-100 focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      placeholder="Write your message..."
                      className="border rounded px-4 py-2 text-sm h-28 focus:ring-0 focus:ring-[#0C55A0] outline-none"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* FIXED BUTTON (Always bottom) */}
              <div className="mt-4 border-t pt-4 flex justify-center">
                <button className="bg-[#0C55A0] hover:bg-[#08467c] text-white px-8 py-2 rounded shadow-md text-sm flex items-center gap-2">
                  Submit →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Career;
