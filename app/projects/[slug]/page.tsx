import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, GitFork, Users } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import projects from "@/data/projects";
import { Project } from "@/types/project";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | undefined = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/github-data?githubUrl=${encodeURIComponent(project.githubUrl)}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching GitHub data:", error);
      return { repoData: null, contributors: [] };
    });

  const { repoData, contributors } = response;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>by {project.author}</span>
              </div>
            </div>
            {project.featured && (
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800"
              >
                ⭐ Featured
              </Badge>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">
                {repoData?.stargazers_count?.toLocaleString() ?? "0"}
              </span>
              <span className="text-muted-foreground">stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">
                {repoData?.forks_count?.toLocaleString() ?? "0"}
              </span>
              <span className="text-muted-foreground">forks</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold">{contributors.length}</span>
              <span className="text-muted-foreground">contributors</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Link>
            </Button>
            {project.website && (
              <Button asChild variant="outline" size="lg">
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Website
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>{" "}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Contributors */}
            {contributors.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Contributors ({contributors.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Individual contributor cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {contributors
                        .slice(0, 12)
                        .map((contributor: any, idx: number) => (
                          <Link
                            key={contributor.id || contributor.login || idx}
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <div className="flex flex-col items-center p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200 hover:scale-105 hover:shadow-md">
                              <img
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                className="w-12 h-12 rounded-full border-2 border-background shadow-sm group-hover:border-primary/50 transition-colors mb-2"
                              />
                              <div className="text-center">
                                <p className="text-xs font-medium truncate w-full group-hover:text-primary transition-colors">
                                  {contributor.login}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {contributor.contributions} commits
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>

                    <div className="text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link
                          href={`${project.githubUrl}/graphs/contributors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Users className="w-4 h-4 mr-2" />
                          View all Contributors
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Language
                  </div>
                  <div className="font-semibold">{project.language}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Last Updated
                  </div>
                  <div className="font-semibold">
                    {repoData?.updated_at
                      ? new Date(repoData.updated_at).toLocaleDateString(
                          "tr-TR"
                        )
                      : "-"}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Origin
                  </div>
                  <div className="font-semibold">
                    {project.country === "TR"
                      ? "🇹🇷 Turkey"
                      : "🌍 International"}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository
                  </Link>
                </Button>
                {project.website && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Official Website
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
