import { MetadataRoute } from "next";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{}];
}

const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/api/"], // Protecting sensitive paths
    },
    sitemap: `${CLIENT_URL}/sitemap.xml`,
  };
}
