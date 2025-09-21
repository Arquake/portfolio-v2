import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,   // avoid random port switching
    watch: {
      usePolling: true, // required for Docker volume mounts
    },
    hmr: {
      clientPort: 3000, // the port exposed on host (left side of "3000:5173")
    },
  },
})
