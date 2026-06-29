import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Railway asigna RAILWAY_PUBLIC_DOMAIN automáticamente al hacer deploy
const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : 'https://mundo-shop.up.railway.app'; // ← Cambiá esto cuando tengas tu dominio

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Home: máxima prioridad
        if (item.url === 'https://tumundshop.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        }
        // Productos: prioridad alta
        if (item.url.includes('/productos/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
