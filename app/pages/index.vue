<script setup lang="ts">
import { projects } from "~/lib/projects";
</script>

<template>
  <div class="container">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1 class="container__title">
      Frontend Mentor Projects
    </h1>
    <div class="projects">
      <div
        v-for="project in projects"
        :key="project.challengeNumber"
        class="card"
      >
        <img
          :src="project.previewImage"
          :alt="project.title"
          class="card__img"
        >
        <div class="card__text">
          <h3 class="card__text__title">
            {{ project.title }}
          </h3>
          <p class="card__text__subtitle">
            Challenge - {{ project.challengeNumber }}
          </p>
          <p class="card__text__description">
            {{ project.description }}
          </p>
        </div>
        <div class="card__buttons">
          <NuxtLink
            :to="project.liveUrl"
            class="btn"
          >
            Live Demo
          </NuxtLink>
          <a
            :href="project.githubUrl"
            target="_blank"
            class="btn github"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 2rem 1rem;

  &__title {
    text-align: center;
    margin-bottom: 3rem;
    font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: 2rem;
    font-size: clamp(2rem, 1.823943661971831rem + 0.7511737089201878vw, 2.5rem);
    line-height: 110%;
    letter-spacing: 0;
    font-feature-settings:
      "liga" off,
      "clig" off;
  }

  .projects {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    .card {
      background: lightgray;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      &__img {
        width: 100%;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
      }

      &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__title {
          font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
          font-size: 1.25rem;
        }

        &__subtitle {
          font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
          color: hsl(0, 0%, 40%);
          font-size: 0.875rem;
        }

        &__description {
          font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
          color: #333;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
      }

      &__buttons {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          padding: 0.75rem 1rem;

          /* Typography */
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          font-family: "Red Hat Display", Arial, Helvetica, sans-serif;

          /* Visual */
          background-color: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;

          /* Effects */
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);

          /* Transitions */
          transition: all 0.2s ease;

          /* Interaction */
          cursor: pointer;
          user-select: none;

          &:hover {
            background-color: #7e828a;
            border-color: #9ca3af;
            color: whitesmoke;
            transform: translateY(-1px);
            box-shadow:
              0 4px 8px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          &:active {
            transform: translateY(0);
            box-shadow:
              0 1px 2px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(0, 0, 0, 0.1);
          }

          &:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
        }

        /* GitHub button variant */
        .github {
          background-color: #24292e;
          color: white;
          border-color: #24292e;

          &:hover {
            background-color: #939ca5;
            border-color: #1b1f23;
          }
        }
      }
    }

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 80rem) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 90rem) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 120rem) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
