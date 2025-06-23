import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Folder,
  ArrowRight,
  TrendingUp,
  Code,
  Database,
  Smartphone,
  Wrench,
  Server,
  Lock,
  Package,
  Layers,
} from "lucide-react";
import Link from "next/link";
import projects from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { useTranslations } from "next-intl";

// Kategori ikonları ve renkleri
const categoryIconInfo: Record<
  string,
  { icon: React.ReactElement; color: string }
> = {
  [ProjectCategory.Frontend]: {
    icon: <Code />,
    color: "bg-blue-500",
  },
  [ProjectCategory.Backend]: {
    icon: <Server />,
    color: "bg-green-500",
  },
  [ProjectCategory.Framework]: {
    icon: <Layers />,
    color: "bg-purple-500",
  },
  [ProjectCategory.Library]: {
    icon: <Package />,
    color: "bg-orange-500",
  },
  [ProjectCategory.Mobile]: {
    icon: <Smartphone />,
    color: "bg-indigo-500",
  },
  [ProjectCategory.Database]: {
    icon: <Database />,
    color: "bg-yellow-500",
  },
  [ProjectCategory.Tool]: {
    icon: <Wrench />,
    color: "bg-gray-500",
  },
  [ProjectCategory.Authentication]: {
    icon: <Lock />,
    color: "bg-red-500",
  },
  [ProjectCategory.Application]: {
    icon: <Folder />,
    color: "bg-teal-500",
  },
  [ProjectCategory.DevOps]: {
    icon: <Server />,
    color: "bg-cyan-500",
  },
  [ProjectCategory.Other]: {
    icon: <Package />,
    color: "bg-slate-500",
  },
};

export default function CategoriesPage() {
  const t = useTranslations("categories");

  // Unique kategorileri çek
  const uniqueCategories = [
    ...new Set(projects.map((project) => project.category)),
  ];

  // Her kategori için proje sayısını hesapla
  const categoryStats = projects.reduce((acc, project) => {
    const category = project.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Kategorileri bilgileriyle birleştir
  const categories = uniqueCategories
    .map((categoryName) => ({
      name: categoryName,
      displayName: t(`names.${categoryName}`),
      description: t(`descriptions.${categoryName}`),
      ...categoryIconInfo[categoryName],
      count: categoryStats[categoryName] || 0,
      slug: categoryName.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    }))
    .filter((category) => category.count > 0); // Sadece proje sayısı > 0 olanları göster

  const totalProjects = projects?.length;
  const totalCategories = categories.filter((cat) => cat.count > 0)?.length;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {" "}
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Folder className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold">{t("title")}</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {totalCategories}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("activeCategory")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {totalProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("totalProjects")}
              </div>
            </div>
          </div>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white text-xl`}
                    >
                      {category.icon}
                    </div>{" "}
                    <div>
                      <CardTitle className="text-lg">
                        {category.displayName}
                      </CardTitle>{" "}
                      <Badge variant="secondary" className="mt-1">
                        {category.count} proje
                      </Badge>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 line-clamp-2">
                  {category.description}
                </CardDescription>
                <Link href={`/categories/${category.slug}`}>
                  {" "}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    disabled={category.count === 0}
                  >
                    {t("viewProjects")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>{" "}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t("addProject")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("addProjectDesc")}
              </p>
              <Link href="/submit">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {t("submitProject")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
