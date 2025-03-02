// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/fonts/inter.css"],
  modules: ['radix-vue/nuxt', "nuxt-swiper"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: `https://listening-honors-jazz-army.trycloudflare.com`
    }
  }
});