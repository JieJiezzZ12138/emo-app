"use client"

import { useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import type { Question } from "@/types"

interface QuestionCardProps {
  question: Question
  onSwipeDown: () => void
  onTap: () => void
  isTop: boolean
}

export function QuestionCard({
  question,
  onSwipeDown,
  onTap,
  isTop,
}: QuestionCardProps) {
  const y = useMotionValue(0)
  const rotate = useTransform(y, [0, 80], [0, 5])
  const opacity = useTransform(y, [0, 40, 80], [1, 0.5, 0])

  const downOpacity = useTransform(y, [0, 15, 40], [0, 0.5, 1])

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.y > 20) {
        onSwipeDown()
      }
    },
    [onSwipeDown]
  )

  if (!isTop) {
    return (
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={false}
        style={{ scale: 0.95, y: 10, opacity: 0.5 }}
      >
        <div className="w-[85vw] max-w-md aspect-[3/4] rounded-3xl bg-white/[0.03] border border-white/[0.06]" />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center select-none"
      style={{ y, rotate, opacity }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.4}
      onDragEnd={handleDragEnd}
      onClick={onTap}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        y: -400,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="w-[85vw] max-w-md aspect-[3/4] rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        <motion.div
          className="absolute top-6 left-0 right-0 flex justify-center"
          style={{ opacity: downOpacity }}
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/40 text-sm border border-white/10">
            ↓ 跳过
          </span>
        </motion.div>

        <div className="relative z-10 text-center space-y-8">
          <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

          <h2 className="text-xl md:text-2xl font-light leading-relaxed text-white/85 tracking-wide px-4">
            {question.title}
          </h2>

          <div className="space-y-2">
            <p className="text-xs text-white/20 tracking-wider">
              {question.resonanceCount.toLocaleString()} 人有同感
            </p>
            <div className="w-8 h-px bg-white/10 mx-auto" />
          </div>

          <p className="text-xs text-white/25 tracking-wider">
            点击看看谁也这样想过 · 向下滑动跳过
          </p>
        </div>
      </div>
    </motion.div>
  )
}
