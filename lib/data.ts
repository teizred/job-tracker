export const applications = [
    {id : "1", company: "Doctolib", position: "DevFullStack", status: "envoyée"},
    {id : "2", company: "Capgemini", position: "Dev Frontend", status: "entretien"},
    {id : "3", company: "Orange", position: "Dev next.js", status: "refusée"},
];

export const statusColors: Record<string, string> = {
    "envoyée": "bg-blue-100 text-blue-700",
    "entretien": "bg-yellow-100 text-yellow-700",
    "refusée": "bg-red-100 text-red-700",
    "acceptée": "bg-green-100 text-green-700",
};