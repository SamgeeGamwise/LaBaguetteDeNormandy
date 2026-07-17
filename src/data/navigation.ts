export const primaryNavigation = [
  { label: "Menu", href: "/menu/" },
  { label: "Cakes", href: "/cakes/" },
  { label: "About", href: "/about-us/" },
  { label: "Location & Hours", href: "/location/" },
  { label: "Contact", href: "/contact-us-2/" },
] as const;

export const menuNavigation = [
  { label: "Viennoiseries", href: "/viennoiseries/" },
  { label: "Savory", href: "/savory/" },
  { label: "Breads", href: "/breads/" },
  { label: "Pastries", href: "/pastry/" },
  { label: "Cakes", href: "/cakes/" },
  { label: "Tarts", href: "/tarts/" },
  { label: "Breakfast", href: "/breakfast/" },
  { label: "Crepes", href: "/crepes/" },
  { label: "Petits Fours", href: "/petits-fours/" },
  { label: "Graduation", href: "/graduation/" },
] as const;


export const informationNavigation = [
  { label: "About", href: "/about-us/" },
  { label: "Location & Hours", href: "/location/" },
  { label: "Contact", href: "/contact-us-2/" },
  { label: "Employment", href: "/employment/" },
] as const;

export const business = {
  name: "La Baguette de Normandy",
  phoneDisplay: "303-805-9130",
  phoneHref: "tel:+13038059130",

  address: [
    "16524 Keystone Blvd, Unit C",
    "Parker, CO 80134",
  ],

  orderUrl:
    "https://la-baguette-de-normandy.cloveronline.com/",

  hours: [
    "Tuesday–Friday: 6:30 AM–4:00 PM",
    "Saturday: 6:30 AM–3:00 PM",
    "Sunday–Monday: Closed",
  ],
} as const;