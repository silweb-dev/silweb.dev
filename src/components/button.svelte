<button type="submit" class="button">
  <slot />
</button>

<style lang="scss">
  @use "../styles/mixins.scss" as *;

  .button {
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    color: var(--white);
    cursor: pointer;
    padding: 1.2rem;
    transition: 0.3s ease;

    &:hover {
      background: var(--cyan-400);
    }
  }
</style>
