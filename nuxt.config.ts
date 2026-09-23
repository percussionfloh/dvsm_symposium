// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@nuxt/ui', '@nuxtjs/leaflet', '@nuxtjs/i18n', '@nuxt/scripts'],

  css: ['~/assets/main.css'],

  i18n: {
    defaultLocale: 'de',
    langDir: 'locales/',

    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.yaml'
      },
      {
        code: 'de-easy',
        name: 'Einfache Sprache',
        file: 'de-easy.yaml'
      }]
    },
  
    app: {
    baseURL: '/'
  }
})

