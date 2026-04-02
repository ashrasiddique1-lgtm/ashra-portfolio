"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: number;
}

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: Props) {
  const [scale, setScale] = useState(1);

  const y = useMotionValue(0);
  const opacity = useTransform(y, [-200, 0, 200], [0.5, 1, 0.5]);

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
      <motion.div
        className="w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ y, opacity }}
        drag="y"
        dragConstraints={{ top: -200, bottom: 200 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 150) onClose();
        }}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <motion.div
          drag
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onDoubleClick={handleDoubleClick}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              className="object-contain select-none"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm opacity-80">
          {item.category} • {item.year}
        </p>
      </div>
    </div>
  );
}