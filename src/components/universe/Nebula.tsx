"use client"

import { motion } from "framer-motion"
import type { Emotion } from "@/types"

interface NebulaProps {
  emotion: Emotion
  onClick: () => void
}

export function Nebula({ emotion, onClick }: NebulaProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: Math.random() * 0.5 + 0.3,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative flex flex-col items-center">
        <div
          className="nebula-float relative w-36 md:w-44 h-20 rounded-[2rem] flex items-center justify-center"
          style={{ "--delay": `${Math.random() * 4}s` } as React.CSSProperties}
        >
          <div
            className="absolute inset-0 rounded-[2rem] blur-xl opacity-40 pulse-glow transition-opacity duration-500 group-hover:opacity-70"
            style={{
              backgroundColor: emotion.color,
              "--delay": `${Math.random() * 3}s`,
            } as React.CSSProperties}
          />
          <div
            className="absolute inset-1 rounded-[2rem] blur-md opacity-30 transition-opacity duration-500 group-hover:opacity-50"
            style={{ backgroundColor: emotion.color }}
          />
          <div
            className="relative w-36 md:w-44 h-20 rounded-[2rem] flex items-center justify-center px-5 text-sm md:text-base text-center leading-snug border border-white/10 backdrop-blur-sm"
            style={{
              backgroundColor: `${emotion.color}15`,
              color: emotion.color,
              boxShadow: `0 0 25px ${emotion.glowColor}`,
            }}
          >
            <span className="select-none font-light">{emotion.name}</span>
          </div>
        </div>

        <span className="hidden md:block mt-2 text-[10px] text-white/20 transition-colors duration-300 group-hover:text-white/40 max-w-40 text-center leading-relaxed">
          {emotion.description}
        </span>
      </div>
    </motion.button>
  )
}
