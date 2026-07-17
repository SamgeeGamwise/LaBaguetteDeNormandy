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
      "breakfast-lunch",
      "crepes",
      "seasonal",
    ]),

    description: z.string().min(20),

    image: z.string(),
    alt: z.string().min(5),

    priceCents: z.number().int().nonnegative().optional(),
    priceText: z.string().optional(),

    available: z.boolean().default(true),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().default(0),
  }),
});

export const collections = { products };