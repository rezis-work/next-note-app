"use server";

import { AsyncDatabase } from "promised-sqlite3";
import { redirect } from "next/navigation";

export default async function updateUsername(formData) {
  const db = await AsyncDatabase.open("./database.sqlite");
  const newUsername = formData.get("username");
  const id = formData.get("id");

  if (!newUsername || !id) {
    throw new Error("Missing username or id");
  }

  await db.run("UPDATE users SET name = ? WHERE id = ?", [newUsername, id]);
  redirect("/who-am-i");
}
