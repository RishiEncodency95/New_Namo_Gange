"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  X,
  Mail,
  Phone,
  User,
  Lock,
  Calendar,
  ImageIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";

interface SignupModalProps {
  onSignup?: () => void;
}

export default function SignupModal({ onSignup }: SignupModalProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSignup?.();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8"
      >
        {/* Close */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
        >
          <X size={22} />
        </Link>

        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            className="w-14 h-14 mx-auto mb-1 rounded-full shadow"
          />
          <h2 className="text-2xl font-bold text-[#DF562C]">
            Create Your Account
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-h-[70vh] overflow-y-auto pr-2"
        >
          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField icon={<User />} placeholder="Full Name" required />
            <InputField
              icon={<Mail />}
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          {/* MOBILE + DOB */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField icon={<Phone />} placeholder="Mobile Number" required />
            <InputField
              icon={<Calendar />}
              type="date"
              placeholder="Date of Birth"
              required
            />
          </div>

          {/* GENDER + ROLE */}
          <div className="grid md:grid-cols-2 gap-4">
            <SelectField
              options={["Male", "Female", "Other"]}
              placeholder="Gender (Optional)"
            />

            <SelectField
              options={["Donor", "Volunteer", "Participant"]}
              placeholder="Register As"
              required
            />
          </div>

          {/* FULL ADDRESS — ALWAYS VISIBLE */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MapPin size={16} className="text-gray-600" />
              Full Address
            </label>
            <textarea
              rows={2}
              required
              placeholder="House No, Street, Area"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm outline-none resize-none"
            />
          </div>

          {/* CITY - STATE - PINCODE */}
          <div className="grid md:grid-cols-3 gap-4">
            <InputField placeholder="City" required />
            <InputField placeholder="State" required />
            <InputField placeholder="Pincode" required />
          </div>

          {/* OCCUPATION */}
          <InputField placeholder="Occupation (Optional)" />

          {/* INTERESTS */}
          <SelectField
            options={[
              "Health",
              "Environment",
              "Education",
              "Women Empowerment",
              "Events",
              "Yoga",
              "Ayurveda",
            ]}
            placeholder="Select Interest"
          />

          {/* PASSWORD */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              type="password"
              icon={<Lock />}
              placeholder="Password"
              required
            />
            <InputField
              type="password"
              icon={<Lock />}
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* PROFILE PHOTO */}
          <div className="border rounded-lg p-3 bg-white cursor-pointer">
            <label className="flex items-center gap-3 cursor-pointer">
              <ImageIcon className="w-5 h-5 text-gray-600" />
              <span className="text-sm">Upload Profile Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-20 h-20 mt-3 rounded-lg object-cover border"
              />
            )}
          </div>

          {/* TERMS */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required className="accent-[#DF562C]" />I
            agree to the{" "}
            <span className="text-[#DF562C] underline cursor-pointer">
              Terms & Conditions
            </span>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#DF562C] text-white text-sm py-2.5 rounded-full font-semibold hover:bg-[#c54d21] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-700">
          Already Registered?{" "}
          <Link
            href="/auth/login"
            className="text-[#DF562C] font-semibold underline"
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

/* REUSABLE COMPONENTS */
function InputField({
  icon,
  placeholder,
  type = "text",
  required,
}: {
  icon?: React.ReactNode;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex items-center border rounded-lg bg-white px-3">
      {icon && <span className="text-gray-500 mr-2">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full py-2 text-sm outline-none"
      />
    </div>
  );
}

function SelectField({
  options,
  placeholder,
  required,
}: {
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <select
      className="border rounded-lg py-2 px-3 text-sm bg-white"
      required={required}
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o, i) => (
        <option key={i}>{o}</option>
      ))}
    </select>
  );
}
