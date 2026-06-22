"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEmoStore } from "@/store"
import { getFavoriteAnswersByIds, getQuestionById, getEmotionById } from "@/data"
import { StarField } from "@/components/universe/StarField"

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const chars = text.split("")
  const lines: string[] = []
  let line = ""

  chars.forEach((char) => {
    const nextLine = line + char
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      lines.push(line)
      line = char
      return
    }
    line = nextLine
  })

  if (line) lines.push(line)
  return lines
}

const categoryLabels: Record<string, string> = {
  movie: "电影",
  book: "书籍",
  philosophy: "哲学",
  history: "历史人物",
  music: "音乐",
}

export function CollectionPage() {
  const favoriteAnswerIds = useEmoStore((s) => s.favoriteAnswers)
  const removeFavoriteAnswer = useEmoStore((s) => s.removeFavoriteAnswer)
  const favoriteAnswers = getFavoriteAnswersByIds(favoriteAnswerIds)
  const [isSharing, setIsSharing] = useState(false)

  const handleShareCard = async (answerId: string) => {
    if (isSharing) return
    const answer = favoriteAnswers.find((item) => item.id === answerId)
    if (!answer) return
    const question = getQuestionById(answer.questionId)
    const emotion = question ? getEmotionById(question.emotionId) : null

    const canvas = document.createElement("canvas")
    canvas.width = 1080
    canvas.height = 1440
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gradient = ctx.createLinearGradient(0, 0, 1080, 1440)
    gradient.addColorStop(0, emotion?.color ?? "#7C6FE0")
    gradient.addColorStop(0.35, "#11111f")
    gradient.addColorStop(1, "#05050a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1080, 1440)

    ctx.fillStyle = "rgba(255, 255, 255, 0.06)"
    ctx.beginPath()
    ctx.arc(900, 180, 220, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(120, 1180, 260, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.font = "32px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillText("EMO", 80, 110)
    ctx.font = "22px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)"
    ctx.fillText("回应收藏 · Made by JIEJIE", 80, 150)

    let y = 280
    if (question) {
      ctx.font = "34px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillStyle = "rgba(255, 255, 255, 0.55)"
      wrapText(ctx, `我收藏了这个问题：${question.title}`, 880).slice(0, 3).forEach((line) => {
        ctx.fillText(line, 80, y)
        y += 52
      })
      y += 60
    }

    ctx.font = "44px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.88)"
    wrapText(ctx, `“${answer.content}”`, 880).slice(0, 8).forEach((line) => {
      ctx.fillText(line, 80, y)
      y += 68
    })

    y += 70
    ctx.font = "28px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.45)"
    wrapText(ctx, `—— ${answer.author} ${answer.sourceTitle}`, 880).slice(0, 2).forEach((line) => {
      ctx.fillText(line, 80, y)
      y += 42
    })

    if (emotion) {
      ctx.fillStyle = emotion.color
      ctx.beginPath()
      ctx.arc(86, 1285, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillStyle = "rgba(255, 255, 255, 0.38)"
      ctx.fillText(emotion.name, 110, 1294)
    }

    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.18)"
    ctx.fillText("EMO · 被看见，而不是被教育", 80, 1360)

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png")
    )
    if (!blob) return
    const file = new File([blob], "emo-favorite.png", { type: "image/png" })
    try {
      setIsSharing(true)
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "EMO 回应收藏",
          text: "我在 EMO 收藏了一条回应。",
          files: [file],
        })
        return
      }
    } catch (error) {
      const name = error instanceof DOMException ? error.name : ""
      if (name !== "AbortError" && name !== "InvalidStateError") {
        console.error(error)
      }
      return
    } finally {
      setIsSharing(false)
    }
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `emo-favorite-${Date.now()}.png`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-extralight tracking-wider text-white/80 mb-2">
            收藏
          </h1>
          <p className="text-sm text-white/25 tracking-wider mb-10">
            那些让你觉得被看见的回应
          </p>

          {favoriteAnswers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-sm mb-2">还没有收藏任何回应</p>
              <p className="text-white/15 text-xs">
                在回应页面点击 ♡ 来收藏
              </p>
              <Link
                href="/"
                className="inline-block mt-6 px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                去探索
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {favoriteAnswers.map((answer, index) => {
                const question = getQuestionById(answer.questionId)
                const emotion = question ? getEmotionById(question.emotionId) : null

                return (
                  <motion.div
                    key={answer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    id={`favorite-card-${answer.id}`}
                    className="export-card p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors group"
                  >
                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/15">
                      <span>EMO</span>
                      <span>回应收藏</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={`/answer/${answer.questionId}?answer=${answer.id}`}
                        className="flex-1 space-y-3"
                      >
                        {question && (
                          <p className="text-xs text-white/25">
                            「{question.title}」
                          </p>
                        )}
                        <p className="text-base text-white/75 leading-relaxed font-light">
                          「{answer.content}」
                        </p>
                        <div className="flex items-center gap-3 text-xs text-white/30">
                          <span>{answer.author}</span>
                          <span>·</span>
                          <span>{answer.sourceTitle}</span>
                          <span>·</span>
                          <span>{categoryLabels[answer.category]}</span>
                          {emotion && (
                            <>
                              <span>·</span>
                              <span style={{ color: emotion.color }}>{emotion.name}</span>
                            </>
                          )}
                        </div>
                      </Link>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Link
                        href={`/answer/${answer.questionId}?answer=${answer.id}`}
                        className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-white/35 transition-colors hover:border-white/20 hover:text-white/60"
                      >
                        查看详情
                      </Link>
                      <button
                        onClick={() => handleShareCard(answer.id)}
                        className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-white/35 transition-colors hover:border-white/20 hover:text-white/60"
                      >
                        分享卡片
                      </button>
                      <button
                        onClick={() => removeFavoriteAnswer(answer.id)}
                        className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-white/35 transition-colors hover:border-white/20 hover:text-white/60"
                      >
                        取消收藏
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
