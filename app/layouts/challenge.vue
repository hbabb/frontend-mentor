<script setup lang="ts">
import { projects } from "~/lib/projects";

const route = useRoute();
const last = route.path.split("/").filter(Boolean).pop() ?? "";
const project = projects.find(p =>
  p.liveUrl === route.path || p.liveUrl.replace(/^\//, "") === last,
);
useSeoMeta({
  robots: "index, follow",
  title: project?.title ?? "Frontend Mentor Challenge",
  description: project?.description ?? "Frontend Mentor Challenge",
  ogTitle: project?.title ?? "Frontend Mentor Challenge",
  ogDescription: project?.description ?? "Frontend Mentor Challenge",
  twitterCard: "summary_large_image",
  twitterTitle: project?.title ?? "Frontend Mentor Challenge",
  twitterDescription: project?.description ?? "Frontend Mentor Challenge",
  author: "Heath Babb | TechSolvd",
});
</script>

<template>
  <div class="layout">
    <AppNavBar />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
