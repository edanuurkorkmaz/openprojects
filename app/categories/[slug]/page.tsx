import projectsData from "@/data/projects";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = projectsData?.projects.filter(
    (project) =>
      project.category?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
  );
  if (!projects || projects.length === 0) {
    return <div className="p-4">Kategori bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{projects?.[0].category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Detaylar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
