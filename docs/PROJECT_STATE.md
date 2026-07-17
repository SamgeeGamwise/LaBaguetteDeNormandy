# Project State

Last updated: 2026-07-17

This file is maintained by Codex. It records settled project context so the user-facing decision list contains only unanswered questions.

## Goal

Recreate La Baguette de Normandy's current website in Astro with a visual and SEO lift. The first complete version will retain the current content and structure. Larger content and structural changes will be considered after that version can be reviewed as a whole.

## Current direction

- Use Astro with static generation.
- Keep all existing pages and routes during the initial recreation.
- Carry over the existing copy and bakery information 1:1 for now.
- Reuse the existing image library.
- Do not require detailed product knowledge before beginning the recreation.
- Do not invent new product, ingredient, allergen, price, or availability claims.
- Create a new visual presentation rather than copying the old design.
- Improve visual hierarchy, responsive behavior, accessibility, performance, and technical SEO.
- Delay restructuring, consolidation, new pages, and redirects until the initial recreation is substantially complete.
- Use Paris Baguette as a reference for product presentation, seasonal features, and clear ordering actions—not as a design template.
- Focus the first visible refresh on the homepage with hero messaging, clear category signposts, and tablet/mobile responsive spacing.
- Keep the current visual layer intentionally skeletal: prioritize text, placeholders, layout boxes, responsive flow, and working links before adding decorative color, imagery, or motion.
- Use only restrained interface motion during the structural/content-building phase, such as short link and button hover transitions; respect reduced-motion preferences and defer decorative animation.
- Retain the original website's full-sized café image concept on the homepage, using the renovated interior photo.
- Use a left-side site header on desktop to echo the original website and distinguish the bakery; convert it to a conventional compact top header on tablet and mobile.

## Settled decisions

- Primary visitor action: Request a cake or special order.
- Secondary actions: Call the bakery, visit/get directions, browse the menu, order online.
- Primary header navigation: Menu, About, Location & Hours, and Contact. Cakes remains a menu category rather than a standalone primary-navigation item.
- Visual personality: Classic/authentic French, Neighborhood, Professional, Fresh.
- Design direction: Authentic French bakery with chef-driven craft and warm neighborhood café presence.
- Color palette: renovated-interior blue `#0060a5` leads large surfaces and primary actions; existing orange `#ff8b2e`, white `#ffffff`, and red `#98250c` remain supporting brand tones. Use deep blue, cream, pale blue, slate, and ink variations for accessible contrast; avoid heavy blacks.
- Future visual motif: use the renovated café's white-and-near-black checkerboard pattern as a recognizable supporting brand element, with blue and orange reserved as pop colors. Apply the pattern selectively to dividers, small backgrounds, image framing, or other accents rather than behind long-form text or across every surface.
- Selected typography: Fraunces 600/700 for headings and Source Sans 3 400/600/700 for body copy, navigation, and controls. Considered alternatives were Cormorant Garamond + Source Sans 3 for a more traditional tone, and Libre Baskerville + Work Sans for a quieter, familiar tone; only the selected pair is loaded in production.
- Link treatment: avoid default persistent underlines and hover fills. Use weight, quick text-color changes, clear active markers, and keyboard focus outlines to distinguish interactive text. Navigation text remains stationary and uses a reserved gutter so active markers never overlap labels; motion is reserved for button feedback outside the navigation.
- Initial launch: No forms; use static contact and order links only.
- Hosting: Cloudflare free tier; analytics and search console integration are deferred.
- Deployment target: Git-connected Cloudflare Workers Builds using the `main` branch, `npm run build`, and `npm run deploy`. Wrangler uploads the generated `dist` directory as static assets. The project does not require the Cloudflare Astro adapter, a Worker script, or runtime secrets.

## Existing site scope

The current Astro project includes these routes, all of which remain in scope:

- `/`
- `/about-us/`
- `/breads/`
- `/breakfast/`
- `/buche-de-noel/`
- `/cakes/`
- `/christmas-goodies/`
- `/contact-us/`
- `/crepes/`
- `/employment/`
- `/galettes-des-rois/`
- `/graduation/`
- `/location/`
- `/menu/`
- `/pastry/`
- `/petits-fours/`
- `/savory/`
- `/tarts/`
- `/viennoiseries/`

## Known business information

These values come from the existing site and project data. They can be used for the initial recreation and confirmed before launch.

- Business: La Baguette de Normandy
- Address: 16524 Keystone Blvd, Unit C, Parker, CO 80134
- Phone: 303-805-9130
- Email: `orders@labaguettedenormandy.com`
- Order-call guidance: Please call before 1:00 PM for bakery orders.
- Hours:
  - Tuesday–Friday: 6:30 AM–4:00 PM
  - Saturday: 6:30 AM–3:00 PM
  - Sunday–Monday: Closed
- Online ordering: `https://la-baguette-de-normandy.cloveronline.com/`

## Approved bakery context

The following claims are supported by legacy website copy and the bakery's Google Business Profile and may be used during initial content filling:

