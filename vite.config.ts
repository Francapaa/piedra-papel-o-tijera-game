import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Permite conexiones desde cualquier IP
    hmr: {
      port: 3000,
    },
  },
  // Solo usar el base de GitHub Pages en producción
  base: process.env.NODE_ENV === 'production' 
    ? 'https://Francapaa.github.io/piedra-papel-o-tijera-game/' 
    : '/',
});