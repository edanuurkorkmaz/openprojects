import { NextRequest, NextResponse } from "next/server";
import { getRepoContributors } from "@/lib/github";
import { getCachedData, setCachedData } from "@/lib/github-cache";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const githubUrl = searchParams.get("githubUrl");
  if (!githubUrl) {
    return NextResponse.json(
      { error: "githubUrl param required" },
      { status: 400 }
    );
  }

  try {
    // Cache kontrolü
    const cacheKey = `api-${githubUrl}`;
    const cachedResult = getCachedData(cacheKey);

    if (cachedResult) {
      return NextResponse.json(cachedResult);
    }

    // Sadece contributors verisi çekilecek, stars ve forks shields.io'dan gelecek
    const contributors = await getRepoContributors(githubUrl, 12);
    const result = { contributors };

    // Sonucu cache'le
    setCachedData(cacheKey, result);

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
