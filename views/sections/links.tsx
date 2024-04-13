import type { FC } from "hono/jsx";
import type { Link } from "../../types/link";

type Props = {
  links: Link[];
};

const LinksSection: FC<Props> = ({ links }) => {
  return (
    <section id="links">
      <h3>Links</h3>

      <div class="overflow-auto">
        <table>
          <tbody>
            {links.map((link) => (
              <tr>
                <td>
                  <a href={"/" + link.alias} target="_blank">
                    {link.alias}
                  </a>
                </td>
                <td style="width: 35%;">{link.url}</td>
                <td style="width: 10%;">{link.clicks}</td>
                <td style="width: 20%;">{link.createdAt}</td>
                <td style="width: 100px;">
                  <a
                    href="#"
                    style="color: red; margin-left: 1em;"
                    hx-delete={`/cebol/${link.id}`}
                    hx-confirm="Are you sure?"
                    hx-target="#links"
                    hx-swap="outerHTML"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LinksSection;
