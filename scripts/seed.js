// scripts/seed.js
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const fs = require("fs");

async function seed() {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  const sql = fs.readFileSync("./scripts/seed.sql", "utf8");

  try {
    await db.exec(sql);
    console.log("✅ Seeded database successfully.");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await db.close();
  }
}

seed();
