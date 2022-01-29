<script lang="ts">
  import i18next from "../../utils/i18next";
  import Icon from "../icon/icon.svelte";
</script>

<section class="section">
  <div class="inner">
    <div class="greeting">
      <h2 class="title">{@html i18next.t("intro.title")}</h2>
      <h3 class="description">
        <span>{@html i18next.t("intro.description.line1")}</span>
        <span>{@html i18next.t("intro.description.line2")}</span>
      </h3>
    </div>
  </div>
  <div class="bottom">
    <button class="show-work">
      <Icon name="chevron-down" size={3} />
      {i18next.t("intro.showWork")}
    </button>
  </div>
</section>

<style>
  .section {
    animation: gradient 15s ease infinite;
    background: linear-gradient(-45deg, #0b132b, var(--blue-400));
    background-size: 400% 400%;
    height: 80rem;
    max-height: 90vh;
    position: relative;
    width: 100%;
  }

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: var(--content-width);
    padding: 10rem 1.2rem 0 1.2rem;
  }

  .greeting {
    margin-bottom: 15rem;
  }

  .title {
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 4.5rem;
    font-weight: 700;
  }

  .title :global(strong) {
    color: var(--cyan-400);
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .description span {
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.4rem;
  }

  .description span :global(strong) {
    color: var(--cyan-400);
  }

  .bottom {
    bottom: 0;
    padding: 1.8rem 0;
    position: absolute;
    margin: 0 auto;
    max-width: var(--content-width);
    left: 0;
    right: 0;
  }

  .show-work {
    align-items: center;
    background: transparent;
    border: none;
    color: var(--white);
    cursor: pointer;
    display: flex;
    font-family: var(--font-secondary);
    font-size: 1.6rem;
    font-weight: 600;
    gap: 0.8rem;
    opacity: 0.8;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
