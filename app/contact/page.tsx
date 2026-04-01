import Contact from "@/components/contact/Contact";
import React from "react";
import { getSeo } from "@/lib/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/contact");

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: "/contact",
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
    <div>

      <Contact />
    </div>
  );
};

export default page;
