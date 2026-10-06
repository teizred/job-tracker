import { candidatures, couleurs } from "@/lib/data"
import Link from "next/link"



export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Mes candidatures</h1>

      <ul className="flex flex-col gap-4">
        {candidatures.map((candidature) => (
          <li key={candidature.id}>
            <Link
              href={`/candidatures/${candidature.id}`}
              className="block p-4 border border-zinc-800 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <p className="text-lg font-semibold">{candidature.entreprise}</p>
              <p className="text-sm text-gray-500">{candidature.poste}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${couleurs[candidature.status]}`}
              >
                {candidature.status}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}