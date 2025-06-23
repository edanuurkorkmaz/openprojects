import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  GitFork,
  Github,
  Star,
  Users,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import { Project } from "@/types/project";
import { getRepoInfo } from "@/lib/utils";
import Image from "next/image";

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

  const repoInfo = getRepoInfo(project.githubUrl);

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
                <span>by {repoInfo?.owner}</span>
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
          </div>{" "}
          {/* Stats */}
          <div className="flex gap-6 mb-6">
            {repoInfo && (
              <>
                <div className="flex items-center gap-2">
                  <Badge variant={"secondary"}>
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Image
                      src={`https://img.shields.io/github/stars/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=rgba(0%2C0%2C0%2C0)`}
                      alt="GitHub stars"
                      width={50}
                      height={10}
                      className="h-7"
                    />
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={"secondary"}>
                    <GitFork className="w-4 h-4" />
                    <Image
                      src={`https://img.shields.io/github/forks/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=rgba(0%2C0%2C0%2C0)`}
                      alt="GitHub forks"
                      width={50}
                      height={10}
                      className="h-7"
                    />
                  </Badge>
                </div>{" "}
                <div className="flex items-center gap-2">
                  <Badge variant={"secondary"}>
                    <Users2 className="w-4 h-4" />
                    <Image
                      src={`https://img.shields.io/github/contributors/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=rgba(0%2C0%2C0%2C0)`}
                      alt="GitHub contributors"
                      width={50}
                      height={10}
                      className="h-7"
                    />
                  </Badge>
                </div>
              </>
            )}
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
            </Card>{" "}
            {/* Contributors */}
            {repoInfo && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Contrib.rocks image */}
                    <div className="flex justify-center">
                      <img
                        src={`https://contrib.rocks/image?repo=${repoInfo.owner}/${repoInfo.repo}&max=500&columns=20&anon=1`}
                        alt="Contributors"
                        className="rounded-lg shadow-sm"
                      />
                    </div>

                    <div className="text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link
                          href={`${project.githubUrl}/contributors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Users className="w-4 h-4 mr-2" />
                          View All Contributors
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
                    Last Updated
                  </div>
                  <div className="font-semibold">
                    {repoInfo && (
                      <img
                        src={`https://img.shields.io/github/last-commit/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=blue&labelColor=gray`}
                        alt="Last commit"
                        className="h-5"
                      />
                    )}
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
