<script lang="ts">
  import Icon from "components/atoms/icon.svelte";
</script>

<div class="footer">
  <span class="text">
    Built with Astro <Icon name="astro" /> &bullet;
    <a href="https://github.com/silweb-dev/silweb.dev" target="_blank"
      >View on GitHub</a
    >
  </span>
</div>

<style lang="scss">
  @use "../../styles/mixins.scss" as *;

  .footer {
    background: var(--blue-500);
    color: var(--white);
    padding: 2.4rem;
    text-align: center;
  }

  .text {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
  }
</style>
