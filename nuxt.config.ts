export default defineNuxtConfig({
  app: {
    head: {
      title: "Hackathon 2024",
    },
  },

  modules: [
    "@formkit/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-headlessui",
    "unplugin-icons/nuxt",
    "@nuxt/image",
  ],
  css: ["@/assets/scss/main.scss"],

  tailwindcss: {
    cssPath: "@/assets/scss/main.scss",
    viewer: false,
  },
  /**
   * Nuxt Lodash config
   * @see https://nuxt.com/modules/lodash
   */
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },

  /**
   * Nuxt Headless UI config
   * @see https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: "Headless",
  },

  devtools: {
    enabled: true,
  },

  formkit: {
    autoImport: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
