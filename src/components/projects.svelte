<script lang="ts">
  import { formatNumber } from "../utils/format";
  import { Project } from "../models/project";
  import i18next from "../utils/i18next";
  import Icon from "./icon.svelte";
  import Section from "./section.svelte";

  export let projects: Project[];

  let tick = 0;
  setInterval(() => {
    tick += 1;
    if (tick >= 100) next();
  }, 100);

  let currentIndex = 0;
  $: currentProject = projects[currentIndex];

  function previous() {
    if (currentIndex <= 0) {
      currentIndex = projects.length - 1;
    } else {
      currentIndex -= 1;
    }
    tick = 0;
  }

  function next() {
    if (currentIndex >= projects.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    tick = 0;
  }
</script>

<Section
  id="projects"
  subtitle={i18next.t("projects.subtitle")}
  title={i18next.t("projects.title")}
>
  <div class="controls">
    <button class="control-button" on:click={previous}>
      <Icon name="arrow-left" size={2} />
    </button>
    <div class="progress">
      <span class="progress-current">{formatNumber(currentIndex + 1, 2)}</span>
      <span class="progress-separator">/</span>
      <span class="progress-total">{formatNumber(projects.length, 2)}</span>
    </div>
    <button class="control-button" on:click={next}>
      <Icon name="arrow-right" size={2} />
      <div class="time-indicator" style={`width: ${tick}%`} />
    </button>
  </div>
  <div class="project">
    <div class="project-details">
      <span class="project-title">{currentProject.title}</span>
      <span class="project-type">{currentProject.type}</span>
      <p class="project-description">{currentProject.description}</p>
      <div class="project-techniques">
        {#each currentProject.techniques as technique}
          <div class="project-technique">
            <Icon name={technique} />
            {i18next.t(`techniques.${technique}`)}
          </div>
        {/each}
      </div>
      {#if currentProject.url}
        <a href={currentProject.url} target="_blank" class="project-button">
          <Icon name="eye" size={1.8} />
          {i18next.t("projects.seeProject")}
        </a>
      {/if}
    </div>
    <div class="project-preview">
      <div class="preview">
        <div
          style={`background-image: url(/previews/${currentProject.preview})`}
          class="preview-image"
        />
        <img
          src="/drawings/laptop-frame.svg"
          alt="Laptop frame"
          class="preview-frame"
        />
      </div>
    </div>
  </div>
</Section>

<style lang="scss">
  @use "../styles/mixins.scss" as *;

  .controls {
    align-items: center;
    display: flex;
    margin-bottom: 4.8rem;
  }

  .control-button {
    align-items: center;
    background: var(--blue-300);
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    display: flex;
    height: 4rem;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease;
    width: 4rem;

    &:hover {
      background: var(--cyan-400);
    }
  }

  .time-indicator {
    background: var(--cyan-400);
    bottom: 0;
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }

  .progress {
    color: var(--white);
    display: flex;
    font-size: 2rem;
    justify-content: center;
    width: 10rem;
  }

  .progress-total {
    opacity: 0.8;
  }

  .project {
    display: grid;
    gap: 2.4rem;
    grid-template-areas:
      "details"
      "preview";
    grid-template-columns: 1fr;

    @include respond-to-tablet {
      grid-template-areas: "details preview";
      grid-template-columns: 1fr 1fr;
    }
  }

  .project-details {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-area: details;
  }

  .project-preview {
    grid-area: preview;
    margin: 1.2rem 0;

    @include respond-to-tablet {
      margin: 0;
    }
  }

  .preview {
    aspect-ratio: 16/9;
    position: relative;
    width: 100%;
  }

  .preview-image {
    aspect-ratio: 16/9;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.4rem;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;

    @include respond-to-tablet {
      left: 0;
      right: 0;
      top: 1rem;
      width: 88%;
    }
  }

  .preview-frame {
    aspect-ratio: 16/9;
    display: none;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    @include respond-to-tablet {
      display: block;
    }
  }

  .project-title {
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;

    @include respond-to-tablet {
      font-size: 3rem;
    }
  }

  .project-type {
    color: var(--cyan-400);
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;

    @include respond-to-tablet {
      font-size: 1.8rem;
    }
  }

  .project-description {
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
    max-width: 40rem;

    @include respond-to-tablet {
      font-size: 1.7rem;
    }
  }

  .project-techniques {
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2.4rem;
    margin-top: 1.8rem;
    max-width: 40rem;
    row-gap: 1.8rem;

    @include respond-to-tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .project-technique {
    align-items: center;
    color: var(--white);
    display: flex;
    font-size: 1.6rem;
    gap: 1.2rem;

    @include respond-to-tablet {
      font-size: 1.7rem;
    }
  }

  .project-button {
    align-items: center;
    background: var(--blue-300);
    border-radius: 0.4rem;
    color: var(--white);
    display: flex;
    font-size: 1.5rem;
    gap: 0.8rem;
    line-height: 2.4rem;
    margin-top: 1.2rem;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    transition: 0.3s ease;

    @include respond-to-tablet {
      font-size: 1.6rem;
    }

    &:hover {
      background: var(--cyan-400);
    }
  }
</style>
