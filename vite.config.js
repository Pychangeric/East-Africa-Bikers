import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Specify your custom configurations here:
  // root: 'src',
  // base: '/my-app/',
  // publicDir: 'public',
  // server: {
  //   port: 3000,
  // },
  // build: {
  //   outDir: 'dist',
  // },
})
