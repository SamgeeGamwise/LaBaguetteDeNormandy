# La Baguette de Normandy

An Astro-powered MVP for the Parker, Colorado French bakery. The site is fully static and includes:

- A responsive homepage centered on the refreshed cafe interior
- A crawlable menu generated from `products.yaml`
- Lightweight, framework-free menu search
- Local business metadata, canonical URLs, sitemap, and robots output
- Open Graph and X/Twitter sharing metadata with an absolute social image
- WebSite, WebPage, Bakery/Cafe, menu, and chef structured data

Use Node.js 22.12 or newer (Node 24 is pinned in `.node-version`).

## Local development

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## Verification and production build

```sh
npm run check
npm run build
npm run preview
```

The static production output is written to `dist/`.

Astro also emits portable, instant HTML redirects for the former site routes listed in
`astro.config.mjs`. Once the deployment host is selected, configure the same mappings as
HTTP 301 or 308 redirects at the platform/server level for the strongest migration signal.

The production domain is set with Astro's `site` option in `astro.config.mjs`. Keep it in
sync if the canonical domain changes; canonical links, social URLs, structured data,
robots.txt, and the generated sitemap all depend on it.

## Updating content

- Business contact details, hours, and external links live in `business.ts`.
- Product names, categories, and prices live in `products.yaml`.
- Category labels and descriptions live in `src/data/categories.ts`.
- Optimized product cards are served from `public/images/product-cards/`.
- Full-size source product photography is retained in `source-assets/products/` and is not copied into the production build.

The original Bucker HTML download remains in the repository as a reference only; the live application does not load its Bootstrap, jQuery, CSS, or JavaScript.
