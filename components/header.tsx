"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Moon, Sun, Award, Search, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CircleFlag } from "react-circle-flags";
import projects from "@/data/projects";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  // Translations
  const t = useTranslations();

  // Command search için filtered projects
  const commandFilteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag: string) => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // Keyboard shortcut için
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.addEventListener("keydown", down);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Command Search Modal */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput
          placeholder={t("commands.searchProjects")}
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>{t("commands.noResults")}</CommandEmpty>
          {commandFilteredProjects?.length > 0 && (
            <CommandGroup heading={t("commands.projects")}>
              {commandFilteredProjects.map((project) => (
                <CommandItem
                  key={project.name}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted"
                  onSelect={() => {
                    setCommandOpen(false);
                    setSearchQuery("");
                    window.open(
                      `/projects/${project.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`,
                      "_blank"
                    );
                  }}
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
          <CommandGroup heading={t("commands.pages")}>
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                setSearchQuery("");
                window.location.href = "/projects";
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>{t("commands.allProjects")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                setSearchQuery("");
                window.location.href = "/featured";
              }}
            >
              <Award className="mr-2 h-4 w-4" />
              <span>{t("commands.featuredProjects")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                setSearchQuery("");
                window.location.href = "/submit";
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>{t("navigation.submit")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setCommandOpen(false);
                setSearchQuery("");
                window.location.href = "/categories";
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>{t("commands.categories")}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <header className="sticky top-0 z-50 flex h-24 w-full items-center transition-all duration-300">
        <div
          className={twMerge(
            "container mx-auto flex items-center justify-between px-4 transition-all duration-300",
            isScrolled
              ? "h-16 max-w-screen-xl rounded-2xl border bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60"
              : "h-20 max-w-7xl"
          )}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <div>
              <Image
                src={"/logo.png"}
                alt="Open Projects Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
            </div>{" "}
            <div className="flex flex-col">
              <span className="font-bold text-md bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                OpenProjects
              </span>
              <span className="text-xs text-muted-foreground">/v1.0.0</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCommandOpen(true)}
              className="flex items-center gap-2 hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">{t("navigation.search")}</span>
              <CommandShortcut className="ml-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </CommandShortcut>
            </Button>
            <Link
              href="/featured"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-500" />
              {t("navigation.featured")}
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("navigation.projects")}
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("navigation.categories")}
            </Link>
            <Link
              href="/submit"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("navigation.submit")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t("navigation.about")}
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCommandOpen(true)}
              className="md:hidden hover:bg-muted/80"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-muted/80"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex hover:bg-muted/80"
            >
              <Link
                href="https://github.com/furkanczay/openprojects"
                target="_blank"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative h-8 w-8 text-foreground"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  style={{
                    left: "50%",
                    top: "35%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  className="absolute h-0.5 w-5 bg-current"
                  variants={{
                    open: { rotate: 45, y: 4 },
                    closed: { rotate: 0, y: 0 },
                  }}
                />
                <motion.span
                  style={{
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  className="absolute h-0.5 w-5 bg-current"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 },
                  }}
                />
                <motion.span
                  style={{
                    left: "50%",
                    top: "65%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  className="absolute h-0.5 w-5 bg-current"
                  variants={{
                    open: { rotate: -45, y: -4 },
                    closed: { rotate: 0, y: 0 },
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-lg md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="mt-16 flex flex-col items-center space-y-6 pt-8 text-lg"
              >
                <Link
                  href="/featured"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.featured")}
                </Link>
                <Link
                  href="/projects"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.projects")}
                </Link>
                <Link
                  href="/categories"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.categories")}
                </Link>
                <Link
                  href="/submit"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.submit")}
                </Link>
                <Link
                  href="/about"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.about")}
                </Link>
                <div className="flex items-center space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                  <LanguageSwitcher />
                </div>
                <Button asChild size="lg" className="mt-4">
                  <Link
                    href="https://github.com/BenEnes/OpenProjects"
                    target="_blank"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t("github")}
                  </Link>
                </Button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
