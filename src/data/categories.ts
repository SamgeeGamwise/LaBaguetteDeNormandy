export type CategoryDefinition = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
};

export const categoryDefinitions: CategoryDefinition[] = [
  {
    slug: "viennoiseries",
    label: "Viennoiseries",
    shortLabel: "Viennoiseries",
    description: "Croissants, danishes, brioche, and other beautifully laminated morning pastries.",
  },
  {
    slug: "breads",
    label: "Breads",
    shortLabel: "Breads",
    description: "Baguettes, miches, brioche, sourdough, and specialty loaves for the table.",
  },
  {
    slug: "pastries",
    label: "Pastries",
    shortLabel: "Pastries",
    description: "French classics, delicate individual cakes, choux pastry, and chocolate creations.",
  },
  {
    slug: "cakes",
    label: "Cakes",
    shortLabel: "Cakes",
    description: "Elegant cakes for gathering, gifting, celebrating, or simply making a day special.",
  },
  {
    slug: "savory",
    label: "Savory",
    shortLabel: "Savory",
    description: "Quiches, croques, filled croissants, and fougasse for breakfast or lunch.",
  },
  {
    slug: "tarts",
    label: "Tarts",
    shortLabel: "Tarts",
    description: "Fruit, chocolate, almond, and creme brulee tarts made for sharing.",
  },
  {
    slug: "breakfast-lunch",
    label: "Breakfast & Lunch",
    shortLabel: "Breakfast & Lunch",
    description: "Cafe plates, sandwiches, salads, and warm favorites served throughout the day.",
  },
  {
    slug: "crepes",
    label: "Crepes",
    shortLabel: "Crepes",
    description: "Sweet and savory crepes, from fruit-filled classics to hearty cafe plates.",
  },
  {
    slug: "petits-fours",
    label: "Petits Fours",
    shortLabel: "Petits Fours",
    description: "Small-format sweet and savory bites for parties, meetings, and special tables.",
  },
  {
    slug: "graduation",
    label: "Celebration Cakes",
    shortLabel: "Celebrations",
    description: "Decorated French cakes that put something memorable at the center of the table.",
  },
  {
    slug: "seasonal",
    label: "Seasonal Favorites",
    shortLabel: "Seasonal",
    description: "Holiday bûches, cookies, and limited creations that return with the seasons.",
  },
];
