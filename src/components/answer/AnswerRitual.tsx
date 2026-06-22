"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Answer } from "@/types"

interface AnswerRitualProps {
  answer: Answer
  onComplete: () => void
  isFavorited?: boolean
  onFavorite?: () => void
  onShare?: () => void
}

type RitualPhase = "gathering" | "shooting" | "revealing" | "complete"

export function AnswerRitual({
  answer,
  onComplete,
  isFavorited = false,
  onFavorite,
  onShare,
}: AnswerRitualProps) {
  const [phase, setPhase] = useState<RitualPhase>("gathering")
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const pts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setParticles(pts)
  }, [])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    timers.push(setTimeout(() => setPhase("shooting"), 800))
    timers.push(setTimeout(() => setPhase("revealing"), 1500))
    timers.push(setTimeout(() => setPhase("complete"), 2200))
    return () => timers.forEach(clearTimeout)
  }, [])

  const categoryLabels: Record<string, string> = {
    movie: "电影",
    book: "书籍",
    philosophy: "哲学",
    history: "历史人物",
    music: "音乐",
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-y-auto px-4 py-20 sm:overflow-hidden sm:px-0 sm:py-0">
      <AnimatePresence>
        {(phase === "gathering" || phase === "shooting") && (
          <div className="absolute inset-0">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute w-1 h-1 rounded-full bg-white/60"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase === "shooting" ? 0 : [0, 1, 0],
                  scale: phase === "shooting" ? 0 : [0, 1.5, 0],
                  x: phase === "shooting" ? (50 - p.x) * 5 : 0,
                  y: phase === "shooting" ? (50 - p.y) * 5 : 0,
                }}
                transition={{
                  duration: phase === "shooting" ? 0.8 : 1.5,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              />
            ))}

            {phase === "shooting" && (
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 3, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-white blur-sm" />
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(phase === "revealing" || phase === "complete") && (
          <motion.div
            className="relative z-10 mx-auto max-w-lg space-y-6 px-2 text-center sm:space-y-8 sm:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div
                className="w-8 h-px bg-white/20 mx-auto"
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: { opacity: 1, scaleX: 1 },
                }}
              />

              <motion.blockquote
                className="text-lg font-light leading-relaxed tracking-wide text-white/90 sm:text-xl md:text-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                「{answer.content}」
              </motion.blockquote>

              <motion.div
                className="w-8 h-px bg-white/20 mx-auto"
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: { opacity: 1, scaleX: 1 },
                }}
              />

              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.6 } },
                }}
              >
                <p className="text-sm text-white/50">
                  —— {answer.author}
                </p>
                <p className="text-sm text-white/40">
                  {answer.sourceTitle}
                  {answer.year && <span className="ml-2 text-white/25">{answer.year}</span>}
                </p>
                <span className="inline-block px-3 py-1 rounded-full text-xs text-white/30 border border-white/8 mt-2">
                  {categoryLabels[answer.category]}
                </span>
              </motion.div>

              <motion.div
                className="space-y-4 pt-3 sm:pt-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.4 } },
                }}
              >
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 sm:p-5">
                  <p className="text-sm text-white/40 leading-relaxed">
                    {answer.explanation}
                  </p>
                </div>
              </motion.div>

              {phase === "complete" && (
                <motion.div
                  className="flex flex-col items-center gap-4 pt-2 sm:pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-white/20 tracking-wider">
                    这不是答案，只是有人也这样想过
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row">
                    <button
                      onClick={onFavorite}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-sm text-white/45 transition-colors hover:border-white/20 hover:text-white/75"
                    >
                      {isFavorited ? "取消收藏" : "收藏这条回应 ♡"}
                    </button>
                    <button
                      onClick={onShare}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-sm text-white/45 transition-colors hover:border-white/20 hover:text-white/75"
                    >
                      分享这条回应
                    </button>
                    <button
                      onClick={onComplete}
                      className="px-8 py-2.5 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/70 hover:border-white/20 transition-colors"
                    >
                      继续刷
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
