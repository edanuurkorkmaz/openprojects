import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Country utilities
export function getCountryName(countryCode: string): string {
  const countries: Record<string, string> = {
    TR: "Turkey",
    US: "United States",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    JP: "Japan",
    CN: "China",
    IN: "India",
    BR: "Brazil",
    CA: "Canada",
    AU: "Australia",
    KR: "South Korea",
    NL: "Netherlands",
    SE: "Sweden",
    CH: "Switzerland",
    // Add more as needed
  };
  return countries[countryCode] || countryCode;
}

export function getCountryFlag(countryCode: string): string {
  const flags: Record<string, string> = {
    TR: "🇹🇷",
    US: "🇺🇸",
    GB: "🇬🇧",
    DE: "🇩🇪",
    FR: "🇫🇷",
    JP: "🇯🇵",
    CN: "🇨🇳",
    IN: "🇮🇳",
    BR: "🇧🇷",
    CA: "🇨🇦",
    AU: "🇦🇺",
    KR: "🇰🇷",
    NL: "🇳🇱",
    SE: "🇸🇪",
    CH: "🇨🇭",
    // Add more as needed
  };
  return flags[countryCode] || "🌍";
}

// GitHub utilities
export function getRepoInfo(githubUrl: string) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  const [, owner, repo] = match;
  return { owner, repo: repo.replace(/\.git$/, "") };
}
