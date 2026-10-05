const candidatures = [
    {id : "1", entrprise: "Doctolib", poste: "DevFullStack"},
    {id : "2", entrprise: "Capgemini", poste: "Dev Frontend"},
    {id : "3", entrprise: "Orange", poste: "Dev next.js"},
];

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