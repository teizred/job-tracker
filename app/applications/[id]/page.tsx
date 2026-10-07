import { statusColors } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { deleteApplication, updateStatus } from "@/lib/actions";
import { DeleteButton } from "@/lib/components/delete-button";


export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (isNaN(Number(id))) {
        notFound();
    }

    const [application] = await db.select().from(applications).where(eq(applications.id, Number(id)));

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

            <Link href="/applications" className="block text-blue-500 hover:text-blue-700 mt-6"> Retour </Link>
            <form action={updateStatus}>
                <input type="hidden" name="id" value={application.id} />
                <select name="status" className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white">
                    {Object.keys(statusColors).map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">Mettre à jour</button>
            </form>
            <form action={deleteApplication}>
                <input type="hidden" name="id" value={application.id} />
                <DeleteButton />
            </form>
        </div>
    )
}