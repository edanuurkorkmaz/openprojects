import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Sparkles,
  Crown,
  Award,
  Diamond,
  Medal,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { twMerge } from "tailwind-merge";
import { CircleFlag } from "react-circle-flags";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Project } from "@/types/project";

const { projects } = projectsData;

const featuredProjects = projects.filter((project) => project.featured);
const sponsorProjects = projects.filter((project) => project.sponsor);
export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("navigation");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t("title")}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                {t("title").split(" ").slice(0, 2).join(" ")}
                <br />
                <span className="text-primary">
                  {t("title").split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/submit">
                  <Github className="w-5 h-5 mr-2" />
                  {tNav("submit")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6 hover:bg-muted/50"
              >
                <Link href="/projects">{tNav("projects")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsor Projects */}
      {sponsorProjects.length > 0 && (
        <section className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-background to-secondary/5" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-2 border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
              >
                <Crown className="w-4 h-4 mr-2" />
                {t("sponsorProjects")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                {t("supportedProjects")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t("sponsoredDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsorProjects
                .sort((a, b) => {
                  const order: Record<string, number> = {
                    platinum: 0,
                    gold: 1,
                    silver: 2,
                  };
                  return (
                    order[a.sponsor!] - order[b.sponsor!] ||
                    a.name.localeCompare(b.name)
                  );
                })
                .map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="relative" id="featured">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex justify-between items-center mb-16">
              <div className="text-center space-y-4 w-full">
                <Badge variant="outline" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2 text-teal-500" />
                  {t("featuredProjects")}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t("featuredProjects")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("featuredDesc")}
                </p>
              </div>
              <div className="absolute right-0 top-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="px-4 py-2 text-sm"
                >
                  <Link href="/featured">{t("allFeatured")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-primary hover:text-white transition-colors w-12 h-12 text-2xl rounded-full flex items-center justify-center" />
                <CarouselContent className="-ml-4">
                  {featuredProjects.slice(0, 10).map((project) => (
                    <CarouselItem
                      key={project.name}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <ProjectCard
                        hideContributors
                        project={project}
                        className="h-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-primary hover:text-white transition-colors w-12 h-12 text-2xl rounded-full flex items-center justify-center" />
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* Add Your Project CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="bg-background/80 backdrop-blur-sm border border-border/20 rounded-3xl text-center shadow-lg">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-green-200 text-green-700 dark:border-green-800 dark:text-green-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("contribute")}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t("addProject")}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("addProjectDesc")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background rounded-xl shadow-xs border border-border/50">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{t("step1")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("step1Desc")}
                  </p>
                </div>

                <div className="p-6 bg-background rounded-xl shadow-xs border border-border/50">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <ExternalLink className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{t("step2")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("step2Desc")}
                  </p>
                </div>

                <div className="p-6 bg-background rounded-xl shadow-xs border border-border/50">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{t("step3")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("step3Desc")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg w-full px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href="/submit">
                    <Github className="w-5 h-5 mr-2" />
                    {tNav("submit")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
