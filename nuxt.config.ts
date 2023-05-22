// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxt/devtools'
  ],
  app: {
    head: {
      style: [
        { children: '* { margin: 0; padding: 0;}' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    }
  }
})
