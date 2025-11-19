"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IndianRupee, User, Phone, Mail, MessageCircle } from "lucide-react";

export default function DonationForm() {
  const router = useRouter();

  const [selection, setSelection] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const amount = customAmount || selection;

    router.push(
      `/donate/review?amount=${amount}&name=${name}&mobile=${mobile}&email=${email}`
    );
  };

  return (
    <div
      className="w-full py-4 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ourActivities/ourActivities5.jpg')", // ⭐ Put your image inside public folder
      }}
    >
      <div
        className="
    bg-white/60
    backdrop-blur-md
    max-w-3xl mx-auto 
    border border-white/20
    shadow-xl rounded 
    px-10 py-6
  "
      >
        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#DF562C] text-center drop-shadow-sm">
          Support Namo Gange
        </h2>
        <p className=" text-center mt-2 leading-relaxed text-[15px]">
          Your donation empowers our mission of promoting wellness, protecting
          nature, and uplifting communities. Each contribution brings hope,
          health, and harmony.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-10">
          {/* ---------------- Amount Box ---------------- */}
          <div>
            <label className="text-[15px] font-medium">Donation Amount *</label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {[100, 500, 1000, 5000].map((amt) => (
                <button
                  type="button"
                  key={amt}
                  onClick={() => {
                    setSelection(String(amt));
                    setCustomAmount("");
                  }}
                  className={`px-4 py-1.5 text-center text-sm font-normal shadow-sm flex items-center justify-center gap-1 transition-all
                    ${
                      selection === String(amt)
                        ? "bg-[#DF562C] text-white scale-103 shadow-md"
                        : "bg-white/90 hover:bg-white border"
                    }
                  `}
                >
                  <IndianRupee size={16} /> {amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="flex items-center border  px-3 py-1.5 mt-4 bg-white/70 backdrop-blur-sm">
              <IndianRupee className="text-gray-500" size={20} />
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelection("");
                }}
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          {/* ---------------- Donor Info ---------------- */}
          <div className="space-y-3">
            <h3 className="text-[15px] font-medium">Donor Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-800">Full Name *</label>
                <div className="flex items-center border py-1.5 px-3 mt-1 bg-white/70">
                  <User size={18} className="text-gray-500" />
                  <input
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-2 text-sm outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm text-gray-800">Mobile Number *</label>
                <div className="flex items-center border py-1.5 px-3 mt-1 bg-white/70">
                  <Phone size={18} className="text-gray-500" />
                  <input
                    required
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full text-sm px-2  outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Email + Age*/}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-800">Email Address *</label>
                <div className="flex items-center border px-3 py-1.5 mt-1 bg-white/70">
                  <Mail size={18} className="text-gray-500" />
                  <input
                    required
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-2 text-sm outline-none bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-800">Age *</label>
                <div className="flex items-center border px-3 py-1.5 mt-1 bg-white/70">
                  <Mail size={18} className="text-gray-500" />
                  <input
                    required
                    type="date"
                    // placeholder="Enter email address"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-2 text-sm outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Message ---------------- */}
          <div>
            <label className="text-sm text-gray-800">Message (Optional)</label>
            <div className="flex items-start border px-3 py-1.5 bg-white/70 mt-1">
              <MessageCircle size={18} className="text-gray-500 " />
              <textarea
                rows={2}
                placeholder="Add a message..."
                className="w-full px-2 outline-none text-sm bg-transparent resize-none"
              />
            </div>
          </div>

          {/* ---------------- Submit Button ---------------- */}
          <button
            type="submit"
            className="w-full bg-[#DF562C] text-white py-1.5  text-[15px] font-medium hover:bg-orange-600 transition shadow-lg"
          >
            Continue to Review
          </button>
        </form>
      </div>
    </div>
  );
}
