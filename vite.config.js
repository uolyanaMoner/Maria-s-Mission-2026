// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/Maria-s-Mission-2026/' // مهم للنشر على GitHub Pages
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Maria-s-Mission-2026/' ,// مهم للنشر على GitHub Pages
  build: {
    outDir: 'dist', // المجلد النهائي بعد build
  },
})
