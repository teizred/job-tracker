import { createApplication } from "@/lib/actions";

export default function Page () {
    return(
        <div className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Nouvelle candidature</h1>
            <form action={createApplication} className="flex flex-col gap-2">
                <input type="text" name="company" placeholder="Entreprise" className="p-2 rounded-md border border-gray-300" />
                <input type="text" name="position" placeholder="Poste" className="p-2 rounded-md border border-gray-300" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer">Envoyer</button>
            </form>
        </div>
    )
}