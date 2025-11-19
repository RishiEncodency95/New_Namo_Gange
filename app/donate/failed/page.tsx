"use client";

import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DonationFailed() {
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto py-20 px-4 text-center">
      <XCircle className="text-red-600 w-20 h-20 mx-auto" />

      <h1 className="text-3xl font-extrabold text-red-600 mt-4">
        Payment Failed
      </h1>

      <p className="text-gray-600 mt-3">
        Something went wrong. Please try again.
      </p>

      <button
        onClick={() => router.push("/donate")}
        className="mt-8 bg-[#0C55A0] text-white px-6 py-3 rounded-lg hover:bg-[#084783]"
      >
        Try Again
      </button>
    </div>
  );
}
