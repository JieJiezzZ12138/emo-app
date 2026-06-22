import { emotions } from "@/data"
import { EmotionClient } from "./EmotionClient"

export function generateStaticParams() {
  return emotions.map((emotion) => ({ id: emotion.id }))
}

export default async function EmotionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <EmotionClient emotionId={id} />
}
