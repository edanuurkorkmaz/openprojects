"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Heart,
  Users,
  Code,
  Globe,
  Star,
  GitFork,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("navigation");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {" "}
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          {" "}
          <Badge variant="outline" className="px-4 py-2">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            {tNav("about")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
        {/* Mission */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">{t("mission.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t("mission.description1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("mission.description2")}
            </p>
          </CardContent>
        </Card>{" "}
        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {t("features.realtime.title")}
              </CardTitle>
              <CardDescription>
                {t("features.realtime.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="w-3 h-3" />
                  Yıldız sayıları
                </li>
                <li className="flex items-center gap-2">
                  <GitFork className="w-3 h-3" />
                  Fork sayıları
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-3 h-3" />
                  Katkıda bulunanlar
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                {t("features.discovery.title")}
              </CardTitle>
              <CardDescription>
                {t("features.discovery.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Code className="w-3 h-3" />
                  Programlama diline göre filtreleme
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-3 h-3" />
                  Ülkeye göre gruplandırma
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-3 h-3" />
                  Popülerlik sıralaması
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Team */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">{t("community.title")}</CardTitle>
            <CardDescription>{t("community.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              {t("community.content")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link
                  href="https://github.com/furkanczay/openprojects"
                  target="_blank"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("community.viewOnGithub")}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/submit">
                  <Heart className="w-4 h-4 mr-2" />
                  {t("community.contribute")}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-6">
            {t("contact.description")}
          </p>
          <Button asChild variant="outline">
            <Link
              href="https://github.com/furkanczay/openprojects/issues"
              target="_blank"
            >
              <Github className="w-4 h-4 mr-2" />
              {t("contact.githubIssues")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
