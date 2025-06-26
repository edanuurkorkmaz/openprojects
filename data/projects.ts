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
    name: "Zyros",
    description: "A developer-friendly static site generator built with Next.js and Tailwind CSS.",
    longDescription:
      "A developer-friendly static site generator built with Next.js and Tailwind CSS. Transform a simple JSON file into a beautiful, fast static website with powerful features that developers and content creators love.",
    githubUrl: "https://github.com/zyrasoftware/zyros",
    tags: ["ssg", "static site generator", "library"],
    category: ProjectCategory.Library,
    featured: false,
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
  {
    name: "TypeScript",
    description: "Typed JavaScript at Any Scale",
    longDescription:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    githubUrl: "https://github.com/microsoft/TypeScript",
    website: "https://www.typescriptlang.org",
    tags: ["language", "typescript", "javascript"],
    category: ProjectCategory.Library,
    featured: false,
  },
  {
    name: "Vitest",
    description: "A blazing fast unit test framework powered by Vite",
    longDescription:
      "Vitest is a blazing fast unit test framework with a familiar API, powered by Vite. It offers instant feedback, TypeScript support, and top-notch DX.",
    githubUrl: "https://github.com/vitest-dev/vitest",
    website: "https://vitest.dev",
    tags: ["testing", "vite", "typescript"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Turborepo",
    description:
      "High-performance build system for JavaScript & TypeScript monorepos",
    longDescription:
      "Turborepo is a high-performance build system for JavaScript and TypeScript codebases, designed to optimize performance in monorepo setups.",
    githubUrl: "https://github.com/vercel/turbo",
    website: "https://turbo.build/repo",
    tags: ["monorepo", "build", "tooling"],
    category: ProjectCategory.DevOps,
    featured: false,
  },
  {
    name: "Zod",
    description:
      "TypeScript-first schema validation with static type inference",
    longDescription:
      "Zod is a TypeScript-first schema declaration and validation library. It enables static type inference and runtime validation with great developer ergonomics.",
    githubUrl: "https://github.com/colinhacks/zod",
    website: "https://zod.dev",
    tags: ["validation", "typescript", "schema"],
    category: ProjectCategory.Library,
    featured: false,
  },
  {
    name: "Cal.com",
    description: "Scheduling infrastructure for everyone",
    longDescription:
      "Cal.com is an open-source scheduling platform like Calendly. It's fully customizable, privacy-focused, and built for developers and teams.",
    githubUrl: "https://github.com/calcom/cal.com",
    website: "https://cal.com",
    tags: ["scheduling", "calendar", "platform"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "tRPC",
    description: "End-to-end typesafe APIs made easy",
    longDescription:
      "tRPC allows you to build fully typesafe APIs without schema definitions. Easily share types between your client and server.",
    githubUrl: "https://github.com/trpc/trpc",
    website: "https://trpc.io",
    tags: ["typescript", "api", "rpc"],
    category: ProjectCategory.Backend,
    featured: false,
  },
  {
    name: "Auth.js",
    description: "Authentication for the Web",
    longDescription:
      "Auth.js (formerly NextAuth.js) is a complete open-source authentication solution for modern web apps. Supports OAuth, Email, Credentials, and more.",
    githubUrl: "https://github.com/nextauthjs/next-auth",
    website: "https://authjs.dev",
    tags: ["authentication", "oauth", "nextjs", "security"],
    category: ProjectCategory.Authentication,
    featured: false,
  },
  {
    name: "Nhost",
    description: "The Open Source Firebase Alternative with GraphQL",
    longDescription:
      "Nhost is a backend for web and mobile apps. It provides a GraphQL API, user authentication, file storage, and PostgreSQL database out of the box.",
    githubUrl: "https://github.com/nhost/nhost",
    website: "https://nhost.io",
    tags: ["graphql", "backend", "firebase-alternative"],
    category: ProjectCategory.Backend,
    featured: false,
  },
  {
    name: "Expo Router",
    description: "File-based routing for Expo & React Native apps",
    longDescription:
      "Expo Router brings the best of file-based routing (like Next.js) to React Native with tight Expo integration and strong DX.",
    githubUrl: "https://github.com/expo/router",
    website: "https://expo.dev/router",
    tags: ["mobile", "router", "expo", "navigation"],
    category: ProjectCategory.Mobile,
    featured: false,
  },
  {
    name: "RedwoodJS",
    description: "The App Framework for Startups",
    longDescription:
      "RedwoodJS is an opinionated, full-stack JavaScript/TypeScript framework designed to help you build and scale web applications quickly with an integrated experience.",
    githubUrl: "https://github.com/redwoodjs/redwood",
    website: "https://redwoodjs.com",
    tags: ["fullstack", "framework", "typescript"],
    category: ProjectCategory.Framework,
    featured: false,
  },
  {
    name: "Plausible Analytics",
    description: "Simple and privacy-friendly Google Analytics alternative",
    longDescription:
      "Plausible Analytics is a lightweight, open-source web analytics tool. It’s simple to use, privacy-respecting, and doesn't use cookies.",
    githubUrl: "https://github.com/plausible/analytics",
    website: "https://plausible.io",
    tags: ["analytics", "privacy", "frontend", "tool"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Refine",
    description: "React-based framework for building internal tools rapidly",
    longDescription:
      "Refine is a React-based, headless framework for building internal tools, admin panels, and dashboards with speed and flexibility.",
    githubUrl: "https://github.com/refinedev/refine",
    website: "https://refine.dev",
    tags: ["admin", "dashboard", "react", "crud"],
    category: ProjectCategory.Frontend,
    featured: false,
  },
  {
    name: "Hoppscotch",
    description: "Open source API development ecosystem",
    longDescription:
      "Hoppscotch is an open-source API request builder like Postman but faster and built for modern developers. It supports REST, GraphQL, WebSocket and more.",
    githubUrl: "https://github.com/hoppscotch/hoppscotch",
    website: "https://hoppscotch.io",
    tags: ["api", "rest", "graphql", "tooling"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Meilisearch",
    description: "Lightning-fast, open-source, typo-tolerant search engine",
    longDescription:
      "Meilisearch is an open-source search engine that delivers an instant, full-text search experience with an easy-to-use RESTful API.",
    githubUrl: "https://github.com/meilisearch/meilisearch",
    website: "https://www.meilisearch.com",
    tags: ["search", "engine", "full-text", "instant"],
    category: ProjectCategory.Backend,
  },
  {
    name: "Headscale",
    description: "Self-hosted implementation of Tailscale control server",
    longDescription:
      "Headscale is an open-source, self-hosted implementation of the Tailscale coordination server. It allows secure, peer-to-peer networking via WireGuard.",
    githubUrl: "https://github.com/juanfont/headscale",
    website: "https://headscale.net",
    tags: ["networking", "vpn", "wireguard", "self-hosted"],
    category: ProjectCategory.DevOps,
    featured: false,
  },
  {
    name: "OpenResume",
    description: "Open-source resume builder and manager",
    longDescription:
      "OpenResume is an open-source project that helps you build and manage your resumes with a beautiful UI and Markdown support.",
    githubUrl: "https://github.com/xitanggg/open-resume",
    website: "https://open-resume.com",
    tags: ["resume", "builder", "cv", "application"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "ToolJet",
    description: "Open-source low-code platform to build internal tools",
    longDescription:
      "ToolJet is an open-source low-code framework for quickly building internal tools with drag-and-drop components, query editors, and integrations.",
    githubUrl: "https://github.com/ToolJet/ToolJet",
    website: "https://tooljet.com",
    tags: ["low-code", "internal-tools", "builder"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Monica",
    description: "Personal CRM to keep track of your relationships",
    longDescription:
      "Monica is an open-source personal CRM that helps you manage your personal relationships and interactions in a thoughtful way.",
    githubUrl: "https://github.com/monicahq/monica",
    website: "https://monicahq.com",
    tags: ["crm", "personal", "contacts"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Wasp",
    description:
      "The fastest way to develop full-stack web apps with React & Node.js",
    longDescription:
      "Wasp is a declarative language for building full-stack web apps. It compiles into React, Node.js and Prisma code you can fully customize.",
    githubUrl: "https://github.com/wasp-lang/wasp",
    website: "https://wasp-lang.dev",
    tags: ["fullstack", "language", "webapp", "framework"],
    category: ProjectCategory.Framework,
    featured: false,
  },

  {
    name: "Budibase",
    description: "Low-code platform for building internal tools",
    longDescription:
      "Budibase is an open-source low-code platform that helps you build business apps in minutes. Connect to databases, APIs, and design UIs visually.",
    githubUrl: "https://github.com/Budibase/budibase",
    website: "https://budibase.com",
    tags: ["low-code", "internal-tools", "platform"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Appwrite",
    description: "End-to-end backend server for web and mobile apps",
    longDescription:
      "Appwrite is an open-source backend-as-a-service (BaaS) platform that helps you build secure apps faster with APIs for auth, database, storage, and more.",
    githubUrl: "https://github.com/appwrite/appwrite",
    website: "https://appwrite.io",
    tags: ["backend", "authentication", "database", "storage"],
    category: ProjectCategory.Backend,
  },
  {
    name: "Keycloak",
    description: "Open source identity and access management",
    longDescription:
      "Keycloak is an open-source Identity and Access Management solution for modern apps and services. Supports SSO, LDAP, social login, and more.",
    githubUrl: "https://github.com/keycloak/keycloak",
    website: "https://www.keycloak.org",
    tags: ["authentication", "oauth", "sso", "security"],
    category: ProjectCategory.Authentication,
    featured: false,
  },
  {
    name: "Uptime Kuma",
    description: "Self-hosted monitoring tool like UptimeRobot",
    longDescription:
      "Uptime Kuma is a self-hosted monitoring system to track the uptime and response time of websites, servers, and APIs with a beautiful UI.",
    githubUrl: "https://github.com/louislam/uptime-kuma",
    website: "https://uptime.kuma.pet",
    tags: ["monitoring", "devops", "status", "dashboard"],
    category: ProjectCategory.DevOps,
  },
  {
    name: "Directus",
    description: "Open Data Platform for managing any SQL database",
    longDescription:
      "Directus wraps any SQL database with a real-time GraphQL+REST API and provides a beautiful no-code app for managing your content and users.",
    githubUrl: "https://github.com/directus/directus",
    website: "https://directus.io",
    tags: ["cms", "database", "graphql", "api"],
    category: ProjectCategory.Database,
    featured: false,
  },
  {
    name: "OpenMetadata",
    description: "Open source metadata and data lineage management",
    longDescription:
      "OpenMetadata is an open-source platform for data discovery, observability, and governance. It supports lineage tracking, schema registry, and more.",
    githubUrl: "https://github.com/open-metadata/OpenMetadata",
    website: "https://open-metadata.org",
    tags: ["data", "metadata", "lineage", "governance"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Remix",
    description: "Full stack web framework built on web fundamentals",
    longDescription:
      "Remix is a modern React-based web framework focused on fast navigation and progressive enhancement. Great for server-rendered apps.",
    githubUrl: "https://github.com/remix-run/remix",
    website: "https://remix.run",
    tags: ["react", "framework", "ssr", "routing"],
    category: ProjectCategory.Framework,
    featured: false,
  },
  {
    name: "Midjourney UI Clone",
    description: "Open source UI replica of Midjourney's image generator",
    longDescription:
      "This is a UI clone of Midjourney’s prompt-based image generation interface. Useful for learning about chat UIs, image generation flows, and Tailwind-based layouts.",
    githubUrl: "https://github.com/sadmann7/midjourney-clone",
    website: "https://midjourney-clone.vercel.app",
    tags: ["frontend", "ui", "tailwind", "clone"],
    category: ProjectCategory.Frontend,
    featured: false,
  },
  {
    name: "Chatwoot",
    description: "Open-source customer engagement platform",
    longDescription:
      "Chatwoot is an open-source alternative to Intercom and Zendesk. It offers live chat, email, Slack, social integrations, and powerful customer support tools.",
    githubUrl: "https://github.com/chatwoot/chatwoot",
    website: "https://chatwoot.com",
    tags: ["chat", "crm", "support", "communication"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Wasp-lang",
    description: "Declarative language for full-stack web apps",
    longDescription:
      "Wasp is a new programming language that abstracts full-stack concerns and compiles to React, Node.js and Prisma. A productivity booster for devs.",
    githubUrl: "https://github.com/wasp-lang/wasp",
    website: "https://wasp-lang.dev",
    tags: ["language", "fullstack", "framework"],
    category: ProjectCategory.Framework,
    featured: false,
  },

  {
    name: "N8N",
    description: "Workflow automation tool",
    longDescription:
      "n8n is an extendable workflow automation tool that lets you connect anything to everything via a powerful node-based interface.",
    githubUrl: "https://github.com/n8n-io/n8n",
    website: "https://n8n.io",
    tags: ["automation", "workflow", "integration", "node-based"],
    category: ProjectCategory.Application,
  },
  {
    name: "Tooll 3",
    description: "Visual programming for motion graphics & creative coding",
    longDescription:
      "Tooll 3 is a node-based, real-time visual programming environment for building procedural motion graphics, VFX, and real-time visuals.",
    githubUrl: "https://github.com/tooll3/tooll",
    website: "https://tooll.io",
    tags: ["graphics", "vfx", "creative-coding", "visual"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Penpot",
    description: "Open-source design & prototyping tool",
    longDescription:
      "Penpot is the first open-source design and prototyping platform meant for cross-domain teams. A real alternative to Figma and Adobe XD.",
    githubUrl: "https://github.com/penpot/penpot",
    website: "https://penpot.app",
    tags: ["design", "ui", "figma-alternative", "prototyping"],
    category: ProjectCategory.Application,
  },
  {
    name: "DuckDB",
    description: "SQLite for analytics",
    longDescription:
      "DuckDB is an in-process SQL OLAP database management system. It’s optimized for analytical query workloads, like a SQLite for analytics.",
    githubUrl: "https://github.com/duckdb/duckdb",
    website: "https://duckdb.org",
    tags: ["database", "analytics", "sql", "olap"],
    category: ProjectCategory.Database,
  },
  {
    name: "Medusa",
    description: "Open-source Shopify alternative",
    longDescription:
      "Medusa is an open-source headless commerce engine that enables developers to build powerful, customizable e-commerce platforms.",
    githubUrl: "https://github.com/medusajs/medusa",
    website: "https://medusajs.com",
    tags: ["ecommerce", "backend", "headless", "shopify-alternative"],
    category: ProjectCategory.Backend,
    featured: false,
  },
  {
    name: "Outline",
    description: "Modern team knowledge base",
    longDescription:
      "Outline is a fast, collaborative, open-source knowledge base built for internal documentation. Think of it like open-source Notion for docs.",
    githubUrl: "https://github.com/outline/outline",
    website: "https://www.getoutline.com",
    tags: ["documentation", "wiki", "internal-tools"],
    category: ProjectCategory.Application,
  },
  {
    name: "Radicle",
    description: "Peer-to-peer code collaboration",
    longDescription:
      "Radicle is an open-source, peer-to-peer alternative to GitHub — built on Git. It allows decentralized code collaboration and version control.",
    githubUrl: "https://github.com/radicle-dev/radicle-upstream",
    website: "https://radicle.xyz",
    tags: ["git", "p2p", "version-control", "decentralized"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "Windmill",
    description: "Automate scripts & workflows with UI + RBAC",
    longDescription:
      "Windmill is a developer platform to turn scripts into safe, sharable tools. It provides RBAC, scheduling, and a UI to run workflows.",
    githubUrl: "https://github.com/windmill-labs/windmill",
    website: "https://windmill.dev",
    tags: ["automation", "scripts", "workflow", "backend"],
    category: ProjectCategory.Backend,
    featured: false,
  },
  {
    name: "Erxes",
    description: "Open source growth marketing & CRM platform",
    longDescription:
      "Erxes is an all-in-one open-source marketing & CRM platform designed to unify messaging, tasks, lead tracking, and collaboration.",
    githubUrl: "https://github.com/erxes/erxes",
    website: "https://erxes.io",
    tags: ["crm", "marketing", "customer-support"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "LibreChat",
    description: "Self-hosted ChatGPT alternative with plugins",
    longDescription:
      "LibreChat is an open-source alternative to ChatGPT that supports plugins, multiple AI providers, file uploads, and multi-user support.",
    githubUrl: "https://github.com/danny-avila/LibreChat",
    website: "https://librechat.ai",
    tags: ["chatgpt", "ai", "openai", "self-hosted"],
    category: ProjectCategory.Application,
  },
  {
    name: "PrivateGPT",
    description: "Ask questions to your documents using LLMs locally",
    longDescription:
      "PrivateGPT is a project that enables querying your documents using local LLMs without any cloud dependency. Great for privacy-first AI solutions.",
    githubUrl: "https://github.com/imartinez/privateGPT",
    website: "https://github.com/imartinez/privateGPT",
    tags: ["llm", "chatbot", "local", "ai", "privacy"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "FlowiseAI",
    description: "Drag & drop UI for building LLM apps with Langchain",
    longDescription:
      "Flowise is a visual tool to build LLM-powered applications using Langchain. Easily chain prompts, models, and tools with a no-code UI.",
    githubUrl: "https://github.com/FlowiseAI/Flowise",
    website: "https://flowiseai.com",
    tags: ["llm", "langchain", "drag-drop", "ai"],
    category: ProjectCategory.Application,
  },
  {
    name: "Open WebUI",
    description: "Chat interface for local LLMs like Ollama, LM Studio",
    longDescription:
      "Open WebUI is an extensible web UI for running LLMs locally via Ollama or LM Studio. Think of it like a ChatGPT front-end for your own models.",
    githubUrl: "https://github.com/open-webui/open-webui",
    website: "https://openwebui.com",
    tags: ["llm", "ollama", "chat-ui", "ai"],
    category: ProjectCategory.Application,
    featured: false,
  },

  // === 2. Data Viz / Dashboards ===
  {
    name: "Metabase",
    description: "The easy, open-source way to ask your data questions",
    longDescription:
      "Metabase is an open-source business intelligence tool. Build charts, dashboards and explore your data with SQL or no-code interface.",
    githubUrl: "https://github.com/metabase/metabase",
    website: "https://www.metabase.com",
    tags: ["data", "dashboard", "sql", "charts"],
    category: ProjectCategory.Application,
  },
  {
    name: "Lightdash",
    description: "Open source BI platform built on dbt",
    longDescription:
      "Lightdash is an open-source alternative to Looker. Built for analysts, integrates deeply with dbt, and enables data exploration through a web UI.",
    githubUrl: "https://github.com/lightdash/lightdash",
    website: "https://lightdash.com",
    tags: ["bi", "dashboard", "dbt", "data-visualization"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Chartbrew",
    description: "Create live charts from your databases and APIs",
    longDescription:
      "Chartbrew is an open-source platform that allows you to connect to your database or REST API and build real-time dashboards and charts.",
    githubUrl: "https://github.com/chartbrew/chartbrew",
    website: "https://chartbrew.com",
    tags: ["charts", "dashboard", "api", "visualization"],
    category: ProjectCategory.Tool,
    featured: false,
  },

  // === 3. Docs & Static Content ===
  {
    name: "Docusaurus",
    description: "Build optimized websites quickly, focus on content",
    longDescription:
      "Docusaurus is a modern static site generator optimized for documentation sites. Built by Facebook, it offers MDX support, versioning, and great DX.",
    githubUrl: "https://github.com/facebook/docusaurus",
    website: "https://docusaurus.io",
    tags: ["documentation", "static-site", "react", "mdx"],
    category: ProjectCategory.Frontend,
  },
  {
    name: "Contentlayer",
    description: "Type-safe content management for modern apps",
    longDescription:
      "Contentlayer turns your Markdown, MDX or CMS content into type-safe JSON you can query from your Next.js or other modern frontend frameworks.",
    githubUrl: "https://github.com/contentlayerdev/contentlayer",
    website: "https://contentlayer.dev",
    tags: ["content", "cms", "markdown", "typescript"],
    category: ProjectCategory.Frontend,
    featured: false,
  },
  {
    name: "Docsify",
    description: "Documentation site generator without build step",
    longDescription:
      "Docsify generates beautiful documentation websites on the fly from markdown files. No build process required — just deploy your markdown.",
    githubUrl: "https://github.com/docsifyjs/docsify",
    website: "https://docsify.js.org",
    tags: ["docs", "markdown", "frontend", "static-site"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "GDevelop",
    description: "Open-source game creator without coding",
    longDescription:
      "GDevelop is an open-source, cross-platform game creator designed to be used by everyone — from beginners to pro developers — with a powerful event-based system.",
    githubUrl: "https://github.com/4ian/GDevelop",
    website: "https://gdevelop.io",
    tags: ["game", "editor", "webgl", "visual-programming"],
    category: ProjectCategory.Application,
  },
  {
    name: "PlayCanvas",
    description: "WebGL Game Engine",
    longDescription:
      "PlayCanvas is an open-source WebGL game engine focused on real-time 3D graphics, physics, and interactive apps for the browser.",
    githubUrl: "https://github.com/playcanvas/engine",
    website: "https://playcanvas.com",
    tags: ["webgl", "game", "3d", "engine"],
    category: ProjectCategory.Tool,
    featured: false,
  },
  {
    name: "RPG Paper Maker",
    description: "3D + 2D RPG Maker alternative",
    longDescription:
      "RPG Paper Maker is an open-source RPG game development tool that blends 2D sprites with 3D environments, ideal for classic game vibes.",
    githubUrl: "https://github.com/RPG-Paper-Maker/RPG-Paper-Maker",
    website: "https://rpg-paper-maker.com",
    tags: ["game", "rpg", "2d", "3d"],
    category: ProjectCategory.Application,
    featured: false,
  },
  {
    name: "Payload CMS",
    description: "Headless CMS built with TypeScript, Node.js, and MongoDB",
    longDescription:
      "Payload is a self-hosted headless CMS and application framework for developers. Extensible, secure, and made with TypeScript.",
    githubUrl: "https://github.com/payloadcms/payload",
    website: "https://payloadcms.com",
    tags: ["cms", "headless", "typescript", "mongodb"],
    category: ProjectCategory.Backend,
  },
  {
    name: "Saleor",
    description: "GraphQL-first e-commerce platform",
    longDescription:
      "Saleor is a high-performance, open-source e-commerce solution built with Python, GraphQL, and React. It’s headless and developer-friendly.",
    githubUrl: "https://github.com/saleor/saleor",
    website: "https://saleor.io",
    tags: ["ecommerce", "graphql", "react", "python"],
    category: ProjectCategory.Application,
  },
  {
    name: "Strapi",
    description: "The leading open-source headless CMS",
    longDescription:
      "Strapi is an open-source Node.js-based CMS that enables developers to manage and deliver content across any front-end platform.",
    githubUrl: "https://github.com/strapi/strapi",
    website: "https://strapi.io",
    tags: ["cms", "headless", "api", "backend"],
    category: ProjectCategory.Backend,
  },
  {
    name: "Mock Service Worker (MSW)",
    description: "API mocking for browser and Node.js",
    longDescription:
      "MSW is an API mocking library that intercepts requests using Service Worker in the browser or node interceptors in Node.js, perfect for testing.",
    githubUrl: "https://github.com/mswjs/msw",
    website: "https://mswjs.io",
    tags: ["testing", "mock", "api", "interceptor"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Playwright",
    description: "End-to-end testing framework by Microsoft",
    longDescription:
      "Playwright is a Node.js library to automate Chromium, Firefox and WebKit browsers with a single API. Ideal for modern end-to-end testing.",
    githubUrl: "https://github.com/microsoft/playwright",
    website: "https://playwright.dev",
    tags: ["e2e", "testing", "automation", "browser"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Testcontainers",
    description: "Integration testing with Docker containers",
    longDescription:
      "Testcontainers is a library that provides lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.",
    githubUrl: "https://github.com/testcontainers/testcontainers-node",
    website: "https://testcontainers.com",
    tags: ["testing", "integration", "docker", "backend"],
    category: ProjectCategory.DevOps,
    featured: false,
  },
  {
    name: "Redux",
    description: "Predictable state container for JavaScript apps",
    longDescription:
      "Redux is a popular state management library for JavaScript applications, often used with React for predictable state updates.",
    githubUrl: "https://github.com/reduxjs/redux",
    website: "https://redux.js.org",
    tags: ["state-management", "react", "javascript"],
    category: ProjectCategory.Library,
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development",
    longDescription:
      "Tailwind CSS provides low-level utility classes that let you build completely custom designs without leaving your HTML.",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    website: "https://tailwindcss.com",
    tags: ["css", "utility-first", "frontend", "design"],
    category: ProjectCategory.Frontend,
  },
  {
    name: "Vite",
    description: "Next generation frontend tooling",
    longDescription:
      "Vite is a fast frontend build tool and development server with native ES modules, supporting hot module replacement.",
    githubUrl: "https://github.com/vitejs/vite",
    website: "https://vitejs.dev",
    tags: ["build-tool", "frontend", "dev-server", "hot-reload"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    longDescription:
      "Express is the de facto standard server framework for Node.js, providing a robust set of features for web and mobile applications.",
    githubUrl: "https://github.com/expressjs/express",
    website: "https://expressjs.com",
    tags: ["backend", "nodejs", "web-framework"],
    category: ProjectCategory.Framework,
  },
  {
    name: "Jest",
    description: "Delightful JavaScript Testing Framework",
    longDescription:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity, supports snapshot testing, mocks, and parallel test running.",
    githubUrl: "https://github.com/facebook/jest",
    website: "https://jestjs.io",
    tags: ["testing", "javascript", "framework"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Prettier",
    description: "Opinionated code formatter",
    longDescription:
      "Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it.",
    githubUrl: "https://github.com/prettier/prettier",
    website: "https://prettier.io",
    tags: ["formatting", "tool", "javascript", "code-quality"],
    category: ProjectCategory.Tool,
  },
  {
    name: "ESLint",
    description: "Find and fix problems in your JavaScript code",
    longDescription:
      "ESLint statically analyzes your code to quickly find problems and enforce code style standards.",
    githubUrl: "https://github.com/eslint/eslint",
    website: "https://eslint.org",
    tags: ["linting", "javascript", "code-quality"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Webpack",
    description: "A static module bundler for modern JavaScript applications",
    longDescription:
      "Webpack bundles your JavaScript files along with CSS, images and more, enabling complex frontend applications.",
    githubUrl: "https://github.com/webpack/webpack",
    website: "https://webpack.js.org",
    tags: ["bundler", "frontend", "javascript"],
    category: ProjectCategory.Tool,
  },
  {
    name: "GraphQL",
    description: "A query language for your API",
    longDescription:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    githubUrl: "https://github.com/graphql/graphql-js",
    website: "https://graphql.org",
    tags: ["api", "query-language", "backend"],
    category: ProjectCategory.Backend,
  },
  {
    name: "Nx",
    description: "Smart, fast and extensible build system",
    longDescription:
      "Nx is a powerful build system with first class monorepo support and fast incremental builds.",
    githubUrl: "https://github.com/nrwl/nx",
    website: "https://nx.dev",
    tags: ["monorepo", "build-tool", "typescript", "workspace"],
    category: ProjectCategory.Tool,
  },
  {
    name: "Sucrose",
    description: "Sucrose Wallpaper Engine",
    longDescription:
      "Sucrose is a versatile wallpaper engine that brings life to your desktop with a wide range of interactive wallpapers.",
    githubUrl: "https://github.com/Taiizor/Sucrose",
    website: "https://taiizor.github.io/Sucrose",
    tags: ["windows", "wallpaper", "engine"],
    category: ProjectCategory.Application,
    featured: true,
  },
] as Project[];
