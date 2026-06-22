"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useMemo } from "react"
import { StarField } from "@/components/universe/StarField"
import { AnswerRitual } from "@/components/answer/AnswerRitual"
import { getQuestionById, getRandomAnswer, getEmotionById, getAnswerById } from "@/data"
import { useEmoStore } from "@/store"
import { motion } from "framer-motion"

export default function AnswerPage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const questionId = params.id as string
  const question = getQuestionById(questionId)
  const emotion = question ? getEmotionById(question.emotionId) : null

  const addFavoriteAnswer = useEmoStore((s) => s.addFavoriteAnswer)
  const removeFavoriteAnswer = useEmoStore((s) => s.removeFavoriteAnswer)
  const favoriteAnswers = useEmoStore((s) => s.favoriteAnswers)

  const selectedAnswerId = searchParams.get("answer")
  const answer = useMemo(() => {
    const selectedAnswer = selectedAnswerId ? getAnswerById(selectedAnswerId) : undefined
    if (selectedAnswer?.questionId === questionId) return selectedAnswer
    return getRandomAnswer(questionId)
  }, [questionId, selectedAnswerId])

  const [showFavorite, setShowFavorite] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const handleFavorite = () => {
    if (!answer) return
    if (isFavorited) {
      removeFavoriteAnswer(answer.id)
      setShowFavorite(true)
      setTimeout(() => setShowFavorite(false), 1500)
      return
    }
    addFavoriteAnswer(answer.id)
    setShowFavorite(true)
    setTimeout(() => setShowFavorite(false), 1500)
  }

  const handleShare = async () => {
    if (!answer || !question) return
    if (isSharing) return
    const text = `我在 EMO 刷到了：\n「${question.title}」\n\n「${answer.content}」\n—— ${answer.author} ${answer.sourceTitle}`
    try {
      setIsSharing(true)
      if (navigator.share) {
        await navigator.share({ title: "EMO 当下状态", text })
        return
      }
      await navigator.clipboard.writeText(text)
    } catch (error) {
      const name = error instanceof DOMException ? error.name : ""
      if (name !== "AbortError" && name !== "InvalidStateError") {
        console.error(error)
      }
    } finally {
      setIsSharing(false)
    }
  }

  if (!question || !answer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">找不到这条回应</p>
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

  const isFavorited = favoriteAnswers.includes(answer.id)

  return (
    <div className="relative min-h-screen">
      <StarField />

      {emotion && (
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: `radial-gradient(ellipse at center, ${emotion.glowColor}, transparent 70%)`,
          }}
        />
      )}

      <motion.div
        className="absolute top-6 left-4 z-20 sm:top-20 sm:left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <button
          onClick={() => router.push(`/emotion/${question.emotionId}`)}
          className="text-sm text-white/30 hover:text-white/60 transition-colors"
        >
          ← 回到流里
        </button>
      </motion.div>

      <motion.div
        className="absolute top-6 right-4 z-20 sm:top-20 sm:right-6 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <button
          onClick={handleFavorite}
          className={`text-lg transition-colors ${
            isFavorited ? "text-white/60" : "text-white/20 hover:text-white/50"
          }`}
        >
          {isFavorited ? "♥" : "♡"}
        </button>
        {showFavorite && (
          <motion.span
            className="absolute -top-2 right-0 text-[10px] text-white/40"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {isFavorited ? "已收藏" : "已取消"}
          </motion.span>
        )}
      </motion.div>

      <AnswerRitual
        answer={answer}
        isFavorited={isFavorited}
        onFavorite={handleFavorite}
        onShare={handleShare}
        onComplete={() => router.push(`/emotion/${question.emotionId}`)}
      />
    </div>
  )
}
