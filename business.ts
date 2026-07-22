export const business = {
  name: "La Baguette de Normandy",
  siteUrl: "https://labaguettedenormandy.com",
  description:
    "A French bakery, patisserie, and cafe serving artisan breads, pastries, cakes, breakfast, and lunch in Parker, Colorado.",
  phoneDisplay: "303‑805‑9130",
  phoneInternational: "+1-303-805-9130",
  phoneHref: "tel:+13038059130",
  emailDisplay: "orders@labaguettedenormandy.com",
  emailHref: "mailto:orders@labaguettedenormandy.com",
  hiringEmailDisplay: "hiring@labaguettedenormandy.com",
  hiringEmailHref: "mailto:hiring@labaguettedenormandy.com",
  phoneOrderNote: "Please call before 1:00 PM for bakery orders.",
  address: [
    "16524 Keystone Blvd, Unit C",
    "Parker, CO 80134",
  ],
  addressDetails: {
    streetAddress: "16524 Keystone Blvd, Unit C",
    addressLocality: "Parker",
    addressRegion: "CO",
    postalCode: "80134",
    addressCountry: "US",
  },
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=16524+Keystone+Boulevard+Unit+C+Parker+CO+80134",
  mapEmbedUrl:
    "https://www.google.com/maps?q=La+Baguette+de+Normandy,+16524+Keystone+Boulevard+Unit+C,+Parker,+CO+80134&output=embed",
  orderUrl: "https://la-baguette-de-normandy.cloveronline.com/menu/all",
  facebookUrl:
    "https://www.facebook.com/pages/La-Baguette-De-Normandy/116008458427726",
  hours: [
    "Tuesday–Friday: 6:30 AM–4:00 PM",
    "Saturday: 6:30 AM–3:00 PM",
    "Sunday–Monday: Closed",
  ],
  schedule: [
    {
      shortLabel: "Tue–Fri",
      display: "6:30 AM–4:00 PM",
      schemaDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "16:00",
    },
    {
      shortLabel: "Saturday",
      display: "6:30 AM–3:00 PM",
      schemaDays: ["Saturday"],
      opens: "06:30",
      closes: "15:00",
    },
    {
      shortLabel: "Sun–Mon",
      display: "Closed",
    },
  ],
} as const;
