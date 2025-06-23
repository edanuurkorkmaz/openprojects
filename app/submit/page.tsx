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
  ExternalLink,
  FileText,
  GitPullRequest,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function SubmitPage() {
  const t = await getTranslations("submit");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-2">
            <Github className="w-4 h-4 mr-2" />
            {t("subtitle")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>{" "}
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="relative">
            <div className="absolute -top-4 left-6">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5 text-blue-500" />
                {t("steps.step1.title")}
              </CardTitle>
              <CardDescription>{t("steps.step1.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link
                  href="https://github.com/furkanczay/openprojects/fork"
                  target="_blank"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("steps.step1.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-4 left-6">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-500" />
                {t("steps.step2.title")}
              </CardTitle>
              <CardDescription>{t("steps.step2.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link
                  href="https://github.com/furkanczay/openprojects/edit/master/data/projects.ts"
                  target="_blank"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("steps.step2.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-4 left-6">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-purple-500" />
                {t("steps.step3.title")}
              </CardTitle>
              <CardDescription>{t("steps.step3.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link
                  href="https://github.com/furkanczay/openprojects/compare"
                  target="_blank"
                >
                  <GitPullRequest className="w-4 h-4 mr-2" />
                  {t("steps.step3.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>{" "}
        {/* JSON Format */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>{t("jsonFormat.title")}</CardTitle>
            <CardDescription>{t("jsonFormat.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              {`{
  name: "React",
  description: "A JavaScript library for building user interfaces",
  longDescription: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  githubUrl: "https://github.com/facebook/react",
  website: "https://reactjs.org",
  tags: ["frontend", "framework", "javascript", "ui"],
  category: ProjectCategory.Framework,
}`}
            </pre>
          </CardContent>
        </Card>{" "}
        {/* Guidelines */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                {t("guidelines.accepted.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.accepted.item1")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.accepted.item2")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.accepted.item3")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.accepted.item4")}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                {t("guidelines.rejected.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.rejected.item1")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.rejected.item2")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.rejected.item3")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {t("guidelines.rejected.item4")}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>{" "}
        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link
              href="https://github.com/furkanczay/openprojects/edit/master/data/projects.ts"
              target="_blank"
            >
              <Github className="w-5 h-5 mr-2" />
              {t("cta.button")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
