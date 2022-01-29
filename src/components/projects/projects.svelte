<script lang="ts">
  import { Project } from "../../models/project";
  import i18next from "../../utils/i18next";
  import Section from "../section/section.svelte";

  export let projects: Project[];
</script>

<Section
  subtitle={i18next.t("projects.subtitle")}
  title={i18next.t("projects.title")}
>
  {#each projects as project}
    <div class="project">{project.title}</div>
  {/each}
</Section>

<style lang="scss">
</style>
