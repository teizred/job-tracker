import { candidatures } from "@/lib/data";

export default function Page() {
    return (
        <div>
            <h1> Mes candidatures</h1>

            <ul>
                {candidatures.map((candidature) => (
                    <li key={candidature.id}>{candidature.entrprise} - {candidature.poste}</li>
                ))}
            </ul>
        </div>
    )
}