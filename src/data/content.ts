export type Page = {
  title: string;
  url: string;
  hero?: string;
  subHero?: string;
  aboutContent?: string;
  servicesContent?: string[];
};

export const content = {
  company: {
    name: `TradeBuilt Web`,
    phone: `(505) 482-0999`,
    email: `contact@alpineoasisrentals.com`,
    address: {
      street: ``,
      city: `Farmington`,
      state: `NM`,
      zip: ``,
    },
  },

  pages: [
    {
      title: "Home",
      url: "/",
      hero: "You serve your customers! We bring them to you.",
      subHero: "Fill out our Contact Form. Be online tomorrow.",
    },
    {
      title: "About",
      url: "/about",
      aboutContent: `TradeBuilt Web builds simple, effective websites 
      for the folks who keep our towns running — contractors, restaurant owners, 
      hair stylists, and more. We focus on clarity, speed, and tap‑to‑call design so 
      your phone rings more.`,
    },
    {
      title: "Services",
      url: "/services",
      servicesContent: [
        "$30/month or $1.00 per day total cost for everything",
        "6-month starter agreement",
        "Strategically engineered websites designed to increase phone, text, and email traffic",
        "SEO optimization to help your business get found on ChatGPT and Google",
      ],
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Client Form",
      url: "/client-form",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

export const colors = {
  header: "16 22 42",
  button: "16 22 42",
  button_hover: "22 180 106",
  text_light: "235 235 235",
  text_dark: "25 25 25",
  content_bg: "10 10 10",
  accents: "137 207 240",
};
