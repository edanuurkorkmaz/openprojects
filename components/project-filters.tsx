"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X, Globe, Code, Tag } from "lucide-react";
import { getCountryFlag, getCountryName } from "@/lib/github";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface ProjectFiltersProps {
  languages: string[];
  countries: string[];
  tags: string[];
  selectedLanguages: string[];
  selectedCountries: string[];
  selectedTags: string[];
  onLanguagesChange: (languages: string[]) => void;
  onCountriesChange: (countries: string[]) => void;
  onTagsChange: (tags: string[]) => void;
}

export function ProjectFilters({
  languages,
  countries,
  tags,
  selectedLanguages,
  selectedCountries,
  selectedTags,
  onLanguagesChange,
  onCountriesChange,
  onTagsChange,
}: ProjectFiltersProps) {
  const [langSearch, setLangSearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);
  const hasActiveFilters =
    selectedLanguages.length > 0 ||
    selectedCountries.length > 0 ||
    selectedTags.length > 0;

  const toggleLanguage = (language: string) => {
    const newLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    onLanguagesChange(newLanguages);
  };

  const toggleCountry = (country: string) => {
    const newCountries = selectedCountries.includes(country)
      ? selectedCountries.filter((c) => c !== country)
      : [...selectedCountries, country];
    onCountriesChange(newCountries);
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  const clearAll = () => {
    onLanguagesChange([]);
    onCountriesChange([]);
    onTagsChange([]);
    setLangSearch("");
    setCountrySearch("");
    setTagSearch("");
  };

  const filteredLanguages = languages.filter((l) =>
    l.toLowerCase().includes(langSearch.toLowerCase())
  );
  const filteredCountries = countries.filter((c) =>
    getCountryName(c).toLowerCase().includes(countrySearch.toLowerCase())
  );
  const filteredTags = tags.filter((t) =>
    t.toLowerCase().includes(tagSearch.toLowerCase())
  );
  const tagsToShow = showAllTags ? filteredTags : filteredTags.slice(0, 20);

  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="lg" className="relative">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele
            {hasActiveFilters && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
              >
                {selectedLanguages.length +
                  selectedCountries.length +
                  selectedTags.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="end">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Filtreler</h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearAll}>
                <X className="w-4 h-4 mr-1" />
                Temizle
              </Button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {/* Languages */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" />
                <h4 className="font-medium">Programlama Dili</h4>
              </div>
              <Input
                placeholder="Dil ara..."
                value={langSearch}
                onChange={(e) => setLangSearch(e.target.value)}
                className="mb-2"
              />
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {filteredLanguages.length === 0 && (
                  <div className="text-xs text-muted-foreground">Sonuç yok</div>
                )}
                {filteredLanguages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`lang-${language}`}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={() => toggleLanguage(language)}
                    />
                    <label
                      htmlFor={`lang-${language}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4" />
                <h4 className="font-medium">Ülke</h4>
              </div>
              <Input
                placeholder="Ülke ara..."
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                className="mb-2"
              />
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {filteredCountries.length === 0 && (
                  <div className="text-xs text-muted-foreground">Sonuç yok</div>
                )}
                {filteredCountries.map((country) => (
                  <div key={country} className="flex items-center space-x-2">
                    <Checkbox
                      id={`country-${country}`}
                      checked={selectedCountries.includes(country)}
                      onCheckedChange={() => toggleCountry(country)}
                    />
                    <label
                      htmlFor={`country-${country}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center gap-2"
                    >
                      <span>{getCountryFlag(country)}</span>
                      {getCountryName(country)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

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
      </Popover>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedLanguages.map((language) => (
            <Badge key={language} variant="secondary" className="gap-1">
              {language}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive"
                onClick={() => toggleLanguage(language)}
              />
            </Badge>
          ))}
          {selectedCountries.map((country) => (
            <Badge key={country} variant="secondary" className="gap-1">
              {getCountryFlag(country)} {getCountryName(country)}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive"
                onClick={() => toggleCountry(country)}
              />
            </Badge>
          ))}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              {tag}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive"
                onClick={() => toggleTag(tag)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
