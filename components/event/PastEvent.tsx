"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import axiosClient from "@/lib/axiosClient";

/* ================= TYPES ================= */
interface PastEventType {
  id: string;
  title: string;
  image: string;
  fromDate: string;
  toDate: string;
  link?: string;
}

/* ================= HELPERS ================= */
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const PastEvent = () => {
  const [pastEvents, setPastEvents] = useState<PastEventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axiosClient.get("/events");
        const data = res?.data?.data || [];

        const today = new Date();
        const todayDateOnly = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        );

        const filteredEvents: PastEventType[] = data
          .filter((item: any) => {
            if (!item.end_date) return false;

            const end = new Date(item.end_date);
            const endDateOnly = new Date(
              end.getFullYear(),
              end.getMonth(),
              end.getDate(),
            );

            return (
              item.status === "Active" && endDateOnly < todayDateOnly // ✅ ONLY COMPLETED EVENTS
            );
          })
          .sort(
            (a: any, b: any) =>
              new Date(b.start_date).getTime() -
              new Date(a.start_date).getTime(),
          )
          .map((item: any) => ({
            id: item._id,
            title: item.name,
            image: item.image,
            fromDate: item.start_date,
            toDate: item.end_date,
            link: item.link,
          }));

        setPastEvents(filteredEvents);
      } catch (error) {
        console.error("Error fetching past events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const stripHtmlTags = (html: string = ""): string => {
    if (typeof window === "undefined") return html;
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <section className="bg-[#f6f6f9] py-2 md:py-4">
      {/* ------------------ BANNER ------------------ */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/events.jpg')" }}
      >
        <div className="bg-black/30 w-full h-full md:h-[250px] py-10 md:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
              Past Events
            </h2>

            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - Past Events
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:px-12  lg:px-12 text-center">
        {/* HEADER */}
        <div className="">
          <h2 className="text-sm text-center md:text-lg lg:text-lg mt-1 font-medium text-gray-900 leading-tight">
            <span>
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
                Past Events
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-[13px] md:text-sm italic leading-relaxed">
            "Each past event stands as a milestone of our commitment to service,
            spirituality, and community upliftment—creating lasting impact
            across health, culture, and environmental awareness."
          </p>
        </div>
        <div className=" w-full  h-1 md:mt-2 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
        <p className="text-gray-700 py-1 text-xs md:text-[15px] text-justify leading-relaxed font-normal">
          Our past events stand as meaningful milestones in our journey of
          service and social commitment. Each initiative reflects our dedication
          to spiritual well-being, healthy living, cultural preservation,
          environmental care, and community upliftment. From wellness programs
          and cultural celebrations to environmental drives and spiritual
          gatherings, these events have brought people together to learn, serve,
          and create lasting positive impact across society.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {pastEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm
              hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className=" flex items-center justify-center bg-gray-50 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover hover:scale-103 transition-transform rounded-xl p-2 md:p-4"
                />
              </div>

              <div className="text-center flex flex-col flex-1">
                <h5 className="font-normal text-sm md:text-base text-gray-900 mb-2">
                  {item.title}
                </h5>

                <p className="text-sm text-gray-600 mb-3 md:mb-4">
                  {formatDate(item.fromDate)} – {formatDate(item.toDate)}
                </p>

                {item.link && (
                  <Link
                    href={item.link}
                    className="mt-auto px-2 pb-2 md:px-5 md:pb-4 flex justify-center md:block"
                  >
                    <button
                      className="
      w-1/2 md:w-full
      md:py-1.5
      py-1
      text-xs md:text-sm
      font-medium
      rounded-md
      bg-[#0C55A0]
      text-white
      hover:bg-[#0a4786]
      transition
    "
                    >
                      View Details
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvent;
