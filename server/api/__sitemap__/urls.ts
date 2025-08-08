// server/api/__sitemap__/urls.ts
import type { SitemapUrl } from "#sitemap/types";

import { defineSitemapEventHandler } from "#imports";

import { projects } from "~/lib/projects";

export default defineSitemapEventHandler(() => {
  const staticPages: SitemapUrl[] = [
    {
      loc: "/",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1,
    },
  ];

  const challengePages: SitemapUrl[] = projects.map(p => ({
    loc: p.liveUrl,
    lastmod: p.lastmod,
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  return [...staticPages, ...challengePages];
});
