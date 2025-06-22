interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  description: string;
  homepage: string;
  language: string;
  created_at: string;
  updated_at: string;
  topics: string[];
}

interface GitHubContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface GitHubReadme {
  content: string;
  encoding: string;
}

export async function getRepoData(
  githubUrl: string
): Promise<GitHubRepo | null> {
  try {
    // Extract owner and repo from GitHub URL
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, "");

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepo}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `Failed to fetch repo data for ${owner}/${cleanRepo}:`,
        response.status
      );
      return null;
    }

    // Safe-parse JSON – fall back to null
    let data: GitHubRepo | null = null;
    try {
      data = (await response.json()) as GitHubRepo;
    } catch {
      console.warn(`Non-JSON repo response for ${owner}/${cleanRepo}`);
    }
    return data;
  } catch (error) {
    console.error("Error fetching repo data:", error);
    return null;
  }
}

export async function getRepoContributors(
  githubUrl: string,
  limit = 5
): Promise<GitHubContributor[]> {
  try {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return [];

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, "");

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepo}/contributors?per_page=${limit}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: {
          revalidate: 7200, // Cache for 2 hours
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `Failed to fetch contributors for ${owner}/${cleanRepo}:`,
        response.status
      );
      return [];
    }

    let parsed: GitHubContributor[] = [];
    try {
      parsed = (await response.json()) as GitHubContributor[];
    } catch {
      console.warn(`Non-JSON contributors response for ${owner}/${cleanRepo}`);
    }
    return parsed;
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
}

export async function getRepoReadme(githubUrl: string): Promise<string | null> {
  try {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, "");

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: {
          revalidate: 86400, // Cache for 24 hours (README doesn't change often)
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `Failed to fetch README for ${owner}/${cleanRepo}:`,
        response.status
      );
      return null;
    }

    let readmeData: GitHubReadme | null = null;
    try {
      readmeData = (await response.json()) as GitHubReadme;
    } catch {
      console.warn(`Non-JSON README response for ${owner}/${cleanRepo}`);
      return null;
    }

    if (!readmeData) return null;

    // Decode base64 content
    try {
      const decodedContent = Buffer.from(readmeData.content, "base64").toString(
        "utf-8"
      );
      return decodedContent;
    } catch {
      console.warn(`Failed to decode README content for ${owner}/${cleanRepo}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching README:", error);
    return null;
  }
}

export function getCountryFlag(countryCode?: string): string {
  const flags: Record<string, string> = {
    TR: "🇹🇷",
    US: "🇺🇸",
    GB: "🇬🇧",
    DE: "🇩🇪",
    FR: "🇫🇷",
    CN: "🇨🇳",
    JP: "🇯🇵",
    KR: "🇰🇷",
    IN: "🇮🇳",
    CA: "🇨🇦",
    AU: "🇦🇺",
    BR: "🇧🇷",
    RU: "🇷🇺",
    NL: "🇳🇱",
    SE: "🇸🇪",
    NO: "🇳🇴",
    FI: "🇫🇮",
    DK: "🇩🇰",
  };

  return countryCode ? flags[countryCode] || "🌍" : "🌍";
}

export function getCountryName(countryCode?: string): string {
  const countries: Record<string, string> = {
    TR: "Türkiye",
    US: "United States",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    CN: "China",
    JP: "Japan",
    KR: "South Korea",
    IN: "India",
    CA: "Canada",
    AU: "Australia",
    BR: "Brazil",
    RU: "Russia",
    NL: "Netherlands",
    SE: "Sweden",
    NO: "Norway",
    FI: "Finland",
    DK: "Denmark",
  };

  return countryCode
    ? countries[countryCode] || "International"
    : "International";
}

export function extractRepoInfo(
  githubUrl: string
): { owner: string; repo: string } | null {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;

  const [, owner, repo] = match;
  return { owner, repo: repo.replace(/\.git$/, "") };
}
