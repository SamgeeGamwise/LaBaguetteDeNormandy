# La Baguette de Normandy

Astro site for La Baguette de Normandy, a French bakery and café in Parker,
Colorado.

## Development

Install dependencies with `npm install`, then use:

| Command | Purpose |
| --- | --- |
| `npm run dev -- --background` | Start the Astro development server in the background |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run sync` | Refresh Astro content types |

Manage the background server with `astro dev status`, `astro dev logs`, and
`astro dev stop`.

## Project structure

- `src/pages/` contains route-level copy and related links.
- `src/layouts/` contains the shared site and catalog page shells.
- `src/components/` contains reusable interface components.
- `src/data/` contains business, navigation, category, and product data.
- `public/images/products/` contains curated catalog images.
- `public/images/site/` contains reusable non-product photography.
- `docs/` contains project state, open decisions, and image-mapping notes.
- `archive/legacy-site/` preserves the original website capture and is not used at runtime.

Review `docs/PROJECT_STATE.md` and `docs/DECISIONS.md` before making project changes.
