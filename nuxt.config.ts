// import env from "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "nuxt-security",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "@vee-validate/nuxt",
  ],

  veeValidate: {
    autoImports: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  colorMode: {
    dataValue: "theme",
  },

  site: {
    url: "https://frontend-mentor-pied-six.vercel.app",
    name: "Frontend Mentor Projects",
    description: "Frontend Mentor challenges built with Nuxt by Heath Babb.",
    defaultLocale: "en",
    author: "Heath Babb | TechSolvd",
  },

  sitemap: {
    enabled: true,
    siteUrl: "https://frontend-mentor-pied-six.vercel.app",
    sources: ["/api/__sitemap__/urls"],
    autoLastmod: true,
    sortEntries: true,
    xsl: true,
    trailingSlash: false,
  },

  robots: {
    enabled: true,
    sitemap: "https://frontend-mentor-pied-six.vercel.app/sitemap.xml",
    allow: ["/"],
    disallow: ["/secret"],
    robotsEnabledValue: "index, follow",
  },

  schemaOrg: {
    host: "https://frontend-mentor-pied-six.vercel.app",
    canonicalHost: "https://frontend-mentor-pied-six.vercel.app",
  },

  linkChecker: {
    enabled: true,
    external: true,
    failOnError: false,
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: "ogImageTemplate",
    },
  },
});
