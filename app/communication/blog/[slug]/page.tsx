import fetchClient from "@/lib/fetchClient";
import BlogSlugClient from "../../../../components/communication/blog/BlogSlugClient";

export async function generateStaticParams() {
  try {
    const res = await fetchClient.get("/blog");
    const data = res?.data?.data || [];

    return data.map((objective: any) => ({
      slug: objective.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blog:", error);
    return [];
  }
}
export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogSlugClient slug={slug} />;
}
