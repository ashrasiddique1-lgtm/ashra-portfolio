"use client";

import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: number;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50 p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:w-auto md:h-auto md:max-w-6xl md:max-h-[90vh] md:overflow-visible overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white text-2xl md:text-3xl bg-black/50 hover:bg-black/70 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition"
        >
          ×
        </button>

        {/* Frost Glass Container */}
        <div className="bg-white/10 backdrop-blur-2xl md:rounded-xl overflow-hidden shadow-2xl border border-white/20 h-full md:h-auto flex flex-col">

          {/* Image */}
          <div className="relative w-full bg-black/20 flex items-center justify-center flex-grow md:flex-grow-0">
            <div className="relative w-full h-64 md:h-[60vh] lg:h-[75vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Details */}
          <div className="bg-white/80 backdrop-blur-md p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 pr-8">
              {item.title}
            </h2>

            <p className="text-xs md:text-sm text-gray-600">
              {item.category} • {item.year}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
