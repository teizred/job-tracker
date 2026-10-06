"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { applications } from "./data";

export async function createApplication(formData: FormData) {
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;

    applications.push({
        id: String(applications.length + 1),
        company,
        position,
        status: "envoyée",
    });

    revalidatePath("/applications");
    redirect("/applications");
}