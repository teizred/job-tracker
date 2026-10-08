"use client";
import { useActionState } from "react";
import { createApplication } from "../actions";

export function ApplicationForm() {
    const [state, formAction, isPending] = useActionState(createApplication,
        { error: "" });
    return (
        <form action={formAction} className="flex flex-col gap-2">
            <input type="text" name="company" placeholder="Entreprise" className="p-2 border border-gray-300 rounded-md" />
            <input type="text" name="position" placeholder="Poste" className="p-2 border border-gray-300 rounded-md" />
            
            {state.error && <p className="text-red-500">{state.error}</p>}

            <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded-md">
                {isPending ? "Ajout en cours..." : "Ajouter"}
            </button>
        </form>
    )
}