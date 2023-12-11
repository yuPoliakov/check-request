// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Check Request',
      meta: [
        {name: 'Check Request', content: 'Check your REST API request'}
      ],
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    }
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  gtag: {
    id: process.env.GTAG
  }
})