- Chef Michael Dupont has been a certified master baker, chef, and chocolatier for 25 years.
- The bakery uses traditional French artisan methods and presents itself as an authentic French bakery and café.
- Its stated selection includes artisan breads, baguettes, loaves, croissants, pastries, macarons, cookies, handmade chocolates, and large party-sized or custom cakes.
- Breakfast and lunch offerings include sandwiches, quiche, croissants, and other savory café items.
- The bakery serves coffee and supports dine-in visits, takeout, online ordering, and custom cakes for birthdays and special events.
- Approved positioning language includes “a little slice of France right here in Colorado.”

## Initial build sequence

1. Set the visual direction and primary call to action, with a homepage-first responsive foundation.
2. Build the shared design system, header, footer, and responsive layout.
3. Recreate the homepage using existing content and images.
4. Recreate all existing product, information, and seasonal pages.
5. Add page titles, descriptions, canonical URLs, social metadata, structured data, sitemap, and `robots.txt`.
6. Test accessibility, performance, responsive behavior, links, and the production build.
7. Review the complete recreation and decide what should be rewritten, moved, combined, added, or removed.

## Demo readiness

The project is close to a client-demo stage, but it is not launch-complete. The
shared visual system, responsive navigation, footer, homepage direction,
business-information pages, menu structure, product data, and product imagery
are all present. The demo is suitable for reviewing overall direction,
responsive flow, navigation, catalog presentation, and content priorities.

Before treating the site as production-ready, complete the client decisions in
`docs/DECISIONS.md`, verify imported prices and business details, finish the
remaining skeletal information-page content, review seasonal availability
language, and perform a final browser/accessibility/link check on the deployed
domain.

## Current repository status

- The project builds as a static Astro site.
- Lightweight Cloudflare preparation includes an explicit static Astro target, a pinned Node 22 build version, a small `wrangler.jsonc`, `robots.txt`, and a generated top-level `404.html`. The Wrangler asset configuration preserves Astro's trailing-slash routes and serves the custom 404 page for missing assets.
- Browser identity assets are derived from the approved square logo and include multi-size ICO/PNG favicons, an Apple touch icon, 192px and 512px manifest icons, theme colors, and `site.webmanifest`; the original Astro starter favicon was removed.
- Twenty routes are present, including the custom 404 page.
- Shared base and catalog layouts reduce repeated route markup. Reusable components cover the site head, brand logo, header menu, footer, product cards and grids, filtered product listings, page introductions, section headings, calls to action, hero imagery, navigation lists, category links, and visit information.
- The shared header now uses a desktop left rail and a tablet/mobile top disclosure menu; the footer uses responsive four-, two-, and one-column layouts.
- The homepage uses the renovated café photo as a large, full-width visual while the surrounding layout remains intentionally skeletal.
- The shared header uses the horizontal `public/logo.webp` artwork on tablet/mobile and switches to `public/logo_square.webp` in the desktop left rail. The footer uses the square artwork.
- Product category values, menu labels, and routes are centralized in `src/data/productCategories.ts` and shared by content validation, navigation, and the main menu page.
- Business phone, order email, address, hours, directions, and ordering guidance are centralized in `src/data/business.ts`; navigation data remains in `src/data/navigation.ts`. The full contact set is shown on the contact page, with email also surfaced in shared visit and footer content.
- Page-specific copy remains in each route so content can be edited without tracing it through a generalized content abstraction.
- The typed product collection contains 149 offerings pulled from the live legacy site on 2026-07-17: 103 published menu entries with prices and 46 additional named offerings identified only through gallery labels.
- Product listings are rendered from that collection on the main `/menu/` landing page, the ten core menu/category routes, and the two holiday routes. The main menu groups products by category beneath its category jump links. Cards use consistent responsive columns, a fixed 4:3 image area with uncropped fit-within images, a standardized product-name area, and bottom-aligned price/size details; missing fields retain their layout space without displaying invented content.
- All 141 product records that previously referenced a legacy-site image now use verified local files under `public/images/products/`; the remaining 8 records intentionally display an image placeholder.
- Product records retain a source URL and source type. Descriptions, images, prices, sizes, and availability are optional so missing legacy information is not invented.
- Published prices are a migration snapshot and must be confirmed with the client before launch. Gallery-only entries do not assert a price or current availability.
- Curated product images are organized under `public/images/products/`, and reusable non-product photography is under `public/images/site/`. Image classification notes and the renaming map are under `docs/image-inventory/`; the untouched source capture is preserved outside the runtime source tree under `archive/legacy-site/`.
- Any directory named `website-images/` is intentionally ignored as a local intake folder. Images become tracked only after they are reviewed and moved into an appropriate `public/images/` location.
- Information pages and some landing-page sections remain content skeletons and still need legacy content and images recreated.
- Page-title convention: the homepage leads with the business name; inner pages lead with the specific page topic and end with the business name so the unique subject is visible first in tabs and search results.

## Recommended next phase

1. Deploy and review the `workers.dev` demo on desktop, tablet, and mobile.
2. Resolve the launch and catalog questions in `docs/DECISIONS.md` with the client.
3. Replace remaining placeholder or skeletal copy without changing the settled structure.
4. Confirm prices, availability, contact details, and ordering behavior.
5. Connect the production domain only after the demo content has been approved.

## Documentation workflow

- Codex updates this file when scope, direction, or implementation status changes.
- Questions requiring the user or client are kept in `docs/DECISIONS.md`.
- Once a decision is answered, Codex removes it from `docs/DECISIONS.md` and records the result here.
