import { ProjectCard } from "@/components/project-card";
import projects from "@/data/projects";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filteredProjects = projects.filter(
    (project) =>
      project.category?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
  );
  if (!filteredProjects || filteredProjects.length === 0) {
    return <div className="p-4">Kategori bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          {filteredProjects?.[0].category}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              className="hover:scale-[1.01] transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
