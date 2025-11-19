"use client";

import { useState } from "react";
import { User, Phone, Mail, Calendar, MapPin } from "lucide-react";

export default function VolunteerForm() {
  return (
    <form className="space-y-4">
      {/* ---------------- TITLE DESCRIPTION ---------------- */}
      <div>
        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-semibold text-[#DF562C]">Namo Gange Trust</span>{" "}
          is looking for volunteers to support with
          <strong>
            {" "}
            Campaigning, Fundraising, Marketing and Social Media Attention.
          </strong>
          Register yourself below and we will contact you soon.
        </p>
      </div>

      {/* ---------------- VOLUNTEER TYPE ---------------- */}
      <div>
        <h3 className="font-medium text-sm text-gray-700 mb-2">
          Volunteer Types *
        </h3>
        <div className="flex gap-16">
          <label className="flex text-sm items-center gap-2">
            <input
              type="radio"
              name="vtype"
              className="accent-[#DF562C]"
              defaultChecked
            />
            Individual
          </label>

          <label className="flex text-sm items-center gap-2">
            <input type="radio" name="vtype" className="accent-[#DF562C]" />
            Groups
          </label>
        </div>
      </div>

      {/* ---------------- NAME FIELDS ---------------- */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-normal">First Name *</label>
          <div className="flex items-center border px-3 mt-1">
            <User size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter your first name"
              className="
          w-full px-2 py-2 text-sm outline-none 
          placeholder:font-base placeholder:text-gray-500
        "
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-normal">Last Name *</label>
          <div className="flex items-center border px-3 mt-1">
            <User size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter your last name"
              className="
          w-full px-2 py-2 text-sm outline-none font-normal
          placeholder:font-normal placeholder:text-gray-500
        "
              required
            />
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE + EMAIL ---------------- */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-normal">Mobile No. *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Phone size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter 10-digit mobile number"
              className="w-full px-2 py-2  text-sm outline-none"
              maxLength={10}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-normal">Email Address *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-2 py-2  text-sm outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* ---------------- ADDRESS ---------------- */}
      <div>
        <label className="text-sm font-normal">Address *</label>
        <div className="flex items-center border  px-3 mt-1">
          <MapPin size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter your complete address"
            className="w-full px-2 py-2  text-sm outline-none"
            required
          />
        </div>
      </div>

      {/* ---------------- COUNTRY / STATE / CITY ---------------- */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-normal">Country *</label>
          <select className="border  px-2 py-2  text-sm  w-full mt-1">
            <option value="">Select your country</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-normal">State *</label>
          <select className="border  px-2 py-2  text-sm w-full mt-1">
            <option value="">Select your state</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-normal">City *</label>
          <select className="border  px-2 py-2  text-sm w-full mt-1">
            <option value="">Select your city</option>
          </select>
        </div>
      </div>

      {/* ---------------- PINCODE + DOB + GENDER ---------------- */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-normal">Pin Code *</label>
          <input
            type="text"
            placeholder="Enter pin code"
            className="border  px-2 py-2  text-sm w-full mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-normal">Date of Birth *</label>
          <div className="flex items-center border  px-3 mt-1">
            <Calendar size={18} className="text-gray-500" />
            <input
              type="date"
              className="w-full px-2 py-2  text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-normal">Gender *</label>
          <select className="border  px-2 py-2  text-sm w-full mt-1">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* ---------------- OBJECTIVES ---------------- */}
      <div>
        <h3 className="font-medium text-[15px]  mb-2">
          In which of our objectives you'd like to work? *
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 text-sm  gap-3">
          <label>
            <input type="checkbox" /> Health & Wellness
          </label>
          <label>
            <input type="checkbox" /> Woman Empowerment
          </label>
          <label>
            <input type="checkbox" /> Nature & Environment
          </label>
          <label>
            <input type="checkbox" /> Kala Sanskriti
          </label>
        </div>
      </div>

      {/* ---------------- SPECIAL SKILL ---------------- */}
      <div>
        <label className="font-medium text-[15px]">
          Special Skill (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Mention any special skill you have..."
          className="border text-sm p-3 w-full mt-2"
        />
      </div>

      {/* ---------------- CONTRIBUTION AREA ---------------- */}
      <div>
        <h3 className="font-normal text-[15px] mb-1">
          Which of the following areas would you like to contribute? *
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 text-sm gap-2 mt-2">
          <label>
            <input type="checkbox" /> Health Camp
          </label>
          <label>
            <input type="checkbox" /> Organizational Networking
          </label>
          <label>
            <input type="checkbox" /> Fund Raising
          </label>
          <label>
            <input type="checkbox" /> Campaign
          </label>
          <label>
            <input type="checkbox" /> Organisational Surveys
          </label>
          <label>
            <input type="checkbox" /> Graphic Design
          </label>
          <label>
            <input type="checkbox" /> Event Management
          </label>
          <label>
            <input type="checkbox" /> Media Management
          </label>
          <label>
            <input type="checkbox" /> Social Media/Blogging
          </label>
          <label>
            <input type="checkbox" /> Research Support
          </label>
          <label>
            <input type="checkbox" /> Add Volunteer Networking
          </label>
          <label>
            <input type="checkbox" /> Others
          </label>
        </div>
      </div>

      {/* ---------------- WORK DAYS ---------------- */}
      <div>
        <h3 className="font-normal text-[15px] mb-1">
          How many days can you work with us in a week? *
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 text-sm gap-2 mt-2">
          <label>
            <input type="radio" name="days" /> 01 Day
          </label>
          <label>
            <input type="radio" name="days" /> 02 Days
          </label>
          <label>
            <input type="radio" name="days" /> 03 Days
          </label>
          <label>
            <input type="radio" name="days" /> 04 Days
          </label>
          <label>
            <input type="radio" name="days" /> 05 Days
          </label>
          <label>
            <input type="radio" name="days" /> Only Weekends
          </label>
        </div>
      </div>

      {/* ---------------- KNOW ABOUT US ---------------- */}
      <div>
        <h3 className="font-normal text-[15px] mb-2">
          How did you come to know about us? *
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-2">
          <label>
            <input type="radio" name="know" /> Namo Gange Trust Website
          </label>
          <label>
            <input type="radio" name="know" /> Email Referral
          </label>
          <label>
            <input type="radio" name="know" /> Staff Volunteer Reference
          </label>
          <label>
            <input type="radio" name="know" /> Advertisements
          </label>
          <label>
            <input type="radio" name="know" /> Through Events
          </label>
          <label>
            <input type="radio" name="know" /> Social Media (Facebook, Twitter
            etc.)
          </label>
          <label>
            <input type="radio" name="know" /> Others
          </label>
        </div>
      </div>

      {/* ---------------- COMMENTS ---------------- */}
      <div>
        <label className="font-normal text-[15px]">Message or Comments *</label>
        <textarea
          rows={4}
          placeholder="Write your comments or message here..."
          className="border  w-full p-3 mt-2"
        />
      </div>

      {/* ---------------- CAPTCHA ---------------- */}
      <div>
        <h3 className="font-normal text-[15px]">Complete reCAPTCHA</h3>

        <div className="border p-4 w-64 bg-gray-50 mt-2">
          <input type="checkbox" className="mr-2 text-lg" /> I'm not a robot
        </div>
      </div>

      {/* ---------------- BUTTONS ---------------- */}
      <div className="flex gap-4">
        <button className="bg-[#DF562C] text-white px-6 py-1.5 text-base font-normal hover:bg-orange-600">
          Register Now
        </button>

        <button
          type="button"
          className=" px-6 py-1.5 font-normal border border-gray-500 text-gray-700 hover:bg-gray-100 text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
