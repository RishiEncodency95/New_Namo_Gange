"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/lib/axiosClient";
import AboutNGTrust from "../home/AboutNGTrust";

interface TrustBody {
  _id: string;
  name: string;
  description: string;
  image: string;
  image_alt?: string;
  status?: string;
  createdAt?: string;
}

interface TrustBodyCard {
  id: string;
  title: string;
  text: string;
  image: string;
  image_alt?: string;
}

const AboutNamoGange = () => {
  const [trustBodies, setTrustBodies] = useState<TrustBodyCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrustBodies = async () => {
      try {
        const res = await axiosClient.get("/trust-bodies");

        const data: TrustBody[] = res?.data?.data || [];

        const parser = new DOMParser();

        const activeItems: TrustBodyCard[] = data
          .filter((item) => item.status === "Active")
          .sort(
            (a, b) =>
              new Date(a.createdAt || "").getTime() -
              new Date(b.createdAt || "").getTime(),
          )
          .map((item) => {
            const decoded = parser.parseFromString(
              item.description || "",
              "text/html",
            );

            return {
              id: item._id,
              title: item.name,
              text: decoded.body.textContent || "",
              image: item.image,
              image_alt: item.image_alt,
            };
          });

        setTrustBodies(activeItems);
      } catch (error) {
        console.error("Error fetching trust bodies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrustBodies();
  }, []);

  const stripHtmlTags = (html: string = ""): string => {
    if (typeof window === "undefined") return html;
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about/about1.jpg')" }}
      >
        <div className="bg-black/20 w-full h-full md:h-[250px] flex items-center py-10 md:py-16">
          <div className="w-full px-4 text-center">
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              About Us
            </h2>

            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - About Us
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:px-12 lg:px-12">
        <div className="w-full mt-4 text-center">
          <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
            About <span className="text-[#DF562C]">Namo Gange</span>
          </h2>

          <p className="text-[13px] md:text-[15px] text-medium text-gray-800 italic">
            “We serve communities through wellness, culture, women empowerment,
            compassionate service, and environmental care.”
          </p>
        </div>

        <div className="w-full h-1 mt-3 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />

        <div className="w-full py-1 md:py-2 leading-relaxed space-y-2">
          <p className="text-gray-700 text-xs md:text-[15px] leading-relaxed font-normal py-1">
            The Trust Bodies guided by{" "}
            <span className="font-medium text-[#DF562C]">
              Acharya Jagdishji Maharaj
            </span>{" "}
            work with a shared vision of spiritual growth and social
            responsibility. Inspired by the divine blessings of{" "}
            <span className="font-medium text-[#DF562C]">Maa Ganga</span> and{" "}
            <span className="font-medium text-[#1e7ed3]">Lord Krishna</span>,
            these trusts are dedicated to preserving{" "}
            <span className="font-medium text-[#DF562C]">Dharma</span>,
            promoting cultural values, and serving humanity through education,
            awareness, and seva. With a foundation rooted in faith and
            compassion, the Trust Bodies continue to strengthen society by
            uniting spirituality with meaningful action.
          </p>
        </div>
      </div>

      <AboutNGTrust />

      {/* Trust Bodies */}
      <div className="w-full py-1 md:py-3 px-2 md:px-12 lg:px-12">
        <div className="w-full py-1 text-center">
          <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
            Trust <span className="text-[#DF562C]">Bodies</span>
          </h2>

          <p className="text-[13px] md:text-[15px] text-medium text-gray-800 italic">
            “Organizations united in service, spirituality, and social
            upliftment.”
          </p>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />

        {/* Loading */}
        {loading ? (
          <div className="space-y-6 py-6">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-6 animate-pulse"
              >
                <div className="w-full md:w-[30%] h-48 bg-gray-200 rounded" />
                <div className="w-full md:w-[70%] space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-1/3" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : trustBodies.length === 0 ? (
          <p className="text-center text-gray-500 py-6">
            No trust bodies available.
          </p>
        ) : (
          <div className="space-y-2 md:space-y-2 py-1 md:py-6">
            {trustBodies.map((activity, i) => (
              <div
                key={activity.id}
                className={`flex flex-col w-full ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-5 md:gap-10 lg:gap-10`}
              >
                <div className="flex w-full md:w-[30%] relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#f36b2a]/30 to-[#1e7ed3]/30 rounded blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  <div className="overflow-hidden rounded shadow-lg bg-white/50 backdrop-blur-sm border border-gray-100 transition-all duration-700 group-hover:shadow-2xl w-full">
                    <Image
                      src={
                        activity.image?.startsWith("http")
                          ? activity.image
                          : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ""}${activity.image}`
                      }
                      width={500}
                      height={300}
                      alt={activity.image_alt || activity.title}
                      className="w-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[70%] text-center md:text-left">
                  <h1 className="text-sm md:text-lg font-normal text-gray-900">
                    {activity.title}
                  </h1>
                  <p className="text-gray-700 text-justify text-xs md:text-sm lg:text-sm leading-relaxed mb-6">
                    {stripHtmlTags(activity.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutNamoGange;
