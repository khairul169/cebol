import type { FC, PropsWithChildren } from "hono/jsx";

type Props = PropsWithChildren<{
  title?: string;
}>;

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />

        <title>{title || "Cebol"}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <script src="https://unpkg.com/htmx.org@1.9.11" defer />
      </head>
      <body>
        <header class="container" style="margin-top: 2em;">
          <h1>Cebol</h1>
          <p>URL Shortener</p>
        </header>

        {children}
      </body>
    </html>
  );
};

export default Layout;
