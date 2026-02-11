export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryBadge: string;
  price: number;
  mrp: number;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  quickFeatures: { icon: string; text: string }[];
  sizes: string[];
  inStock: boolean;
  images: string[];
  fabricComposition: string;
  careInstructions: string[];
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: "we-tuck",
    name: "WE-CORE",
    slug: "we-core",
    category: "tummy-control",
    categoryBadge: "WE-CORE",
    price: 899,
    mrp: 1499,
    shortDescription: "Tucker Tummy - Advanced abdominal compression for instant shaping",
    fullDescription: "The WE-CORE is specifically designed to provide targeted abdominal compression, giving you a flatter midsection instantly. Perfect for wearing under formal shirts and casual outfits alike.",
    features: [
      "Targeted abdominal compression for instant shaping",
      "Anti-roll waistband that stays in place all day",
      "Sweat-wicking fabric keeps you dry and cool",
      "Seamless construction for invisible wear under any outfit",
      "8+ hour comfort guaranteed",
      "Improves posture with gentle back support",
    ],
    quickFeatures: [
      { icon: "Target", text: "Targeted abdominal compression" },
      { icon: "Shield", text: "Anti-roll waistband" },
      { icon: "Droplets", text: "Sweat-wicking fabric" },
      { icon: "Clock", text: "8+ hour comfort" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/images/products/we-tuck-2.png",
      "/images/products/we-tuck-3.png",
      "/images/products/we-tuck-1.png",
    ],
    fabricComposition: "80% Nylon, 20% Spandex — Breathable, lightweight, and durable",
    careInstructions: ["Hand wash or machine wash cold", "Do not bleach", "Tumble dry low", "Do not iron directly on fabric"],
    rating: 4.5,
    reviewCount: 142,
  },
  {
    id: "we-sweat",
    name: "WE-SWEAT",
    slug: "we-sweat",
    category: "sweat-control",
    categoryBadge: "WE-SWEAT",
    price: 999,
    mrp: 1699,
    shortDescription: "Sweatabsorbeer - Stay dry and fresh with advanced moisture-wicking technology",
    fullDescription: "The WE-SWEAT is our performance moisture-management layer, designed to handle intense heat and humidity while keeping your outerwear dry and spotless.",
    features: [
      "Advanced moisture-wicking technology",
      "Odor-control antimicrobial finish",
      "Lightweight mesh ventilation zones",
      "Quick-dry fabric for all-day freshness",
      "Seamless fit under formal and casual wear",
      "Designed specifically for Indian climate",
    ],
    quickFeatures: [
      { icon: "Droplets", text: "Moisture-wicking technology" },
      { icon: "Wind", text: "Odor-control finish" },
      { icon: "Layers", text: "Lightweight mesh zones" },
      { icon: "Sun", text: "All-day wear" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/images/products/we-sweat-2.png",
      "/images/products/we-sweat-3.png",
      "/images/products/we-sweat-1.png",
    ],
    fabricComposition: "75% Polyester, 25% Elastane — Ultra-breathable with antimicrobial treatment",
    careInstructions: ["Machine wash cold", "Do not bleach", "Hang dry recommended", "Do not iron"],
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: "we-press",
    name: "WE-SCULPT",
    slug: "we-sculpt",
    category: "chest-shaping",
    categoryBadge: "WE-SCULPT",
    price: 899,
    mrp: 1499,
    shortDescription: "Chestpress - Sculpted upper body appearance with firm support",
    fullDescription: "WE-SCULPT offers targeted chest compression to eliminate unwanted bulk and provide a more defined, athletic silhouette under any garment.",
    features: [
      "Upper chest compression for sculpted appearance",
      "Posture-improving design with back support panel",
      "Seamless fit invisible under any clothing",
      "Breathable compression fabric",
      "Reinforced shoulder panels",
      "Anti-chafe flatlock stitching",
    ],
    quickFeatures: [
      { icon: "ArrowUp", text: "Upper chest compression" },
      { icon: "Smile", text: "Improves posture" },
      { icon: "Eye", text: "Seamless fit" },
      { icon: "Wind", text: "Breathable fabric" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/images/products/we-press-2.png",
      "/images/products/we-press-3.png",
      "/images/products/we-press-1.png",
    ],
    fabricComposition: "82% Nylon, 18% Spandex — Firm compression with stretch comfort",
    careInstructions: ["Hand wash recommended", "Do not bleach", "Air dry flat", "Do not iron directly"],
    rating: 4.4,
    reviewCount: 76,
  },
  {
    id: "we-handle",
    name: "WE-EDGE",
    slug: "we-edge",
    category: "waist-control",
    categoryBadge: "WE-EDGE",
    price: 899,
    mrp: 1499,
    shortDescription: "Lovehandle - Discreetly smooth and shape your waistline",
    fullDescription: "WE-EDGE targets the midsection and lower back to provide a streamlined waistline, eliminating love handles while remaining comfortable for 10+ hours.",
    features: [
      "Waist contour compression panels",
      "Anti-slip silicone grip technology",
      "Lightweight and breathable construction",
      "360-degree waist sculpting",
      "Seamless under tucked shirts",
      "All-day comfort guarantee",
    ],
    quickFeatures: [
      { icon: "Circle", text: "Waist contour compression" },
      { icon: "Lock", text: "Anti-slip grip" },
      { icon: "Feather", text: "Lightweight & breathable" },
      { icon: "Clock", text: "All-day comfort" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/images/products/we-handle-2.png",
      "/images/products/we-handle-3.png",
      "/images/products/we-handle-1.png",
    ],
    fabricComposition: "78% Nylon, 22% Spandex — Medium compression with all-day comfort",
    careInstructions: ["Hand wash or machine wash cold", "Do not bleach", "Tumble dry low", "Do not iron"],
    rating: 4.3,
    reviewCount: 64,
  },
  {
    id: "we-suit",
    name: "WE-FRAME",
    slug: "we-frame",
    category: "full-body",
    categoryBadge: "WE-FRAME",
    price: 899,
    mrp: 1499,
    shortDescription: "Full body suit - Complete torso shaping for maximum confidence",
    fullDescription: "WE-FRAME is the ultimate all-in-one inner garment, providing comprehensive shaping for the chest, stomach, and back.",
    features: [
      "Full torso compression for complete shaping",
      "Sweat-resistant advanced fabric",
      "Invisible under suits and formal wear",
      "Integrated posture support",
      "Reinforced compression zones",
      "Premium finish with flatlock seams",
    ],
    quickFeatures: [
      { icon: "User", text: "Full torso compression" },
      { icon: "Droplets", text: "Sweat-resistant" },
      { icon: "Eye", text: "Invisible under suits" },
      { icon: "Award", text: "Premium finish" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/images/products/we-suit-2.png",
      "/images/products/we-suit-3.png",
      "/images/products/we-suit-1.png",
    ],
    fabricComposition: "85% Nylon, 15% Spandex — Maximum compression with breathable panels",
    careInstructions: ["Hand wash only", "Do not bleach", "Air dry flat", "Do not iron"],
    rating: 4.7,
    reviewCount: 113,
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductById = (id: string) => products.find((p) => p.id === id);
