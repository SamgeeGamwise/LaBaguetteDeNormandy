import { parse } from "yaml";
import catalogYaml from "../../products.yaml?raw";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image?: string;
  alt?: string;
  priceCents?: number;
  sizeText?: string;
  description?: string;
  searchTerms?: string[];
  sortOrder: number;
  sourceUrl: string;
  sourceType: "published-menu" | "gallery-label";
};

const parsedCatalog: unknown = parse(catalogYaml);

if (!Array.isArray(parsedCatalog)) {
  throw new TypeError("products.yaml must contain a top-level product list.");
}

export const products = (parsedCatalog as Product[]).sort(
  (first, second) => first.sortOrder - second.sortOrder,
);

export const productsById = new Map(products.map((product) => [product.id, product]));

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(priceCents?: number) {
  return typeof priceCents === "number"
    ? currencyFormatter.format(priceCents / 100)
    : "Call for pricing";
}

export function getProductCardImage(product: Product) {
  if (!product.image) return undefined;

  return product.image
    .replace("/images/products/", "/images/product-cards/")
    .replace(/\.(?:jpe?g|png|webp)$/i, ".webp");
}
