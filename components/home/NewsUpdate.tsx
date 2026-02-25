"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import axiosClient from "@/lib/axiosClient";

interface Blog {
  _id: string;
  title: string;
  image: string;
  description: string;
  createdAt?: string;
  status?: string;
  image_alt?: string;
}

interface BlogCard {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  image_alt?: string;
}

const NewsUpdate = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosClient.get("/blog");

        const data: Blog[] = res?.data?.data || [];

        const parser = new DOMParser();

        const fetchedData: BlogCard[] = data
          .filter((item) => item.status === "Active")
          .sort(
            (a, b) =>
              new Date(b.createdAt || "").getTime() -
              new Date(a.createdAt || "").getTime(),
          )
          .slice(0, 3)
          .map((item) => {
            let description = item.description || "";
            const decoded = parser.parseFromString(description, "text/html");
            description = decoded.body.textContent || "";

            return {
              id: item._id,
              title: item.title,
              image: item.image,
              image_alt: item.image_alt,
              description: description.replace(/<[^>]+>/g, ""),
              date: new Date(item.createdAt || "").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            };
          });

        setBlogs(fetchedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="w-full relative py-1.5 md:py-3 bg-gray-50 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 leading-tight">
            Blogs{" "}
            <span className="bg-gradient-to-r from-[#f36b2a] to-[#1e7ed3] bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
          <p className="text-[13px] md:text-[15px] text-medium text-gray-800 italic py-1">
            “Serving Humanity, Preserving Nature, Awakening Divinity.”
          </p>
        </div>

        {/* Top Text */}
        <div className="flex justify-center w-full">
          <div className="w-full mx-auto relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />
            <p className="text-gray-700 text-xs md:text-[15px] text-justify leading-relaxed font-normal py-2">
              Stay informed with the latest updates, highlights, and impactful
              stories from our Trust.
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded shadow-md p-4 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">
            No blog updates available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogs.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded border border-gray-100 overflow-hidden shadow-md 
                hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      item.image?.startsWith("http")
                        ? item.image
                        : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ""}${item.image}`
                    }
                    alt={item.image_alt || item.title}
                    width={600}
                    height={400}
                    className="w-full h-32 md:h-50 lg:h-58 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-4 text-left">
                  <div className="flex items-center gap-2 text-[#f36b2a] text-xs md:text-sm lg:text-sm mb-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-sm md:text-lg lg:text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-[#1e7ed3] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-justify text-xs md:text-sm line-clamp-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsUpdate;
