export interface ProjectImage {
  view?: string;
  image: string;
  caption?: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  client?: string;
  year: number;
  category: string;
  images: ProjectImage[];
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name 1",
    slug: "project-1",
    description: "Brief description of the project",
    client: "Client Name",
    year: 2025,
    category: "Bridal",
    images: [
      { view: "front", image: "/projects/project-1-front.jpg", caption: "Front View" },
      { view: "back", image: "/projects/project-1-back.jpg", caption: "Back View" },
      { view: "detail", image: "/projects/project-1-detail.jpg", caption: "Detail" },
    ],
    details: "Detailed information about the project, techniques used, and design approach."
  },
  {
    id: 2,
    title: "Project Name 2",
    slug: "project-2",
    description: "Brief description of the project",
    client: "Client Name",
    year: 2025,
    category: "Couture",
    images: [
      { view: "front", image: "/projects/project-2-front.jpg", caption: "Front View" },
      { view: "back", image: "/projects/project-2-back.jpg", caption: "Back View" },
    ],
    details: "Detailed information about the project, techniques used, and design approach."
  },
];
