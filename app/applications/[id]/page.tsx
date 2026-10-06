import { applications, statusColors } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const application = applications.find((application) => application.id === id);
    if (!application) {
        notFound();
    }
    return (
        <div className="max-w-2xl mx-auto p-8 bg-zinc-900 rounded-lg border border-zinc-800">
            <h1 className="text-3xl font-bold mb-6 text-white">Candidature pour {application.company}</h1>
            <p className="text-lg mb-6">Poste: {application.position}</p>
            <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${statusColors[application.status]}`}
            >
                {application.status}
            </span>

            <Link href="/applications" className="text-blue-500 hover:text-blue-700 mt-6"> Retour </Link>
        </div>
    )
}