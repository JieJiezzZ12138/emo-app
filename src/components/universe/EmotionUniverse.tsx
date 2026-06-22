"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { StarField } from "@/components/universe/StarField"
import { Nebula } from "@/components/universe/Nebula"
import { emotions } from "@/data"
import { useEmoStore } from "@/store"

export function EmotionUniverse() {
  const router = useRouter()
  const incrementEmotionVisit = useEmoStore((s) => s.incrementEmotionVisit)

  const handleEmotionClick = (emotionId: string) => {
    incrementEmotionVisit(emotionId)
    router.push(`/emotion/${emotionId}`)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarField />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80 pointer-events-none" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] text-white/90">
            当下状态
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/30 font-light tracking-wider">
            你是不是也有点累，但说不出来
          </p>
        </motion.div>

        <div className="relative grid w-full max-w-5xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 lg:grid-cols-5">
          {emotions.map((emotion) => (
            <Nebula
              key={emotion.id}
              emotion={emotion}
              onClick={() => handleEmotionClick(emotion.id)}
            />
          ))}
        </div>

        <motion.p
          className="absolute bottom-12 text-xs text-white/15 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          不让你学习，只让你被看见
        </motion.p>
      </motion.div>
    </div>
  )
}
