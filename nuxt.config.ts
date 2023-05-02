// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
      // apiBase: "https://api.talafoz.com/api"
    },
  },

  modules: ["@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vue-toastification"],
  },
});
