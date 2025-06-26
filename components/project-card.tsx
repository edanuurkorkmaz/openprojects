"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Sparkles,
  Folder,
  Diamond,
  Medal,
  Award,
  Star,
  GitFork,
} from "lucide-react";
import Link from "next/link";
import { getCountryName, getRepoInfo } from "@/lib/utils";
import { motion } from "framer-motion";
import { CircleFlag } from "react-circle-flags";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { Project, ProjectSponsor } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Frontend:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    Backend:
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    Framework:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    Library:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    "AI/ML": "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
    Tools: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
    Mobile:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
    DevOps: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    Database:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    Security:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  );
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const t = useTranslations("projectCard");

  const repoInfo = getRepoInfo(project.githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`h-full ${className}`}
    >
      <Card className={`rounded-2xl flex flex-col `}>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${project.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <CardTitle className="text-lg group-hover:text-primary transition-colors cursor-pointer">
                    {project.name}
                  </CardTitle>
                </Link>
                <TooltipProvider>
                  {project.featured && (
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge variant="secondary">
                          <Sparkles className="w-4 h-4 text-teal-500" />
                        </Badge>
                      </TooltipTrigger>{" "}
                      <TooltipContent>{t("featuredProject")}</TooltipContent>
                    </Tooltip>
                  )}
                  {project.sponsor && (
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge variant={"secondary"}>
                          {project.sponsor === ProjectSponsor.Platinum && (
                            <Diamond className="w-4 h-4 text-blue-500" />
                          )}
                          {project.sponsor === ProjectSponsor.Gold && (
                            <Medal className="w-4 h-4 text-yellow-500" />
                          )}
                          {project.sponsor === ProjectSponsor.Silver && (
                            <Award className="w-4 h-4 text-gray-400" />
                          )}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        {t("sponsorProject")} - {project.sponsor?.toUpperCase()}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </div>{" "}
              <CardDescription className="text-sm line-clamp-1">
                {t("by")}
                <Link
                  target="_blank"
                  className="ml-1 hover:underline"
                  href={"https://github.com/" + repoInfo?.owner}
                >
                  {repoInfo?.owner}
                </Link>
              </CardDescription>
              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <Link
                  href={`/categories/${project.category
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}`}
                >
                  <Badge
                    className={`font-medium cursor-pointer hover:opacity-80 transition-opacity ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    <Folder className="w-3 h-3 mr-1" />
                    {project.category}
                  </Badge>
                </Link>
                {project.country && (
                  <div className="inline-flex items-center gap-1">
                    <CircleFlag
                      countryCode={project.country.toLowerCase()}
                      height={16}
                      width={16}
                    />
                    <span className="text-xs text-muted-foreground">
                      {getCountryName(project.country)}
                    </span>
                  </div>
                )}
              </div>
            </div>{" "}
            <div className="flex flex-col items-end gap-2">
              {repoInfo && (
                <div className="flex flex-col gap-2 items-center justify-end">
                  <Badge className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100" >
                    <Star className="fill-yellow-500 text-yellow-500 w-4 h-4" />
                    <Image
                      src={`https://img.shields.io/github/stars/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=rgba(0%2C0%2C0%2C0)`}
                      alt="GitHub stars"
                      width={50}
                      height={10}
                    />
                  </Badge>
                  <Badge className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <GitFork className="w-4 h-4" />
                    <Image
                      src={`https://img.shields.io/github/forks/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&label=&color=rgba(0%2C0%2C0%2C0)`}
                      alt="GitHub forks"
                      width={50}
                      height={10}
                    />
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2 truncate leading-relaxed">
            {project.description}
          </p>{" "}
          <div className="flex flex-wrap gap-2">
            {repoInfo && (
              <img
                src={`https://img.shields.io/github/languages/top/${repoInfo.owner}/${repoInfo.repo}?style=for-the-badge&color=gray&labelColor=gray`}
                alt="GitHub language"
                className="h-5"
              />
            )}
            {project.tags.slice(0, 2).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 2}
              </Badge>
            )}{" "}
          </div>
          {/* Contributors - contrib.rocks */}
          {repoInfo && (
            <div className="flex items-center gap-2 pt-2 border-t border-border/50 mt-2">
              <span className="text-xs text-muted-foreground font-medium mr-1">
                {t("contributors")}
              </span>
              <div className="flex items-center">
                <img
                  src={`https://contrib.rocks/image?repo=${repoInfo.owner}/${repoInfo.repo}&max=8&columns=8`}
                  alt="Contributors"
                  className="h-6 rounded-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          )}
          <div className="flex gap-2 pt-2">
            <Button
              asChild
              size="sm"
              className="flex-1 group-hover:shadow-md transition-shadow"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                {t("github")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="group-hover:border-primary/30 transition-colors"
            >
              <Link
                href={`/projects/${project.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {t("details")}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectCardSkeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card
      className={`rounded-2xl flex flex-col h-full animate-pulse ${className}`}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-4 w-16 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="flex items-center gap-2 pt-2 border-t border-border/50 mt-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <div className="flex -space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
