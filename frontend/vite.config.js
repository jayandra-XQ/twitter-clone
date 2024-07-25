import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // change the port to 3000 from 5173
  server: {
    port:3000,
  }
})
