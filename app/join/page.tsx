"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import VolunteerForm from "./VolunteerForm";
import MemberForm from "./MemberForm";

export default function JoinPage() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "member">(
    "volunteer"
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-xl font-medium text-[#DF562C] text-center mb-6">
          Volunteer Registration Form
        </h1>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* FORM CONTENT */}
        <div className="mt-8">
          {activeTab === "volunteer" ? <VolunteerForm /> : <MemberForm />}
        </div>
      </div>
    </div>
  );
}
