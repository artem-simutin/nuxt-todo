import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {},
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "nuxt-svgo",
    "@nuxtjs/color-mode",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      "Source Sans 3": [300, 500, 700],
    },
  },
  fontMetrics: {
    fonts: ["Source Sans 3"],
  },
  colorMode: {
    classSuffix: "",
  },
});
