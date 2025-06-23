"use client";
import { useEffect, useState } from "react";
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
    Star,
    Sparkles,
    Crown,
    GitFork,
    Folder,
    Diamond,
    Medal,
    Award,
} from "lucide-react";
import Link from "next/link";
import { getCountryFlag, getCountryName } from "@/lib/github";
import { ContributorStack } from "./contributor-stack";
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

interface ProjectCardProps {
    project: Project;
    className?: string;
    hideContributors?: boolean;
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
        "AI/ML":
            "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
        Tools: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
        Mobile: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
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

export function ProjectCard({
    project,
    hideContributors = false,
    className = "",
}: ProjectCardProps) {
    const [repoData, setRepoData] = useState<any>(null);
    const [contributors, setContributors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const t = useTranslations("projectCard");
    const tCommon = useTranslations("common");

    useEffect(() => {
        setLoading(true);
        fetch(
            `/api/github-data?githubUrl=${encodeURIComponent(
                project.githubUrl
            )}`
        )
            .then((res) => res.json())
            .then((data) => {
                setRepoData(data.repoData);
                setContributors(
                    Array.isArray(data.contributors) ? data.contributors : []
                );
            })
            .finally(() => setLoading(false));
    }, [project.githubUrl]);

    const cardClasses = {
        default:
            "group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 dark:bg-slate-900/80 hover:-translate-y-1",
        featured:
            "group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50/90 to-cyan-100/90 dark:from-blue-950/70 dark:to-cyan-950/70 hover:-translate-y-1 ring-2 ring-blue-300 dark:ring-cyan-700",
        sponsor:
            "group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50/90 to-emerald-100/90 dark:from-teal-950/70 dark:to-emerald-950/70 hover:-translate-y-1 ring-2 ring-teal-300 dark:ring-emerald-700",
    };

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
                                            <TooltipContent>
                                                {t("featuredProject")}
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {project.sponsor && (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Badge variant={"secondary"}>
                                                    {project.sponsor ===
                                                        ProjectSponsor.Platinum && (
                                                        <Diamond className="w-4 h-4 text-blue-500" />
                                                    )}
                                                    {project.sponsor ===
                                                        ProjectSponsor.Gold && (
                                                        <Medal className="w-4 h-4 text-yellow-500" />
                                                    )}
                                                    {project.sponsor ===
                                                        ProjectSponsor.Silver && (
                                                        <Award className="w-4 h-4 text-gray-400" />
                                                    )}
                                                </Badge>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {t("sponsorProject")} -{" "}
                                                {project.sponsor?.toUpperCase()}
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
                                    href={
                                        "https://github.com/" + project.author
                                    }
                                >
                                    {project.author}
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
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            {!loading && repoData && (
                                <div className="flex flex-wrap gap-2 items-center justify-end text-sm">
                                    <Badge>
                                        <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                                        {repoData.stargazers_count?.toLocaleString() ??
                                            "0"}
                                    </Badge>
                                    <Badge>
                                        <GitFork className="w-3.5 h-3.5" />
                                        {repoData.forks_count?.toLocaleString() ??
                                            "0"}
                                    </Badge>
                                </div>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2 truncate leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="font-medium">
                            {project.language}
                        </Badge>
                        {project.tags.slice(0, 2).map((tag: string) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                            >
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.tags.length - 2}
                            </Badge>
                        )}
                    </div>

                    {/* Contributors */}
                    {!hideContributors && (
                        <div className="flex items-center gap-2 pt-2 border-t border-border/50 mt-2">
                            <span className="text-xs text-muted-foreground font-medium mr-1">
                                {t("contributors")}
                            </span>
                            {contributors.length > 0 && (
                                <div className="flex -space-x-2">
                                    {contributors
                                        .slice(0, 8)
                                        .map(
                                            (contributor: any, idx: number) => (
                                                <a
                                                    key={
                                                        contributor.id ||
                                                        contributor.login ||
                                                        idx
                                                    }
                                                    href={contributor.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <img
                                                        src={
                                                            contributor.avatar_url
                                                        }
                                                        alt={contributor.login}
                                                        className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 shadow-sm hover:z-10 transition-transform hover:scale-110"
                                                        title={
                                                            contributor.login
                                                        }
                                                    />
                                                </a>
                                            )
                                        )}

                                    <Button
                                        size={"sm"}
                                        asChild
                                        className="px-2 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border-2 border-white dark:border-slate-900 ml-1"
                                    >
                                        <Link
                                            href={`${project.githubUrl}/contributors`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {tCommon("viewAll")}
                                        </Link>
                                    </Button>
                                </div>
                            )}
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
