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
- Use no animations during the structural/content-building phase.
- Retain the original website's full-sized café image concept on the homepage, using the renovated interior photo.
- Use a left-side site header on desktop to echo the original website and distinguish the bakery; convert it to a conventional compact top header on tablet and mobile.

## Settled decisions

- Primary visitor action: Request a cake or special order.
- Secondary actions: Call the bakery, visit/get directions, browse the menu, order online.
- Visual personality: Classic/authentic French, Neighborhood, Professional, Fresh.
- Design direction: Authentic French bakery with chef-driven craft and warm neighborhood café presence.
- Color palette: renovated-interior blue `#0060a5` leads large surfaces and primary actions; existing orange `#ff8b2e`, white `#ffffff`, and red `#98250c` remain supporting brand tones. Use deep blue, cream, pale blue, slate, and ink variations for accessible contrast; avoid heavy blacks.
- Selected typography: Fraunces 600/700 for headings and Source Sans 3 400/600/700 for body copy, navigation, and controls. Considered alternatives were Cormorant Garamond + Source Sans 3 for a more traditional tone, and Libre Baskerville + Work Sans for a quieter, familiar tone; only the selected pair is loaded in production.
- Initial launch: No forms; use static contact and order links only.
- Hosting: Cloudflare free tier; analytics and search console integration are deferred.

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
- Approved positioning language includes “a little`slice`of France right here in Colorado.”

## Initial build sequence

1. Set the visual direction and primary call to action, with a homepage-first responsive foundation.
2. Build the shared design system, header, footer, and responsive layout.
3. Recreate the homepage using existing content and images.
4. Recreate all existing product, information, and seasonal pages.
5. Add page titles, descriptions, canonical URLs, social metadata, structured data, sitemap, and `robots.txt`.
6. Test accessibility, performance, responsive behavior, links, and the production build.
7. Review the complete recreation and decide what should be rewritten, moved, combined, added, or removed.

## Current repository status

- The project builds as a static Astro site.
- Nineteen routes are present.
- Shared layout, header, footer, SEO head, product-card, and product-grid components exist.
- The shared header now uses a desktop left rail and a tablet/mobile top disclosure menu; the footer uses responsive four-, two-, and one-column layouts.
- The homepage uses the renovated café photo as a large, full-width visual while the surrounding layout remains intentionally skeletal.
- Reusable components now cover page introductions, section headings, button-style links, responsive hero images, navigation lists, menu-category links, and shared visit information.
- Business contact, address, hours, directions, and ordering data are centralized in `src/data/business.ts`; navigation data remains in `src/data/navigation.ts`.
- Page-specific copy remains in each route so content can be edited without tracing it through a generalized content abstraction.
- The typed product collection contains 149 offerings pulled from the live legacy site on 2026-07-17: 103 published menu entries with prices and 46 additional named offerings identified only through gallery labels.
- Product records retain a source URL and source type. Descriptions, images, prices, sizes, and availability are optional so missing legacy information is not invented.
- Published prices are a migration snapshot and must be confirmed with the client before launch. Gallery-only entries do not assert a price or current availability.
- A large image library from the existing WordPress site is available in the repository.
- Most pages are currently content skeletons and still need the legacy content and images recreated.

## Documentation workflow

- Codex updates this file when scope, direction, or implementation status changes.
- Questions requiring the user or client are kept in `docs/DECISIONS.md`.
- Once a decision is answered, Codex removes it from `docs/DECISIONS.md` and records the result here.
