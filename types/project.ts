export type Project = {
  name: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  website?: string;
  country?: string;
  author: string;
  sponsor?: ProjectSponsor;
  featured?: boolean;
  tags: string[];
  category: ProjectCategory;
  language: string;
};

export enum ProjectCategory {
  Library = "Library",
  Framework = "Framework",
  Tool = "Tool",
  Frontend = "Frontend",
  Backend = "Backend",
  Mobile = "Mobile",
  DevOps = "DevOps",
  Database = "Database",
  Application = "Application",
  Authentication = "Authentication",
  Other = "Other",
}

export enum ProjectSponsor {
  Platinum = "Platinum",
  Gold = "Gold",
  Silver = "Silver",
}
