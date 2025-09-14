"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
const TiltDiv = ({ children,classChild }: { children: React.ReactNode, classChild: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse pos -> rotation
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 → 1
    const py = (e.clientY - rect.top) / rect.height; // 0 → 1
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: "800px" }}
      className={`${classChild} overflow-hidden rounded-lg shadow-lg`}
    >
      {children}
    </motion.div>
  );
};

export default TiltDiv;