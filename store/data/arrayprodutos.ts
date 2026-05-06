import { prodTypes } from "../types/prodTypes";

export const produtos: prodTypes[] = [
  {
    id: 1,
    brand: "Nike",
    size: "M",
    price: "120",
    image: require("../assets/img/img1.webp"),
    likes: 12
  },

  {
    id: 2,
    brand: "Adidas",
    size: "G",
    price: "150",
    image: require("../assets/img/img2.webp"),
    likes: 30
  },

  {
    id: 3,
    brand: "Puma",
    size: "P",
    price: "90",
    image: require("../assets/img/img3.webp"),
    likes: 5
  },

  {
    id: 4,
    brand: "Nike Shoes",
    size: "38",
    price: "98",
    image: require("../assets/img/img4.webp"),
    likes: 19
  },
];