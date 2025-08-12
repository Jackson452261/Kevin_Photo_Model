import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselProps {
    images: string[];
  }

  const imgVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };
  
  export default function Carousel({ images }: CarouselProps) {
    const [idx, setIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(idx);
  
    if (!images || images.length === 0) return null;
  
    const trend = idx > prevIdx ? 1 : -1;
    const imageIndex = ((idx % images.length) + images.length) % images.length;
  
    return (
      <div className="h-[50vw] min-h-[400px] max-h-[600px] bg-black relative overflow-hidden">
        {/* 左箭頭 */}
        <button
          onClick={() => {
            setPrevIdx(idx);
            setIdx((pv) => pv - 1);
          }}
          className="bg-black/50 hover:bg-black/60 text-white p-2 absolute z-10 left-0 top-0 bottom-0"
        >
          <FiChevronLeft />
        </button>
  
        {/* 主圖片 */}
        <div className="absolute inset-0 z-[5] backdrop-blur-xl">
          <AnimatePresence initial={false} custom={trend}>
            <motion.img
              variants={imgVariants}
              custom={trend}
              initial="initial"
              animate="animate"
              exit="exit"
              key={imageIndex}
              src={images[imageIndex]}
              alt={`Image ${imageIndex + 1}`}
              style={{ y: "-50%", x: "-50%" }}
              className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto object-cover shadow-2xl absolute left-1/2 top-1/2"
            />
          </AnimatePresence>
        </div>
  
        {/* 右箭頭 */}
        <button
          onClick={() => {
            setPrevIdx(idx);
            setIdx((pv) => pv + 1);
          }}
          className="bg-black/50 hover:bg-black/60 text-white p-2 absolute z-10 right-0 top-0 bottom-0"
        >
          <FiChevronRight />
        </button>
  
        {/* 背景模糊 */}
        <AnimatePresence initial={false}>
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 object-fill z-0"
            style={{
              backgroundImage: `url(${images[imageIndex]})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    );
  }
  