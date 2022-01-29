<script lang="ts">
  import i18next from "../../utils/i18next";
</script>

<header class="header">
  <a class="title-container" href="#intro">
    <h1 class="title">
      {i18next.t("site.title")}
    </h1>
  </a>
  <div class="nav-container">
    <nav class="nav">
      <ul>
        <li>
          <a href="#portfolio">{i18next.t("site.navigation.portfolio")}</a>
        </li>
        <li>
          <a href="#skills">{i18next.t("site.navigation.skills")}</a>
        </li>
        <li>
          <a href="#contact">{i18next.t("site.navigation.contact")}</a>
        </li>
      </ul>
    </nav>
    <div class="toggle">
      <a
        class="toggle-item"
        href="/nl"
        class:selected={i18next.language === "nl"}>NL</a
      >
      <a
        class="toggle-item"
        href="/en"
        class:selected={i18next.language === "en"}>EN</a
      >
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    display: flex;
    left: 0;
    margin: 0 auto;
    max-width: var(--content-width);
    position: absolute;
    right: 0;
    padding: 1.2rem 0;
  }

  .title-container {
    text-decoration: none;
  }

  .title {
    color: var(--cyan-400);
    font-size: 2.8rem;
  }

  .nav-container {
    align-items: center;
    display: flex;
    flex: 1;
    gap: 4.8rem;
    justify-content: flex-end;
  }

  .nav ul {
    display: flex;
    font-size: 1.7rem;
    gap: 4.8rem;
    list-style-type: none;
    padding: 0;
  }

  .nav ul li a {
    color: var(--grey-400);
    font-weight: 600;
    text-decoration: none;
  }

  .toggle {
    background: var(--blue-400);
    border-radius: 1.5rem;
    display: flex;
    overflow: hidden;
  }

  .toggle-item {
    background: var(--blue-400);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.6rem 0.8rem;
    text-align: center;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    &.selected {
      background: var(--cyan-400);
    }
  }
</style>
