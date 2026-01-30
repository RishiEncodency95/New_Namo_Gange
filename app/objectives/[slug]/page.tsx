"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiService, ObjectiveFromAPI } from "@/lib/apiService";
import { useRouter } from "next/navigation";

// A simple loading component
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#DF562C]"></div>
    </div>
);

// A simple not found component
const NotFound = () => (
    <div className="text-center py-20 min-h-[60vh]">
        <h1 className="text-2xl font-bold">404 - Objective Not Found</h1>
        <p className="text-gray-600">
            The objective you are looking for does not exist or could not be loaded.
        </p>
        <Link
            href="/"
            className="text-blue-500 hover:underline mt-4 inline-block"
        >
            Back to Home
        </Link>
    </div>
);

const ObjectivePage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params);
    const [objective, setObjective] = useState<ObjectiveFromAPI | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    // { label: "Health & Wellness", href: "/objectives/health" },
    // { label: "Nature & Environment", href: "/objectives/nature" },
    // { label: "Culture & Sanskriti", href: "/objectives/culture" },
    // { label: "Women & Empowerment", href: "/objectives/women" },
    // { label: "Moksha Sewa", href: "/objectives/mokshaSewa" },
    useEffect(() => {
        if (slug === "moksha-sewa") {
            router.replace("/objectives/mokshaSewa");
            return;
        } else if (slug === "women-empowerment") {
            router.replace("/objectives/women");
            return;
        } else if (slug === "kala-sanskriti") {
            router.replace("/objectives/culture");
            return;
        } else if (slug === "nature-environment") {
            router.replace("/objectives/nature");
            return;
        } else if (slug === "health-wellness") {
            router.replace("/objectives/health");
            return;
        }

        if (slug) {
            const fetchObjective = async () => {
                setLoading(true);
                const data = await apiService.getObjectiveBySlug(slug);
                setObjective(data);
                setLoading(false);
            };
            fetchObjective();
        }
    }, [slug, router]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!objective) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${objective.image || "/about/aboutus.jpg"})` }}
            >
                <div className="bg-black/40 w-full h-full md:h-[250px] flex items-center py-10 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-xl md:text-3xl font-semibold text-white uppercase">
                            {objective.title}
                        </h2>
                        <p className="text-sm md:text-base text-white mt-1">
                            <Link href="/" className="text-[#DF562C] font-medium hover:underline">
                                Home
                            </Link>{" "}
                            - Objectives - {objective.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full px-4 md:px-12 lg:px-24 py-8 md:py-12">
                <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
                    <div
                        className="prose max-w-none prose-p:text-justify prose-headings:text-gray-800 prose-p:text-gray-700"
                        dangerouslySetInnerHTML={{ __html: objective.desc }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectivePage;