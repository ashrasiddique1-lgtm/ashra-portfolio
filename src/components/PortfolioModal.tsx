"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  images: { view: string, image: string }[];
  year: number;
}

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      setCurrentImageIndex(0);
      
      // Handle keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) =>
            prev === 0 ? item.images.length - 1 : prev - 1
          );
        } else if (e.key === "ArrowRight") {
          setCurrentImageIndex((prev) =>
            prev === item.images.length - 1 ? 0 : prev + 1
          );
        }
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
        document.body.style.position = "unset";
        document.body.style.width = "unset";
        document.body.style.top = "unset";
        window.scrollTo(0, scrollY);
      };
    }
  }, [item]);

  if (!item) return null;

  const handleDoubleClick = () => {
    setScale((prev) => (prev > 1 ? 1 : 2));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) =>
      Math.min(4, Math.max(1, prev - e.deltaY * 0.001))
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe(e);
  };

  const handleSwipe = (e: React.TouchEvent) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? item.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white text-3xl bg-white/20 backdrop-blur-md w-12 h-12 rounded-full"
      >
        ×
      </button>

      {/* Image container */}
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          // whileTap={{ cursor: "grabbing" }}
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onDoubleClick={handleDoubleClick}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-[90vw] h-[90vh] bg-black/50">
            <Image
              src={item.images[currentImageIndex].image}
              alt={`${item.title} - ${item.images[currentImageIndex].view}`}
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-contain select-none"
            />
            
            {/* Image counter and navigation dots */}
            {item.images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? item.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 text-white text-2xl md:text-3xl bg-white/20 hover:bg-white/40 active:bg-white/50 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition touch-manipulation"
                  aria-label="Previous image"
                >
                  ←
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === item.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 text-white text-2xl md:text-3xl bg-white/20 hover:bg-white/40 active:bg-white/50 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition touch-manipulation"
                  aria-label="Next image"
                >
                  →
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {item.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm opacity-80">
          {item.category} • 
          <span className="capitalize ml-1">{item.images[currentImageIndex].view}</span>
        </p>
      </div>
    </div>
  );
}