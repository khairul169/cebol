import { Database } from "bun:sqlite";

const dbPath = process.cwd() + "/storage/database.sqlite";
const db = new Database(dbPath);

export const initDb = () => {
  db.exec(
    `CREATE TABLE IF NOT EXISTS links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alias TEXT NOT NULL UNIQUE,
        url TEXT NOT NULL,
        clicks INTEGER DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
};

export default db;
