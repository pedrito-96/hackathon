import Components from "unplugin-vue-components/vite";
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers";

import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Hackathon 2024",
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ["icons"],
          }),
          HeadlessUiResolver(),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader(
            fileURLToPath(new URL("./icons/", import.meta.url)),
            (svg) => {
              const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg);
              if (!viewBox) return svg;
              const w = viewBox?.[1];
              const h = viewBox?.[2];
              svg = svg.replace(/width=".*?"/, `width="${w}" `);
              svg = svg.replace(/height=".*?"/, `height="${h}" `);
              return svg;
            }
          ),
        },
      }),
    ],
  },
  modules: [
    "@formkit/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-headlessui",
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
