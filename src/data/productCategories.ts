export const productCategoryValues = [
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
] as const;

export type ProductCategory = (typeof productCategoryValues)[number];

export const menuProductSections = [
  { category: "viennoiseries", label: "Viennoiseries", href: "/viennoiseries/" },
  { category: "savory", label: "Savory", href: "/savory/" },
  { category: "breads", label: "Breads", href: "/breads/" },
  { category: "pastries", label: "Pastries", href: "/pastry/" },
  { category: "cakes", label: "Cakes", href: "/cakes/" },
  { category: "tarts", label: "Tarts", href: "/tarts/" },
  { category: "breakfast-lunch", label: "Breakfast", href: "/breakfast/" },
  { category: "crepes", label: "Crepes", href: "/crepes/" },
  { category: "petits-fours", label: "Petits Fours", href: "/petits-fours/" },
  { category: "graduation", label: "Graduation", href: "/graduation/" },
] as const satisfies readonly {
  category: ProductCategory;
  label: string;
  href: string;
}[];
