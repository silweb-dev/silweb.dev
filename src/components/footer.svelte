<script lang="ts">
  import Icon from "../components/icon.svelte";
</script>

<div class="footer">
  <span class="text">
    Built with Astro <Icon name="astro" />
  </span>
</div>

<style lang="scss">
  @use "../styles/mixins.scss" as *;

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
