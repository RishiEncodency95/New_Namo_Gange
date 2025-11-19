"use client";

import { useState } from "react";
import { User, Phone, Mail, Briefcase, Calendar, MapPin } from "lucide-react";

export default function MemberForm() {
  const [membership, setMembership] = useState("1year");

  return (
    <form className="space-y-6">
      {/* =================== HEADING =================== */}
      <div>
        <h2 className="text-lg font-medium text-gray-800">
          MEMBERSHIP REGISTRATION FORM
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          (REGD: 168/4/37/110-115/2015 & NITI AYOG, GOVT. OF INDIA UNIQUE ID -
          DL/2016/0113537)
        </p>
      </div>

      <hr className="border-gray-300" />

      {/* =================== MEMBERSHIP TYPES =================== */}
      <div>
        <h3 className="font-normal text-[15px] mb-3">
          Individual Membership Categories *
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4">
          {/* Left */}
          <div className="space-y-2 ">
            <label className="flex gap-2  items-center">
              <input
                type="radio"
                name="membership"
                value="1year"
                checked={membership === "1year"}
                onChange={() => setMembership("1year")}
                className="accent-[#DF562C]  "
              />
              1-Year Membership
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="membership"
                value="3year"
                checked={membership === "3year"}
                onChange={() => setMembership("3year")}
                className="accent-[#DF562C]"
              />
              3-Years Membership
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="membership"
                value="5year"
                checked={membership === "5year"}
                onChange={() => setMembership("5year")}
                className="accent-[#DF562C]"
              />
              5-Years Membership
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="membership"
                value="lifetime"
                checked={membership === "lifetime"}
                onChange={() => setMembership("lifetime")}
                className="accent-[#DF562C]"
              />
              Lifetime Membership
            </label>
          </div>

          {/* Right */}
          <div className="space-y-2 ">
            <p>Rs. 1,100</p>
            <p>Rs. 2,100</p>
            <p>Rs. 3,100</p>
            <p>Rs. 11,000</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* =================== NAME FIELDS =================== */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="text-sm ">First Name *</label>
          <div className="flex items-center border  px-3 mt-1">
            <User className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-2 py-2 outline-none text-sm"
              required
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="text-sm ">Last Name *</label>
          <div className="flex items-center border  px-3 mt-1">
            <User className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full px-2 py-2 outline-none text-sm"
              required
            />
          </div>
        </div>
      </div>

      {/* Father/Mother Name + Occupation */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm ">Father's/Mother's/Spouse's Name</label>
          <input
            type="text"
            placeholder="Enter guardian name"
            className="w-full border  px-3 py-2 mt-1 text-sm outline-none"
          />
        </div>

        <div>
          <label className="text-sm ">Occupation</label>
          <div className="flex items-center border  px-3 mt-1">
            <Briefcase className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Your occupation"
              className="w-full px-2 py-2 outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* =================== CONTACT FIELDS =================== */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm ">Mobile No. *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Phone className="text-gray-500" size={18} />
            <input
              type="text"
              maxLength={10}
              placeholder="Enter mobile number"
              className="w-full px-2 py-2 outline-none text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm ">Email Address *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Mail className="text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-2 py-2 outline-none text-sm"
              required
            />
          </div>
        </div>
      </div>

      {/* =================== ADDRESS =================== */}
      <div>
        <label className="text-sm ">Address *</label>
        <input
          type="text"
          placeholder="Enter full address"
          className="w-full border  px-3 py-2 mt-1 text-sm outline-none"
          required
        />
      </div>

      {/* Country / State / City */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm ">Country *</label>
          <select className="border  px-3 py-2 mt-1 text-sm w-full">
            <option>Select Country</option>
          </select>
        </div>

        <div>
          <label className="text-sm ">State *</label>
          <select className="border  px-3 py-2 mt-1 text-sm w-full">
            <option>Select State</option>
          </select>
        </div>

        <div>
          <label className="text-sm ">City *</label>
          <select className="border  px-3 py-2 mt-1 text-sm w-full">
            <option>Select City</option>
          </select>
        </div>
      </div>

      {/* Pincode / DOB / Gender */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm ">Pin Code *</label>
          <input
            type="text"
            placeholder="Enter pincode"
            className="border  px-3 py-2 mt-1 text-sm w-full"
            required
          />
        </div>

        <div>
          <label className="text-sm ">Date of Birth *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Calendar className="text-gray-500" size={18} />
            <input
              type="date"
              className="w-full px-2 py-2 outline-none text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm ">Gender *</label>
          <select className="border  px-3 py-2 mt-1 text-sm w-full">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* =================== COMMENTS =================== */}
      <div>
        <label className="text-sm ">Message or Comments *</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          className="border  p-3 mt-1 w-full text-sm"
        ></textarea>
      </div>

      {/* =================== BUTTONS =================== */}
      <div className="flex gap-4 pt-4">
        <button className="px-6 py-2 bg-[#DF562C] text-white text-sm hover:bg-orange-600">
          REGISTER NOW
        </button>

        <button className="px-6 py-2 border border-gray-500  hover:bg-gray-100 text-sm">
          CANCEL
        </button>
      </div>
    </form>
  );
}
