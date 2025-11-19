"use client";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DonationSuccess() {
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto py-20 px-4 text-center">
      <CheckCircle className="text-green-600 w-20 h-20 mx-auto" />

      <h1 className="text-3xl font-extrabold text-green-600 mt-4">
        Donation Successful!
      </h1>

      <p className="text-gray-600 mt-3">
        Thank you for contributing. Your support means a lot ❤️
      </p>

      <button
        onClick={() => router.push("/")}
        className="mt-8 bg-[#DF562C] text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        Go Home
      </button>
    </div>
  );
}
