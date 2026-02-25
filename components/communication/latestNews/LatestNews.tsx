"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axiosClient from "@/lib/axiosClient";
import Link from "next/link";


export default function LatestNewsPage() {
  const [search, setSearch] = useState("");
  const [publisherFilter, setPublisherFilter] = useState("");
  const [newsList, setNewsList] = useState<any[]>([]);
  const [publishers, setPublishers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRes, pubRes] = await Promise.all([
          axiosClient.get("/recent-updates"),
          axiosClient.get("/published"),
        ]);

        if (newsRes.data && Array.isArray(newsRes.data.data)) {
          const parser = new DOMParser();
          const mappedNews = newsRes.data.data
            .filter((item: any) => item.status === "Active")
            .map((item: any) => {
              let description = item.description || "";
              const decoded = parser.parseFromString(description, "text/html");
              description = decoded.body.textContent || "";
              return {
                id: item._id,
                title: item.title,
                date: new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
                publisher: item.published_by || "Namo Gange",
                img: item.image,
                logo: "/logo.png",
                desc: description.replace(/<[^>]+>/g, ""),
              };
            });
          setNewsList(mappedNews);
        }

        if (pubRes.data && Array.isArray(pubRes.data.data)) {
          setPublishers(pubRes.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredNews = newsList.filter((item) => {
    const s = search.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(s) ||
      item.desc.toLowerCase().includes(s);
    const matchPublisher = publisherFilter
      ? item.publisher === publisherFilter
      : true;
    return matchSearch && matchPublisher;
  });

  return (
    <div>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/Newsletter.jpg')" }}
      >
        {/* Overlay */}
        <div className="bg-black/30 w-full h-full md:h-[250px] py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
              Latest News
            </h2>
            <p className="text-sm md:text-base text-white mt-1">
              <Link
                href="/"
                className="text-[#DF562C] font-medium hover:underline"
              >
                Home
              </Link>{" "}
              - Latest News
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-1.5 md:py-3 px-2 md:px-12  lg:px-12  bg-gray-50 overflow-hidden">
        {/* ---------- HEADING ---------- */}
        <h2 className="text-sm text-center md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
          Latest News and <span className="text-[#7a0d0d]">Updates</span>
        </h2>
        <p className="text-gray-600 text-[13px] md:text-sm italic leading-relaxed">
          Stay connected with our latest activities, inspiring stories, and
          important updates that reflect our ongoing mission toward social
          upliftment and community well-being.
        </p>

        <div className=" w-full  h-1 mt-2 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
        <div>
          <p className="text-gray-700 mt-1 text-xs md:text-[15px] text-justify leading-relaxed font-normal">
            This initiative reflects a deep commitment to spiritual awareness,
            cultural values, and selfless service. Rooted in the eternal grace
            of
            <strong> Maa Gange and Lord Krishna</strong>, it seeks to inspire
            individuals toward inner awakening, compassion, and conscious
            living. Through thoughtful guidance, reflective teachings, and
            value-based initiatives, this journey encourages people to reconnect
            with the timeless wisdom of Sanatan Dharma and apply it meaningfully
            in everyday life.
          </p>
        </div>

        {/* ---------- FILTERS ---------- */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-2">
          <select
            className="w-full border px-2 py-1 md:py-1.5 rounded bg-white md:w-48 shadow"
            value={publisherFilter}
            onChange={(e) => setPublisherFilter(e.target.value)}
          >
            <option value="">Publisher Wise</option>
            {publishers.map((pub: any) => (
              <option key={pub._id} value={pub.name}>
                {pub.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-2 py-1 md:py-1.5 rounded md:px-5 w-full md:w-80 shadow"
          />
        </div>

        {/* ---------- NEWS LIST ---------- */}
        <div className="w-full space-y-6 py-2">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-2 md:p-6 flex flex-col md:flex-row gap-6 border"
            >
              {/* LEFT IMAGE */}
              <div className="md:w-1/3 w-full h-30 md:h-45 relative rounded-md overflow-hidden">
                <Image
                  src={
                    item.img?.startsWith("http")
                      ? item.img
                      : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.img}`
                  }
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-gray-900 font-normal text-sm md:text-base mb-1 line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="w-24 h-6 relative">
                    <Image
                      src={item.logo}
                      alt={item.publisher}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  📅 {item.date} &nbsp; | &nbsp; 📰 {item.publisher}
                </p>

                <p className="text-gray-800 text-xs md:text-sm text-justify mt-3 line-clamp-4">
                  {item.desc}
                </p>

                {/* <button
                className=" px-3 md:px-6 lg:px-6 py-1 md:py-1.5 lg:py-1.5 mt-3 text-sm font-medium rounded
                     bg-[#0C55A0] text-white shadow-sm 
                     hover:bg-[#0a4786] active:scale-95 transition-all"
              >
                Read More
              </button> */}
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No results found...</p>
        )}
      </div>
    </div>
  );
}
