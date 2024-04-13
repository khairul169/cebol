import { Hono } from "hono";
import cebol from "./cebol";
import db from "../lib/database";
import type { Link } from "../types/link";
import NotFoundPage from "../views/pages/not-found";

const router = new Hono();

router.route("/cebol", cebol);

router.get("/:alias", (c) => {
  const alias = c.req.param("alias");
  const link = db
    .query("SELECT * FROM links WHERE alias = ? LIMIT 1")
    .get(alias) as Link;

  if (!link) {
    return c.html(<NotFoundPage />, 404);
  }

  db.query("UPDATE links SET clicks = clicks + 1 WHERE id = ?").run(link.id);
  return c.redirect(link.url);
});

router.get("*", (c) => {
  return c.redirect("/cebol");
});

export default router;
