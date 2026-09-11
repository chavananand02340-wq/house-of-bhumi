export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "personalized-name-pouch",
    name: "Personalized Name Pouch",
    price: 299,
    category: "Personalized Gifts",
    description:
      "A stylish personalized pouch with your name printed beautifully. Perfect for birthdays, bridesmaids, return gifts and everyday gifting.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85",
    badge: "BESTSELLER"
  },
  {
    slug: "custom-name-bottle",
    name: "Custom Name Bottle",
    price: 499,
    category: "Personalized Gifts",
    description:
      "Make everyday moments personal with a premium reusable bottle customized with a name of your choice.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85",
    badge: "POPULAR"
  },
  {
    slug: "personalized-keychain",
    name: "Personalized Keychain",
    price: 199,
    category: "Personalized Gifts",
    description:
      "A thoughtful little gift customized specially for someone special. Ideal for return gifts and bulk orders.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "corporate-gift-box",
    name: "Corporate Gift Box",
    price: 999,
    category: "Corporate Gifting",
    description:
      "A thoughtfully curated gifting box for employees, clients, partners and corporate events.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85",
    badge: "CORPORATE"
  },
  {
    slug: "premium-desk-kit",
    name: "Premium Desk Kit",
    price: 799,
    category: "Corporate Gifting",
    description:
      "A practical and elegant desk gifting set designed for professional occasions and employee gifting.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "custom-event-favors",
    name: "Custom Event Favors",
    price: 249,
    category: "Event Gifting",
    description:
      "Personalized gifting favors made for weddings, birthdays, baby showers, corporate events and celebrations.",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=85",
    badge: "BULK FRIENDLY"
  }
];

export const categories = [
  {
    name: "Personalized Gifts",
    description: "Made specially for them",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Corporate Gifting",
    description: "Thoughtful gifts for business",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Event Gifting",
    description: "Celebrate every occasion",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1000&q=85"
  }
];
