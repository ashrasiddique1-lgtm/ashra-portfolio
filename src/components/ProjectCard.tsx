"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  year: number;
  image: string;
}

export default function ProjectCard({
  id,
  title,
  slug,
  description,
  category,
  year,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Project Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold group-hover:text-gray-700 transition">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-xs text-gray-500 mt-1">{year}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
