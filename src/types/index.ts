export interface Emotion {
  id: string
  name: string
  description: string
  color: string
  glowColor: string
  position: { x: number; y: number }
}

export interface Question {
  id: string
  emotionId: string
  title: string
  resonanceCount: number
}

export type AnswerCategory = "movie" | "book" | "philosophy" | "history" | "music"

export interface Answer {
  id: string
  questionId: string
  content: string
  sourceTitle: string
  author: string
  year?: string
  category: AnswerCategory
  explanation: string
}

export interface UserState {
  viewedQuestions: string[]
  questionViewCounts: Record<string, number>
  resonatedQuestions: string[]
  favoriteAnswers: string[]
  emotionVisits: Record<string, number>
  emotionVisitLog: Array<{ emotionId: string; timestamp: number }>
}
