import "./app/lib/env";

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
});
