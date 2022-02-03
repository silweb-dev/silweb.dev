<script lang="ts">
  import Button from "components/atoms/button.svelte";
  import i18next from "utils/i18next";
  import Section from "components/molecules/section.svelte";
</script>

<Section
  id="contact"
  subtitle={i18next.t("contact.subtitle")}
  title={i18next.t("contact.title")}
  align="center"
>
  <form
    action="https://getform.io/f/cc984a44-9701-4714-bc70-73a94c8cfee7"
    method="POST"
    class="form"
  >
    <label for="name">
      {i18next.t("contact.form.name")} *
      <input type="text" name="name" required />
    </label>
    <label for="email">
      {i18next.t("contact.form.email")} *
      <input type="email" name="email" required />
    </label>
    <label for="message">
      {i18next.t("contact.form.message")} *
      <textarea type="text" rows="10" name="message" required />
    </label>
    <Button>
      {i18next.t("contact.form.send")}
    </Button>
  </form>
</Section>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 2.4rem auto;
    max-width: 50rem;
  }

  .form label {
    color: var(--grey-400);
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
    width: 100%;

    @include respond-to-tablet {
      font-size: 1.6rem;
    }
  }

  .form input,
  .form textarea {
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    color: var(--white);
    display: block;
    font-size: 1.4rem;
    margin-top: 0.8rem;
    padding: 0.8rem 1.2rem;
    width: 100%;

    @include respond-to-tablet {
      font-size: 1.5rem;
    }

    &:focus {
      outline: 0.1rem solid var(--cyan-400);
    }
  }
</style>
