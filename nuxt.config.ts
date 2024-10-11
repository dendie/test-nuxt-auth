// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    yup: 'yup',
  },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxt/ui'],
  buildModules: ['@nuxt/typescript-build'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // router: {
  //   middleware: 'auth' // Use the auth middleware globally
  // },
  build: {
    transpile: ['yup', 'zod'],
  },
  compatibilityDate: '2024-10-09',
  optimizeDeps: {
    noDiscovery: true,
    include: ['yup']
  },
})