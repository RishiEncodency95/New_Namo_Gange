"use client";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import fetchClient from "@/lib/fetchClient";

interface Banner {
  image: string;
  title: string;
  link: string;
  alt_text?: string;
}

const HomeSlider = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const res = await fetchClient.get("/banner");
        const bannersList = res?.data?.data || [];

        const activeBanners = bannersList.filter(
          (b: any) => b.status === "Active",
        );

        const formatted = activeBanners.map((b: any) => ({
          image: b.image,
          title: b.title,
          link: b.link,
          alt_text: b.alt_text,
        }));

        setBanners(formatted);
      } catch (error) {
        console.error("Slider API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full">
      {/* ================= SLIDER ================= */}
      <div className="relative w-full overflow-hidden z-0">
        {loading ? (
          <div className="flex items-center justify-center w-full h-[190px] md:h-[530px] bg-gray-100">
            <div


              className="w-12 h-12 border-4 border-gray-300 border-t-[#DF562C] rounded-full"
            />
          </div>
        ) : (
          <div



          >
            <Slider ref={sliderRef} {...settings}>
              {banners.map((item, i) => (
                <div key={i} className="w-full">
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full block overflow-hidden bg-gray-50"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt_text || item.title || `slide-${i}`}
                      width={1920}
                      height={800}
                      className="w-full h-auto max-h-[600px] object-contain"
                      priority={i === 0}
                    />
                  </Link>
                </div>
              ))}

              {banners.length === 0 && (
                <div
                  className="flex flex-col items-center text-center justify-center w-full h-[190px] sm:h-[280px] md:h-[400px] lg:h-[530px] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"



                >
                  {/* Animated Background */}
                  <div
                    className="absolute w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"


                    style={{ top: "10%", left: "10%" }}
                  />
                  <div
                    className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"


                    style={{ bottom: "10%", right: "10%" }}
                  />

                  {/* Content */}
                  <div
                    className="z-10 flex flex-col items-center text-center px-4"



                  >
                    {/* Icon */}
                    <div
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3"


                    >
                      📢
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700">
                      No Active Banners
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 px-2">
                      Currently there are no banners to display.
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-3 sm:mt-4 md:mt-6 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base bg-[#DF562C] text-white rounded-lg font-semibold transition-all"


                    >
                      🔄 Refresh
                    </button>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        )}
      </div>

      {/* ================= GLASS INFO CARDS ================= */}
      <div className="relative -mt-1 lg:-mt-14 left-1/2 -translate-x-1/2 w-full px-2 md:px-12 z-30">
        <div
          className="bg-[#DF562C] text-white grid grid-cols-1 lg:grid-cols-3 rounded-xs overflow-hidden"
          // className="
          // grid grid-cols-1 md:grid-cols-3
          // rounded-md
          // overflow-hidden
          //  bg-gradient-to-r from-orange-100/50 via-cyan-100/50 to-blue-100/50
          // shadow-md
          // border border-white/30
          // text-gray-700
          // "
        >
          {/* CSR HEADS */}
          <div className="px-4 py-1 md:px-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex gap-4 items-start">
              <div className="text-2xl md:text-3xl">🤝</div>
              <div>
                <h3 className="font-semibold text-[13px] md:text-[15px] uppercase tracking-wide">
                  For CSR Heads
                </h3>
                <p className="text-xs md:text-sm text-medium ">
                  Join us to work with trusted NGOs and experienced CSR leaders
                  across India to ensure transparent governance and maximum
                  social impact.
                </p>
              </div>
            </div>
          </div>

          {/* NGOs */}
          <div className="px-4 py-1 md:px-6 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex gap-4 items-start">
              <div className="text-2xl md:text-3xl">💼</div>
              <div>
                <h3 className="font-semibold text-[13px] md:text-[15px] uppercase tracking-wide">
                  For NGOs
                </h3>
                <p className="text-xs md:text-sm ">
                  Register with us to enhance capacity, receive fundraising
                  support, and access professional expertise at minimal cost.
                </p>
              </div>
            </div>
          </div>

          {/* DONORS */}
          <div className="px-4 py-1 md:px-6">
            <div className="flex gap-4 items-start">
              <div className="text-2xl md:text-3xl">🌍</div>
              <div>
                <h3 className="font-semibold text-[13px] md:text-[15px] uppercase tracking-wide">
                  For Donors & Volunteers
                </h3>
                <p className="text-xs md:text-sm ">
                  Contribute your time or resources through #OneDayForFuture and
                  support verified NGOs working toward a sustainable world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
