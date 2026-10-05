import { candidatures } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const candidature = candidatures.find((candidature) => candidature.id === id);
    if (!candidature) {
        notFound();
    }
    return (
        <div>
            <h1>Candidature {candidature.entrprise}</h1>
            <p>Poste: {candidature.poste}</p>

            <Link href="/candidatures"> Retour </Link>
        </div>
    )
}