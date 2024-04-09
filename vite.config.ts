/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.test.ts'],
  },
})
