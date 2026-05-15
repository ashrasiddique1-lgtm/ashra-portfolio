"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PortfolioModal from "./PortfolioModal";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  images: { view: string, image: string }[];
  year: number;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGridContent({ items }: PortfolioGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  // Initialize from URL on mount
  useEffect(() => {
    setIsMounted(true);
    const itemId = searchParams.get("item");
    const filterParam = searchParams.get("filter");
    
    if (filterParam) {
      setFilter(filterParam);
    }
    
    if (itemId) {
      const item = items.find((i) => i.id === parseInt(itemId));
      if (item) {
        setSelectedItem(item);
      }
    }
  }, [searchParams, items]);

  const handleSelectItem = (item: PortfolioItem) => {
    setSelectedItem(item);
    // Add item ID to URL
    const params = new URLSearchParams(searchParams.toString());
    params.set("item", item.id.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleClose = () => {
    setSelectedItem(null);
    // Remove item ID from URL, retain filter
    const params = new URLSearchParams(searchParams.toString());
    params.delete("item");
    if (params.toString()) {
      router.push(`?${params.toString()}`, { scroll: false });
    } else {
      router.push("?", { scroll: false });
    }
  };

  const handleFilterChange = (category: string) => {
    setFilter(category);
    // Update URL with filter, remove item selection
    const params = new URLSearchParams();
    if (category !== "All") {
      params.set("filter", category);
    }
    router.push(`?${params.toString()}`, { scroll: false });
    setSelectedItem(null);
  };

  if (!isMounted) return null;

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
            onClick={() => handleFilterChange(category)}
            className={`px-6 py-2 text-sm font-medium transition ${
              filter === category
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
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
            onClick={() => handleSelectItem(item)}
          >
            <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src={item.images[0].image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
              {/* <p className="text-xs text-gray-500 mt-2">{item.year}</p> */}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={handleClose} />
      )}
    </div>
  );
}
