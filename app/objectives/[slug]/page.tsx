import axiosClient from "@/lib/axiosClient";
import ObjectiveSlugClient from "../../../components/objectives/ObjectiveSlugClient";
// import ObjectiveSlugClient from "@/components/objectives/ObjectiveSlugClient";

/* ================= STATIC PARAMS ================= */
export async function generateStaticParams() {
    try {
        const res = await axiosClient.get("/objectives");
        const data = res?.data?.data || [];

        return data.map((objective: any) => ({
            slug: objective.slug,
        }));
    } catch (error) {
        console.error("Error generating static params for objectives:", error);
        return [];
    }
}

export default async function InitiativeObjectivePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ObjectiveSlugClient slug={slug} />;
}
