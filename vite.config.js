import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` matches the GitHub Pages project path: https://tarun-gudapati.github.io/HR-SITE-SKAPS/
export default defineConfig({ plugins: [react()], base: '/HR-SITE-SKAPS/' })
