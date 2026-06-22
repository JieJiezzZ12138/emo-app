"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import type { Answer } from "@/types"
import { getRandomAnswer, getQuestionById, getEmotionById, questions } from "@/data"
import { StarField } from "@/components/universe/StarField"

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "")
  const r = parseInt(normalized.slice(0, 2), 16)
  const g = parseInt(normalized.slice(2, 4), 16)
  const b = parseInt(normalized.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function wrapCanvasText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
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

export function SharePage() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null)
  const [generatedAnswer, setGeneratedAnswer] = useState<Answer | null>(null)
  const [personalNote, setPersonalNote] = useState("")
  const [isSharing, setIsSharing] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleGenerate = useCallback(() => {
    const randomQ = questions[Math.floor(Math.random() * questions.length)]
    const answer = getRandomAnswer(randomQ.id)
    if (answer) {
      setSelectedQuestionId(randomQ.id)
      setGeneratedAnswer(answer)
    }
  }, [])

  const question = selectedQuestionId ? getQuestionById(selectedQuestionId) : null
  const emotion = question ? getEmotionById(question.emotionId) : null

  const today = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const renderCardBlob = useCallback(async () => {
    if (!question || !generatedAnswer) return

    const canvas = document.createElement("canvas")
    canvas.width = 1080
    canvas.height = 1440
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gradient = ctx.createLinearGradient(0, 0, 1080, 1440)
    gradient.addColorStop(0, emotion?.color ?? "#7C6FE0")
    gradient.addColorStop(0.32, "#11111f")
    gradient.addColorStop(1, "#05050a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1080, 1440)

    ctx.fillStyle = "rgba(255, 255, 255, 0.06)"
    ctx.beginPath()
    ctx.arc(920, 170, 240, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(130, 1190, 280, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(255, 255, 255, 0.74)"
    ctx.font = "34px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillText("EMO", 80, 110)
    ctx.font = "22px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)"
    ctx.fillText(`${today} · Made by JIEJIE`, 80, 150)

    let y = 270
    ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.34)"
    ctx.fillText("我今天刷到了一个问题", 80, y)
    y += 70

    ctx.font = "44px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.86)"
    wrapCanvasText(ctx, `“${question.title}”`, 880).slice(0, 4).forEach((line) => {
      ctx.fillText(line, 80, y)
      y += 66
    })

    y += 20
    ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)"
    ctx.fillText(`有 ${question.resonanceCount.toLocaleString()} 人也停在这里`, 80, y)

    if (personalNote.trim()) {
      y += 70
      ctx.fillStyle = "rgba(255, 255, 255, 0.07)"
      ctx.roundRect(70, y - 42, 940, 120, 28)
      ctx.fill()
      ctx.font = "30px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillStyle = "rgba(255, 255, 255, 0.62)"
      wrapCanvasText(ctx, `“${personalNote.trim()}”`, 840).slice(0, 2).forEach((line, index) => {
        ctx.fillText(line, 110, y + index * 44)
      })
      y += 125
    } else {
      y += 75
    }

    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"
    ctx.beginPath()
    ctx.moveTo(80, y)
    ctx.lineTo(240, y)
    ctx.stroke()
    y += 90

    ctx.font = "38px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.84)"
    wrapCanvasText(ctx, `“${generatedAnswer.content}”`, 880).slice(0, 6).forEach((line) => {
      ctx.fillText(line, 80, y)
      y += 58
    })

    y += 45
    ctx.font = "26px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.42)"
    wrapCanvasText(ctx, `—— ${generatedAnswer.author} ${generatedAnswer.sourceTitle}`, 880).slice(0, 2).forEach((line) => {
      ctx.fillText(line, 80, y)
      y += 38
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

    return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"))
  }, [emotion, generatedAnswer, personalNote, question, today])

  const handleDownloadImage = useCallback(async () => {
    const blob = await renderCardBlob()
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `emo-card-${Date.now()}.png`
    link.click()
    URL.revokeObjectURL(url)
  }, [renderCardBlob])

  const handleShareImage = useCallback(async () => {
    if (isSharing) return
    const blob = await renderCardBlob()
    if (!blob) return
    const file = new File([blob], "emo-card.png", { type: "image/png" })
    try {
      setIsSharing(true)
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "EMO 当下状态卡",
          text: "我在 EMO 刷到了一条很像自己的状态。",
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
    link.download = `emo-card-${Date.now()}.png`
    link.click()
    URL.revokeObjectURL(url)
  }, [isSharing, renderCardBlob])

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
            今日状态卡
          </h1>
          <p className="text-sm text-white/25 tracking-wider mb-10">
            不是分享名句，是分享今天的自己
          </p>

          <div className="flex justify-center mb-8">
            <button
              onClick={handleGenerate}
              className="px-8 py-3 rounded-full border border-white/10 text-sm text-white/50 hover:text-white/70 hover:border-white/20 transition-colors"
            >
              生成状态卡
            </button>
          </div>

          {generatedAnswer && question && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <textarea
                value={personalNote}
                onChange={(event) => setPersonalNote(event.target.value.slice(0, 42))}
                placeholder="给卡片加一句自己的话，最多 42 字"
                className="min-h-20 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-white/70 placeholder:text-white/20 outline-none transition-colors focus:border-white/20"
              />

              <div
                ref={cardRef}
                className="export-card relative p-8 md:p-10 rounded-3xl overflow-hidden"
                style={{
                  background: emotion
                    ? `linear-gradient(135deg, ${hexToRgba(emotion.color, 0.22)}, rgb(9, 9, 18))`
                    : "rgb(9, 9, 18)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative z-10 text-center space-y-6">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/20">
                    <span>EMO</span>
                    <span>{today}</span>
                  </div>

                  <p className="text-xs text-white/25 tracking-wider">
                    我今天刷到了一个问题
                  </p>

                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    「{question.title}」
                  </p>

                  <p className="text-xs text-white/25 tracking-wider">
                    有 {question.resonanceCount.toLocaleString()} 人也停在这里
                  </p>

                  {personalNote.trim() && (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                      <p className="text-sm leading-relaxed text-white/55">
                        “{personalNote.trim()}”
                      </p>
                    </div>
                  )}

                  <div className="w-6 h-px bg-white/15 mx-auto" />

                  <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light">
                    「{generatedAnswer.content}」
                  </p>

                  <p className="text-sm text-white/40">
                    —— {generatedAnswer.author} {generatedAnswer.sourceTitle}
                  </p>

                  {emotion && (
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: emotion.color }}
                      />
                      <span className="text-xs text-white/25">{emotion.name}</span>
                    </div>
                  )}

                  <p className="text-[10px] text-white/10 tracking-[0.3em] mt-4">EMO · 被看见，而不是被教育</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleDownloadImage}
                  className="px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 hover:border-white/20 transition-colors"
                >
                  保存图片
                </button>
                <button
                  onClick={handleShareImage}
                  className="px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 hover:border-white/20 transition-colors"
                >
                  直接分享
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
