export type Project = {
  name: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  website?: string;
  country?: string;
  author: string;
  sponsor?: string;
  featured?: boolean;
  tags: string[];
  category:
    | "Library"
    | "Framework"
    | "Tool"
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "DevOps"
    | "Database"
    | "Application"
    | "Other";
  language: string;
};
