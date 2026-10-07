"use client";

export function DeleteButton() {
    return (
        <button type="submit" onClick={(event) => {
            if (!confirm("Tu es sûr de vouloir supprimer cette candidature ?")) {
                event.preventDefault()
            }
        }}
        className="block cursor-pointer text-red-500 hover:text-red-700 mt-6"
        >
            Supprimer

        </button>
    )
}