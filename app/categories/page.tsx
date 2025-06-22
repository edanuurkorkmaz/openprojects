import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import projectsData from "@/data/projects.json";

const categoryInfo = {
  Framework: {
    description: "Uygulama geliştirme çerçeveleri",
    color: "bg-purple-500",
    icon: "🏗️",
  },
  Platform: {
    description: "Tamamlanmış uygulama platformları",
    color: "bg-blue-500",
    icon: "🌐",
  },
  Library: {
    description: "Yeniden kullanılabilir kod kütüphaneleri",
    color: "bg-orange-500",
    icon: "📚",
  },
  "AI/ML": {
    description: "Yapay zeka ve makine öğrenmesi projeleri",
    color: "bg-pink-500",
    icon: "🤖",
  },
  Tools: {
    description: "Geliştirici araçları ve yardımcı programlar",
    color: "bg-yellow-500",
    icon: "🔧",
  },
  Mobile: {
    description: "Mobil uygulama geliştirme projeleri",
    color: "bg-indigo-500",
    icon: "📱",
  },
  DevOps: {
    description: "Dağıtım ve operasyon araçları",
    color: "bg-red-500",
    icon: "🚀",
  },
  Database: {
    description: "Veritabanı ve veri yönetimi projeleri",
    color: "bg-cyan-500",
    icon: "🗄️",
  },
  Security: {
    description: "Güvenlik ve şifreleme projeleri",
    color: "bg-gray-500",
    icon: "🔒",
  },
};

export default function CategoriesPage() {
  const projects = projectsData.projects || [];

  // Kategorilere göre proje sayılarını hesapla
  const categoryStats = projects.reduce((acc, project) => {
    const category = project.category || "Diğer";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryInfo).map(([name, info]) => ({
    name,
    ...info,
    count: categoryStats[name] || 0,
    slug: name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
  }));

  const totalProjects = projects.length;
  const totalCategories = categories.filter((cat) => cat.count > 0).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <Folder className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold">Kategoriler</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projelerimizi kategorilere göre keşfedin ve ilginizi çeken alanları
            bulun
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {totalCategories}
              </div>
              <div className="text-sm text-muted-foreground">
                Aktif Kategori
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {totalProjects}
              </div>
              <div className="text-sm text-muted-foreground">Toplam Proje</div>
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
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
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
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    disabled={category.count === 0}
                  >
                    Projeleri Görüntüle
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Projenizi Ekleyin</h3>
              <p className="text-muted-foreground mb-6">
                Geliştirdiğiniz açık kaynak projeyi toplulukla paylaşın ve uygun
                kategoride yer almasını sağlayın.
              </p>
              <Link href="/submit">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Proje Gönder
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
