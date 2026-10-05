import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <h1>Candidature introuvable 😕</h1>
      <p>Cette candidature n'existe pas ou a été supprimée.</p>
      <Link href="/candidatures">← Retour à mes candidatures</Link>
    </div>
  )
}