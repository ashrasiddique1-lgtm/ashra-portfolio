import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projectsData";

export const metadata = {
  title: "Projects - Ashra",
  description: "Detailed project showcases featuring custom garment development, pattern making, and design collaborations.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Detailed showcases of custom garment development, pattern making, and design collaborations.
            Each project highlights the technical expertise and creative approach behind the designs.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
