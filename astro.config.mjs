import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://labaguettedenormandy.com",
  output: "static",
  integrations: [sitemap()],
  redirects: {
    "/about-us": "/#bakery",
    "/viennoiseries": "/menu/#viennoiseries",
    "/breads": "/menu/#breads",
    "/pastry": "/menu/#pastries",
    "/cakes": "/menu/#cakes",
    "/savory": "/menu/#savory",
    "/tarts": "/menu/#tarts",
    "/breakfast": "/menu/#breakfast-lunch",
    "/crepes": "/menu/#crepes",
    "/petits-fours": "/menu/#petits-fours",
    "/graduation": "/menu/#graduation",
    "/buche-de-noel": "/menu/#seasonal",
    "/christmas-goodies": "/menu/#seasonal",
    "/contact-us-2": "/#visit",
    "/contact-us": "/#visit",
    "/location": "/#visit",
  },
});
