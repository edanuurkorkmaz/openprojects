"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X, Tag } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface ProjectFiltersProps {
  tags: string[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function ProjectFilters({
  tags,
  selectedTags,
  onTagsChange,
}: ProjectFiltersProps) {
  const [tagSearch, setTagSearch] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);
  const hasActiveFilters = selectedTags.length > 0;
  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  const clearAll = () => {
    onTagsChange([]);
    setTagSearch("");
  };

  const filteredTags = tags
    .filter((t): t is string => Boolean(t))
    .filter((t) => t.toLowerCase().includes(tagSearch.toLowerCase()));
  const tagsToShow = showAllTags ? filteredTags : filteredTags.slice(0, 20);

  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="lg" className="relative">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele{" "}
            {hasActiveFilters && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
              >
                {selectedTags.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>{" "}
        <PopoverContent className="w-80 p-0" align="end">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Etiket Filtreleri</h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearAll}>
                <X className="w-4 h-4 mr-1" />
                Temizle
              </Button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {/* Tags */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4" />
                <h4 className="font-medium">Etiketler</h4>
              </div>
              <Input
                placeholder="Etiket ara..."
                value={tagSearch}
                onChange={(e) => setTagSearch(e.target.value)}
                className="mb-2"
              />
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {tagsToShow.length === 0 && (
                  <div className="text-xs text-muted-foreground">Sonuç yok</div>
                )}
                {tagsToShow.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                    />
                    <label
                      htmlFor={`tag-${tag}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {tag}
                    </label>
                  </div>
                ))}
                {filteredTags.length > 20 && !showAllTags && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => setShowAllTags(true)}
                  >
                    Daha fazla göster
                  </Button>
                )}
                {showAllTags && filteredTags.length > 20 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => setShowAllTags(false)}
                  >
                    Daha az göster
                  </Button>
                )}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>{" "}
      {/* Active Filters */}
    </div>
  );
}
