"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Grid,
  Search,
  SortAsc,
  SortDesc,
  X,
  Command as CommandIcon,
  Github,
  ExternalLink,
} from "lucide-react";
import projects from "@/data/projects";
import { ProjectCard, ProjectCardSkeleton } from "@/components/project-card";
import { ProjectFilters } from "@/components/project-filters";
import { useDebounce } from "@/hooks/use-debounce";
import { CircleFlag } from "react-circle-flags";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Get unique values for filters
const addProjectId = (project: any, idx: number) => ({
  id: idx + 1,
  ...project,
});
const projectsWithIds = projects.map(addProjectId);
const uniqueLanguages = [
  ...new Set(projectsWithIds.map((p) => p.language)),
].sort();
const uniqueCountries = [
  ...new Set(projectsWithIds.map((p) => p.country).filter(Boolean)),
].sort();
const uniqueTags = [...new Set(projectsWithIds.flatMap((p) => p.tags))].sort();

const ITEMS_PER_PAGE = 6;

type SortOption = "name" | "stars" | "date" | "language" | "author";
type SortDirection = "asc" | "desc";

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL'den başlangıç değerlerini al
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [commandOpen, setCommandOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.get("sortBy") as SortOption) || "name"
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    (searchParams.get("sortDirection") as SortDirection) || "asc"
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    searchParams.get("languages")
      ? searchParams.get("languages")!.split(",")
      : []
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    searchParams.get("countries")
      ? searchParams.get("countries")!.split(",")
      : []
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

  const debouncedSearch = useDebounce(searchQuery, 300);

  // URL'i güncelleme fonksiyonu
  const updateURL = useCallback(() => {
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    }
    if (sortBy !== "name") {
      params.set("sortBy", sortBy);
    }
    if (sortDirection !== "asc") {
      params.set("sortDirection", sortDirection);
    }
    if (selectedLanguages.length > 0) {
      params.set("languages", selectedLanguages.join(","));
    }
    if (selectedCountries.length > 0) {
      params.set("countries", selectedCountries.join(","));
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
  }, [
    searchQuery,
    sortBy,
    sortDirection,
    selectedLanguages,
    selectedCountries,
    selectedTags,
    router,
  ]);

  // Filtreler değiştiğinde URL'i güncelle
  useEffect(() => {
    const timeoutId = setTimeout(updateURL, 500); // Debounce URL güncellemesi
    return () => clearTimeout(timeoutId);
  }, [updateURL]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projectsWithIds;

    // Apply search filter
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase();
      filtered = filtered.filter((project) => {
        return (
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.author.toLowerCase().includes(query) ||
          project.language.toLowerCase().includes(query) ||
          project.tags.some((tag: string) => tag.toLowerCase().includes(query))
        );
      });
    }

    // Apply language filter
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((project) =>
        selectedLanguages.includes(project.language)
      );
    }

    // Apply country filter
    if (selectedCountries.length > 0) {
      filtered = filtered.filter(
        (project) =>
          project.country && selectedCountries.includes(project.country)
      );
    }

    // Apply tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        project.tags.some((tag: string) => selectedTags.includes(tag))
      );
    }

    // Sort projects
    const sorted = [...filtered].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "stars":
          // Shields.io kullanan projeler için mock star count
          aValue = a.id * 1000 + Math.random() * 5000;
          bValue = b.id * 1000 + Math.random() * 5000;
          break;
        case "date":
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
        case "language":
          aValue = a.language.toLowerCase();
          bValue = b.language.toLowerCase();
          break;
        case "author":
          aValue = a.author.toLowerCase();
          bValue = b.author.toLowerCase();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [
    debouncedSearch,
    selectedLanguages,
    selectedCountries,
    selectedTags,
    sortBy,
    sortDirection,
  ]);

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [
    debouncedSearch,
    selectedLanguages,
    selectedCountries,
    selectedTags,
    sortBy,
    sortDirection,
  ]);

  // Load More logic
  const loadMore = useCallback(() => {
    if (displayedItems >= filteredAndSortedProjects.length) return;

    setIsLoading(true);
    setTimeout(() => {
      setDisplayedItems((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, filteredAndSortedProjects.length)
      );
      setIsLoading(false);
    }, 500); // Simulate loading delay
  }, [displayedItems, filteredAndSortedProjects]);

  const displayedProjects = filteredAndSortedProjects.slice(0, displayedItems);
  const hasActiveFilters =
    selectedLanguages.length > 0 ||
    selectedCountries.length > 0 ||
    selectedTags.length > 0;
  const clearAllFilters = () => {
    setSelectedLanguages([]);
    setSelectedCountries([]);
    setSelectedTags([]);
    setSearchQuery("");
    setSortBy("name");
    setSortDirection("asc");
    router.replace("/projects", { scroll: false });
  };

  const toggleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  // Command search için filtered projects
  const commandFilteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return projectsWithIds
      .filter((project) => {
        return (
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.author.toLowerCase().includes(query) ||
          project.language.toLowerCase().includes(query) ||
          project.tags.some((tag: string) => tag.toLowerCase().includes(query))
        );
      })
      .slice(0, 8); // En fazla 8 sonuç göster
  }, [searchQuery]);

  // Command search'ten proje seçimi
  const handleProjectSelect = (project: any) => {
    setCommandOpen(false);
    // Mevcut filtreleri koruyarak proje sayfasına git
    const currentParams = new URLSearchParams(window.location.search);
    const projectURL = `/projects/${project.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    if (currentParams.toString()) {
      window.open(`${projectURL}?${currentParams.toString()}`, "_blank");
    } else {
      window.open(projectURL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Command Search Modal */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput
          placeholder="Proje ara..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
          {commandFilteredProjects.length > 0 && (
            <CommandGroup heading="Projeler">
              {commandFilteredProjects.map((project) => (
                <CommandItem
                  key={project.id}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted"
                  onSelect={() => handleProjectSelect(project)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <Github className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{project.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.language}
                    </Badge>
                    {project.country && (
                      <CircleFlag
                        countryCode={project.country.toLowerCase()}
                        height={16}
                        width={16}
                      />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          <CommandSeparator />
          <CommandGroup heading="Eylemler">
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                window.location.href = "/projects";
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Tüm projeleri görüntüle</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                window.location.href = "/submit";
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Yeni proje ekle</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

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
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {filteredAndSortedProjects.length} açık kaynak projeyi keşfedin.
                Arama yapın, filtreleyin ve size uygun projeleri bulun.
              </p>
            </div>{" "}
            {/* Search and Controls */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Command Search Button */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal py-6 text-lg bg-background hover:bg-muted/50 border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors"
                  onClick={() => setCommandOpen(true)}
                >
                  <Search className="mr-3 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Proje ara...</span>
                </Button>
              </div>

              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                {/* Sort Controls */}
                <div className="flex items-center gap-3">
                  <Select
                    value={sortBy}
                    onValueChange={(value: SortOption) => setSortBy(value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sırala" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">İsim</SelectItem>
                      <SelectItem value="stars">Yıldız Sayısı</SelectItem>
                      <SelectItem value="date">Tarih</SelectItem>
                      <SelectItem value="language">Dil</SelectItem>
                      <SelectItem value="author">Yazar</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" size="icon" onClick={toggleSort}>
                    {sortDirection === "asc" ? (
                      <SortAsc className="w-4 h-4" />
                    ) : (
                      <SortDesc className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Filter Controls */}
                <div className="flex items-center gap-3">
                  <ProjectFilters
                    languages={uniqueLanguages}
                    countries={uniqueCountries}
                    tags={uniqueTags}
                    selectedLanguages={selectedLanguages}
                    selectedCountries={selectedCountries}
                    selectedTags={selectedTags}
                    onLanguagesChange={setSelectedLanguages}
                    onCountriesChange={setSelectedCountries}
                    onTagsChange={setSelectedTags}
                  />

                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearAllFilters}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Temizle
                    </Button>
                  )}
                </div>
              </div>

              {/* Active Filters Display */}
              {(hasActiveFilters || searchQuery) && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-1">
                      Arama: "{searchQuery}"
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => setSearchQuery("")}
                      />
                    </Badge>
                  )}
                  {selectedLanguages.map((language) => (
                    <Badge key={language} variant="secondary" className="gap-1">
                      {language}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() =>
                          setSelectedLanguages((prev) =>
                            prev.filter((l) => l !== language)
                          )
                        }
                      />
                    </Badge>
                  ))}
                  {selectedCountries.map((country) => (
                    <Badge
                      key={country}
                      variant="secondary"
                      className="gap-1 items-center flex"
                    >
                      <CircleFlag
                        countryCode={country.toLowerCase()}
                        height={16}
                        width={16}
                        className="mr-1"
                      />
                      {country}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() =>
                          setSelectedCountries((prev) =>
                            prev.filter((c) => c !== country)
                          )
                        }
                      />
                    </Badge>
                  ))}
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
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>{filteredAndSortedProjects.length} Sonuç</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{displayedItems} Gösterilen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>{sortBy} ile sıralı</span>
              </div>
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
              </div>

              {/* Load More Button */}
              {displayedItems < filteredAndSortedProjects.length && (
                <div className="text-center mt-16">
                  <Button onClick={loadMore} disabled={isLoading} size="lg">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Yükleniyor...</span>
                      </>
                    ) : (
                      `Daha Fazla Yükle (${
                        filteredAndSortedProjects.length - displayedItems
                      } kaldı)`
                    )}
                  </Button>
                </div>
              )}

              {/* End of Results */}
              {displayedItems >= filteredAndSortedProjects.length &&
                filteredAndSortedProjects.length > ITEMS_PER_PAGE && (
                  <div className="text-center mt-16 py-8 border-t border-border/50">
                    <div className="text-muted-foreground">
                      🎉 Tüm {filteredAndSortedProjects.length} proje gösterildi
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
