import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages deployment note:
// - If deploying to a user/org page (repo named <username>.github.io), base = '/'
// - If deploying to a project page (repo named anything else), set base = '/your-repo-name/'
// This project targets https://noahfoe.github.io/ so base stays '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
