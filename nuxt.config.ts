// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/i18n'],

  css: ['~/assets/main.css'],

  runtimeConfig: {

  i18n: {
    defaultLocale: 'de',
    langDir: 'locales/',
    locales: [
      {
        code: 'de',
        file: 'de.yaml'
      },
      {
        code: 'en',
        file: 'en.yaml'
      },
    ]
  } 
}})