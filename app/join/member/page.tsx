import React from "react";
import Member from "@/components/join/member/Member";
import { getSeo } from "@/lib/getSeo";

export async function generateMetadata() {
  const seo = await getSeo("/join/member");

  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: "/join/member",
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
      <Member />
    </div>
  );
};

export default page;
