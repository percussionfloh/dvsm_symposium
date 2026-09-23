import { createResolver } from "nuxt/kit"

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@nuxt/ui', '@nuxtjs/leaflet', '@nuxtjs/i18n', '@nuxt/icon'],

  css: ['~/assets/main.css'],

  i18n: {
    defaultLocale: 'de',
    langDir: 'locales/',
    },
    
    app: {
    baseURL: '/'
    },
    icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: resolve('./app/assets/my-icons'),
      },
    ]
  }
})

