// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@nuxt/ui', '@nuxtjs/leaflet', '@nuxtjs/i18n'],

  css: ['~/assets/main.css'],

  
    app: {
    baseURL: '/',
    
    head: {
    htmlAttrs: {
        lang: 'de'
      }
    }
  }

})

