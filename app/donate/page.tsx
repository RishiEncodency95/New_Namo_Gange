"use client";
import Link from "next/link";
import DonationForm from "@/components/donate/DonationForm";

export default function DonatePage() {
  return (
  <div>
    <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ourActivities/ourActivities5.jpg')" }}
      >
        <div className="bg-black/30 w-full h-full py-10 md:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
            Donate
            </h2>

            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - Donate
            </p>
          </div>
        </div>
      </div>
    <DonationForm />
  </div> 
     
  );
}
