import Photos from "@/components/gallery/photos/Photos";
import React from "react";
import { getSeo } from "@/lib/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/gallery/photos");

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: "/gallery/photos",
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
      <Photos />
    </div>
  );
};

export default page;
