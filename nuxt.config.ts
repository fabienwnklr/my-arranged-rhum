// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://127.0.1:1337/',
    },
  },
});
