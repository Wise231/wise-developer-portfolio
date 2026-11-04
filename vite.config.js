import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a GitHub Pages project URL, change base to '/REPOSITORY-NAME/'.
// For a custom domain or username.github.io root site, keep '/'.
export default defineConfig({ plugins: [react()], base: '/' })
