import { candidatures } from "@/lib/data";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1> Mes candidatures</h1>

            <ul>
                {candidatures.map((candidature) => (
                    <li key={candidature.id}> <Link href={`/candidatures/${candidature.id}`}>
                        {candidature.entrprise} - {candidature.poste}
                        </Link></li>
                ))}
            </ul>
        </div>
    )
}