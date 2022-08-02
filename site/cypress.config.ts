import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'oowx7s',
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
