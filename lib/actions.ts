"use server"

import { db } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { applications } from "./db/schema";

export async function createApplication(formData: FormData) {
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;

    await db.insert(applications).values ({
        company,
        position,
    });

    revalidatePath("/applications");
    redirect("/applications");
}