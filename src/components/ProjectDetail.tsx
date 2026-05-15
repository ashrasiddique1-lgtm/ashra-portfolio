"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImage {
  view?: string;
  image: string;
  caption?: string;
}

interface ProjectDetailProps {
  title: string;
  client?: string;
  year: number;
  category: string;
  description: string;
  details?: string;
  images: ProjectImage[];
}

export default function ProjectDetail({
  title,
  client,
  year,
  category,
  description,
  details,
  images,
}: ProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">Category:</span> {category}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Year:</span> {year}
            </div>
            {client && (
              <div>
                <span className="font-semibold text-gray-900">Client:</span> {client}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Image Gallery */}
            <div className="lg:col-span-2">
              {/* Primary Image */}
              <div className="relative w-full h-96 md:h-[500px] bg-gray-200 overflow-hidden mb-6">
                <Image
                  src={images[selectedImageIndex].image}
                  alt={`${title} - ${images[selectedImageIndex].view || "view"}`}
                  fill
                  priority
                  quality={75}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Image Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-full h-24 overflow-hidden transition ${
                        selectedImageIndex === index
                          ? "ring-2 ring-black"
                          : "hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img.image}
                        alt={img.caption || `View ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, 25vw"
                        className="object-cover object-center"
                      />
                      {img.view && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2 text-center capitalize">
                          {img.view}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Details */}
                {details && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {details}
                    </p>
                  </div>
                )}

                {/* Image Info */}
                {images[selectedImageIndex].caption && (
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Current View
                    </h3>
                    <p className="text-gray-600 capitalize">
                      {images[selectedImageIndex].caption ||
                        images[selectedImageIndex].view}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
