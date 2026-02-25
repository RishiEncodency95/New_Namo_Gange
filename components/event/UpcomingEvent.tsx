"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "@/lib/axiosClient";

interface EventType {
  title: string;
  image: string;
  text: string;
  link?: string;
  image_alt?: string;
}

const UpcomingEvent = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axiosClient.get("/events");
        const data = res?.data?.data || [];

        const parser = new DOMParser();

        // Today date (date only, no time)
        const today = new Date();
        const todayDateOnly = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        );

        const filteredEvents = data
          .filter((item: any) => {
            if (!item.start_date || !item.end_date) return false;

            const start = new Date(item.start_date);
            const end = new Date(item.end_date);

            const startDateOnly = new Date(
              start.getFullYear(),
              start.getMonth(),
              start.getDate(),
            );

            const endDateOnly = new Date(
              end.getFullYear(),
              end.getMonth(),
              end.getDate(),
            );

            return (
              item.status === "Active" &&
              (startDateOnly >= todayDateOnly || // future event
                (startDateOnly <= todayDateOnly &&
                  endDateOnly >= todayDateOnly)) // ongoing event
            );
          })
          .sort(
            (a: any, b: any) =>
              new Date(a.start_date).getTime() -
              new Date(b.start_date).getTime(),
          )
          .map((item: any) => {
            const decoded = parser.parseFromString(
              item.description || "",
              "text/html",
            );

            return {
              title: item.name,
              image: item.image,
              text: decoded.body.textContent || "",
              link: item.link,
              image_alt: item.image_alt,
            };
          });

        setUpcomingEvents(filteredEvents);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
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
    <section className="bg-[#f6f6f9] pb-8">
      {/* ----------- STATIC DESIGN SAME ----------- */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/events.jpg')" }}
      >
        <div className="bg-black/30 w-full h-full md:h-[250px] py-10 md:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
              Upcoming Events
            </h2>

            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - Upcoming Events
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:px-12  lg:px-12 py-1.5 md:py-3  text-center">
        {/* HEADER */}
        <div className="">
          <h2 className="text-sm text-center md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
            <span>
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#DF562C] to-[#0C55A0] bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-[13px] md:text-sm italic leading-relaxed">
            "Our events are rooted in spirituality and service, bringing
            together health, culture, nature, and community for collective
            upliftment."
          </p>
        </div>
        <div className=" w-full  h-1 mt-2 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
        <p className="text-gray-700 text-xs md:text-[15px] text-justify leading-relaxed font-normal py-1 md:py-2">
          Our upcoming events are thoughtfully curated to inspire positive
          change and meaningful participation across communities. Each event is
          guided by our vision of nurturing spiritual well-being, promoting
          healthy lifestyles, preserving cultural heritage, protecting the
          environment, and strengthening social responsibility. From wellness
          programs and cultural celebrations to environmental initiatives and
          spiritual gatherings, every event offers a platform to learn, connect,
          and contribute.
        </p>
        {/* STATIC HEADER SAME */}

        {/* Activities List */}
        <div className="space-y-2 md:space-y-4">
          {loading ? (
            <div className="text-gray-500 py-6">Loading events...</div>
          ) : upcomingEvents.length === 0 ? (
            <div className="text-gray-500 py-6">
              No upcoming events available.
            </div>
          ) : (
            upcomingEvents.map((activity, i) => (
              <div
                key={i}
                className={`relative flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center p-2 rounded-xl gap-5 md:gap-10 lg:gap-10
                bg-white border border-transparent shadow-sm transition-all duration-500
                hover:shadow-xl hover:border-[#0C55A0]/30`}
              >
                <div className="flex-1 relative group w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#f36b2a]/30 to-[#1e7ed3]/30 rounded blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  <div className="overflow-hidden rounded shadow-lg bg-white/50 backdrop-blur-sm border border-gray-100 transition-all duration-700 group-hover:shadow-2xl w-full">
                    <Image
                      src={
                        activity.image?.startsWith("http")
                          ? activity.image
                          : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ""}${activity.image}`
                      }
                      alt={activity.image_alt || activity.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-gray-900 font-normal md:font-medium text-sm md:text-base md:mb-1 line-clamp-1">
                    {activity.title}
                  </h3>

                  <p className="text-gray-700 text-justify text-xs md:text-sm lg:text-sm leading-relaxed mb-2 md:mb-6">
                    {stripHtmlTags(activity.text)}
                  </p>

                  {activity.link && (
                    <Link
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="relative overflow-hidden px-4 py-1 rounded md:py-1.5 lg:py-1.5 text-xs md:text-sm lg:text-sm text-white font-medium 
                        shadow-md bg-[#0C55A0] cursor-pointer
                        hover:bg-sky-700 hover:shadow-lg transition-all duration-300"
                      >
                        Learn More...
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
