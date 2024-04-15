/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      thresholds: {
        // functions: 100, // This shows an error message
        'components/AsAsync.vue': {
          functions: 100 // This does not show an error message
        }
      }
    }
  },
})
