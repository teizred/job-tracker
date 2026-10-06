export const candidatures = [
    {id : "1", entreprise: "Doctolib", poste: "DevFullStack", status: "envoyée"},
    {id : "2", entreprise: "Capgemini", poste: "Dev Frontend", status: "entretien"},
    {id : "3", entreprise: "Orange", poste: "Dev next.js", status: "refusée"},
];

export const couleurs: Record<string, string> = {
    "envoyée": "bg-blue-100 text-blue-700",
    "entretien": "bg-yellow-100 text-yellow-700",
    "refusée": "bg-red-100 text-red-700",
    "acceptée": "bg-green-100 text-green-700",
};