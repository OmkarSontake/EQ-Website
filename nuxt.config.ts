// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/inter.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "v-wave/nuxt"]
})