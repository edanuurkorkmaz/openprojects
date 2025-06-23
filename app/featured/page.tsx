"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import projects from "@/data/projects";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Project } from "@/types/project";

const allProjects = Array.isArray(projects)
  ? projects
  : (projects as { projects: Project[] }).projects ?? [];

export default function FeaturedPage() {
  const featuredProjects = allProjects.filter((project) => project.featured);

  const [search, setSearch] = useState("");
  const filterProjects = (projects: Project[]) => {
    return projects.filter((project) => {
      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  };
  const filteredAll = filterProjects(featuredProjects);

  const activeFilters = [
    search
      ? { label: `Arama: "${search}"`, onRemove: () => setSearch("") }
      : null,
  ].filter((f): f is { label: string; onRemove: () => void } => Boolean(f));
  const t = useTranslations("featured");
  const tCommon = useTranslations("common");
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20">
              <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              {t("title")}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("subtitle")}
          </h1>{" "}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>
        {/* Filtreler ve Sekmeler */}
        <div className="mb-8 space-y-4">
          {/* Filters */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-3 w-full overflow-x-auto">
              <Input
                placeholder="Proje ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 min-w-0 max-w-[300px] mx-auto"
              />
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearch("");
                  }}
                  className="h-6 px-2 text-xs"
                >
                  Temizle
                </Button>
              </div>
            )}
          </div>
        </div>{" "}
        {filteredAll.length > 0 ? (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              <h2 className="text-2xl font-bold">
                🌟 {t("allFeaturedProjects")}
              </h2>
              <Badge variant="secondary" className="ml-2">
                {filteredAll.length} {tCommon("project")}
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAll.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="p-4 rounded-full bg-muted/50 w-fit mx-auto mb-4">
                <Award className="w-16 h-16 text-muted-foreground/50" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Henüz seçili proje yok
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Editörün seçimi projeleri yakında burada görünecek. Bu arada tüm
                projeleri inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Tüm Projeleri Görüntüle
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/submit">
                  <Award className="w-5 h-5 mr-2" />
                  Proje Öner
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
