import { candidatures, couleurs } from "@/lib/data";
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
        <div className="max-w-2xl mx-auto p-8 bg-zinc-900 rounded-lg border border-zinc-800">
            <h1 className="text-3xl font-bold mb-6 text-white">Candidature {candidature.entreprise}</h1>
            <p className="text-lg mb-6">Poste: {candidature.poste}</p>
            <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${couleurs[candidature.status]}`}
            >
                {candidature.status}
            </span>

            <Link href="/candidatures" className="text-blue-500 hover:text-blue-700 mt-6"> Retour </Link>
        </div>
    )
}