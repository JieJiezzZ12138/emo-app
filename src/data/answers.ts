import type { Answer } from "@/types"

export const answers: Answer[] = [
  // 迷茫 - c1: 我是不是已经落后同龄人了？
  { id: "a_c1_1", questionId: "c1", content: "满地都是六便士，他却抬头看见了月亮。", sourceTitle: "《月亮与六便士》", author: "毛姆", category: "book", explanation: "真正重要的不是和别人比较速度，而是你是否看见了自己真正想追寻的方向。" },
  { id: "a_c1_2", questionId: "c1", content: "你不能用别人的尺子量自己的人生。", sourceTitle: "《死亡诗社》", author: "彼得·威尔", category: "movie", explanation: "每个人都有自己的时区，你不需要和任何人赛跑。" },
  { id: "a_c1_3", questionId: "c1", content: "世上的路有很多条，走哪条不要紧，要紧的是你在走。", sourceTitle: "《活着》", author: "余华", category: "book", explanation: "与其纠结是否落后，不如确认自己是否还在前行。" },
  { id: "a_c1_4", questionId: "c1", content: "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。", sourceTitle: "定风波", author: "苏轼", category: "history", explanation: "别人有别人的路，你有你的风景。何须比较。" },
  { id: "a_c1_5", questionId: "c1", content: "那些你以为浪费时间的事情，可能正是你活着的证明。", sourceTitle: "《心灵奇旅》", author: "皮特·道格特", category: "movie", explanation: "人生不是跑道，没有终点线。你此刻的迷茫，也是活着的一部分。" },

  // c2: 我到底想要什么？
  { id: "a_c2_1", questionId: "c2", content: "你必须找到你心中的火焰，然后让它燃烧。", sourceTitle: "《死亡诗社》", author: "彼得·威尔", category: "movie", explanation: "不是所有问题都需要立刻回答，但你可以先找到让自己心动的事物。" },
  { id: "a_c2_2", questionId: "c2", content: "我步入丛林，因为我希望生活得有意义。", sourceTitle: "《瓦尔登湖》", author: "梭罗", category: "book", explanation: "找到想要什么，始于你愿意安静下来，与自己对话。" },
  { id: "a_c2_3", questionId: "c2", content: "知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。", sourceTitle: "《大学》", author: "曾子", category: "history", explanation: "知道自己在哪里停下来，才能开始知道自己真正想要什么。" },
  { id: "a_c2_4", questionId: "c2", content: "成为你自己，因为别的都有人做了。", sourceTitle: "致奥登", author: "王尔德", category: "philosophy", explanation: "你不是在'找'想要什么，你是在'成为'自己。" },
  { id: "a_c2_5", questionId: "c2", content: "那些你无法停止去想的事，就是你真正想要的。", sourceTitle: "《白日梦想家》", author: "本·斯蒂勒", category: "movie", explanation: "答案不在远方，藏在那些你反复想起的念头里。" },

  // c3: 为什么别人都那么确定方向，而我还在原地？
  { id: "a_c3_1", questionId: "c3", content: "每一个不曾起舞的日子，都是对生命的辜负。", sourceTitle: "《查拉图斯特拉如是说》", author: "尼采", category: "philosophy", explanation: "不是别人确定了方向，而是他们选择了起舞。你也可以。" },
  { id: "a_c3_2", questionId: "c3", content: "莫听穿林打叶声，何妨吟啸且徐行。", sourceTitle: "定风波", author: "苏轼", category: "history", explanation: "别人的喧嚣与你无关，重要的是你愿意以自己的节奏前行。" },
  { id: "a_c3_3", questionId: "c3", content: "世界上只有一种英雄主义，就是认清了生活的真相后依然热爱生活。", sourceTitle: "《米开朗基罗传》", author: "罗曼·罗兰", category: "book", explanation: "不确定方向不可怕，在不确定中依然热爱，就是勇敢。" },
  { id: "a_c3_4", questionId: "c3", content: "人生没有白走的路，每一步都算数。", sourceTitle: "《白日梦想家》", author: "本·斯蒂勒", category: "movie", explanation: "你以为的原地，可能正在积蓄力量。" },
  { id: "a_c3_5", questionId: "c3", content: "迷则行醒之事，觉则止观之心。", sourceTitle: "《传习录》", author: "王阳明", category: "history", explanation: "迷茫时就去做，清醒时就去看。不需要总是确定方向。" },

  // c4: 这条路是不是走错了？
  { id: "a_c4_1", questionId: "c4", content: "生活总是这样，不能叫人处处满意。但我们还要热情地活下去。", sourceTitle: "《人生》", author: "路遥", category: "book", explanation: "没有绝对正确的路，只有你愿意走完的路。" },
  { id: "a_c4_2", questionId: "c4", content: "怕走错路的人，永远走不到终点。", sourceTitle: "《肖申克的救赎》", author: "弗兰克·德拉邦特", category: "movie", explanation: "走错路也是一种走，调整方向比停在原地更有价值。" },
  { id: "a_c4_3", questionId: "c4", content: "山重水复疑无路，柳暗花明又一村。", sourceTitle: "游山西村", author: "陆游", category: "history", explanation: "走到看似无路时，转角可能就是新的天地。" },
  { id: "a_c4_4", questionId: "c4", content: "所有的迷路都是在寻找一条更好的路。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "你此刻的怀疑，也许是另一个方向的开端。" },
  { id: "a_c4_5", questionId: "c4", content: "人真正变强大，不是因为守着自尊心，而是放下自尊心的时候。", sourceTitle: "《请回答1988》", author: "申源浩", category: "movie", explanation: "走错不可怕，承认并转身，才是真正的勇气。" },

  // c5-c10 迷茫续
  { id: "a_c5_1", questionId: "c5", content: "知人者智，自知者明。", sourceTitle: "《道德经》", author: "老子", category: "history", explanation: "适合做什么，从了解自己开始。不是所有问题都有快捷答案。" },
  { id: "a_c5_2", questionId: "c5", content: "不要去追一匹马，用追马的时间种草。", sourceTitle: "民间智慧", author: "佚名", category: "philosophy", explanation: "先让自己生长，合适的一切会自然到来。" },
  { id: "a_c5_3", questionId: "c5", content: "你的时间有限，不要浪费在过别人的生活上。", sourceTitle: "斯坦福大学毕业演讲", author: "乔布斯", category: "history", explanation: "适合做什么，从停止做别人开始。" },

  { id: "a_c6_1", questionId: "c6", content: "重要的不是走了多远，而是还在走。", sourceTitle: "《肖申克的救赎》", author: "斯蒂芬·金", category: "book", explanation: "方向感不是找到的，是走出来的。" },
  { id: "a_c6_2", questionId: "c6", content: "行到水穷处，坐看云起时。", sourceTitle: "终南别业", author: "王维", category: "history", explanation: "当努力走到尽头，也许需要的不是继续，而是停下来看看。" },

  { id: "a_c7_1", questionId: "c7", content: "存在先于本质。", sourceTitle: "《存在与虚无》", author: "萨特", category: "philosophy", explanation: "人生本没有预设答案，你是先存在，再创造意义。" },
  { id: "a_c7_2", questionId: "c7", content: "我思故我在。", sourceTitle: "《第一哲学沉思集》", author: "笛卡尔", category: "philosophy", explanation: "你在追问，这本身就证明你在认真地活着。" },

  { id: "a_c8_1", questionId: "c8", content: "想太多是病，但不想更可怕。关键是想完之后，去做。", sourceTitle: "《心灵捕手》", author: "格斯·范·桑特", category: "movie", explanation: "迷茫是因为思考比行动多了半步，但那半步值得迈出去。" },

  { id: "a_c9_1", questionId: "c9", content: "仰望星空的人，不会觉得自己在黑暗中。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "听从内心不是冒险，听从现实才是。" },
  { id: "a_c9_2", questionId: "c9", content: "吾心自有光明月，千古团圆永无缺。", sourceTitle: "《传习录》", author: "王阳明", category: "history", explanation: "内心与现实并不对立，你的心知道答案。" },

  { id: "a_c10_1", questionId: "c10", content: "迷茫恰恰说明你在思考，而思考是一种自由。", sourceTitle: "《瓦尔登湖》", author: "梭罗", category: "book", explanation: "温饱之上才有迷茫，这是你不愿将就的证据。" },

  // 孤独 - l1: 为什么越长大越孤独？
  { id: "a_l1_1", questionId: "l1", content: "生命中曾经有过的所有灿烂，终究都需要用寂寞来偿还。", sourceTitle: "《百年孤独》", author: "马尔克斯", category: "book", explanation: "孤独不是惩罚，而是成熟后必须学会与自己相处的代价。" },
  { id: "a_l1_2", questionId: "l1", content: "我越是孤独，越是没有朋友，越是没有支持，我就得越尊重我自己。", sourceTitle: "《简爱》", author: "夏洛蒂·勃朗特", category: "book", explanation: "孤独教会你的第一件事，就是不要委屈自己去合群。" },
  { id: "a_l1_3", questionId: "l1", content: "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。", sourceTitle: "竹里馆", author: "王维", category: "history", explanation: "孤独也可以是美丽的。当你学会与明月为伴，便不再需要人群。" },
  { id: "a_l1_4", questionId: "l1", content: "我们所有的苦难，都来自于无法独自在房间里安静地坐着。", sourceTitle: "《思想录》", author: "帕斯卡尔", category: "philosophy", explanation: "孤独之所以可怕，是因为我们害怕面对自己。但面对自己，是成长的开始。" },
  { id: "a_l1_5", questionId: "l1", content: "有些人能感受雨，其他人只是被淋湿。", sourceTitle: "《雨中曲》", author: "罗杰斯", category: "movie", explanation: "越长大越孤独，也许是因为你开始真正在感受了。" },

  // l2-l10 孤独续
  { id: "a_l2_1", questionId: "l2", content: "孤独不是身边无人，而是无法与人交流自己最在乎的事。", sourceTitle: "《百年孤独》", author: "马尔克斯", category: "book", explanation: "真正的孤独不是物理距离，而是心灵的隔阂。你值得被真正理解。" },
  { id: "a_l2_2", questionId: "l2", content: "万人如海一身藏。", sourceTitle: "杭州春望", author: "苏轼", category: "history", explanation: "人群中更孤独，是因为你在隐藏真正的自己。" },

  { id: "a_l3_1", questionId: "l3", content: "独处是灵魂生长的空间。", sourceTitle: "《瓦尔登湖》", author: "梭罗", category: "book", explanation: "孤独是被动的，独处是主动的。当你选择独处时，孤独就变成了自由。" },

  { id: "a_l4_1", questionId: "l4", content: "一个人知道自己为什么而活，就可以忍受任何一种生活。", sourceTitle: "《悲剧的诞生》", author: "尼采", category: "philosophy", explanation: "好与不好不取决于几个人，而取决于你是否清楚自己在为何而活。" },
  { id: "a_l4_2", questionId: "l4", content: "落花人独立，微雨燕双飞。", sourceTitle: "临江仙", author: "晏几道", category: "history", explanation: "一个人也可以是风景。美不在人数，在心境。" },

  { id: "a_l5_1", questionId: "l5", content: "最深的孤独不是身边无人，而是把自己丢了。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "人群中的孤独，提醒你回到自己。" },

  { id: "a_l6_1", questionId: "l6", content: "冬天从这里夺去的，春天会交还给你。", sourceTitle: "《还乡》", author: "海涅", category: "philosophy", explanation: "孤独不会永远。它像季节一样，终会过去。" },

  { id: "a_l7_1", questionId: "l7", content: "鹰击长空，鱼翔浅底，万类霜天竞自由。", sourceTitle: "沁园春·长沙", author: "毛泽东", category: "history", explanation: "不合群也许是因为你属于更大的天空。" },

  { id: "a_l8_1", questionId: "l8", content: "交朋友不是找同类，而是找到能让你做自己的人。", sourceTitle: "《心灵捕手》", author: "格斯·范·桑特", category: "movie", explanation: "真心朋友难找，是因为你越来越知道自己要什么。" },

  { id: "a_l9_1", questionId: "l9", content: "一切伟大的行动和思想，都有一个微不足道的开始。", sourceTitle: "《西西弗神话》", author: "加缪", category: "philosophy", explanation: "孤独不是病，它是你与自己对话的方式。" },

  { id: "a_l10_1", questionId: "l10", content: "独与天地精神往来，而不敖倪于万物。", sourceTitle: "《庄子》", author: "庄子", category: "history", explanation: "和孤独相处，不是忍耐，而是学会与天地精神对话。" },

  // 焦虑 - a1: 努力真的会有回报吗？
  { id: "a_a1_1", questionId: "a1", content: "希望是本无所谓有，无所谓无的。这正如地上的路；其实地上本没有路，走的人多了，也便成了路。", sourceTitle: "《故乡》", author: "鲁迅", category: "book", explanation: "回报不是等来的，是你走出来的。每一步都算。" },
  { id: "a_a1_2", questionId: "a1", content: "天行健，君子以自强不息。", sourceTitle: "《周易》", author: "佚名", category: "history", explanation: "努力的意义不在于保证回报，而在于你没有放弃自己。" },
  { id: "a_a1_3", questionId: "a1", content: "你只管努力，剩下的交给时间。", sourceTitle: "《肖申克的救赎》", author: "斯蒂芬·金", category: "book", explanation: "有些回报不会立刻出现，但它正在来的路上。" },
  { id: "a_a1_4", questionId: "a1", content: "凡是过往，皆为序章。", sourceTitle: "《暴风雨》", author: "莎士比亚", category: "book", explanation: "回报可能不在你期待的形式里，但所有的努力都为下一章做了铺垫。" },
  { id: "a_a1_5", questionId: "a1", content: "苦心人，天不负，卧薪尝胆，三千越甲可吞吴。", sourceTitle: "自勉联", author: "蒲松龄", category: "history", explanation: "回报可能会迟到，但不会缺席。你需要的可能只是更多时间。" },

  // a2-a10 焦虑续
  { id: "a_a2_1", questionId: "a2", content: "种一棵树最好的时间是十年前，其次是现在。", sourceTitle: "非洲谚语", author: "佚名", category: "philosophy", explanation: "没有来不及，只有还没开始。" },
  { id: "a_a2_2", questionId: "a2", content: "莫道桑榆晚，为霞尚满天。", sourceTitle: "酬乐天咏老见示", author: "刘禹锡", category: "history", explanation: "什么时候开始都不晚，晚的是你一直在犹豫。" },

  { id: "a_a3_1", questionId: "a3", content: "完美是优秀的敌人。", sourceTitle: "《伦理学》", author: "伏尔泰", category: "philosophy", explanation: "觉得自己不够好，是因为你在用完美标准衡量自己。允许自己不完美。" },
  { id: "a_a3_2", questionId: "a3", content: "你不需要看见整段楼梯，只需要迈出第一步。", sourceTitle: "马丁·路德·金演讲", author: "马丁·路德·金", category: "history", explanation: "不够好是一种感觉，不是事实。你已经比想象中更好了。" },

  { id: "a_a4_1", questionId: "a4", content: "计划赶不上变化，但变化赶不上坚持。", sourceTitle: "《当幸福来敲门》", author: "加布里尔·穆奇诺", category: "movie", explanation: "未来不可控，但你的坚持是可控的。坚持本身就有力量。" },

  { id: "a_a5_1", questionId: "a5", content: "坚持的意义不在于成功，而在于你选择了不放弃自己。", sourceTitle: "《活着》", author: "余华", category: "book", explanation: "该不该继续，取决于你是否还相信这件事值得。" },
  { id: "a_a5_2", questionId: "a5", content: "长风破浪会有时，直挂云帆济沧海。", sourceTitle: "行路难", author: "李白", category: "history", explanation: "坚持不是盲目，是在风浪中仍相信彼岸的存在。" },

  { id: "a_a6_1", questionId: "a6", content: "你无法阻止波浪，但你可以学会冲浪。", sourceTitle: "《当下的力量》", author: "埃克哈特·托利", category: "book", explanation: "焦虑不可怕，学会和它共处，它就不再是敌人。" },

  { id: "a_a7_1", questionId: "a7", content: "行动是治愈焦虑的良药。", sourceTitle: "《人性的弱点》", author: "卡耐基", category: "book", explanation: "想太多和做太少之间的距离，就是你焦虑的空间。" },

  { id: "a_a8_1", questionId: "a8", content: "不要为明天忧虑，因为明天自有明天的忧虑。", sourceTitle: "《圣经·马太福音》", author: "佚名", category: "philosophy", explanation: "焦虑未来，不如回到当下。你唯一能把握的只有此刻。" },

  { id: "a_a9_1", questionId: "a9", content: "比较是偷走快乐的贼。", sourceTitle: "致女儿信", author: "罗斯福", category: "history", explanation: "别人的成功是他的时间线，你的故事有自己的节奏。" },

  { id: "a_a10_1", questionId: "a10", content: "正常的焦虑是信号，过度的焦虑是噪音。学会分辨。", sourceTitle: "《焦虑的意义》", author: "罗洛·梅", category: "book", explanation: "适度焦虑是生命的预警系统，它提醒你在乎。" },

  // 遗憾 - r1-r10
  { id: "a_r1_1", questionId: "r1", content: "人生若只如初见，何事秋风悲画扇。", sourceTitle: "木兰词", author: "纳兰性德", category: "history", explanation: "遗憾来自假设。但另一个选择，也许也会有另一种遗憾。" },
  { id: "a_r1_2", questionId: "r1", content: "当我们不能再改变一种情况时，我们就被挑战去改变自己。", sourceTitle: "《活出生命的意义》", author: "维克多·弗兰克尔", category: "book", explanation: "改变不了过去，但你可以改变过去对你的影响。" },

  { id: "a_r2_1", questionId: "r2", content: "后知后觉也是一种觉。重要的是你终于明白了。", sourceTitle: "《心灵奇旅》", author: "皮特·道格特", category: "movie", explanation: "事后才明白，说明你在成长。遗憾本身也在教你了。" },

  { id: "a_r3_1", questionId: "r3", content: "旧的不去，新的不来。但旧的去，本身就需要勇气。", sourceTitle: "《千与千寻》", author: "宫崎骏", category: "movie", explanation: "有些遗憾可以弥补，有些只能接受。接受也是弥补的一种。" },

  { id: "a_r4_1", questionId: "r4", content: "往前走，别回头。", sourceTitle: "《肖申克的救赎》", author: "斯蒂芬·金", category: "book", explanation: "回头是遗憾，往前是可能性。你的选择决定你的方向。" },

  { id: "a_r5_1", questionId: "r5", content: "万物皆有裂痕，那是光照进来的地方。", sourceTitle: "《颂歌》", author: "莱昂纳德·科恩", category: "music", explanation: "遗憾是你的裂痕，但也是光能照进来的地方。" },

  { id: "a_r6_1", questionId: "r6", content: "说出口的遗憾就不再是遗憾了，它变成了一个故事。", sourceTitle: "《追风筝的人》", author: "卡勒德·胡赛尼", category: "book", explanation: "说出来，是放下的第一步。" },

  { id: "a_r7_1", questionId: "r7", content: "此情可待成追忆，只是当时已惘然。", sourceTitle: "锦瑟", author: "李商隐", category: "history", explanation: "没说出口的话，也许有一天会以另一种方式传达。" },

  { id: "a_r8_1", questionId: "r8", content: "错过是为了遇见更好的。", sourceTitle: "《白日梦想家》", author: "本·斯蒂勒", category: "movie", explanation: "每一次错过都是一扇关上的门，但总会有窗打开。" },

  { id: "a_r9_1", questionId: "r9", content: "遗憾是成长的学费。", sourceTitle: "《活着》", author: "余华", category: "book", explanation: "遗憾和成长是一枚硬币的两面。没有遗憾，就没有深刻的成长。" },

  { id: "a_r10_1", questionId: "r10", content: "如果重来，你很可能做同样的选择，因为那是当时的你。", sourceTitle: "《苏菲的世界》", author: "乔斯坦·贾德", category: "book", explanation: "不要苛责过去的自己。那时候的你，已经做了能做的最好选择。" },

  // 希望 - h1-h10
  { id: "a_h1_1", questionId: "h1", content: "黎明前最黑暗。", sourceTitle: "《双城记》", author: "狄更斯", category: "book", explanation: "黑暗不是终点，是黎明前的必经之路。" },
  { id: "a_h1_2", questionId: "h1", content: "冬天来了，春天还会远吗？", sourceTitle: "《西风颂》", author: "雪莱", category: "book", explanation: "每一个黑暗的尽头，都藏着转机。" },

  { id: "a_h2_1", questionId: "h2", content: "相信本身就是力量。不管它是天真还是勇气。", sourceTitle: "《少年派的奇幻漂流》", author: "李安", category: "movie", explanation: "相信美好不是天真，是在不确定中依然选择光明。" },

  { id: "a_h3_1", questionId: "h3", content: "信心是所望之事的实底，是未见之事的确据。", sourceTitle: "《希伯来书》", author: "佚名", category: "philosophy", explanation: "信不信不是问题，问题是你在相信的时候是否在行动。" },

  { id: "a_h4_1", questionId: "h4", content: "希望是基于现实的向往，幻想是脱离现实的空想。但两者之间只有一线之隔，那条线叫行动。", sourceTitle: "《悲惨世界》", author: "雨果", category: "book", explanation: "边界在于你是否在为它做点什么。" },

  { id: "a_h5_1", questionId: "h5", content: "你一定要走，走到灯火通明。", sourceTitle: "《肖申克的救赎》", author: "斯蒂芬·金", category: "book", explanation: "撑过绝望的，不是道理，是一口气。" },
  { id: "a_h5_2", questionId: "h5", content: "千磨万击还坚劲，任尔东西南北风。", sourceTitle: "竹石", author: "郑燮", category: "history", explanation: "撑过来的，是那股不被风吹倒的劲。" },

  { id: "a_h6_1", questionId: "h6", content: "坚持是为了自己相信的事，执念是为了不肯放手的事。", sourceTitle: "《心灵奇旅》", author: "皮特·道格特", category: "movie", explanation: "你愿意为之付出的，叫坚持；让你痛苦的，叫执念。" },

  { id: "a_h7_1", questionId: "h7", content: "明天和意外，不知道哪个先来。但明天依然值得期待。", sourceTitle: "《活着》", author: "余华", category: "book", explanation: "没有人能保证明天更好，但期待本身就是一种力量。" },

  { id: "a_h8_1", questionId: "h8", content: "那些让你在深夜仍然愿意相信的，就是值得守护的。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "真正的希望经得起深夜的拷问。" },

  { id: "a_h9_1", questionId: "h9", content: "希望落空了，就再建一个。人活着就要有重建的能力。", sourceTitle: "《百年孤独》", author: "马尔克斯", category: "book", explanation: "落空不是终点，是重建的开始。" },

  { id: "a_h10_1", questionId: "h10", content: "希望是一种本能。你不需要选择希望，你只需要不扼杀它。", sourceTitle: "《活出生命的意义》", author: "维克多·弗兰克尔", category: "book", explanation: "希望不是选择，是生命自带的火种。你需要做的只是别让风吹灭它。" },

  // 爱情 - v1-v10
  { id: "a_v1_1", questionId: "v1", content: "爱是想要触碰又收回手。", sourceTitle: "《与艾斯米在一起》", author: "塞林格", category: "book", explanation: "爱是小心翼翼，是珍惜到不敢打扰。" },
  { id: "a_v1_2", questionId: "v1", content: "从前的日色变得慢，车马邮件都慢，一生只够爱一个人。", sourceTitle: "从前慢", author: "木心", category: "music", explanation: "爱是不慌不忙，是全世界只剩一个人的安静。" },

  { id: "a_v2_1", questionId: "v2", content: "世间所有的相遇，都是久别重逢。", sourceTitle: "《一代宗师》", author: "王家卫", category: "movie", explanation: "没有错的时机，只有还没准备好的心。" },

  { id: "a_v3_1", questionId: "v3", content: "我爱你，与你何干。", sourceTitle: "《少年维特的烦恼》", author: "歌德", category: "book", explanation: "爱不需要拥有。爱是一种状态，不是一种交易。" },

  { id: "a_v4_1", questionId: "v4", content: "真正的爱不会让你变成另一个人，而是让你成为更好的自己。", sourceTitle: "《简爱》", author: "夏洛蒂·勃朗特", category: "book", explanation: "如果需要改变自己才能被爱，那不是爱，是讨好。" },

  { id: "a_v5_1", questionId: "v5", content: "曾经沧海难为水，除却巫山不是云。", sourceTitle: "离思", author: "元稹", category: "history", explanation: "失去之后，你更懂得爱。下一次，你会爱得更深，也更自在。" },
  { id: "a_v5_2", questionId: "v5", content: "当一扇门关上，另一扇窗会打开。但人常常盯着关上的门太久。", sourceTitle: "《音乐之声》", author: "亚历山大·赫尔达", category: "movie", explanation: "你还能再爱，只要你允许自己从那扇关上的门前转身。" },

  { id: "a_v6_1", questionId: "v6", content: "爱是自由，依赖是囚笼。你分得清，因为爱让你更自由，依赖让你更害怕。", sourceTitle: "《爱的艺术》", author: "弗洛姆", category: "book", explanation: "爱让你有力量，依赖让你恐惧失去。感受会告诉你答案。" },

  { id: "a_v7_1", questionId: "v7", content: "在乎是一种能力，受伤是它的代价。但这个代价值得。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "因为在乎才会受伤，但这恰恰证明你在真实地活着。" },

  { id: "a_v8_1", questionId: "v8", content: "爱不需要理由，不爱才需要。", sourceTitle: "《罗密欧与朱丽叶》", author: "莎士比亚", category: "book", explanation: "爱是一种本能的靠近，不需要理由。" },

  { id: "a_v9_1", questionId: "v9", content: "放下不是忘记，是想起的时候不再痛了。", sourceTitle: "《千与千寻》", author: "宫崎骏", category: "movie", explanation: "放下一个人，是你不再被那段记忆控制。它变成了一片云，轻轻飘过。" },

  { id: "a_v10_1", questionId: "v10", content: "相爱是本能，相处是修行。", sourceTitle: "《亲密关系》", author: "克里斯多福·孟", category: "book", explanation: "相爱容易因为它来自本能，相处难因为它需要智慧和耐心。" },

  // 成长 - g1-g10
  { id: "a_g1_1", questionId: "g1", content: "忍耐不是成长，理解才是。", sourceTitle: "《活出生命的意义》", author: "维克多·弗兰克尔", category: "book", explanation: "成长不是越来越能忍，而是越来越理解为什么值得。" },
  { id: "a_g1_2", questionId: "g1", content: "大勇若怯，大智若愚。", sourceTitle: "《老子》", author: "老子", category: "history", explanation: "真正的成长不是外表的坚忍，而是内心的开阔。" },

  { id: "a_g2_1", questionId: "g2", content: "没有深夜痛哭过的人，不足以谈人生。", sourceTitle: "《悲惨世界》", author: "雨果", category: "book", explanation: "成长的痛苦不是惩罚，是蜕变的信号。" },
  { id: "a_g2_2", questionId: "g2", content: "沉舟侧畔千帆过，病树前头万木春。", sourceTitle: "酬乐天扬州初逢席上见赠", author: "刘禹锡", category: "history", explanation: "痛苦是旧自己枯萎，新自己萌芽。" },

  { id: "a_g3_1", questionId: "g3", content: "变好还是变麻木，区别在于你是否还在感受。", sourceTitle: "《心灵奇旅》", author: "皮特·道格特", category: "movie", explanation: "如果你还能问出这个问题，说明你还在感受，还在成长。" },

  { id: "a_g4_1", questionId: "g4", content: "成熟是知道什么该坚持，妥协是知道什么该放下。两者都了不起。", sourceTitle: "《人性的弱点》", author: "卡耐基", category: "book", explanation: "成熟不是不妥协，而是知道什么值得坚持。" },

  { id: "a_g5_1", questionId: "g5", content: "一个人扛是暂时的，学会求助才是真正的成熟。", sourceTitle: "《被讨厌的勇气》", author: "岸见一郎", category: "book", explanation: "成长是学会一个人扛，也是学会什么时候放下。" },

  { id: "a_g6_1", questionId: "g6", content: "满地都是六便士，他却抬头看见了月亮。", sourceTitle: "《月亮与六便士》", author: "毛姆", category: "book", explanation: "普通与否，取决于你是否看见了自己真正想追寻的东西。" },
  { id: "a_g6_2", questionId: "g6", content: "你我皆是星辰。", sourceTitle: "《宇宙》", author: "卡尔·萨根", category: "book", explanation: "构成你的原子来自远古星辰。你从来都不普通。" },
  { id: "a_g6_3", questionId: "g6", content: "苔花如米小，也学牡丹开。", sourceTitle: "苔", author: "袁枚", category: "history", explanation: "普通不代表不值得绽放。每朵花都有自己的春天。" },

  { id: "a_g7_1", questionId: "g7", content: "长大确实会失去一些东西，但你会得到更多理解世界的能力。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "失去的可能是天真，得到的是深度。两者都是你。" },

  { id: "a_g8_1", questionId: "g8", content: "真正的长大不是年龄到了，而是你开始为自己的人生负责。", sourceTitle: "《被讨厌的勇气》", author: "岸见一郎", category: "book", explanation: "长大的标志不是别人告诉你的，是你自己感受到的。" },

  { id: "a_g9_1", questionId: "g9", content: "不快乐不是因为你做错了什么，可能是你太久没有为自己活。", sourceTitle: "《死亡诗社》", author: "彼得·威尔", category: "movie", explanation: "不快乐是信号，提醒你找回自己的声音。" },
  { id: "a_g9_2", questionId: "g9", content: "问君能有几多愁？恰似一江春水向东流。", sourceTitle: "虞美人", author: "李煜", category: "history", explanation: "不快乐不需要理由，但快乐值得主动去寻找。" },

  { id: "a_g10_1", questionId: "g10", content: "成长是被迫的，但你可以选择如何回应。", sourceTitle: "《活出生命的意义》", author: "维克多·弗兰克尔", category: "book", explanation: "风雨不由人，但撑伞的手在你自己手里。" },

  // 自由 - f1-f10
  { id: "a_f1_1", questionId: "f1", content: "自由不是随心所欲，而是自我主宰。", sourceTitle: "《社会契约论》", author: "卢梭", category: "philosophy", explanation: "真正的自由不是想做什么就做什么，而是不想做什么就能不做什么。" },
  { id: "a_f1_2", questionId: "f1", content: "鲲鹏展翅九万里。", sourceTitle: "《逍遥游》", author: "庄子", category: "history", explanation: "自由是心无挂碍，如鲲鹏般自在翱翔。" },

  { id: "a_f2_1", questionId: "f2", content: "困住你的不是规则，是你对规则的恐惧。", sourceTitle: "《肖申克的救赎》", author: "斯蒂芬·金", category: "book", explanation: "很多枷锁是心理上的，当你意识到，它就开始松动了。" },

  { id: "a_f3_1", questionId: "f3", content: "自由和责任是一体两面。越能承担责任，越能拥有自由。", sourceTitle: "《存在与虚无》", author: "萨特", category: "philosophy", explanation: "自由不是逃避责任，而是选择承担。" },

  { id: "a_f4_1", questionId: "f4", content: "你害怕的不是外在的东西，而是内心不敢面对的自己。", sourceTitle: "《当下的力量》", author: "埃克哈特·托利", category: "book", explanation: "恐惧的根源不在外界，而在你还没接纳的内心。" },

  { id: "a_f5_1", questionId: "f5", content: "自由不在远方，在你心里。你走到哪里，自己就在哪里。", sourceTitle: "《瓦尔登湖》", author: "梭罗", category: "book", explanation: "自由不是换个地方，是换一种心境。" },

  { id: "a_f6_1", questionId: "f6", content: "选择之后的不自由，是因为你还在想另一个选择。", sourceTitle: "《不能承受的生命之轻》", author: "米兰·昆德拉", category: "book", explanation: "自由来自于对选择的投入，而不是对未选之路的幻想。" },

  { id: "a_f7_1", questionId: "f7", content: "不在乎别人怎么看是自由的起点，但不在乎≠不关心。", sourceTitle: "《被讨厌的勇气》", author: "岸见一郎", category: "book", explanation: "真正的自由是不被别人的评价绑架，但依然保持善意。" },

  { id: "a_f8_1", questionId: "f8", content: "绝对的自由不存在，但追求自由的过程本身就是自由。", sourceTitle: "《西西弗神话》", author: "加缪", category: "philosophy", explanation: "自由是一种方向，不是一个终点。你追求它的每一步都是自由的。" },

  { id: "a_f9_1", questionId: "f9", content: "想要的生活没有标准版。你敢定义它，它就存在。", sourceTitle: "《死亡诗社》", author: "彼得·威尔", category: "movie", explanation: "勇气不保证结果，但保证你不会遗憾没试过。" },

  { id: "a_f10_1", questionId: "f10", content: "自由的代价是永恒的警惕。但值得一一因为那是你的人生。", sourceTitle: "《论自由》", author: "密尔", category: "book", explanation: "自由有代价，但不自由的代价更大。" },

  // 勇气 - co1-co10
  { id: "a_co1_1", questionId: "co1", content: "恐惧不是敌人，是信使。它在告诉你什么对你真正重要。", sourceTitle: "《感受恐惧》", author: "苏珊·杰弗斯", category: "book", explanation: "面对恐惧的第一步，是听懂它在说什么。" },

  { id: "a_co2_1", questionId: "co2", content: "勇敢不是不害怕，而是害怕的时候依然选择前行。", sourceTitle: "《纳尼亚传奇》", author: "C.S.刘易斯", category: "book", explanation: "没有恐惧就没有勇气。恐惧是勇气的燃料。" },

  { id: "a_co3_1", questionId: "co3", content: "千里之行，始于足下。", sourceTitle: "《道德经》", author: "老子", category: "history", explanation: "第一步之所以难，是因为你想到了全部的路。但路是走出来的。" },

  { id: "a_co4_1", questionId: "co4", content: "逃避不会让恐惧消失，只会让恐惧长大。", sourceTitle: "《心灵捕手》", author: "格斯·范·桑特", category: "movie", explanation: "承认逃避，本身就是面对的开始。" },

  { id: "a_co5_1", questionId: "co5", content: "失败不是终点，放弃才是。", sourceTitle: "《当幸福来敲门》", author: "加布里尔·穆奇诺", category: "movie", explanation: "失败只是反馈，不是定义。你永远可以再试一次。" },

  { id: "a_co6_1", questionId: "co6", content: "真正的勇敢是知道前方有风险，依然选择前行。因为那件事值得。", sourceTitle: "《霍比特人》", author: "托尔金", category: "book", explanation: "勇敢不是无畏，是权衡之后依然出发。" },

  { id: "a_co7_1", questionId: "co7", content: "没有人是真正准备好了的。所谓准备，不过是在路上补课。", sourceTitle: "《白日梦想家》", author: "本·斯蒂勒", category: "movie", explanation: "等待准备好，可能是最大的逃避。" },

  { id: "a_co8_1", questionId: "co8", content: "勇气像肌肉，越练越强。每一次小勇敢，都在为大勇敢做准备。", sourceTitle: "《勇气》", author: "保罗·蒂利希", category: "philosophy", explanation: "勇气不是天赋，是每一次选择面对的积累。" },

  { id: "a_co9_1", questionId: "co9", content: "说真话的最高形式是诗歌。但第一步只是开口。", sourceTitle: "《死亡诗社》", author: "彼得·威尔", category: "movie", explanation: "真话不需要完美表达，只需要被说出来。" },

  { id: "a_co10_1", questionId: "co10", content: "为自己勇敢叫自尊，为别人勇敢叫担当。两者都是真正的勇气。", sourceTitle: "《活出生命的意义》", author: "维克多·弗兰克尔", category: "book", explanation: "无论为谁，勇敢本身就已经足够。" },

  // 释怀 - lg1-lg10
  { id: "a_lg1_1", questionId: "lg1", content: "放下不是一瞬间的事，而是某天你突然发现自己已经很久没想起来了。", sourceTitle: "《千与千寻》", author: "宫崎骏", category: "movie", explanation: "放下不是决定，是一个缓慢的过程。你不需要逼自己。" },

  { id: "a_lg2_1", questionId: "lg2", content: "释怀不是忘记，是记得但不再痛。", sourceTitle: "《追风筝的人》", author: "卡勒德·胡赛尼", category: "book", explanation: "你不需要抹去记忆，只需要和它和平共处。" },

  { id: "a_lg3_1", questionId: "lg3", content: "放不下是因为它对你太重要了。允许自己慢慢来。", sourceTitle: "《小王子》", author: "圣埃克苏佩里", category: "book", explanation: "放不下不是软弱，是深情。时间会帮你，但不需要现在。" },

  { id: "a_lg4_1", questionId: "lg4", content: "原谅自己更难，因为你每天都要和自己相处。但正因如此，才更值得。", sourceTitle: "《被讨厌的勇气》", author: "岸见一郎", category: "book", explanation: "原谅别人可以一刀两断，原谅自己需要每天选择。" },

  { id: "a_lg5_1", questionId: "lg5", content: "放手不是不在乎，而是在乎到了允许它自由。", sourceTitle: "《爱，自由与独处》", author: "奥修", category: "book", explanation: "真正的放手，是因为深爱，所以不占有。" },

  { id: "a_lg6_1", questionId: "lg6", content: "你已经做得够好了。不是每件事都需要满分。", sourceTitle: "《心灵奇旅》", author: "皮特·道格特", category: "movie", explanation: "对自己温柔一点。你已经比你以为的更努力了。" },

  { id: "a_lg7_1", questionId: "lg7", content: "与过去和解，不是认同它，而是不再被它困住。", sourceTitle: "《当下的力量》", author: "埃克哈特·托利", category: "book", explanation: "过去的你也在尽力。和解是理解，不是原谅。" },

  { id: "a_lg8_1", questionId: "lg8", content: "释怀没有时间表。有人一天，有人一年，都是正常的。", sourceTitle: "《百年孤独》", author: "马尔克斯", category: "book", explanation: "不需要和别人比较释怀的速度。你的节奏就是正确的节奏。" },

  { id: "a_lg9_1", questionId: "lg9", content: "轻松不轻松，取决于你是否还在和自己较劲。", sourceTitle: "《道德经》", author: "老子", category: "history", explanation: "放下执念的那一刻，你才真正自由。轻松是自然结果。" },

  { id: "a_lg10_1", questionId: "lg10", content: "释怀不是不记得，而是想起来的时候，心里是温暖的。", sourceTitle: "《寻梦环游记》", author: "李·昂克里奇", category: "movie", explanation: "真正的释怀，是回忆变成了温柔，而不是伤口。" },
]
