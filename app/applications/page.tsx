import { applications, statusColors } from "@/lib/data"
import Link from "next/link"



export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Mes candidatures</h1>

      <ul className="flex flex-col gap-4">
        {applications.map((application) => (
          <li key={application.id}>
            <Link
              href={`/applications/${application.id}`}
              className="block p-4 border border-zinc-800 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <p className="text-lg font-semibold">{application.company}</p>
              <p className="text-sm text-gray-500">{application.position}</p>
              <span 
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${statusColors[application.status]}`}
              >
                {application.status}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}