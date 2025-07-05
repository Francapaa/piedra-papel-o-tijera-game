import { Server } from 'http';
import {defineConfig} from 'vite'; 

export default defineConfig({
  build:{
    outDir: 'dist',
  },
  server:{
    port: 3000,
    open: true
  },
  base: 'https://Francapaa.github.io/piedra-papel-o-tijera-game'
},
)