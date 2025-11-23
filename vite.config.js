import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Maria-s-Mission-2026/' // مهم للنشر على GitHub Pages
});
