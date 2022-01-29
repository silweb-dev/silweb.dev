<script lang="ts">
  export let name: string;
  export let color = "var(--white)";
  export let size = 2.4;

  const styles = {
    "background-color": color,
    "mask-image": `url(/icons/${name}.svg)`,
    height: `${size}rem`,
    width: `${size}rem`,
  };

  const cssStyles = Object.entries(styles)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
</script>

<i class="icon" style={cssStyles} />

<style>
  .icon {
    display: block;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100%;
  }
</style>
