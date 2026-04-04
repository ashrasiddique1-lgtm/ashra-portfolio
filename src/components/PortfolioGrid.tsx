"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioModal from "./PortfolioModal";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  images: { view: "front" | "back", image: string }[];
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
                src={item.images[0].image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              {/* <p className="text-xs text-gray-500 mt-2">{item.year}</p> */}
            </div>
          </div>
        ))}
      </div>

      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}