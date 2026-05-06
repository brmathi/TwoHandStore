import { prodTypes } from "../types/prodTypes";

export const produtos: prodTypes[] = [
  {
    id: 1,
    brand: "Nike",
    size: "M",
    price: "120",
    image: require("../assets/img/img1.webp"),
    likes: 12,
    description: "Camiseta vintage Nike. Ótimo estado de conservação."
  },

  {
    id: 2,
    brand: "Adidas",
    size: "G",
    price: "150",
    image: require("../assets/img/img2.webp"),
    likes: 30,
    description: "Camiseta vintage Adidas, especial Japão."
  },

  {
    id: 3,
    brand: "Puma",
    size: "P",
    price: "90",
    image: require("../assets/img/img3.webp"),
    likes: 5,
    description: "Camiseta Puma + badminton."
  },

  {
    id: 4,
    brand: "Nike Shoes",
    size: "38",
    price: "98",
    image: require("../assets/img/img4.webp"),
    likes: 19,
    description: "Tênis Nike vintage. Com algumas avarias."
  },

  {
    id: 5,
    brand: "Other",
    size: "42",
    price: "112",
    image: require("../assets/img/img8.jpg"),
    likes: 89,
    description: "Calça de couro preta/marrom. Desbotamento natural."
  },

  {
    id: 6,
    brand: "Other",
    size: "M",
    price: "98",
    image: require("../assets/img/img9.jpg"),
    likes: 12,
    description: "Camiseta anime Neon Genesis Evangelion."
  },

  {
    id: 7,
    brand: "Other",
    size: "P",
    price: "17.50",
    image: require("../assets/img/img10.jpg"),
    likes: 5,
    description: "Camiseta longsleeve EUA."
  },

  {
    id: 8,
    brand: "Carhartt",
    size: "44",
    price: "230",
    image: require("../assets/img/img11.jpg"),
    likes: 76,
    description: "Calça vintage Carhartt, com alguns rasgos. #carhartt #baggyjeans #vintage"
  },

  {
    id: 9,
    brand: "Rocawear",
    size: "44",
    price: "200",
    image: require("../assets/img/img12.jpg"),
    likes: 24,
    description: "Calça vintage 00s Rocawear. #vintage #baggyjeans #jeans"
  },

  {
    id: 10,
    brand: "Harley Davidson",
    size: "G",
    price: "189",
    image: require("../assets/img/img13.jpg"),
    likes: 12,
    description: "Camiseta Harley Davidson skull 2004. #vintage #harleydavidson #vintagetshirt"
  }
];