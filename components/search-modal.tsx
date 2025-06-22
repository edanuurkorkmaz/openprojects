"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Github, ExternalLink } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { getCountryFlag } from "@/lib/github";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  website?: string;
  language: string;
  author: string;
  tags: string[];
  country?: string;
  featured: boolean;
  sponsor: boolean;
}

interface SearchModalProps {
  projects: Project[];
}

export function SearchModal({ projects }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const t = useTranslations("search");
  const tNav = useTranslations("navigation");

  const filteredProjects = useMemo(() => {
    if (!debouncedSearch.trim()) return [];

    const query = debouncedSearch.toLowerCase();
    return projects
      .filter((project) => {
        return (
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.author.toLowerCase().includes(query) ||
          project.language.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .slice(0, 8); // Limit results
  }, [debouncedSearch, projects]);

  // Clear search when modal closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
    }
  }, [open]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto min-w-[300px] justify-start text-muted-foreground hover:text-foreground"
        >
          <Search className="w-4 h-4 mr-2" />
          Proje ara...
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Proje Ara
          </DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <Input
            placeholder="Proje adı, açıklama, yazar, dil veya etiket ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-lg py-6"
            autoFocus
          />
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {debouncedSearch.trim() === "" ? (
            <div className="p-6 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Proje aramaya başlayın</p>
              <p className="text-sm">
                Proje adı, açıklama, yazar, dil veya etiketlere göre arama
                yapabilirsiniz
              </p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Sonuç bulunamadı</p>
              <p className="text-sm">
                "{debouncedSearch}" için herhangi bir proje bulunamadı
              </p>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredProjects.length} sonuç bulundu
                </p>
                <Badge variant="outline" className="text-xs">
                  {debouncedSearch}
                </Badge>
              </div>

              <div className="space-y-3">
                {filteredProjects.map((project) => (
                  <div
                    key={project.name}
                    className="group p-4 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-muted/30 transition-all cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      // Navigate to project detail
                      window.location.href = `/projects/${project.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Github className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            by {project.author}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.country && (
                          <span className="text-lg">
                            {getCountryFlag(project.country)}
                          </span>
                        )}
                        {project.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                        {project.sponsor && (
                          <Badge variant="outline" className="text-xs">
                            Sponsor
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.language}
                        </Badge>
                        {project.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                            window.location.href = `/projects/${project.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`;
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length >= 8 && (
                <div className="text-center pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setOpen(false);
                      // Navigate to projects page with search query
                      window.location.href = `/projects?search=${encodeURIComponent(
                        debouncedSearch
                      )}`;
                    }}
                  >
                    {t("viewAllResults")}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
