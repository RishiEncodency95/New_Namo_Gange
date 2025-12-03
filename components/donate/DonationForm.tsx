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

/* ----- Form Types ----- */
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

  /* --------------------- HANDLE CHANGE ----------------------- */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const { name, value } = target;

    // checkbox
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    /* --- When Seva Type Changes → Reset Package & Amount --- */
    if (name === "sevaType") {
      setForm((prev) => ({
        ...prev,
        sevaType: value,
        donationPackage: "",
        amount: "",
      }));
      return;
    }

    /* --- When Donation Package Changes → Set Amount --- */
    if (name === "donationPackage") {
      const selectedPkg = donationOptions[form.sevaType]?.find(
        (p) => p.label === value
      );

      if (selectedPkg) {
        setForm((prev) => ({
          ...prev,
          donationPackage: value,
          amount:
            selectedPkg.amount === "custom"
              ? "" // allow typing custom
              : String(selectedPkg.amount),
        }));
      }
      return;
    }

    /* --- Normal Input Fields --- */
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* --------------------- SUBMIT FORM ----------------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.amount) {
      alert("Please enter donation amount");
      return;
    }

    console.log("Donation Submitted:", form);
    alert("Donation Submitted Successfully!");
  };

  return (
    <section className="w-full bg-gray-50 px-6 lg:px-10">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
          <span>
            Our{" "}
            <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
              Donate
            </span>
          </span>
        </h2>

        <p className="text-gray-600 text-sm md:text-[15px] italic leading-relaxed">
          "Your support strengthens our mission and helps serve those in need
          with compassion and dignity."
        </p>
      </div>

      <div className="w-full h-1 mt-3 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />

      <div className="w-full flex justify-center">
        <div className="w-full md:w-[80%] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 md:p-8 my-6">
          <h2 className="text-lg md:text-xl font-medium text-center text-gray-800 mb-6 underline underline-offset-4">
            Support Through{" "}
            <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
              Ann Sewa / Moksha Sewa
            </span>
          </h2>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Reusable Input Fields */}
            <InputField
              label="Full Name *"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />

            <InputField
              label="Email *"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email address"
            />

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
              required
              placeholder="10-digit number"
            />

            <SelectField
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              options={["Male", "Female", "Other"]}
            />

            <SelectField
              label="Choose Sewa *"
              name="sevaType"
              value={form.sevaType}
              onChange={handleChange}
              required
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
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
              >
                <option value="">Select Package</option>

                {form.sevaType &&
                  donationOptions[form.sevaType].map((pkg, index) => (
                    <option key={index} value={pkg.label}>
                      {pkg.label}
                    </option>
                  ))}
              </select>
            </div>

            {/* Amount */}
            <InputField
              label="Amount (₹) *"
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              placeholder="Enter donation amount"
            />

            {/* PAN */}
            <InputField
              label="PAN Number (Optional)"
              name="pan"
              value={form.pan}
              onChange={handleChange}
              placeholder="For 80G receipt"
            />

            {/* Address Details */}
            <InputField
              label="Country *"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              placeholder="Country"
            />

            <InputField
              label="State *"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
              placeholder="State"
            />

            <InputField
              label="City *"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              placeholder="City"
            />

            {/* Full Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Full Address *</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                placeholder="Enter complete address"
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
                placeholder="Write your message"
              />
            </div>

            {/* Anonymous */}
            <div className="flex gap-2 items-center md:col-span-2">
              <input
                type="checkbox"
                name="anonymous"
                checked={form.anonymous}
                onChange={handleChange}
              />
              <label className="text-sm">Donate anonymously</label>
            </div>

            {/* Submit */}
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

/* --------------------- REUSABLE COMPONENTS ----------------------- */
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
