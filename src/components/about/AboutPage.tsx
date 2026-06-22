"use client"

import { motion } from "framer-motion"
import { StarField } from "@/components/universe/StarField"

export function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <StarField />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-extralight tracking-wider text-white/80 mb-2">
              关于 EMO
            </h1>
            <p className="text-sm text-white/25 tracking-wider">
              当下状态共鸣流
            </p>
          </div>

          <div className="space-y-6 text-white/50 text-sm leading-relaxed">
            <p>
              EMO 不是一个知识库，不是名言网站，不是 AI 聊天产品。
            </p>
            <p>
              它是一个帮助你发现——原来世界上还有很多人也卡在同一刻，
              也有人早就在作品里替你说出来过——的共鸣空间。
            </p>
            <p className="text-white/30 italic">
              不要提供答案，要提供陪伴。
            </p>
            <p>
              用户不是来寻找正确答案的，而是来确认：「我不是唯一一个这样的人」。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm text-white/30 tracking-wider">如何使用</h2>
            <div className="space-y-3 text-sm text-white/40">
              <div className="flex gap-3">
                <span className="text-white/20">01</span>
                <p>在当下状态里点开最像你的那一句</p>
              </div>
              <div className="flex gap-3">
                <span className="text-white/20">02</span>
                <p>一屏一条刷问题，优先看到你没刷过的内容</p>
              </div>
              <div className="flex gap-3">
                <span className="text-white/20">03</span>
                <p>点开问题，等待星光汇聚，看看谁也这样想过</p>
              </div>
              <div className="flex gap-3">
                <span className="text-white/20">04</span>
                <p>收藏打动你的回应，在状态星图中看见自己</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm text-white/30 tracking-wider">回应来源</h2>
            <div className="flex flex-wrap gap-2">
              {["电影", "书籍", "哲学", "历史人物", "音乐"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs text-white/25 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-white/25">
              内容会优先使用公版作品、短引用与受经典启发的改写表达。仍在版权保护期内的歌词、长段台词和大段原文不作为主要内容来源。
            </p>
          </div>

          <div className="pt-8 border-t border-white/[0.04]">
            <p className="text-xs text-white/15 tracking-wider text-center">
              原来我并不孤单。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
