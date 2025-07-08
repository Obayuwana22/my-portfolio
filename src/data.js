import { nanoid } from "nanoid";
import projectOne from "./assets/thumbnail/kropp fitness.png";
import projectTwo from "./assets/thumbnail/colourist.PNG";
import projectThree from "./assets/thumbnail/movie-hub.PNG";
import projectFour from "./assets/thumbnail/comfy store.PNG";

export const projects = [
  {
    id: nanoid(),
    thumbnail: projectFour,
    title: "Comfy Store",
    description:
      "Comfy is your go-to destination for modern, affordable furniture that brings comfort and style into every corner of your home.",
    codeUrl: "https://github.com/Obayuwana22/comfy-store",
    demoUrl: "https://comfy-store-delta-two.vercel.app/",
    badges: [
      { id: nanoid(), badge: "React" },
      { id: nanoid(), badge: "Tailwindcss" },
    ],
  },
  {
    id: nanoid(),
    thumbnail: projectOne,
    title: "Kropp Fitness App",
    description:
      "Kropp Fitness, a sleek and user-friendly website designed to help you achieve your fitness goals.",
    codeUrl: "https://github.com/Obayuwana22/fitness-site",
    demoUrl: "https://kropp-fitness.vercel.app/",
    badges: [
      { id: nanoid(), badge: "HTML" },
      { id: nanoid(), badge: "CSS" },
      { id: nanoid(), badge: "Javascript" },
    ],
  },

  {
    id: nanoid(),
    thumbnail: projectTwo,
    title: "Colourist Portfolio",
    description:
      "A freelance colorist specializing in color grading, with a portfolio that highlights a keen eye for detail and a talent for elevating visual storytelling through rich, cinematic color.",
    codeUrl: "https://github.com/Obayuwana22/courage-portfolio",
    demoUrl: "https://courageobayuwana.com/",
    badges: [
      { id: nanoid(), badge: "React" },
      { id: nanoid(), badge: "Tailwindcss" },
    ],
  },

  {
    id: nanoid(),
    thumbnail: projectThree,
    title: "Movie Hub",
    description:
      "Movie Hub is a sleek and responsive movie discovery web application that enables users to search for films, explore trending titles, and view movie information such as movie rating and release dates.",
    codeUrl: "https://github.com/Obayuwana22/movie-hub",
    demoUrl: "https://movie-hub-eight-xi.vercel.app/",
    badges: [
      { id: nanoid(), badge: "React" },
      { id: nanoid(), badge: "Tailwindcss" },
      { id: nanoid(), badge: "Appwrite" },
    ],
  },
];
