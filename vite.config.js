/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' keeps dist/ deployable from any path (GitHub Pages project site, subfolder, file://)
export default defineConfig({
  plugins: [vue()],
  base: './',
  test: {
    environment: 'jsdom',
  },
})
