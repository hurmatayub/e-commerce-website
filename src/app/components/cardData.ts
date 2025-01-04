export interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  imgDescription: string;
  rating: number;
  stock: string;
  price: {
    new: number;
    old: number;
  };
  colors: string[];
  actions: {
    addToCart: boolean;
    buyNow: boolean;
    liked: boolean;
  };
}

export const cardData: Product[] = [
  {
    id: 1,
    title: "Watering Can",
    description:
      "A ceramic watering can is a stylish and functional tool for watering plants. Made from durable ceramic, it features a smooth, polished surface and is available in various colors and designs. Its long, narrow spout allows for precise watering, and the ergonomic handle ensures comfort during use. While heavier than plastic, ceramic watering cans add a touch of charm to gardens or home decor. They are ideal for those seeking both aesthetic appeal and practicality in their gardening tools.",
    img: "/top1.jpg",
    imgDescription:
      "A beautifully crafted ceramic watering can for your indoor plants.",
    rating: 4.8,
    stock: "In stock",
    price: { new: 25, old: 30 },
    colors: ["Pink", "White", "Black"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: false,
    },
  },
  {
    id: 2,
    title: "Kitchen Ware",
    description:
      "Ceramic kitchenware includes beautifully crafted items like bowls, plates, and mugs made from durable ceramic material. Known for their smooth texture and heat retention, they are perfect for both cooking and serving. Ceramic kitchenware is available in various designs and colors, offering a blend of style and functionality in the kitchen. It’s ideal for those seeking elegant, long-lasting cookware and tableware.",
    img: "/top2.jpg",
    imgDescription:
      "Handmade ceramic kitchen ware, perfect for adding rustic charm to your cooking.",
    rating: 4.5,
    stock: "Limited stock",
    price: { new: 40, old: 50 },
    colors: ["Blue", "Black", "Green"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: true,
    },
  },
  {
    id: 3,
    title: "Oval Floral Tray",
    description:
      "A ceramic oval floral tiny tray is a delicately crafted piece with an elegant oval shape, adorned with a beautiful floral design. Made from durable ceramic it is perfect for serving small snacks, holding jewelry, or displaying decorative items. Its compact size makes it a versatile addition to any home, blending both functionality and aesthetic charm.",
    img: "/top3.jpg",
    imgDescription:
      "An elegant ceramic tray with a delicate floral design for serving or decoration",
    rating: 4.7,
    stock: "In stock",
    price: { new: 35, old: 50 },
    colors: ["Pink", "Blue", "Black"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: false,
    },
  },
  {
    id: 4,
    title: "Flower Pots",
    description:
      "A ceramic flower pot is a stylish and durable container designed to hold and display plants. Made from high-quality ceramic, it offers a smooth, polished finish that complements any décor. Ideal for indoor or outdoor use, this flower pot provides excellent drainage, helping plants thrive. Its timeless design adds an elegant touch to any space.",
    img: "/top4.jpg",
    imgDescription:
      "A stylish ceramic flower pot to enhance your indoor or outdoor garden.",

    rating: 4.6,
    stock: "Out of stock",
    price: { new: 30, old: 40 },
    colors: ["Blue", "Red", "Green"],
    actions: {
      addToCart: false,
      buyNow: false,
      liked: true,
    },
  },
  {
    id: 5,
    title: "Cup Saucer Set",
    description:
      "A ceramic cup and saucer set is a refined and functional addition to any dining collection. Made from durable ceramic, the set features a smooth, glossy finish, perfect for enjoying tea, coffee, or other beverages. The cup sits neatly on the matching saucer, which catches drips and adds an elegant touch to your table setting. Available in various colors and designs, this set is both practical and stylish.",
    img: "/top5.jpg",
    imgDescription:
      " A modern ceramic cup and saucer set designed for your favorite beverages.",

    rating: 4.9,
    stock: "In stock",
    price: { new: 15, old: 20 },
    colors: ["Gray", "Beige", "Yellow"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: false,
    },
  },
  {
    id: 6,
    title: "Floral Vase",
    description:
      "A floral vase is a decorative container designed to hold flowers, adding a touch of elegance and charm to any space. Crafted from high-quality materials like ceramic or glass, it features intricate floral patterns or a simple, sleek design. Perfect for both fresh and artificial blooms, a floral vase enhances the beauty of any room, making it an ideal centerpiece for tables, mantels, or entryways. Its versatile design complements a variety of interior styles, from modern to traditional.",
    img: "/top6.jpg",
    imgDescription:
      " A beautifully crafted floral vase to display your favorite flowers.",

    rating: 4.7,
    stock: "Limited stock",
    price: { new: 28, old: 35 },
    colors: ["Natural Wood", "White", "Pink"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: false,
    },
  },
  {
    id: 7,
    title: "Bowls",
    description:
      "Ceramic bowls are versatile, durable, and beautifully crafted pieces ideal for both everyday use and special occasions. Made from high-quality ceramic, these bowls come in various shapes and sizes, often featuring smooth finishes or decorative patterns. They are perfect for serving soups, salads, desserts, or snacks. With their timeless design, ceramic bowls add a touch of elegance to any dining setting, while also being microwave and dishwasher safe for convenience. Their sturdy construction ensures long-lasting use, making them a practical yet stylish addition to your kitchenware collection.",
    img: "/top7.jpg",
    imgDescription:
      "Classic ceramic bowls that add a touch of elegance to any meal.",

    rating: 4.6,
    stock: "In stock",
    price: { new: 45, old: 55 },
    colors: ["White", "Blue"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: true,
    },
  },
  {
    id: 8,
    title: "Pastel Plates",
    description:
      "A ceramic pastel plate features soft, gentle colors like light pink, blue, or mint green, making it a perfect addition to any table setting for a serene and elegant look. These plates are made from high-quality ceramic, offering durability and a smooth, glossy finish. Ideal for serving a variety of dishes, they add a touch of charm to both casual meals and more formal dining occasions. Their light pastel hues can complement any décor style, creating a fresh and inviting atmosphere at the dining table.",
    img: "/top8.jpg",
    imgDescription:
      "Softly colored ceramic plates that bring a fresh vibe to your table setting.",
    rating: 4.5,
    stock: "In stock",
    price: { new: 20, old: 25 },
    colors: ["Puple", "Pink", "Blue"],
    actions: {
      addToCart: true,
      buyNow: true,
      liked: false,
    },
  },
];
