"use client";

import { useState } from "react";
import Image from "next/image";

export default function LatestNewsPage() {
  const [search, setSearch] = useState("");
  const [publisherFilter, setPublisherFilter] = useState("");

  const news = [
    {
      id: 1,
      title: "CM visit to hospital managed & run by Krishnayan",
      date: "9 June 2023",
      publisher: "Dainik Bhaskar",
      img: "/newsUpdate/news2.jpg",
      logo: "/logo.png",
      desc: "CM’s visit highlights excellent medical facilities and quality care.",
    },
    {
      id: 2,
      title: "Kailash Kher visit to Krishnayan",
      date: "25 May 2023",
      publisher: "Dainik Bhaskar",
      img: "/newsUpdate/news3.jpg",
      logo: "/logo.png",
      desc: "Celebrity Kailash Kher visited Krishnayan and appreciated the service.",
    },
    {
      id: 3,
      title:
        "JEEV SEVA MAHA SEVA, SHREE KRISHNAYAN DESI GAURAKSHA – Kailash Kher Foundation",
      date: "20 March 2023",
      publisher: "Kailasa Entertainment",
      img: "/newsUpdate/news2.jpg",
      logo: "/logo.png",
      desc: "A spiritual and cultural event celebrating Gaumata & Indian tradition.",
    },
    {
      id: 4,
      title: "Krishnayan bio CNG plant Haridwar",
      date: "21 March 2023",
      publisher: "DD India",
      img: "/newsUpdate/news2.jpg",
      logo: "/logo.png",
      desc: "Exclusive coverage by DD India for bio CNG plant inaugurated at Haridwar.",
    },
    {
      id: 5,
      title: "Krishnayan Goshala, where 2200 cows are served",
      date: "18 Oct 2019",
      publisher: "Jagran",
      img: "/newsUpdate/news2.jpg",
      logo: "/logo.png",
      desc: "Goshala with 2200+ cows and complete facilities for food, shelter & health.",
    },
    {
      id: 6,
      title: "Inauguration of Shri Krishnayan police post for cow protection",
      date: "27 Dec 2019",
      publisher: "Jagran",
      img: "/newsUpdate/news2.jpg",
      logo: "/logo.png",
      desc: "A new police post inaugurated to support cow protection efforts.",
    },
  ];

  const filteredNews = news.filter((item) => {
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
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* ---------- HEADING ---------- */}
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Latest News and <span className="text-[#7a0d0d]">Updates</span>
      </h2>

      {/* ---------- FILTERS ---------- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 mb-6">
        <select
          className="border p-2 rounded bg-white w-48 shadow"
          value={publisherFilter}
          onChange={(e) => setPublisherFilter(e.target.value)}
        >
          <option value="">Publisher Wise</option>
          <option value="Dainik Bhaskar">Dainik Bhaskar</option>
          <option value="Jagran">Jagran</option>
          <option value="DD India">DD India</option>
          <option value="Kailasa Entertainment">Kailasa Entertainment</option>
        </select>

        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded px-5 w-full md:w-80 shadow"
        />
      </div>

      {/* ---------- NEWS LIST ---------- */}
      <div className="max-w-7xl mx-auto space-y-8">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-6 border"
          >
            {/* LEFT IMAGE */}
            <div className="md:w-1/3 w-full h-56 relative rounded-md overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <div className="w-24 h-10 relative">
                  <Image
                    src={item.logo}
                    alt={item.publisher}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                📅 {item.date} &nbsp; | &nbsp; 📰 {item.publisher}
              </p>

              <p className="text-gray-700 mt-3 line-clamp-3">{item.desc}</p>

              <button className="bg-[#7a0d0d] text-white text-xs px-4 py-1 rounded mt-3 hover:bg-[#5c0808] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No results found...</p>
      )}
    </div>
  );
}
