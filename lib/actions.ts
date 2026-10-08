"use server"

import { db } from "./db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { applications } from "./db/schema";

export async function createApplication(_prevState: { error: string }, formData: FormData) {
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;

    if (!company || !position) {
        return { error: "L'entreprise et le poste sont obligatoires." };
    }

    await db.insert(applications).values ({
        company,
        position,
    });

    revalidatePath("/applications");
    redirect("/applications");
}

export async function deleteApplication(formData: FormData) {
    const id = Number(formData.get("id"))

    await db.delete(applications).where(eq(applications.id, id));
    revalidatePath("/applications");
    redirect("/applications");
}

export async function updateStatus(formData: FormData) {
    const id = Number(formData.get("id"))
    const status = formData.get("status") as string
  
    await db.update(applications).set({ status }).where(eq(applications.id, id))
  
    revalidatePath("/applications")
    revalidatePath(`/applications/${id}`)
  }