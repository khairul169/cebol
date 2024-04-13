import type { FC } from "hono/jsx";

const CreateLinkSection: FC = () => {
  return (
    <section>
      <h3>Create New Link</h3>

      <div id="create-link-res"></div>

      <form
        hx-post="/cebol"
        hx-target="#create-link-res"
        hx-disabled-elt="button[type=submit]"
      >
        <div class="grid">
          <input type="text" name="alias" placeholder="url alias (optional)" />
          <input type="text" name="url" placeholder="https://" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateLinkSection;
