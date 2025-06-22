"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import projects from "@/data/projects";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CircleFlag } from "react-circle-flags";
import { useTranslations } from "next-intl";

// `projects.json` can either export the array directly **or**
// an object `{ projects: [...] }`.  Normalise so we always get an array.
const allProjects = Array.isArray(projects)
  ? projects
  : (projects as { projects: any[] }).projects ?? [];

export default function FeaturedPage() {
  const featuredProjects = allProjects.filter((project) => project.featured);
  const turkishFeatured = featuredProjects.filter(
    (project) => project.country === "TR"
  );
  const internationalFeatured = featuredProjects.filter(
    (project) => project.country !== "TR"
  );

  // Filtreleme için state'ler
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Dil seçeneklerini çıkar (featured projelerden)
  const languages = Array.from(
    new Set(featuredProjects.map((p) => p.language))
  ).sort();

  // Filtreleme fonksiyonu
  const filterProjects = (projects: any[]) => {
    return projects.filter((project) => {
      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.author.toLowerCase().includes(search.toLowerCase());

      const matchesLanguage =
        !selectedLanguage || project.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  };
  const filteredAll = filterProjects(featuredProjects);

  // Aktif filtreler
  const activeFilters = [
    search
      ? { label: `Arama: "${search}"`, onRemove: () => setSearch("") }
      : null,
    selectedLanguage
      ? {
          label: `Dil: ${selectedLanguage}`,
          onRemove: () => setSelectedLanguage(""),
        }
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
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex gap-3 items-center">
              <Input
                placeholder="Proje ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64"
              />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-background min-w-[120px]"
              >
                <option value="">Tüm Diller</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                {activeFilters.map((filter, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="flex items-center gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    onClick={filter.onRemove}
                  >
                    {filter.label}
                    <span className="ml-1 text-xs">✕</span>
                  </Badge>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearch("");
                    setSelectedLanguage("");
                  }}
                  className="h-6 px-2 text-xs"
                >
                  Tümünü Temizle
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
          <div className="text-center text-muted-foreground py-12">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">Sonuç bulunamadı</h3>
            <p>
              Kriterlere uygun proje bulunamadı. Filtreleri değiştirmeyi
              deneyin.
            </p>
          </div>
        )}
        {/* Empty State - Hiç featured proje yoksa */}
        {featuredProjects.length === 0 && (
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
