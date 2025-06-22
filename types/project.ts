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
  category: string;
  language: string;
};
