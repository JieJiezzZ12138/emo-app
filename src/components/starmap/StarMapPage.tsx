"use client"

import { useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEmoStore } from "@/store"
import { emotions } from "@/data"
import { StarField } from "@/components/universe/StarField"

type Period = "day" | "week" | "month" | "all"

const periodOptions: Array<{ id: Period; label: string; days?: number }> = [
  { id: "day", label: "一天", days: 1 },
  { id: "week", label: "一周", days: 7 },
  { id: "month", label: "一月", days: 30 },
  { id: "all", label: "全部" },
]

export function StarMapPage() {
  const [period, setPeriod] = useState<Period>("week")
  const cardRef = useRef<HTMLDivElement>(null)
  const emotionVisits = useEmoStore((s) => s.emotionVisits)
  const emotionVisitLog = useEmoStore((s) => s.emotionVisitLog || [])
  const viewedQuestions = useEmoStore((s) => s.viewedQuestions)
  const favoriteAnswers = useEmoStore((s) => s.favoriteAnswers)

  const activeOption = periodOptions.find((option) => option.id === period) ?? periodOptions[1]

  const scopedVisits = useMemo(() => {
    if (period === "all") return emotionVisits

    const since = Date.now() - (activeOption.days ?? 7) * 24 * 60 * 60 * 1000
    const scoped = emotionVisitLog
      .filter((visit) => visit.timestamp >= since)
      .reduce<Record<string, number>>((acc, visit) => {
        acc[visit.emotionId] = (acc[visit.emotionId] || 0) + 1
        return acc
      }, {})

    return Object.keys(scoped).length > 0 ? scoped : emotionVisits
  }, [activeOption.days, emotionVisitLog, emotionVisits, period])

  const totalVisits = Object.values(scopedVisits).reduce((a, b) => a + b, 0)

  const emotionData = emotions
    .map((emotion) => ({
      ...emotion,
      visits: scopedVisits[emotion.id] || 0,
      percentage: totalVisits > 0 ? ((scopedVisits[emotion.id] || 0) / totalVisits) * 100 : 0,
    }))
    .sort((a, b) => b.visits - a.visits)

  const handleDownload = async () => {
    const canvas = document.createElement("canvas")
    canvas.width = 1080
    canvas.height = 1440
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gradient = ctx.createLinearGradient(0, 0, 1080, 1440)
    gradient.addColorStop(0, "#191936")
    gradient.addColorStop(0.45, "#10101d")
    gradient.addColorStop(1, "#05050a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1080, 1440)

    ctx.fillStyle = "rgba(255, 255, 255, 0.72)"
    ctx.font = "34px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillText("EMO HEART MAP", 80, 110)
    ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)"
    ctx.fillText(`${activeOption.label} · Made by JIEJIE`, 80, 152)

    ctx.font = "56px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.84)"
    ctx.fillText("我的心图", 80, 260)
    ctx.font = "26px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.34)"
    ctx.fillText("不是数据报告，是这段时间的你", 80, 310)

    ctx.fillStyle = "rgba(255, 255, 255, 0.06)"
    ctx.roundRect(80, 380, 420, 150, 30)
    ctx.fill()
    ctx.roundRect(580, 380, 420, 150, 30)
    ctx.fill()
    ctx.font = "52px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.78)"
    ctx.fillText(String(viewedQuestions.length), 120, 455)
    ctx.fillText(String(favoriteAnswers.length), 620, 455)
    ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.32)"
    ctx.fillText("浏览过的条目", 120, 495)
    ctx.fillText("收藏的回应", 620, 495)

    const activeData = emotionData.filter((emotion) => emotion.visits > 0).slice(0, 8)
    let y = 650
    ctx.font = "26px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.34)"
    ctx.fillText("这段时间更常停留在", 80, y)
    y += 55

    activeData.forEach((emotion) => {
      ctx.fillStyle = emotion.color
      ctx.beginPath()
      ctx.arc(90, y - 8, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif"
      ctx.fillStyle = "rgba(255, 255, 255, 0.58)"
      ctx.fillText(emotion.name, 115, y)
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)"
      ctx.fillRect(470, y - 20, 430, 12)
      ctx.fillStyle = emotion.color
      ctx.fillRect(470, y - 20, Math.max(12, 430 * (emotion.percentage / 100)), 12)
      ctx.fillStyle = "rgba(255, 255, 255, 0.36)"
      ctx.fillText(`${emotion.percentage.toFixed(0)}%`, 925, y)
      y += 58
    })

    const centerX = 540
    const centerY = 1090
    ctx.font = "72px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
    ctx.fillText("♡", centerX - 36, centerY + 25)

    activeData.forEach((emotion, index) => {
      const angle = (index / activeData.length) * Math.PI * 2 - Math.PI / 2
      const radius = 125 + emotion.percentage * 1.2
      const x = centerX + Math.cos(angle) * radius
      const yPoint = centerY + Math.sin(angle) * radius * 0.72
      const size = Math.max(12, emotion.percentage * 1.2)
      ctx.fillStyle = emotion.color
      ctx.beginPath()
      ctx.arc(x, yPoint, size, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.font = "20px -apple-system, BlinkMacSystemFont, sans-serif"
    ctx.fillStyle = "rgba(255, 255, 255, 0.18)"
    ctx.fillText("EMO · 被看见，而不是被教育", 80, 1360)

    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = `emo-heart-map-${period}-${Date.now()}.png`
    link.click()
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-extralight tracking-wider text-white/80 mb-2">
              我的心图
            </h1>
            <p className="text-sm text-white/25 tracking-wider">
              不是数据报告，是这段时间的你
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {periodOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setPeriod(option.id)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  period === option.id
                    ? "border-white/25 bg-white/10 text-white/70"
                    : "border-white/10 text-white/30 hover:border-white/20 hover:text-white/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {totalVisits === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-sm mb-2">还没有足够的心图数据</p>
              <p className="text-white/15 text-xs">
                多刷几条状态，你的心图会慢慢长出来
              </p>
              <Link
                href="/"
                className="inline-block mt-6 px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 transition-colors"
              >
                开始探索
              </Link>
            </div>
          ) : (
            <>
              <div
                ref={cardRef}
                className="export-card overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/20">
                  <span>EMO HEART MAP</span>
                  <span>{activeOption.label}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <p className="text-2xl font-light text-white/70">{viewedQuestions.length}</p>
                    <p className="text-xs text-white/25 mt-1">浏览过的条目</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <p className="text-2xl font-light text-white/70">{favoriteAnswers.length}</p>
                    <p className="text-xs text-white/25 mt-1">收藏的回应</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-sm text-white/30 tracking-wider mb-4">这段时间更常停留在</h2>
                  <div className="space-y-3">
                    {emotionData.filter((emotion) => emotion.visits > 0).map((emotion, index) => (
                      <motion.div
                        key={emotion.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: emotion.color }}
                        />
                        <span className="text-xs text-white/50 w-24 flex-shrink-0 truncate">
                          {emotion.name}
                        </span>
                        <div className="flex-1 h-1.5 rounded-full bg-white/[0.03] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: emotion.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(emotion.percentage, 2)}%` }}
                            transition={{ delay: 0.3 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-xs text-white/25 w-10 text-right">
                          {emotion.percentage.toFixed(0)}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center py-8">
                  <div className="relative w-52 h-44">
                    {emotionData.filter((emotion) => emotion.visits > 0).map((emotion, index) => {
                      const count = emotionData.filter((item) => item.visits > 0).length
                      const angle = (index / count) * Math.PI * 2 - Math.PI / 2
                      const radius = 46 + emotion.percentage * 0.65
                      const x = 104 + Math.cos(angle) * radius
                      const y = 82 + Math.sin(angle) * radius * 0.75
                      const size = Math.max(7, emotion.percentage * 0.45)

                      return (
                        <motion.div
                          key={emotion.id}
                          className="absolute rounded-full"
                          style={{
                            left: x - size / 2,
                            top: y - size / 2,
                            width: size,
                            height: size,
                            backgroundColor: emotion.color,
                            boxShadow: `0 0 ${size * 2}px ${emotion.glowColor}`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.75 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        />
                      )
                    })}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl text-white/25">♡</div>
                    </div>
                  </div>
                </div>

                <p className="text-center text-[10px] uppercase tracking-[0.28em] text-white/10">
                  Made by JIEJIE · EMO
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleDownload}
                  className="px-6 py-2 rounded-full border border-white/10 text-sm text-white/40 hover:text-white/60 hover:border-white/20 transition-colors"
                >
                  导出心图图片
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
