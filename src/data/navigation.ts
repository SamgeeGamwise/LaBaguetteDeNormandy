import { menuProductSections } from "./productCategories";

export const primaryNavigation = [
  { label: "Menu", href: "/menu/" },
  { label: "About", href: "/about-us/" },
  { label: "Location & Hours", href: "/location/" },
  { label: "Contact", href: "/contact-us/" },
] as const;

export const menuNavigation = menuProductSections.map(({ label, href }) => ({
  label,
  href,
}));

export const informationNavigation = [
  { label: "About", href: "/about-us/" },
  { label: "Location & Hours", href: "/location/" },
  { label: "Contact", href: "/contact-us/" },
  { label: "Employment", href: "/employment/" },
] as const;
