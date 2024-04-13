import type { FC } from "hono/jsx";
import Layout from "../layouts/layout";
import LinksSection from "../sections/links";
import CreateLinkSection from "../sections/create-link";
import type { Link } from "../../types/link";

type Props = {
  links: Link[];
};

const HomePage: FC<Props> = ({ links }) => {
  return (
    <Layout title="Cebol - URL Shortener">
      <main class="container">
        <CreateLinkSection />
        <LinksSection links={links} />
      </main>
    </Layout>
  );
};

export default HomePage;
