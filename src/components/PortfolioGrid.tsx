"use client";

import { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: number;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

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
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-xs text-gray-500 mt-2">{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 text-white text-3xl bg-black/50 hover:bg-black/70 w-12 h-12 rounded-full flex items-center justify-center transition"
            >
              ×
            </button>

            {/* Frost Glass Container */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-xl overflow-hidden shadow-2xl border border-white/20">

              {/* Image */}
              <div className="relative w-full bg-black/20 flex items-center justify-center">
                <div className="relative w-full h-[75vh]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="bg-white/80 backdrop-blur-md p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {selectedItem.title}
                </h2>

                <p className="text-sm text-gray-600 mb-3">
                  {selectedItem.category} • {selectedItem.year}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}