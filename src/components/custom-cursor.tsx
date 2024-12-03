"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(max-width: 768px)").matches
      );
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.getAttribute("role") === "button"
      );
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      if (!isMobile) {
        window.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [isMobile]);

  const variants = {
    default: {
      x: position.x,
      y: position.y,
    },
  };

  // Don't render anything until after hydration
  if (!mounted) return null;

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[999] rounded-full hidden md:block"
        variants={variants}
        animate="default"
        transition={{
          type: "spring",
          mass: 0.6,
          damping: 30,
          stiffness: 700,
        }}
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 0.6,
            damping: 30,
            stiffness: 700,
          }}
        >
          <div className="absolute inset-0 border border-black dark:border-white rounded-full opacity-30" />
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block"
        variants={variants}
        animate="default"
        transition={{
          type: "spring",
          mass: 0.2,
          damping: 50,
          stiffness: 800,
        }}
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"
          animate={{
            scale: isPointer ? 1.2 : 1,
            opacity: isPointer ? 0.5 : 1,
          }}
          transition={{
            type: "spring",
            mass: 0.2,
            damping: 50,
            stiffness: 800,
          }}
        />
      </motion.div>
    </>
  );
}
