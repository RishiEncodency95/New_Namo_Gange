"use client";

import React, { useState } from "react";

/* ----- Dynamic Donation Packages Based on Sewa ----- */
const donationOptions: Record<
  string,
  { label: string; amount: number | "custom" }[]
> = {
  "Ann Seva": [
    { label: "₹101 – One Meal", amount: 101 },
    { label: "₹501 – Food Package", amount: 501 },
    { label: "₹1100 – Full Ann Seva", amount: 1100 },
    { label: "Custom Amount", amount: "custom" },
  ],

  "Moksha Seva": [
    { label: "₹2100 – Last Rites Support", amount: 2100 },
    { label: "₹5100 – Complete Moksha Seva", amount: 5100 },
    { label: "₹11000 – Premium Moksha Support", amount: 11000 },
    { label: "Custom Amount", amount: "custom" },
  ],
};

/* ----- Types for Form ----- */
interface DonationFormData {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  state: string;
  city: string;
  address: string;

  sevaType: string;
  donationPackage: string;
  amount: string;

  pan: string;
  message: string;
  anonymous: boolean;
}

const initialForm: DonationFormData = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  country: "",
  state: "",
  city: "",
  address: "",

  sevaType: "",
  donationPackage: "",
  amount: "",

  pan: "",
  message: "",
  anonymous: false,
};

export default function DonationForm() {
  const [form, setForm] = useState(initialForm);

  /* ----- Handle Input Change ----- */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Auto-reset package & amount if seva type changes
    if (name === "sevaType") {
      setForm((prev) => ({
        ...prev,
        donationPackage: "",
        amount: "",
      }));
    }

    // When donation package changes → auto-fill amount
    if (name === "donationPackage") {
      const selected = donationOptions[form.sevaType]?.find(
        (pkg) => pkg.label === value
      );

      if (selected) {
        setForm((prev) => ({
          ...prev,
          amount: selected.amount === "custom" ? "" : String(selected.amount),
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Donation Submitted!");
    console.log(form);
  };

  return (
    <section className="w-full bg-gray-50 px-6 lg:px-10 ">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl   font-semibold rounded text-gray-900 mt-4">
          <span>
            Our{" "}
            <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
              Donate
            </span>
          </span>
        </h2>

        <p className="text-gray-600 text-sm md:text-[15px] italic leading-relaxed">
          "Your contribution helps us serve the needy, support social welfare
          initiatives, and bring meaningful change to countless lives. Every
          donation, big or small, becomes a step toward compassion, dignity, and
          a brighter future for all."
        </p>
      </div>

      <div className=" w-full  h-1 mt-3 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
      <div className="w-full flex justify-center">
        <div
          className="w-full md:w-[80%] bg-white border border-gray-200 rounded-xl 
            shadow-sm hover:shadow-md transition-all duration-300 
            p-6 md:p-8 my-6 "
        >
          <h2 className="text-lg md:text-xl font-medium text-center text-gray-800 mb-6 underline underline-offset-2">
            Support Through{" "}
            <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
              Ann Sewa / Moksha Sewa
            </span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Full Name */}
            <InputField
              label="Full Name *"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />

            {/* Email */}
            <InputField
              label="Email *"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {/* Phone */}
            <InputField
              label="Phone *"
              name="phone"
              maxLength={10}
              value={form.phone}
              onChange={(e) =>
                handleChange({
                  ...e,
                  target: {
                    ...e.target,
                    value: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
              placeholder="10-digit mobile"
            />

            {/* Gender */}
            <SelectField
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              options={["Male", "Female", "Other"]}
            />

            {/* Seva Type */}
            <SelectField
              label="Choose Sewa *"
              name="sevaType"
              value={form.sevaType}
              onChange={handleChange}
              options={["Ann Seva", "Moksha Seva"]}
            />

            {/* Donation Package */}
            <div>
              <label className="text-sm font-medium">Donation Package *</label>
              <select
                name="donationPackage"
                value={form.donationPackage}
                onChange={handleChange}
                disabled={!form.sevaType}
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
              >
                <option value="">Select Package</option>
                {form.sevaType &&
                  donationOptions[form.sevaType].map((pkg, i) => (
                    <option key={i} value={pkg.label}>
                      {pkg.label}
                    </option>
                  ))}
              </select>
            </div>

            {/* Amount */}
            <InputField
              label="Donation Amount (₹) *"
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
            />

            {/* PAN */}
            <InputField
              label="PAN Number (Optional)"
              name="pan"
              value={form.pan}
              onChange={handleChange}
              placeholder="For 80G receipt"
            />

            {/* Country */}
            <InputField
              label="Country *"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="India"
            />

            {/* State */}
            <InputField
              label="State *"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Your state"
            />

            {/* City */}
            <InputField
              label="City *"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Your city"
            />

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Full Address *</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                placeholder="Enter your address"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Message (Optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Anonymous */}
            <div className="flex items-center gap-2 md:col-span-2">
              <input
                type="checkbox"
                name="anonymous"
                checked={form.anonymous}
                onChange={handleChange}
              />
              <label className="text-sm">Donate anonymously</label>
            </div>

            <div className="md:col-span-2 text-center mt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-[#DF562C] text-white text-sm font-semibold rounded-lg shadow hover:bg-orange-600 transition"
              >
                Proceed to Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/*  REUSABLE INPUT COMPONENTS */
const InputField = ({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
    />
  </div>
);

const SelectField = ({
  label,
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
}) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      {...props}
      className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
