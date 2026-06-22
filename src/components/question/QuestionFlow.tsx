"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import type { Question } from "@/types"
import { useEmoStore } from "@/store"

interface QuestionFlowProps {
  questions: Question[]
  emotionName: string
}

function shuffle(items: Question[]): Question[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function buildQuestionQueue(
  questions: Question[],
  viewedQuestions: string[],
  questionViewCounts: Record<string, number>
): Question[] {
  const getCount = (question: Question) =>
    questionViewCounts[question.id] || (viewedQuestions.includes(question.id) ? 1 : 0)
  const unseen = shuffle(questions.filter((question) => getCount(question) === 0))
  const seen = shuffle(questions.filter((question) => getCount(question) > 0)).sort(
    (a, b) => getCount(a) - getCount(b)
  )
  const queue: Question[] = []

  while (unseen.length > 0 || seen.length > 0) {
    const shouldPickUnseen = unseen.length > 0 && (seen.length === 0 || Math.random() < 0.8)
    queue.push(shouldPickUnseen ? unseen.shift()! : seen.shift()!)
  }

  return queue
}

export function QuestionFlow({ questions, emotionName }: QuestionFlowProps) {
  const router = useRouter()
  const viewedQuestions = useEmoStore((s) => s.viewedQuestions)
  const questionViewCounts = useEmoStore((s) => s.questionViewCounts || {})
  const [shuffledQuestions] = useState(() =>
    buildQuestionQueue(questions, viewedQuestions, questionViewCounts)
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const addViewedQuestion = useEmoStore((s) => s.addViewedQuestion)

  const currentQuestion = shuffledQuestions[currentIndex]

  const handleSkip = () => {
    if (!currentQuestion) return
    addViewedQuestion(currentQuestion.id)
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  const handleViewAnswer = () => {
    if (!currentQuestion) return
    addViewedQuestion(currentQuestion.id)
    router.push(`/answer/${currentQuestion.id}`)
  }

  if (!currentQuestion) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-center px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-lg text-white/50 font-light mb-4">
          你暂时刷完了「{emotionName}」里的内容
        </p>
        <p className="text-sm text-white/25 mb-8">
          先停在这里也没关系，你已经被看见过了
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2.5 rounded-full border border-white/10 text-sm text-white/50 hover:text-white/80 hover:border-white/20 transition-colors"
        >
          回到状态入口
        </button>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <motion.div
        className="flex-shrink-0 pt-20 pb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm text-white/30 tracking-wider">
          {emotionName} · 第 {currentIndex + 1} / {shuffledQuestions.length} 条
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md aspect-[3/4] rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden cursor-pointer"
          onClick={handleViewAnswer}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 text-center space-y-8">
            <div className="w-1 h-1 rounded-full bg-white/20 mx-auto" />

            <p className="text-xs text-white/25 tracking-wider">
              这一刻你可能在想
            </p>

            <h2 className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 tracking-wide px-4">
              {currentQuestion.title}
            </h2>

            <div className="space-y-2">
              <p className="text-xs text-white/20 tracking-wider">
                有 {currentQuestion.resonanceCount.toLocaleString()} 人也停在这里
              </p>
              <div className="w-8 h-px bg-white/10 mx-auto" />
            </div>

            <p className="text-xs text-white/25 tracking-wider">
              点开，不是找答案，是看看谁也这样想过
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex-shrink-0 pb-8 flex items-center justify-center gap-4 px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={handleSkip}
          disabled={false}
          className="px-6 py-2.5 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          刷下一条
        </button>
        <button
          onClick={handleViewAnswer}
          className="px-8 py-2.5 rounded-full bg-white/10 text-sm text-white/70 hover:bg-white/15 transition-colors"
        >
          看看谁懂
        </button>
      </motion.div>
    </div>
  )
}
