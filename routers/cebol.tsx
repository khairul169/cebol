import { Hono } from "hono";
import HomePage from "../views/pages/home";
import LinksSection from "../views/sections/links";
import db from "../lib/database";
import { randomChars } from "../lib/utils";
import type { Link } from "../types/link";

const router = new Hono();

router.get("/", (c) => {
  const links = db
    .query("SELECT * FROM links ORDER BY id DESC")
    .all() as Link[];
  return c.html(<HomePage links={links} />);
});

router.post("/", async (c) => {
  let message = "Link created successfully!";
  let isSuccess = true;

  const body = (await c.req.parseBody()) as any;
  const alias: string = body.alias?.length > 0 ? body.alias : randomChars(4);
  const url: string = !body.url.startsWith("http")
    ? `https://${body.url}`
    : body.url;
  const aliasUrl = `rul.sh/${alias}`;

  try {
    const stmt = db.query(
      "INSERT INTO links (alias, url) VALUES (?, ?) RETURNING id"
    );
    const result = stmt.get(alias, url) as any;
    if (!result?.id) {
    }
  } catch (err) {
    message = (err as Error).message;
    isSuccess = false;

    if (message.includes("UNIQUE constraint failed: links.alias")) {
      message = "Alias is used!";
    }
  }

  return c.html(
    <article>
      <p>{message}</p>
      {isSuccess && <input readonly value={aliasUrl} onclick="this.select()" />}
    </article>
  );
});

router.delete("/:id", (c) => {
  const id = c.req.param("id");
  const stmt = db.query("DELETE FROM links WHERE id = ?");
  stmt.run(id);

  const links = db
    .query("SELECT * FROM links ORDER BY id DESC")
    .all() as Link[];
  return c.html(<LinksSection links={links} />);
});

export default router;
