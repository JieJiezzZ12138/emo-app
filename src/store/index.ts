import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { UserState } from "@/types"

interface EmoStore extends UserState {
  addViewedQuestion: (id: string) => void
  addResonatedQuestion: (id: string) => void
  removeResonatedQuestion: (id: string) => void
  addFavoriteAnswer: (id: string) => void
  removeFavoriteAnswer: (id: string) => void
  incrementEmotionVisit: (emotionId: string) => void
  resetAll: () => void
}

const initialState: UserState = {
  viewedQuestions: [],
  questionViewCounts: {},
  resonatedQuestions: [],
  favoriteAnswers: [],
  emotionVisits: {},
  emotionVisitLog: [],
}

export const useEmoStore = create<EmoStore>()(
  persist(
    (set) => ({
      ...initialState,
      addViewedQuestion: (id) =>
        set((s) => ({
          viewedQuestions: s.viewedQuestions.includes(id)
            ? s.viewedQuestions
            : [...s.viewedQuestions, id],
          questionViewCounts: {
            ...(s.questionViewCounts || {}),
            [id]: ((s.questionViewCounts || {})[id] || 0) + 1,
          },
        })),
      addResonatedQuestion: (id) =>
        set((s) => ({
          resonatedQuestions: s.resonatedQuestions.includes(id)
            ? s.resonatedQuestions
            : [...s.resonatedQuestions, id],
        })),
      removeResonatedQuestion: (id) =>
        set((s) => ({
          resonatedQuestions: s.resonatedQuestions.filter((q) => q !== id),
        })),
      addFavoriteAnswer: (id) =>
        set((s) => ({
          favoriteAnswers: s.favoriteAnswers.includes(id)
            ? s.favoriteAnswers
            : [...s.favoriteAnswers, id],
        })),
      removeFavoriteAnswer: (id) =>
        set((s) => ({
          favoriteAnswers: s.favoriteAnswers.filter((a) => a !== id),
        })),
      incrementEmotionVisit: (emotionId) =>
        set((s) => ({
          emotionVisits: {
            ...s.emotionVisits,
            [emotionId]: (s.emotionVisits[emotionId] || 0) + 1,
          },
          emotionVisitLog: [
            ...((s.emotionVisitLog || []).slice(-499)),
            { emotionId, timestamp: Date.now() },
          ],
        })),
      resetAll: () => set(initialState),
    }),
    {
      name: "emo-user-state",
    }
  )
)
