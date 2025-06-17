// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

	css: ['~/assets/css/tailwind.css'],
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  app: {
    head: {
      script: [
        {
          src: "https://widget.gourmets.ovh/",
          'data-api-key': "demo_restaurant_123",
          'data-backend-url': "https://gourmets.ovh/api"
        }
      ]
    }
  }
})