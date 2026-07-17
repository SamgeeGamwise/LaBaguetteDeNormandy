import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: file("src/data/products.yaml"),

  schema: z.object({
    id: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),

    name: z.string().min(1),
    category: z.enum([
      "viennoiseries",
      "breads",
      "pastries",
      "cakes",
      "tarts",
      "savory",
      "breakfast-lunch",
      "crepes",
      "petits-fours",
      "graduation",
      "seasonal",
    ]),

    description: z.string().min(1).optional(),

    image: z.string().optional(),
    alt: z.string().min(1).optional(),

    priceCents: z.number().int().nonnegative().optional(),
    priceText: z.string().optional(),
    sizeText: z.string().optional(),

    available: z.boolean().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().default(0),
    sourceUrl: z.string().url(),
    sourceType: z.enum(["published-menu", "gallery-label"]),
  }),
});

export const collections = { products };
