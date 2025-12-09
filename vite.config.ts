import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import prerender from "@prerenderer/rollup-plugin";

const baseUrl = "https://yarkivaev.github.io/accounting-center";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "УЦ Свободный Сокол — Бухгалтерия, Лаборатория, Юридические услуги в Липецке",
    description: "Комплексное сопровождение бизнеса: бухгалтерские услуги для ИП и ООО, заводская лаборатория и юридическая поддержка в Липецке",
  },
  "/accounting": {
    title: "Бухгалтерские услуги для ИП и ООО — УЦ Свободный Сокол",
    description: "Бухгалтерское сопровождение бизнеса в Липецке: регистрация ИП и ООО, ведение учёта, налоговая отчётность, кадровый учёт",
  },
  "/laboratory": {
    title: "Центральная заводская лаборатория — УЦ Свободный Сокол",
    description: "Лабораторные испытания в Липецке: химический анализ металлов, механические испытания, контроль воды, неразрушающий контроль материалов",
  },
  "/legal": {
    title: "Юридические услуги для бизнеса — УЦ Свободный Сокол",
    description: "Юридическое сопровождение бизнеса в Липецке: корпоративное право, договорная работа, судебное представительство, сопровождение сделок",
  },
  "/about": {
    title: "О компании — УЦ Свободный Сокол",
    description: "УЦ Свободный Сокол — надежный партнёр для бизнеса в Липецке. История компании, наша команда и сертификаты качества",
  },
  "/contacts": {
    title: "Контакты — УЦ Свободный Сокол",
    description: "Контактная информация УЦ Свободный Сокол: адрес в Липецке, телефон, email, режим работы и реквизиты компании",
  },
};

export default defineConfig({
  base: "/accounting-center/",
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: Object.keys(pageMeta),
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 3000,
        headless: true,
      },
      postProcess(renderedRoute) {
        let html = renderedRoute.html.replace(/http:\/\/localhost:\d+/g, "");
        const meta = pageMeta[renderedRoute.route];
        const pageUrl =
          renderedRoute.route === "/"
            ? `${baseUrl}/`
            : `${baseUrl}${renderedRoute.route}`;
        if (meta) {
          html = html.replace(
            /<title>[^<]*<\/title>/,
            `<title>${meta.title}</title>`
          );
          html = html.replace(
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${meta.description}">`
          );
          html = html.replace(
            /<meta property="og:url" content="[^"]*">/,
            `<meta property="og:url" content="${pageUrl}">`
          );
          html = html.replace(
            /<link rel="canonical" href="[^"]*">/,
            `<link rel="canonical" href="${pageUrl}">`
          );
        }
        renderedRoute.html = html;
        return renderedRoute;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
