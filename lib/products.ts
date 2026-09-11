export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "terra-vase",
    name: "Terra Vase",
    price: 1890,
    category: "Decor",
    description:
      "A sculptural handcrafted vase with an earthy finish, designed to bring quiet character to your space.",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "linen-throw",
    name: "Linen Throw",
    price: 3290,
    category: "Textiles",
    description:
      "Soft natural linen with a relaxed texture. Made for slow mornings and quiet evenings.",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "dune-candle",
    name: "Dune Candle",
    price: 1290,
    category: "Rituals",
    description:
      "A warm, softly scented candle inspired by sun-warmed earth and peaceful interiors.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "earth-tray",
    name: "Earth Tray",
    price: 1590,
    category: "Decor",
    description:
      "A simple tactile tray for jewellery, keys, candles and everyday objects.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "clay-mug",
    name: "Clay Mug",
    price: 990,
    category: "Kitchen",
    description:
      "A beautifully imperfect ceramic mug made for your everyday tea and coffee rituals.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "sage-bowl",
    name: "Sage Bowl",
    price: 1390,
    category: "Kitchen",
    description:
      "A handmade bowl with an organic silhouette and soft sage glaze.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85"
  }
];
