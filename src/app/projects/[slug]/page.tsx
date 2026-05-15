import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found - Ashra",
      description: "The project you're looking for doesn't exist.",
    };
  }

  return {
    title: `${project.title} - Ashra`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail
      title={project.title}
      client={project.client}
      year={project.year}
      category={project.category}
      description={project.description}
      details={project.details}
      images={project.images}
    />
  );
}
