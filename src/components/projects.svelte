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
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
  }

  .project-details {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
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
    left: 0.8rem;
    margin: 0 auto;
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    width: calc(100% - 5.4rem);
  }

  .preview-frame {
    aspect-ratio: 16/9;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .project-title {
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  .project-type {
    color: var(--cyan-400);
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .project-description {
    color: var(--white);
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2.4rem;
    max-width: 40rem;
  }

  .project-techniques {
    column-gap: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2.4rem;
    margin-top: 1.8rem;
    max-width: 40rem;
    row-gap: 1.8rem;
  }

  .project-technique {
    align-items: center;
    color: var(--white);
    display: flex;
    gap: 1.2rem;
  }

  .project-button {
    background: var(--blue-300);
    border-radius: 0.4rem;
    color: var(--white);
    display: flex;
    gap: 0.8rem;
    margin-top: 1.2rem;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      background: var(--cyan-400);
    }
  }

  @media (max-width: 768px) {
    .project {
      grid-template-columns: 1fr;
    }

    .project-preview {
      margin: 2.4rem 0;
    }

    .preview-image {
      border-radius: 0.4rem;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
    }

    .preview-frame {
      display: none;
    }

    .project-techniques {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
