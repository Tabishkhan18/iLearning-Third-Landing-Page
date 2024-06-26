import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/iLearning-Third-Landing-Page/",
  plugins: [react()],
})
