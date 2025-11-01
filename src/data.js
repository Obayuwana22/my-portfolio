import { nanoid } from "nanoid";
import projectOne from "./assets/thumbnail/kropp fitness.png";
import projectTwo from "./assets/thumbnail/colourist.PNG";
import projectThree from "./assets/thumbnail/lockedIn.png";
import projectFour from "./assets/thumbnail/comfy store.PNG";

export const projects = [
  {
    id: nanoid(),
    thumbnail: projectThree,
    title: "Movie Hub",
    description:
      "LockedIn is a modern personal finance web application that helps users manage their budgets, track transactions, and organize spending into categories.It offers a clean interface with persistent data storage, allowing users to stay on top of their finances effortlessly.",
    codeUrl: "https://github.com/Obayuwana22/lockedin",
    demoUrl: "https://lockedin-teal.vercel.app/",
    badges: [
      { id: nanoid(), badge: "React" },
      { id: nanoid(), badge: "Tailwindcss" },
      { id: nanoid(), badge: "Redux Toolkit" },
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
];
