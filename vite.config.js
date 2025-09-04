// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nguyenlieu68Ads/',   // <- BẮT BUỘC cho GitHub Pages kiểu project
})
