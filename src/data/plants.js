import aloe from "../assets/aloe.webp";
import lavender from "../assets/lavender.webp";
import mint from "../assets/mint.webp";
import peace from "../assets/peace_lily.webp";
import snake from "../assets/snake.webp";
import tulsi from "../assets/tulsi.webp";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: aloe
  },
  {
    id: 2,
    name: "Tulsi",
    price: 8,
    category: "Medicinal",
    image: tulsi
  },
  {
    id: 3,
    name: "Mint",
    price: 5,
    category: "Aromatic",
    image: mint
  },
  {
    id: 4,
    name: "Lavender",
    price: 12,
    category: "Aromatic",
    image: lavender
  },
  {
    id: 5,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: snake
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 18,
    category: "Indoor",
    image: peace
  }
];

export default plants;