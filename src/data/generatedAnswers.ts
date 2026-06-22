import type { Answer, AnswerCategory } from "@/types"
import { questions } from "./questions"
import { answers as curatedAnswers } from "./answers"

type AnswerTemplate = {
  content: (question: string) => string
  sourceTitle: string
  author: string
  category: AnswerCategory
  explanation: (question: string) => string
}

const templatesByEmotion: Record<string, AnswerTemplate[]> = {
  confusion: [
    {
      content: (q) => `关于「${q}」，迷路不是失败，而是你终于开始认真辨认自己的方向。`,
      sourceTitle: "《瓦尔登湖》",
      author: "梭罗",
      category: "book",
      explanation: () => "这不是给出标准答案，而是提醒你：慢下来，也是一种找到自己的方式。",
    },
    {
      content: (q) => `当你问「${q}」时，说明你还没有把人生交给惯性。`,
      sourceTitle: "《存在与虚无》",
      author: "萨特",
      category: "philosophy",
      explanation: () => "困惑本身证明你仍在选择，而不是被动接受别人安排的生活。",
    },
    {
      content: (q) => `「${q}」也许不是要立刻回答的问题，而是要带着走一段路的问题。`,
      sourceTitle: "《小王子》",
      author: "圣埃克苏佩里",
      category: "book",
      explanation: () => "有些答案不会突然出现，它会在你继续生活时慢慢显形。",
    },
    {
      content: (q) => `如果你因为「${q}」而停下，那就先停下；停下不是倒退，是观察。`,
      sourceTitle: "定风波",
      author: "苏轼",
      category: "history",
      explanation: () => "苏轼式的陪伴不是催你快走，而是让你相信自己的节奏也可以。",
    },
    {
      content: (q) => `面对「${q}」，先不要急着赢过别人，先确认你有没有听见自己。`,
      sourceTitle: "《死亡诗社》",
      author: "彼得·威尔",
      category: "movie",
      explanation: () => "它把比较从问题中心移开，让你回到自己的声音。",
    },
    {
      content: (q) => `「${q}」的背后，也许藏着你不愿再将就的那部分自己。`,
      sourceTitle: "《月亮与六便士》",
      author: "毛姆",
      category: "book",
      explanation: () => "迷茫有时不是没有方向，而是旧方向已经装不下你了。",
    },
  ],
  loneliness: [
    {
      content: (q) => `当你想着「${q}」时，孤独不是你坏掉了，而是你在寻找真正的连接。`,
      sourceTitle: "《百年孤独》",
      author: "马尔克斯",
      category: "book",
      explanation: () => "这句话把孤独从缺陷改写成一种对真实关系的渴望。",
    },
    {
      content: (q) => `「${q}」并不说明你没人爱，它说明你不愿只被表面理解。`,
      sourceTitle: "《简爱》",
      author: "夏洛蒂·勃朗特",
      category: "book",
      explanation: () => "不是所有热闹都能抵达内心，你需要的是更深的被看见。",
    },
    {
      content: (q) => `如果「${q}」让你难过，先让月光坐在你旁边。`,
      sourceTitle: "竹里馆",
      author: "王维",
      category: "history",
      explanation: () => "它不急着消灭孤独，而是让孤独变得可被陪伴。",
    },
    {
      content: (q) => `关于「${q}」，人群不能替代亲密，聊天也不能替代理解。`,
      sourceTitle: "《思想录》",
      author: "帕斯卡尔",
      category: "philosophy",
      explanation: () => "它承认孤独的复杂性，而不是简单劝你多交朋友。",
    },
    {
      content: (q) => `你问「${q}」，也许是因为你终于不想再假装合群。`,
      sourceTitle: "《心灵捕手》",
      author: "格斯·范·桑特",
      category: "movie",
      explanation: () => "真正的陪伴不是把你推回人群，而是允许你先做自己。",
    },
    {
      content: (q) => `「${q}」不是终点，它可能是你学习与自己同行的开始。`,
      sourceTitle: "《瓦尔登湖》",
      author: "梭罗",
      category: "book",
      explanation: () => "独处不是被世界抛下，而是重新整理内心秩序。",
    },
  ],
  anxiety: [
    {
      content: (q) => `面对「${q}」，你不必一次解决整个人生，先把今天过完。`,
      sourceTitle: "《当下的力量》",
      author: "埃克哈特·托利",
      category: "book",
      explanation: () => "焦虑把人推向遥远未来，这句话把你带回可触摸的现在。",
    },
    {
      content: (q) => `「${q}」让你紧绷，是因为你在乎；但在乎不等于必须立刻完美。`,
      sourceTitle: "《人性的弱点》",
      author: "卡耐基",
      category: "book",
      explanation: () => "它把焦虑看成信号，而不是对你的判决。",
    },
    {
      content: (q) => `如果你被「${q}」追着跑，先停下来看看脚下还有没有路。`,
      sourceTitle: "《故乡》",
      author: "鲁迅",
      category: "book",
      explanation: () => "路不是焦虑想出来的，是一步一步走出来的。",
    },
    {
      content: (q) => `「${q}」不会因为你更苛责自己就消失，温柔也是一种行动。`,
      sourceTitle: "《活出生命的意义》",
      author: "维克多·弗兰克尔",
      category: "book",
      explanation: () => "它提醒你在压力里保留选择回应的自由。",
    },
    {
      content: (q) => `当「${q}」压过来时，别忘了你不是一张进度表。`,
      sourceTitle: "《心灵奇旅》",
      author: "皮特·道格特",
      category: "movie",
      explanation: () => "人生不是绩效系统，活着本身也值得被认真看见。",
    },
    {
      content: (q) => `关于「${q}」，你可以害怕，但不必把害怕当成预言。`,
      sourceTitle: "《西西弗神话》",
      author: "加缪",
      category: "philosophy",
      explanation: () => "焦虑常把可能性伪装成命运，而你仍有行动空间。",
    },
  ],
  regret: [
    {
      content: (q) => `「${q}」之所以痛，是因为那时的你真的在乎。`,
      sourceTitle: "锦瑟",
      author: "李商隐",
      category: "history",
      explanation: () => "遗憾不是软弱，它常常是深情留下的回声。",
    },
    {
      content: (q) => `面对「${q}」，不要用现在的清醒惩罚过去的自己。`,
      sourceTitle: "《活出生命的意义》",
      author: "维克多·弗兰克尔",
      category: "book",
      explanation: () => "过去的你只能用当时拥有的认知做选择。",
    },
    {
      content: (q) => `如果「${q}」无法改写，就让它成为你后来温柔的理由。`,
      sourceTitle: "《追风筝的人》",
      author: "卡勒德·胡赛尼",
      category: "book",
      explanation: () => "无法弥补的事，也可能转化为你更懂得珍惜的能力。",
    },
    {
      content: (q) => `「${q}」没有把你困住，真正困住你的是反复审判自己。`,
      sourceTitle: "《当下的力量》",
      author: "埃克哈特·托利",
      category: "book",
      explanation: () => "它把注意力从过去拉回到你现在能如何对待自己。",
    },
    {
      content: (q) => `关于「${q}」，人生没有存档点，但有下一页。`,
      sourceTitle: "《暴风雨》",
      author: "莎士比亚",
      category: "book",
      explanation: () => "它不否认遗憾，却把你从单一结局里释放出来。",
    },
    {
      content: (q) => `「${q}」可以被记得，但不必永远用疼痛来记得。`,
      sourceTitle: "《千与千寻》",
      author: "宫崎骏",
      category: "movie",
      explanation: () => "释怀不是遗忘，而是让记忆从伤口变成风景。",
    },
  ],
  hope: [
    {
      content: (q) => `当你问「${q}」，那一点还没熄灭的火已经在回答你。`,
      sourceTitle: "《西风颂》",
      author: "雪莱",
      category: "book",
      explanation: () => "仍然追问希望，说明你还没有完全交出自己。",
    },
    {
      content: (q) => `关于「${q}」，你不必相信宏大的奇迹，先相信下一步。`,
      sourceTitle: "《肖申克的救赎》",
      author: "斯蒂芬·金",
      category: "book",
      explanation: () => "希望不是口号，而是把自己带到明天的小动作。",
    },
    {
      content: (q) => `「${q}」不是天真，它是你在废墟里仍愿意种下一粒种子。`,
      sourceTitle: "《悲惨世界》",
      author: "雨果",
      category: "book",
      explanation: () => "它承认现实艰难，也承认人可以选择继续生长。",
    },
    {
      content: (q) => `如果「${q}」没有立刻得到回应，也请先把自己留在光的方向。`,
      sourceTitle: "《少年派的奇幻漂流》",
      author: "李安",
      category: "movie",
      explanation: () => "希望有时不是答案，而是一种让人活下去的叙事。",
    },
    {
      content: (q) => `「${q}」也许不会保证结果，但能让你不在黑暗里彻底放手。`,
      sourceTitle: "《活着》",
      author: "余华",
      category: "book",
      explanation: () => "它提供的是陪伴，不是承诺：先一起撑过这一刻。",
    },
    {
      content: (q) => `面对「${q}」，愿你允许自己先拥有微小的期待。`,
      sourceTitle: "《小王子》",
      author: "圣埃克苏佩里",
      category: "book",
      explanation: () => "希望不一定轰烈，它可以只是一个人愿意再次抬头。",
    },
  ],
  love: [
    {
      content: (q) => `关于「${q}」，爱不是把自己交出去，而是终于敢让心被看见。`,
      sourceTitle: "《简爱》",
      author: "夏洛蒂·勃朗特",
      category: "book",
      explanation: () => "真正的爱不会要求你消失，而会让你更接近自己。",
    },
    {
      content: (q) => `「${q}」让你难过，是因为你曾经认真地把一个人放进心里。`,
      sourceTitle: "《小王子》",
      author: "圣埃克苏佩里",
      category: "book",
      explanation: () => "受伤不是爱的失败，而是你真实在乎过的证据。",
    },
    {
      content: (q) => `如果你问「${q}」，先别急着定义关系，先确认自己有没有被善待。`,
      sourceTitle: "《爱的艺术》",
      author: "弗洛姆",
      category: "book",
      explanation: () => "它把爱从占有和焦虑中拉回到尊重与自由。",
    },
    {
      content: (q) => `「${q}」没有标准答案，但爱不该让你长期低头。`,
      sourceTitle: "《罗密欧与朱丽叶》",
      author: "莎士比亚",
      category: "book",
      explanation: () => "强烈的情感值得珍惜，但不该以失去自己为代价。",
    },
    {
      content: (q) => `面对「${q}」，有些相遇的意义不在结局，而在你因此认识了自己的心。`,
      sourceTitle: "《一代宗师》",
      author: "王家卫",
      category: "movie",
      explanation: () => "它不把爱情简化成拥有，而承认相遇本身也会改变人。",
    },
    {
      content: (q) => `「${q}」也许很痛，但痛过之后，你会更懂什么样的爱不该再接受。`,
      sourceTitle: "《千与千寻》",
      author: "宫崎骏",
      category: "movie",
      explanation: () => "失去不只是结束，也可能是你把自己找回来的开始。",
    },
  ],
  growth: [
    {
      content: (q) => `「${q}」不是你变糟了，而是你开始看见成长的代价。`,
      sourceTitle: "《活着》",
      author: "余华",
      category: "book",
      explanation: () => "成长不总是明亮的，它也包含失去、承认和继续。",
    },
    {
      content: (q) => `关于「${q}」，成熟不是不痛，而是痛了以后仍能照顾自己。`,
      sourceTitle: "《被讨厌的勇气》",
      author: "岸见一郎",
      category: "book",
      explanation: () => "它把成长从硬扛改写成一种更负责的自我照料。",
    },
    {
      content: (q) => `当你问「${q}」，说明旧的自己正在松动，新的自己还在路上。`,
      sourceTitle: "酬乐天扬州初逢席上见赠",
      author: "刘禹锡",
      category: "history",
      explanation: () => "旧我与新我交替时的不适，本来就是成长的一部分。",
    },
    {
      content: (q) => `「${q}」不需要马上变成答案，它可以先成为你重新理解自己的入口。`,
      sourceTitle: "《心灵奇旅》",
      author: "皮特·道格特",
      category: "movie",
      explanation: () => "成长不是完成任务，而是重新感受生活。",
    },
    {
      content: (q) => `面对「${q}」，普通不是失败，停止生长才是。`,
      sourceTitle: "苔",
      author: "袁枚",
      category: "history",
      explanation: () => "它把普通人微小但坚定的开放看作一种尊严。",
    },
    {
      content: (q) => `「${q}」背后，也许是你终于不想再用别人的期待定义自己。`,
      sourceTitle: "《死亡诗社》",
      author: "彼得·威尔",
      category: "movie",
      explanation: () => "真正的成长不是符合模板，而是逐渐拥有自己的声音。",
    },
  ],
  freedom: [
    {
      content: (q) => `关于「${q}」，自由不是没有牵挂，而是你终于能为选择负责。`,
      sourceTitle: "《存在与虚无》",
      author: "萨特",
      category: "philosophy",
      explanation: () => "自由不是逃离一切，而是承认选择属于自己。",
    },
    {
      content: (q) => `「${q}」也许不是要你立刻离开，而是先停止背叛自己。`,
      sourceTitle: "《瓦尔登湖》",
      author: "梭罗",
      category: "book",
      explanation: () => "自由先发生在内心秩序里，而不只是地理位置上。",
    },
    {
      content: (q) => `当你问「${q}」，你已经听见了内心想要松绑的声音。`,
      sourceTitle: "《逍遥游》",
      author: "庄子",
      category: "history",
      explanation: () => "它不是催促你反抗，而是提醒你还有更大的精神空间。",
    },
    {
      content: (q) => `「${q}」的答案不在别人允许里，而在你能否承认那是你的人生。`,
      sourceTitle: "《论自由》",
      author: "密尔",
      category: "book",
      explanation: () => "自由常常从停止过度寻求许可开始。",
    },
    {
      content: (q) => `面对「${q}」，不要把安全感误认为唯一的生活。`,
      sourceTitle: "《白日梦想家》",
      author: "本·斯蒂勒",
      category: "movie",
      explanation: () => "它让你看见：走出去不是鲁莽，也可能是回到生命力。",
    },
    {
      content: (q) => `「${q}」不一定要轰轰烈烈，能够说不也是自由。`,
      sourceTitle: "《被讨厌的勇气》",
      author: "岸见一郎",
      category: "book",
      explanation: () => "小小的边界感，是自由最日常的形态。",
    },
  ],
  courage: [
    {
      content: (q) => `面对「${q}」，勇气不是你不害怕，而是害怕仍没有放弃自己。`,
      sourceTitle: "《纳尼亚传奇》",
      author: "C.S.刘易斯",
      category: "book",
      explanation: () => "它承认恐惧存在，同时把行动的权利还给你。",
    },
    {
      content: (q) => `「${q}」也许只需要一个很小的开始，小到今天就能做到。`,
      sourceTitle: "《道德经》",
      author: "老子",
      category: "history",
      explanation: () => "千里之行不是靠热血完成，而是靠第一步。",
    },
    {
      content: (q) => `当你问「${q}」，你已经站在逃避和面对之间。`,
      sourceTitle: "《心灵捕手》",
      author: "格斯·范·桑特",
      category: "movie",
      explanation: () => "能看见自己的逃避，本身就是面对的开端。",
    },
    {
      content: (q) => `关于「${q}」，失败不是对你的定义，只是一次回声。`,
      sourceTitle: "《当幸福来敲门》",
      author: "加布里尔·穆奇诺",
      category: "movie",
      explanation: () => "它把失败从终局变成过程，让你还有继续的空间。",
    },
    {
      content: (q) => `「${q}」背后也许不是胆小，而是你终于在意自己的选择。`,
      sourceTitle: "《霍比特人》",
      author: "托尔金",
      category: "book",
      explanation: () => "重要的路本来就会让人发抖，发抖不代表不能走。",
    },
    {
      content: (q) => `面对「${q}」，不用等到完全准备好；路会教你。`,
      sourceTitle: "《白日梦想家》",
      author: "本·斯蒂勒",
      category: "movie",
      explanation: () => "勇气往往不是准备完成后的结果，而是上路后的生长。",
    },
  ],
  "letting-go": [
    {
      content: (q) => `关于「${q}」，放下不是否认发生过，而是不再每天重新受伤。`,
      sourceTitle: "《追风筝的人》",
      author: "卡勒德·胡赛尼",
      category: "book",
      explanation: () => "它把释怀理解为减少自我折磨，而不是强行忘记。",
    },
    {
      content: (q) => `「${q}」需要时间，不是因为你软弱，而是因为它真的重要。`,
      sourceTitle: "《小王子》",
      author: "圣埃克苏佩里",
      category: "book",
      explanation: () => "越重要的东西，越不可能被一句道理轻易带走。",
    },
    {
      content: (q) => `面对「${q}」，你可以先不原谅，只是先别继续惩罚自己。`,
      sourceTitle: "《被讨厌的勇气》",
      author: "岸见一郎",
      category: "book",
      explanation: () => "释怀不等于立刻宽恕，它可以从停止自伤开始。",
    },
    {
      content: (q) => `「${q}」不是要把记忆删掉，而是让记忆不再命令你。`,
      sourceTitle: "《当下的力量》",
      author: "埃克哈特·托利",
      category: "book",
      explanation: () => "它把你从过去的控制里带回当下。",
    },
    {
      content: (q) => `如果「${q}」还很难，就慢一点；风会经过，云也会散。`,
      sourceTitle: "定风波",
      author: "苏轼",
      category: "history",
      explanation: () => "这是一种不逼迫自己的释怀：允许时间参与疗愈。",
    },
    {
      content: (q) => `「${q}」的尽头，也许不是忘记，而是想起时心里终于安静。`,
      sourceTitle: "《千与千寻》",
      author: "宫崎骏",
      category: "movie",
      explanation: () => "真正的放下不是没有痕迹，而是不再被痕迹拖回原地。",
    },
  ],
}

export const generatedAnswers: Answer[] = questions.flatMap((question) => {
  const directCount = curatedAnswers.filter(
    (answer) => answer.questionId === question.id
  ).length
  const templates = templatesByEmotion[question.emotionId] ?? templatesByEmotion.confusion
  const needed = Math.max(0, 6 - directCount)

  return templates.slice(0, needed).map((template, index) => ({
    id: `gen_${question.id}_${index + 1}`,
    questionId: question.id,
    content: template.content(question.title),
    sourceTitle: template.sourceTitle,
    author: template.author,
    category: template.category,
    explanation: template.explanation(question.title),
  }))
})
