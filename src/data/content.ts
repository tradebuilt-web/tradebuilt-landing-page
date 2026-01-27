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
    email: `luke@sineworks.io`,
    address: {
      street: `910 N Buena Vis Ave`,
      city: `Farmington`,
      state: `NM`,
      zip: `87401`,
    },
  },

  pages: [
    {
      title: "Home",
      url: "/",
      hero: "You serve your customers! We bring them to you.",
      subHero: "Contact us today.",
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
        "100% free website design and domain ownership",
        "$45/month or $1.50 per day total cost for everything",
        "6-month starter agreement",
        "Strategically engineered websites designed to increase phone, text, and email traffic",
        "Unlimited minor edits",
        "SEO optimization to help your business get found on ChatGPT and Google",
        "Own your own domain — even if you cancel",
      ],
    },
    {
      title: "Gallery",
      url: "/gallery",
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
  text_dark: "235 235 235",
  content_bg: "10 10 10",
};
