export { emotions } from "./emotions"
export { questions } from "./questions"
export { answers } from "./answers"
export { generatedAnswers } from "./generatedAnswers"

import { emotions } from "./emotions"
import { questions } from "./questions"
import { answers } from "./answers"
import { generatedAnswers } from "./generatedAnswers"
import type { Emotion, Question, Answer } from "@/types"

const allAnswers = [...answers, ...generatedAnswers]

export function getEmotionById(id: string): Emotion | undefined {
  return emotions.find((e) => e.id === id)
}

export function getQuestionsByEmotion(emotionId: string): Question[] {
  return questions.filter((q) => q.emotionId === emotionId)
}

export function shuffleQuestions(items: Question[]): Question[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getAnswersByQuestion(questionId: string): Answer[] {
  return allAnswers.filter((a) => a.questionId === questionId)
}

export function getRandomAnswer(questionId: string): Answer | undefined {
  const qs = getAnswersByQuestion(questionId)
  if (qs.length === 0) return undefined
  return qs[Math.floor(Math.random() * qs.length)]
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id)
}

export function getAnswerById(id: string): Answer | undefined {
  return allAnswers.find((a) => a.id === id)
}

export function getFavoriteAnswersByIds(ids: string[]): Answer[] {
  return allAnswers.filter((a) => ids.includes(a.id))
}
