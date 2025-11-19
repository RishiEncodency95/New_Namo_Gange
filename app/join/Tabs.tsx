"use client";

interface Props {
  activeTab: "volunteer" | "member";
  setActiveTab: (tab: "volunteer" | "member") => void;
}

export default function Tabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="grid grid-cols-2 bg-gray-200 rounded p-1 text-center">
      <button
        onClick={() => setActiveTab("volunteer")}
        className={`py-2 font-medium rounded transition ${
          activeTab === "volunteer"
            ? "bg-[#DF562C] text-white shadow"
            : "text-gray-600 hover:bg-gray-300"
        }`}
      >
        As a Volunteer
      </button>

      <button
        onClick={() => setActiveTab("member")}
        className={`py-2 font-medium rounded transition ${
          activeTab === "member"
            ? "bg-[#0C55A0] text-white shadow"
            : "text-gray-600 hover:bg-gray-300"
        }`}
      >
        As a Member
      </button>
    </div>
  );
}
