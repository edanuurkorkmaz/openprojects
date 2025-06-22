import { NextRequest, NextResponse } from "next/server";
import { getRepoData, getRepoContributors } from "@/lib/github";

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
    const [repoData, contributors] = await Promise.all([
      getRepoData(githubUrl),
      getRepoContributors(githubUrl, 12),
    ]);
    return NextResponse.json({ repoData, contributors });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
