import {
  Github,
  Heart,
  Twitter,
  Plus,
  Crown,
  MessageCircle,
  List,
  Workflow,
  Sparkles,
  Info,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  return (
    <footer className="border-t bg-linear-to-br from-muted/30 to-muted/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-xl">openprojects.dev</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Aktif
              </Badge>
              <Badge
                variant="outline"
                className="text-xs flex items-center gap-1"
              >
                Made with ❤️{" "}
                <Link
                  href="https://nextjs.org"
                  className="text-primary hover:underline"
                >
                  Next.js
                </Link>
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {tNav("projects")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#featured"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Sparkles className="inline w-4 h-4 mr-1" />
                  {tNav("featured")}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Workflow className="inline w-4 h-4 mr-1" />
                  {tNav("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <List className="inline w-4 h-4 mr-1" />
                  {tNav("categories")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {tNav("community")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/submit"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Plus className="inline w-4 h-4 mr-1" />
                  {tNav("submit")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/sponsors/furkanczay"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                >
                  <Crown className="inline w-4 h-4 mr-1" />
                  {tNav("becomeSponsor")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/SkundF4FFU"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="inline w-4 h-4 mr-1" />
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {tNav("contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Info className="inline w-4 h-4 mr-1" />
                  {tNav("about")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            OpenProjects{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> by
            <Link href={"https://github.com/furkanczay"} target="_blank">
              furkanczay
            </Link>
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/furkanczay/openprojects"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/furkanczay"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/furkanczay"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
