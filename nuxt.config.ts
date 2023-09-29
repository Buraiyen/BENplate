// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'one-dark-pro',
      },
    },
  },
});
