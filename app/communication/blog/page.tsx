import Blog from "@/components/communication/blog/Blog";
import React from "react";
import { getSeo } from "@/lib/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/communication/blog");

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: "/communication/blog",
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
      <Blog />
    </div>
  );
};

export default page;
