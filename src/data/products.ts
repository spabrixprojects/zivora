import productRing from "@/assets/product-ring.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";
import productRing2 from "@/assets/product-ring2.jpg";
import productEarrings2 from "@/assets/product-earrings2.jpg";
import productNecklace2 from "@/assets/product-necklace2.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "rings" | "earrings" | "necklaces" | "bracelets";
  image: string;
  description: string;
  material: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aurelia Band",
    price: 500,
    category: "rings",
    image: productRing,
    description: "A timeless gold band with a smooth, polished finish. Designed for everyday elegance.",
    material: "18K Gold Vermeil",
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Luna Hoops",
    price: 1500,
    category: "earrings",
    image: productEarrings,
    description: "Classic hoop earrings with a delicate profile. Light enough for all-day wear.",
    material: "14K Gold Fill",
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Soleil Pendant",
    price: 2500,
    category: "necklaces",
    image: productNecklace,
    description: "A refined pendant necklace featuring a teardrop stone on a delicate chain.",
    material: "18K Gold Vermeil, Freshwater Pearl",
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Muse Chain Bracelet",
    price: 400,
    category: "bracelets",
    image: productBracelet,
    description: "A bold curb chain bracelet that elevates any look. Substantial yet refined.",
    material: "18K Gold Vermeil",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Celeste Stacking Set",
    price: 300,
    category: "rings",
    image: productRing2,
    description: "A curated set of stacking rings with pavé details. Mix, match, and layer.",
    material: "18K Gold Vermeil, CZ Stones",
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Aria Drop Earrings",
    price: 1800,
    category: "earrings",
    image: productEarrings2,
    description: "Geometric drop earrings with architectural lines. A modern statement piece.",
    material: "14K Gold Fill",
  },
  {
    id: "7",
    name: "Lumière Layered Necklace",
    price: 2800,
    category: "necklaces",
    image: productNecklace2,
    description: "Three delicate chains layered to perfection. Effortless elegance in one piece.",
    material: "18K Gold Vermeil",
    isBestSeller: true,
  },
];
