export const projects: {
  id: number;
  title: string;
  image: string;
  description: string;
  tools: string[];
  links: {
    live: string;
    front?: string;
    back?: string;
    full?: string;
  };
}[] = [
  {
    id: 1,
    title: "Travel Nest - A hotel booking application",
    image: "/travel-nest.png",
    description:
      "Travel Nest is a full-stack hotel booking application built with modern technologies like Next.js, React.js, and TypeScript.",
    tools: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Clerk",
    ],
    links: {
      live: "https://travel-nest-ecru.vercel.app/",
      full: "https://github.com/SazzatTuhin/travel-nest",
    },
  },
  {
    id: 2,
    title: "Grand Cineplex - a movie management application",
    image: "/grand-cineplex.png",
    description:
      "Grand Cineplex is a movie management application that allows users to create, update, and delete movies, browse a variety of movies and actors, and mark favorites.",
    tools: [
      "ReactJS",
      "Redux Toolkit",
      "ExpressJS",
      "Mongoose",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
    ],
    links: {
      live: "https://grand-cineplex-gamma.vercel.app/",
      front: "https://github.com/SazzatTuhin/Grand-Cineplex",
      back: "https://github.com/SazzatTuhin/grand_cineplex_server",
    },
  },
  {
    id: 3,
    title: "Artlane - an artwork viewer application",
    image: "/artlane.png",
    description:
      "Artlane is an artwork viewer application where users can browse and explore various art pieces with detailed information.",
    tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    links: {
      live: "https://artlane-delta.vercel.app/",
      front: "https://github.com/SazzatTuhin/artlane",
    },
  },
];
