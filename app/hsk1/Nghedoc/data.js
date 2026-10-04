
export const lessons = [
  {
    id: 1,
    title: "Bài học 1",
    passages: [
      {
        id: 1,
        title: "Bài khóa 1",
        audio: "/audio/hsk1/bai1.1.mp3",
        dialogues: [
          {
            id: 1,
            speaker: "王一飞",
            hanzi: "AI小语,你好!",
            pinyin: "AI Xiǎoyǔ, nǐ hǎo!",
            vietnamese: "AI Tiểu Ngữ, chào em!",
          },
          {
            id: 2,
            speaker: "小语",
            hanzi: "王老师，你好！",
            pinyin: "Wáng lǎoshī, nǐ hǎo!",
            vietnamese: "Em chào cô Vương ạ!",
          },
        ],
        questions: [],
      },
      {
        id: 2,
        title: "Bài khóa 2",
        audio: "/audio/hsk1/bai1.2.mp3",
        dialogues: [
          {
            id: 1,
            speaker: "王一飞",
            hanzi: "大家好！",
            pinyin: "Dàjiā hǎo!",
            vietnamese: "Chào cả nhà!",
          },
          {
            id: 2,
            speaker: "学生们",
            hanzi: "老师，您好！",
            pinyin: "Lǎoshī, nín hǎo!",
            vietnamese: "Chúng em chào cô ạ!",
          },
          {
            id: 3,
            speaker: "小语",
            hanzi: "你们好！",
            pinyin: "Nǐmen hǎo!",
            vietnamese: "Chào các bạn!",
          },
          {
            id: 4,
            speaker: "学生们",
            hanzi: "你好，小语！",
            pinyin: "Nǐ hǎo, Xiǎoyǔ!",
            vietnamese: "Chào Tiểu Ngữ!",
          },
        ],
        questions: [],
      },
      {
        id: 3,
        title: "Bài khóa 3",
        audio: "/audio/hsk1/bai1.3.mp3",
        dialogues: [
          {
            id: 1,
            speaker: "学生们",
            hanzi: "谢谢！",
            pinyin: "Xièxie!",
            vietnamese: "Cảm ơn!",
          },
          {
            id: 2,
            speaker: "小语",
            hanzi: "不客气！",
            pinyin: "Bú kèqi!",
            vietnamese: "Không có gì!",
          },
          {
            id: 3,
            speaker: "王一飞",
            hanzi: "同学们，再见！",
            pinyin: "Tóngxuémen, zàijiàn!",
            vietnamese: "Tạm biệt các em học sinh!",
          },
          {
            id: 4,
            speaker: "学生们",
            hanzi: "老师，再见！",
            pinyin: "Lǎoshī, zàijiàn!",
            vietnamese: "Chúng em chào tạm biệt cô ạ!",
          },
        ],
        questions: [
          {
            id: 1,
            question: "“谢谢” có nghĩa là gì?",
            options: ["Xin chào", "Cảm ơn", "Tạm biệt", "Xin lỗi"],
            answer: 1,
            explanation: "谢谢 (Xièxie) có nghĩa là cảm ơn.",
          },
          {
            id: 2,
            question: "“不客气” dùng để đáp lại câu nào?",
            options: ["谢谢", "再见", "你好", "对不起"],
            answer: 0,
            explanation:
              "不客气 (Bú kèqi) có nghĩa là không có gì, thường dùng để đáp lại lời cảm ơn.",
          },
        ],
      },
    ],
  },
];