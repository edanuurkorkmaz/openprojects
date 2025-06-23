"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid, Search, X } from "lucide-react";
import projects from "@/data/projects";
import { ProjectCard, ProjectCardSkeleton } from "@/components/project-card";
import { ProjectFilters } from "@/components/project-filters";
import { useDebounce } from "@/hooks/use-debounce";
import { Project } from "@/types/project";

// Get unique values for filters
const addProjectId = (project: Project, idx: number) => ({
  id: idx + 1,
  ...project,
});
const projectsWithIds = projects.map(addProjectId);
const uniqueTags = [...new Set(projectsWithIds.flatMap((p) => p.tags))].sort();

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // URL'den başlangıç değerlerini al
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags") ? searchParams.get("tags")!.split(",") : []
  );
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    setIsInitialLoading(false);
  }, []);

  const debouncedSearch = useDebounce(searchQuery, 300); // URL'i güncelleme fonksiyonu
  const updateURL = useCallback(() => {
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    }
    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }

    const paramString = params.toString();
    const newURL = paramString ? `/projects?${paramString}` : "/projects";

    // Sadece URL değiştiyse güncelle
    if (window.location.pathname + window.location.search !== newURL) {
      router.replace(newURL, { scroll: false });
    }
  }, [searchQuery, selectedTags, router]);

  // Filtreler değiştiğinde URL'i güncelle
  useEffect(() => {
    const timeoutId = setTimeout(updateURL, 500); // Debounce URL güncellemesi
    return () => clearTimeout(timeoutId);
  }, [updateURL]);
  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsWithIds; // Apply search filter
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase();
      filtered = filtered.filter((project) => {
        return (
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag: string) => tag.toLowerCase().includes(query))
        );
      });
    }

    // Apply tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        project.tags.some((tag: string) => selectedTags.includes(tag))
      );
    }

    return filtered;
  }, [debouncedSearch, selectedTags]); // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [debouncedSearch, selectedTags]);

  // Load More logic
  const loadMore = useCallback(() => {
    if (displayedItems >= filteredProjects.length) return;

    setIsLoading(true);
    setTimeout(() => {
      setDisplayedItems((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, filteredProjects.length)
      );
      setIsLoading(false);
    }, 500); // Simulate loading delay
  }, [displayedItems, filteredProjects]);

  const displayedProjects = filteredProjects.slice(0, displayedItems);
  const hasActiveFilters = selectedTags.length > 0;
  const clearAllFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
    router.replace("/projects", { scroll: false });
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                <Grid className="w-4 h-4 mr-2" />
                Tüm Projeler
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Proje Koleksiyonu
              </h1>{" "}
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {filteredProjects.length} açık kaynak projeyi keşfedin. Arama
                yapın, filtreleyin ve size uygun projeleri bulun.
              </p>
            </div>{" "}
            {/* Search and Controls */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Proje ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex justify-center">
                <ProjectFilters
                  tags={uniqueTags}
                  selectedTags={selectedTags}
                  onTagsChange={setSelectedTags}
                />

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearAllFilters}
                    className="ml-3"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Temizle
                  </Button>
                )}
              </div>

              {/* Active Filters Display */}
              {(hasActiveFilters || searchQuery) && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {" "}
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-1">
                      Arama: &quot;{searchQuery}&quot;
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => setSearchQuery("")}
                      />
                    </Badge>
                  )}
                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() =>
                          setSelectedTags((prev) =>
                            prev.filter((t) => t !== tag)
                          )
                        }
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {isInitialLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : displayedProjects.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-2xl font-semibold mb-2">Sonuç bulunamadı</h3>
              <p className="text-muted-foreground mb-6">
                Arama kriterlerinize uygun proje bulunamadı. Filtreleri
                değiştirmeyi deneyin.
              </p>
              <Button onClick={clearAllFilters}>
                <X className="w-4 h-4 mr-2" />
                Filtreleri Temizle
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={{
                      ...project,
                      website: project.website ?? undefined,
                    }}
                  />
                ))}
              </div>{" "}
              {/* Load More Button */}
              {displayedItems < filteredProjects.length && (
                <div className="text-center mt-16">
                  <Button onClick={loadMore} disabled={isLoading} size="lg">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Yükleniyor...</span>
                      </>
                    ) : (
                      `Daha Fazla Yükle (${
                        filteredProjects.length - displayedItems
                      } kaldı)`
                    )}
                  </Button>
                </div>
              )}
              {/* End of Results */}
              {displayedItems >= filteredProjects.length &&
                filteredProjects.length > ITEMS_PER_PAGE && (
                  <div className="text-center mt-16 py-8 border-t border-border/50">
                    <div className="text-muted-foreground">
                      🎉 Tüm {filteredProjects.length} proje gösterildi
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
