import { nanoid } from "nanoid";
import projectOne from "./assets/thumbnail/kropp fitness.png";
import projectTwo from "./assets/thumbnail/graphics designer.png";

export const projects = [
  {
    id: nanoid(),
    thumbnail: projectOne,
    title: "Kropp Fitness App",
    description:
      "Kropp Fitness, a sleek and user-friendly website designed to help you achieve your fitness goals.",
    codeUrl: "https://github.com/Obayuwana22/fitness-site",
    demoUrl: "https://kropp-fitness.vercel.app/",
    badges: [
      {id: nanoid(), badge: "HTML"},
      {id: nanoid(), badge: "CSS"},
      {id: nanoid(), badge: "Javascript"},
    ]
  },

  {
    id: nanoid(),
    thumbnail: projectTwo,
    title: "G.D Portfolio Site",
    description:
      "This portfolio website showcases the work of a graphic designer, featuring a curated selection of her best projects across branding, illustration, and digital design.",
    codeUrl: "https://github.com/Obayuwana22/Graphics-Designer-Portfolio",
    demoUrl: "https://graphics-designer-portfolio.vercel.app/",
    badges: [
      {id: nanoid(), badge: "HTML"},
      {id: nanoid(), badge: "CSS"},
      {id: nanoid(), badge: "Javascript"},
    ]
  },

  {
    id: nanoid(),
    thumbnail: projectTwo,
    title: "G.D Portfolio Site",
    description:
      "This portfolio website showcases the work of a graphic designer, featuring a curated selection of her best projects across branding, illustration, and digital design. The site is designed for easy navigation, with a clean, modern layout that highlights visual content.",
    codeUrl: "https://github.com/Obayuwana22/Graphics-Designer-Portfolio",
    demoUrl: "https://graphics-designer-portfolio.vercel.app/",
    badges: [
      {id: nanoid(), badge: "React"},
      {id: nanoid(), badge: "Tailwindcss"},
    ]
  },
];
