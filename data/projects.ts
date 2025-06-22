import { Project, ProjectCategory, ProjectSponsor } from "@/types/project";

export default [
  {
    name: "Next.js",
    description: "The React Framework for the Web",
    longDescription:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
    githubUrl: "https://github.com/vercel/next.js",
    website: "https://nextjs.org",
    language: "JavaScript",
    author: "vercel",
    tags: ["frontend", "framework", "react", "ssr"],
    category: ProjectCategory.Framework,
    featured: true,
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    longDescription:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    githubUrl: "https://github.com/facebook/react",
    website: "https://reactjs.org",
    language: "JavaScript",
    author: "facebook",
    tags: ["frontend", "framework", "javascript", "ui"],
    category: ProjectCategory.Framework,
  },
  {
    name: "Better Auth",
    description:
      "A simple and secure authentication solution for modern applications",
    longDescription:
      "Better Auth provides a simple and secure authentication solution for modern applications, focusing on ease of use and robust security features.",
    githubUrl: "https://github.com/better-auth/better-auth",
    website: "https://www.better-auth.com/",
    language: "JavaScript",
    author: "bekacru",
    tags: ["authentication", "security", "backend"],
    category: ProjectCategory.Authentication,
    featured: true,
  },
  {
    name: "NoobGG",
    description: "A platform for gamers to connect and play together",
    longDescription:
      "NoobGG is a community-driven platform that connects gamers, allowing them to find teammates, join games, and share experiences.",
    githubUrl: "https://github.com/noobgg-team/noobgg",
    language: "Typescript",
    author: "noobgg-team",
    tags: ["gaming", "community", "platform"],
    category: ProjectCategory.Application,
    featured: true,
  },
] as Project[];
