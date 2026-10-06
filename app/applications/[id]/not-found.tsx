import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold mb-6">Candidature introuvable 😕</h1>
      <p className="text-lg mb-6">Cette candidature n'existe pas ou a été supprimée.</p>
      <Link href="/applications" className="text-blue-500 hover:text-blue-700">← Retour à mes applications</Link>
    </div>
  )
}