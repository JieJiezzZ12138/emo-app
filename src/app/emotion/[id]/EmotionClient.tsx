"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { StarField } from "@/components/universe/StarField"
import { QuestionFlow } from "@/components/question/QuestionFlow"
import { getEmotionById, getQuestionsByEmotion } from "@/data"

export function EmotionClient({ emotionId }: { emotionId: string }) {
  const router = useRouter()
  const emotion = getEmotionById(emotionId)
  const questions = getQuestionsByEmotion(emotionId)

  if (!emotion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">找不到这个状态</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 transition-colors"
          >
            回到状态入口
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${emotion.glowColor}, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute top-16 left-4 z-20 sm:top-20 sm:left-6 md:left-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => router.push("/")}
          className="text-sm text-white/30 hover:text-white/60 transition-colors"
        >
          ← 状态入口
        </button>
      </motion.div>

      <motion.div
        className="absolute top-16 right-4 z-20 hidden max-w-[44vw] text-right sm:block sm:top-20 sm:right-6 md:right-12"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg font-light" style={{ color: emotion.color }}>
          {emotion.name}
        </p>
        <p className="text-xs text-white/20 mt-1">{emotion.description}</p>
      </motion.div>

      <div className="relative z-10">
        <QuestionFlow questions={questions} emotionName={emotion.name} />
      </div>
    </div>
  )
}
