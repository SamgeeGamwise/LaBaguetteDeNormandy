# Website image organization

Images were organized using the route slugs from the supplied website navigation. Filenames are lowercase, ASCII, kebab-case, and stripped of WordPress hashes and processing suffixes.

Curated product assets are stored in `public/images/products/`. Reusable non-product
photos are stored in `public/images/site/`. The untouched source capture is preserved
under `archive/legacy-site/`, while `image-renaming-map.csv` remains here as the
mapping record.

## Summary

- Original image files: 278
- Canonical categorized images: 253 (including the canonical logo at `public/logo.webp`)
- Duplicate alternates preserved: 25
- Unclassified images requiring review: 0

## Category counts

- `about-us/`: 1
- `breads/`: 30
- `breakfast/`: 20
- `cakes/`: 42
- `crepes/`: 15
- `graduation/`: 7
- `location/`: 1
- `menu/`: 1
- `pastries/`: 27
- `petits-fours/`: 22
- `savory/`: 21
- `tarts/`: 29
- `viennoiseries/`: 37

## Classification notes

- `buches/` and `buchette-de-noel/` were mapped to `cakes/`.
- `cookies/` was mapped to `petits-fours/` as the closest current site category.
- `lunch/` was mapped to `savory/`.
- The mixed `daily-choice/` gallery was split across the current product categories by product name and visual review.
- The bakery logo is stored at `public/logo.webp`; interior and general menu photos are stored under `public/images/site/`.
- No source images specifically matched `contact-us/` or `employment/`, so those folders were not created.
- Alternate duplicate copies are preserved in `_duplicates/`; the CSV records the canonical target for each one.
