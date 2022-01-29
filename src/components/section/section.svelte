<script lang="ts">
  export let subtitle: string;
  export let title: string;
  export let align: "left" | "center" | "right" = "left";
</script>

<section class="section">
  <div
    class="inner"
    class:left={align === "left"}
    class:center={align === "center"}
    class:right={align === "right"}
  >
    <div class="header">
      <h4 class="subtitle">{subtitle}</h4>
      <h3 class="title">{title}</h3>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</section>

<style lang="scss">
  .section {
    background-color: var(--blue-400);
    height: 80rem;
    width: 100%;
  }

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: var(--content-width);
    padding: 0 1.2rem;

    &.left {
      justify-content: flex-start;
      text-align: left;
    }

    &.center {
      justify-content: center;
      text-align: center;
    }

    &.right {
      justify-content: flex-end;
      text-align: right;
    }
  }

  .header {
    padding-top: 10rem;
  }

  .subtitle {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    text-transform: uppercase;
  }

  .title {
    color: var(--white);
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-top: 0;
    max-width: 30rem;
  }
</style>
