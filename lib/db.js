// lib/db.ts
import sqlite3 from "sqlite3";
import promisedSqlite3 from "promised-sqlite3";

let db;

export async function getDb() {
  if (!db) {
    const raw = new sqlite3.Database("./database.sqlite");
    db = promisedSqlite3(raw);

    await db.run("PRAGMA foreign_keys = ON");

    await db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      )
    `);

    await db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        user_from INTEGER,
        user_to INTEGER,
        FOREIGN KEY(user_from) REFERENCES users(id),
        FOREIGN KEY(user_to) REFERENCES users(id)
      )
    `);
  }

  return db;
}
