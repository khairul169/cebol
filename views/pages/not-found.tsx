import type { FC } from "hono/jsx";
import Layout from "../layouts/layout";

const NotFoundPage: FC = () => {
  return (
    <Layout title="Link Not Found!">
      <main class="container" style="margin-top: 2em;">
        <h3>Link Not Found!</h3>
        <p>The requested link was not found.</p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
