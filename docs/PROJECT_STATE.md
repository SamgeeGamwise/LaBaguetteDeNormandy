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

## Existing site scope

The current Astro project includes these routes, all of which remain in scope:

- `/`
- `/about-us/`
- `/breads/`
- `/breakfast/`
- `/buche-de-noel/`
- `/cakes/`
- `/christmas-goodies/`
- `/contact-us-2/`
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

## Initial build sequence

1. Set the visual direction and primary call to action.
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
- A typed product collection exists, but only two products are currently entered in structured YAML data.
- A large image library from the existing WordPress site is available in the repository.
- Most pages are currently content skeletons and still need the legacy content and images recreated.

## Documentation workflow

- Codex updates this file when scope, direction, or implementation status changes.
- Questions requiring the user or client are kept in `docs/DECISIONS.md`.
- Once a decision is answered, Codex removes it from `docs/DECISIONS.md` and records the result here.

