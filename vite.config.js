// See https://vitejs.dev/config/ for official Vite configuration documentation
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-allican/'  // <-- your repo name
})
