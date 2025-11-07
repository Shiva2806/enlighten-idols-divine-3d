import ganeshaImage from "@/assets/ganesha-idol.jpg";
import lakshmiImage from "@/assets/lakshmi-idol.jpg";
import shivaImage from "@/assets/shiva-idol.jpg";
import krishnaImage from "@/assets/krishna-idol.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  material: string;
  dimensions: string;
  detailedDescription: string;
  tags?: string[];
  rating: number;
  stock: number;
  createdAt: string;
}

export const products: Product[] = [
  {
    id: "ganesha-1",
    name: "Divine Ganesha",
    image: ganeshaImage,
    price: 2999,
    description: "Intricately crafted Ganesha idol with golden finish",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "12cm x 8cm x 15cm",
    detailedDescription:
      "Our Divine Ganesha idol is a masterpiece of artistry combined with traditional craftsmanship. Each detail, from the delicate lotus petals to the intricate jewelry, is precisely rendered to bring the essence of Lord Ganesha into your sacred space. The golden metallic finish adds a divine touch that catches light beautifully.",
    tags: ["ganesha", "idol", "divine", "gold"],
    rating: 4.8,
    stock: 15,
    createdAt: "2024-01-15"
  },
  {
    id: "lakshmi-1",
    name: "Goddess Lakshmi",
    image: lakshmiImage,
    price: 3499,
    description: "Elegant Lakshmi idol adorned with lotus flowers",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "10cm x 8cm x 18cm",
    detailedDescription:
      "The Goddess Lakshmi idol represents prosperity and abundance. Seated gracefully on a lotus throne, this exquisite piece features intricate details in the goddess's ornaments, clothing folds, and the surrounding lotus flowers. The divine gold finish symbolizes wealth and prosperity, making it perfect for your home temple or office.",
    tags: ["lakshmi", "goddess", "prosperity", "lotus"],
    rating: 4.9,
    stock: 12,
    createdAt: "2024-01-20"
  },
  {
    id: "shiva-1",
    name: "Lord Shiva Meditating",
    image: shivaImage,
    price: 3299,
    description: "Serene Shiva idol in deep meditation with sacred symbols",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "11cm x 9cm x 16cm",
    detailedDescription:
      "This meditation pose Shiva idol captures the essence of divine peace and cosmic power. Every detail from the third eye, crescent moon, sacred trident, to the serpent coiled around his neck is rendered with exceptional precision. The golden finish emanates an aura of divine energy, perfect for meditation spaces.",
    tags: ["shiva", "meditation", "divine", "peace"],
    rating: 4.7,
    stock: 10,
    createdAt: "2024-02-01"
  },
  {
    id: "krishna-1",
    name: "Krishna with Flute",
    image: krishnaImage,
    price: 2899,
    description: "Enchanting Krishna idol playing the divine flute",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "9cm x 7cm x 17cm",
    detailedDescription:
      "Our Krishna idol captures the divine playfulness and enchanting beauty of Lord Krishna. The peacock feather crown, intricate jewelry, and the iconic flute are all crafted with meticulous attention to detail. This piece radiates joy and divine love, bringing the spirit of Vrindavan into your home.",
    tags: ["krishna", "flute", "divine", "love"],
    rating: 4.9,
    stock: 18,
    createdAt: "2024-02-10"
  },
  {
    id: "ganesha-2",
    name: "Ganesha on Lotus",
    image: ganeshaImage,
    price: 3199,
    description: "Majestic Ganesha seated on sacred lotus pedestal",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "13cm x 10cm x 16cm",
    detailedDescription:
      "This premium Ganesha idol features the elephant-headed deity seated majestically on a blooming lotus. The intricate lotus petals, detailed trunk, and ornate crown make this a statement piece for any sacred space. Perfect for bringing blessings of wisdom and prosperity.",
    tags: ["ganesha", "lotus", "premium", "wisdom"],
    rating: 4.8,
    stock: 8,
    createdAt: "2024-02-15"
  },
  {
    id: "lakshmi-2",
    name: "Standing Lakshmi",
    image: lakshmiImage,
    price: 2799,
    description: "Standing Lakshmi idol in blessing posture",
    category: "Idols",
    material: "Premium PLA+ with Gold Coating",
    dimensions: "10cm x 6cm x 19cm",
    detailedDescription:
      "The Standing Lakshmi idol depicts the goddess in her benevolent form, bestowing blessings of wealth and prosperity. The flowing garments, intricate jewelry, and divine expression are captured with exceptional detail, making it an ideal addition to your worship space.",
    tags: ["lakshmi", "blessing", "wealth", "classic"],
    rating: 4.6,
    stock: 20,
    createdAt: "2024-01-25"
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
};

export const getCategories = (): string[] => {
  const categories = products.map((product) => product.category);
  return ["All", ...Array.from(new Set(categories))];
};
