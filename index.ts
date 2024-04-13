import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import router from "./routers/index";
import { initDb } from "./lib/database";

initDb();

const app = new Hono();

if (process.env.SERVE_STATIC) {
  app.use(
    serveStatic({
      root: process.env.SERVE_STATIC,
    })
  );
}

app.route("/", router);

export default app;
