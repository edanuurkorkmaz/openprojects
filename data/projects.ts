import { Project, ProjectCategory, ProjectSponsor } from "@/types/project";

export default [
  {
    name: "Next.js",
    description: "The React Framework for the Web",
    longDescription:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
    githubUrl: "https://github.com/vercel/next.js",
    website: "https://nextjs.org",
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
    tags: ["gaming", "community", "platform"],
    category: ProjectCategory.Application,
    featured: true,
  },
  {
    name: "NestJS",
    description:
      "A progressive Node.js framework for building efficient server-side applications.",
    longDescription:
      "NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses TypeScript and combines elements of OOP, FP, and FRP.",
    githubUrl: "https://github.com/nestjs/nest",
    website: "https://nestjs.com",
    tags: ["backend", "framework", "typescript", "nodejs"],
    category: ProjectCategory.Framework,
    featured: false,
  },
  {
    name: "Prisma",
    description: "Next-generation Node.js and TypeScript ORM",
    longDescription:
      "Prisma is an open-source next-generation ORM for Node.js and TypeScript. It makes working with databases easy and type-safe.",
    githubUrl: "https://github.com/prisma/prisma",
    website: "https://www.prisma.io",
    tags: ["orm", "typescript", "database"],
    category: ProjectCategory.Database,
    featured: false,
  },
  {
    name: "Docker",
    description: "Empowering app development for developers and teams",
    longDescription:
      "Docker is a platform designed to help developers build, share, and run modern applications. It uses containerization to ensure consistent environments.",
    githubUrl: "https://github.com/docker/docker-ce",
    website: "https://www.docker.com",
    tags: ["devops", "container", "cli"],
    category: ProjectCategory.DevOps,
    featured: false,
  },
  {
    name: "Supabase",
    description: "The open source Firebase alternative",
    longDescription:
      "Supabase is an open-source Firebase alternative. It provides instant APIs, authentication, edge functions, and a PostgreSQL database.",
    githubUrl: "https://github.com/supabase/supabase",
    website: "https://supabase.com",
    tags: ["backend", "database", "authentication", "realtime"],
    category: ProjectCategory.Backend,
    featured: false,
  },
  {
    name: "Shadcn UI",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    longDescription:
      "Shadcn UI is a collection of reusable components built using Tailwind CSS and Radix UI primitives. Designed for building modern UIs with full control over styling.",
    githubUrl: "https://github.com/shadcn-ui/ui",
    website: "https://ui.shadcn.dev",
    tags: ["frontend", "ui", "tailwind", "components"],
    category: ProjectCategory.Frontend,
    featured: false,
  },
  {
    name: "Expo",
    description: "An open-source platform for making universal native apps",
    longDescription:
      "Expo is a framework and a platform for universal React applications. It helps developers build iOS, Android, and web apps with the same codebase.",
    githubUrl: "https://github.com/expo/expo",
    website: "https://expo.dev",
    tags: ["mobile", "react-native", "cross-platform"],
    category: ProjectCategory.Mobile,
    featured: false,
  },
  {
    name: "Passport.js",
    description: "Simple, unobtrusive authentication for Node.js",
    longDescription:
      "Passport is authentication middleware for Node.js. It is extremely flexible and modular, and can be unobtrusively dropped into any Express-based web application.",
    githubUrl: "https://github.com/jaredhanson/passport",
    website: "http://www.passportjs.org",
    tags: ["authentication", "nodejs", "oauth", "middleware"],
    category: ProjectCategory.Authentication,
    featured: false,
  },
  {
    name: "Faker.js",
    description:
      "Generate massive amounts of fake data in the browser and Node.js",
    longDescription:
      "Faker.js is a JavaScript library for generating fake data such as names, addresses, emails, and more. It's useful for testing and development.",
    githubUrl: "https://github.com/faker-js/faker",
    website: "https://fakerjs.dev",
    tags: ["testing", "data", "utility"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Draw.io",
    description: "Diagramming app built with web technologies",
    longDescription:
      "Draw.io is a free online diagram software for making flowcharts, process diagrams, org charts, UML, ER diagrams, network diagrams, and more.",
    githubUrl: "https://github.com/jgraph/drawio",
    website: "https://app.diagrams.net",
    tags: ["diagram", "visual", "tool"],
    category: ProjectCategory.Application,
    featured: false,
  },
] as Project[];
