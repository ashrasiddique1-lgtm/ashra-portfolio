"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  client?: string;
  year: number;
  category: string;
  images: { view?: string; image: string; caption?: string }[];
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 text-sm font-medium transition ${
              filter === category
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            slug={project.slug}
            description={project.description}
            category={project.category}
            year={project.year}
            image={project.images[0].image}
          />
        ))}
      </div>
    </div>
  );
}
