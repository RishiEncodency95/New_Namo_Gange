import Videos from "@/components/gallery/videos/Videos";
import React from "react";
import { getSeo } from "@/lib/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/gallery/videos");

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: "/gallery/videos",
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [
        {
          url: seo.open_graph,
          alt: seo.metaTitle,
        },
      ],
    },
  };
}

const page = () => {
  return (
    <div className="">
      <Videos />
    </div>
  );
};

export default page;
