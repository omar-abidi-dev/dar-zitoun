import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dar-zitoun-chi.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
