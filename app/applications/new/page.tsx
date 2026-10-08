import { ApplicationForm } from "@/lib/components/application-form";

export default function Page () {
    return(
        <div className="max-w-lg mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Nouvelle candidature</h1>
            <ApplicationForm />
        </div>
    )
}
