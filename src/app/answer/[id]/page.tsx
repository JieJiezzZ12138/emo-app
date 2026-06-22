import { questions } from "@/data"
import { AnswerClient } from "./AnswerClient"
import { Suspense } from "react"

export function generateStaticParams() {
  return questions.map((question) => ({ id: question.id }))
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Suspense fallback={null}>
      <AnswerClient questionId={id} />
    </Suspense>
  )
}
