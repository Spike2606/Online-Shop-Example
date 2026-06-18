export type Product = {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  tag: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "blue-pixel",
    name: "Blue Pixel Case",
    model: "iPhone 14 / 15",
    price: 89,
    image: "/products/blue-pixel-case.png",
    tag: "Bestseller",
    description: "Lekki case z niebieskim wzorem inspirowanym cyfrową mozaiką.",
    features: ["matowe wykończenie", "podniesione ranty", "elastyczne boki"],
  },
  {
    id: "midnight-leather",
    name: "Midnight Leather",
    model: "iPhone 15 Pro",
    price: 129,
    image: "/products/midnight-leather-case.png",
    tag: "Premium",
    description: "Elegancki czarny case z fakturą skóry i smukłym profilem.",
    features: ["tekstura anti-slip", "ochrona aparatu", "kompatybilny z MagSafe"],
  },
  {
    id: "mist-mountain",
    name: "Mist Mountain",
    model: "iPhone 13 / 14 Pro",
    price: 99,
    image: "/products/mist-mountain-case.png",
    tag: "Nowość",
    description: "Spokojny gradient z motywem gór dla minimalistycznego stylu.",
    features: ["miękka mikrofibra", "lekka konstrukcja", "odporny nadruk"],
  },
  {
    id: "executive-black",
    name: "Executive Black",
    model: "iPhone 14 Pro / 15 Pro",
    price: 139,
    image: "/products/executive-black-case.png",
    tag: "Biznesowy",
    description: "Formalny case do pracy, spotkań i codziennego noszenia.",
    features: ["wzmocnione narożniki", "precyzyjne przyciski", "satynowa ramka"],
  },
];

export const shippingCost = 14.99;
