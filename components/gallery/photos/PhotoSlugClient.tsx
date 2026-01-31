// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import axiosClient from "@/lib/axiosClient";

// interface Photo {
//     _id: string;
//     title: string;
//     slug: string;
//     image: string;
//     status: string;
// }

// export default function PhotoSlugClient({ slug }: { slug: string }) {
//     const [photo, setPhoto] = useState<Photo | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!slug) return;

//         const fetchPhoto = async () => {
//             try {
//                 const res = await axiosClient.get("/galleryImage");
//                 const data = res?.data?.data || [];
//                 const matched = data.find(
//                     (item: Photo) => item.slug === slug && item.status === "Active"
//                 );
//                 setPhoto(matched || null);
//             } catch (error) {
//                 console.error("❌ Gallery Photo Slug API Error:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPhoto();
//     }, [slug]);

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center text-gray-500">
//                 Loading photo...
//             </div>
//         );
//     }

//     if (!photo) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center">
//                 <h2 className="text-xl font-semibold text-gray-800">Photo not found</h2>
//                 <Link
//                     href="/gallery/photos"
//                     className="mt-3 text-sm text-[#DF562C] hover:underline"
//                 >
//                     ← Back to Gallery
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-gray-50 min-h-screen py-12">
//             <div className="max-w-4xl mx-auto px-4">
//                 <div className="mb-8 text-center">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                         {photo.title}
//                     </h1>
//                     <Link
//                         href="/gallery/photos"
//                         className="text-sm text-[#DF562C] hover:underline"
//                     >
//                         ← Back to Gallery
//                     </Link>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                     <Image
//                         src={photo.image}
//                         alt={photo.title}
//                         width={1600}
//                         height={900}
//                         className="w-full h-auto object-contain rounded-md"
//                         priority
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";

type GalleryItem = {
    _id: string;
    title: string;
    slug: string;
    image: string;
    status: string;
};

export default function PhotoSlugClient({ slug }: { slug: string }) {
    const [data, setData] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState<string | null>(null);

    const title = slug
        ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
        : "Gallery";

    /* ================= FETCH GALLERY BY SLUG ================= */
    useEffect(() => {
        if (!slug) return;

        const fetchGallery = async () => {
            try {
                const res = await axiosClient.get("/galleryImage");

                const gallery = res?.data?.gallery || [];

                const filtered = gallery.filter(
                    (item: GalleryItem) => item.slug === slug && item.status === "Active"
                );

                console.log("✅ Slug:", slug);
                console.log("✅ Filtered Gallery:", filtered);

                setData(filtered);
            } catch (error) {
                console.error("❌ Gallery API Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, [slug]);

    return (
        <section className="bg-gray-50">
            {/* ===== HEADER ===== */}
            <div
                className="w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/ourActivities/ourActivities5.jpg')" }}
            >
                <div className="bg-black/60 py-10 md:h-[250px] md:py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-xl md:text-2xl font-medium text-white uppercase">
                            {title}
                        </h2>
                        <p className="text-sm md:text-base text-white mt-1">
                            <Link
                                href="/gallery/photos"
                                className="text-[#DF562C] font-medium hover:underline"
                            >
                                Back
                            </Link>{" "}
                            - {title}
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-lg md:text-xl font-medium text-center mt-6">
                    {title}
                </h1>

                {loading && (
                    <p className="text-center text-gray-500 mt-6">Loading...</p>
                )}

                {!loading && data.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">
                        No active images available for this category.
                    </p>
                )}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-6">
                    {data.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => setSelected(item.image)}
                            className="cursor-pointer overflow-hidden rounded shadow-md hover:shadow-xl transition"
                        >
                            <div className="relative w-full aspect-square group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== LIGHTBOX ===== */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-5 right-5 text-white text-3xl hover:text-[#f36b2a]"
                        onClick={() => setSelected(null)}
                    >
                        ✕
                    </button>

                    <div className="relative w-[90vw] max-w-6xl h-[80vh]">
                        <Image
                            src={selected}
                            alt="Selected"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}