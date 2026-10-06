import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  status: text("status").notNull().default("envoyée"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})