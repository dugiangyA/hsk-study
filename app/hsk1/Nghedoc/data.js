
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
            pinyin: "AI xiǎoyǔ, nǐ hǎo!",
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

  {
  "id": 2,
  "title": "Bài học 2",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai2.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一飞",
          "hanzi": "请问，你叫什么名字？",
          "pinyin": "Qǐngwèn, nǐ jiào shénme míngzi?",
          "vietnamese": "Xin hỏi, bạn tên là gì?"
        },
        {
          "id": 2,
          "speaker": "陈天中",
          "hanzi": "我叫陈天中。",
          "pinyin": "Wǒ jiào Chén Tiānzhōng.",
          "vietnamese": "Tôi tên là Trần Thiên Trung."
        },
      ],
      "questions": [],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai2.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "陈天中",
          "hanzi": "你好，安妮！",
          "pinyin": "Nǐ hǎo, Ānnī!",
          "vietnamese": "Chào Annie!"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "你好，陈天中！我不是安妮，我是白家月。",
          "pinyin": "Nǐ hǎo, Chén Tiānzhōng! Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.",
          "vietnamese": "Chào Trần Thiên Trung! Tôi không phải là Annie, tôi là Bạch Gia Nguyệt."
        },
        {
          "id": 3,
          "speaker": "陈天中",
          "hanzi": "对不起！",
          "pinyin": "Duìbuqǐ!",
          "vietnamese": "Xin lỗi nhé!"
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "没关系！",
          "pinyin": "Méi guānxi!",
          "vietnamese": "Không sao đâu!"
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "“对不起” có nghĩa là gì?",
          "options": ["Xin chào", "Cảm ơn", "Xin lỗi", "Tạm biệt"],
          "answer": 2,
          "explanation": "对不起 (Duìbuqǐ) có nghĩa là xin lỗi."
        },
        {
          "id": 2,
          "question": "“没关系” dùng để đáp lại câu nào?",
          "options": ["再见", "谢谢", "你好", "对不起"],
          "answer": 3,
          "explanation": "没关系 (Méi guānxi) có nghĩa là không sao, thường dùng để đáp lại lời xin lỗi."
        },
     ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai2.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "你好！我叫李文。",
          "pinyin": "Nǐ hǎo! Wǒ jiào Lǐ Wén.",
          "vietnamese": "Xin chào! Tôi tên là Lý Văn."
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "你好！我叫白家月。",
          "pinyin": "Nǐ hǎo! Wǒ jiào Bái Jiāyuè.",
          "vietnamese": "Xin chào! Tôi tên là Bạch Gia Nguyệt."
        },
        {
          "id": 3,
          "speaker": "李文",
          "hanzi": "很高兴认识你。",
          "pinyin": "Hěn gāoxìng rènshi nǐ.",
          "vietnamese": "Rất vui được quen biết bạn."
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "认识你我也很高兴。",
          "pinyin": "Rènshi nǐ wǒ yě hěn gāoxìng.",
          "vietnamese": "Quen biết bạn tôi cũng rất vui."
        },
      ],
      "questions": [
      {    
        "id": 1,
          "question": "Câu tiếng Trung (很高兴认识你。) có nghĩa tiếng Việt là gì?",
          "options": ["Chúc bạn một ngày tốt lành.", "Rất vui được làm quen với bạn.", "Cảm ơn bạn rất nhiều.", "Hẹn gặp lại bạn nhé. "],
          "answer": 1,
          "explanation": "(很高兴认识你。) được sử dụng khi lần đầu tiên gặp mặt, giới thiệu và làm quen với một người bạn mới."
       },
      ],
    },
  ],
},

{
  "id": 3,
  "title": "Bài học 3",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai3.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "我是中国人。",
          "pinyin": "Wǒ shì Zhōngguó rén.",
          "vietnamese": "Tôi là người Trung Quốc."
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我是法国人。我的中文老师也是中国人。",
          "pinyin": "Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
          "vietnamese": "Tôi là người Pháp. Giáo viên tiếng Trung của tôi cũng là người Trung Quốc."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "“中国人” có nghĩa là gì?",
          "options": ["Người Pháp", "Người Trung Quốc", "Người Thái Lan", "Người Mỹ"],
          "answer": 1,
          "explanation": "中国人 (Zhōngguó rén) có nghĩa là người Trung Quốc."
        },
        {
          "id": 2,
          "question": "白家月是哪国人？ (Bạch Gia Nguyệt là người nước nào?)",
          "options": ["中国人", "法国人", "泰国人", "美国人"],
          "answer": 1,
          "explanation": "Trong hội thoại, 白家月 nói: “我是法国人” (Tôi là người Pháp)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai3.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "安妮",
          "hanzi": "这是谁？",
          "pinyin": "Zhè shì shéi?",
          "vietnamese": "Đây là ai?"
        },
        {
          "id": 2,
          "speaker": "陈天中",
          "hanzi": "这是我女朋友。",
          "pinyin": "Zhè shì wǒ nǚpéngyou.",
          "vietnamese": "Đây là bạn gái của tôi."
        },
        {
          "id": 3,
          "speaker": "安妮",
          "hanzi": "你女朋友是哪国人？",
          "pinyin": "Nǐ nǚpéngyou shì nǎ guó rén?",
          "vietnamese": "Bạn gái của bạn là người nước nào?"
        },
        {
          "id": 4,
          "speaker": "陈天中",
          "hanzi": "她也是泰国人。",
          "pinyin": "Tā yě shì Tàiguó rén.",
          "vietnamese": "Cô ấy cũng là người Thái Lan."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Từ “谁” (shéi) dùng để hỏi về cái gì?",
          "options": ["Hỏi thời gian", "Hỏi địa điểm", "Hỏi người", "Hỏi số lượng"],
          "answer": 2,
          "explanation": "谁 (shéi) có nghĩa là 'ai', dùng để hỏi về người."
        },
        {
          "id": 2,
          "question": "陈天中的女朋友是哪国人？ (Bạn gái của Trần Thiên Trung là người nước nào?)",
          "options": ["中国人", "法国人", "泰国人", "越南人"],
          "answer": 2,
          "explanation": "Trong hội thoại, 陈天中 trả lời: “她也是泰国人” (Cô ấy cũng là người Thái Lan)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai3.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "喂，一飞！",
          "pinyin": "Wèi, Yīfēi!",
          "vietnamese": "Alo, Nhất Phi!"
        },
        {
          "id": 2,
          "speaker": "王一飞",
          "hanzi": "姐姐！",
          "pinyin": "Jiějie!",
          "vietnamese": "Chị gái!"
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "你工作还忙吗？",
          "pinyin": "Nǐ gōngzuò hái máng ma?",
          "vietnamese": "Công việc của em còn bận không?"
        },
        {
          "id": 4,
          "speaker": "王一飞",
          "hanzi": "对，还很忙。你也很忙吗？",
          "pinyin": "Duì, hái hěn máng. Nǐ yě hěn máng ma?",
          "vietnamese": "Đúng vậy, vẫn rất bận. Chị cũng rất bận phải không?"
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "我不太忙。我很想你。",
          "pinyin": "Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.",
          "vietnamese": "Chị không bận lắm. Mọi người rất nhớ em."
        },
        {
          "id": 6,
          "speaker": "王一飞",
          "hanzi": "我也想你们。",
          "pinyin": "Wǒ yě xiǎng nǐmen.",
          "vietnamese": "Em cũng nhớ mọi người."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Từ 忙 (máng) trong bài có nghĩa là gì?",
          "options": ["Mệt", "Bận", "Rảnh", "Vui"],
          "answer": 1,
          "explanation": "忙 (máng) có nghĩa là bận rộn."
        },
        {
          "id": 2,
          "question": "王一飞的工作怎么样？ (Công việc của Vương Nhất Phi thế nào?)",
          "options": ["不忙", "不太忙", "还很忙", "很累"],
          "answer": 2,
          "explanation": "Trong hội thoại, 王一飞 trả lời: “对，还很忙” (Đúng vậy, vẫn rất bận)."
        },
      ],
    },
  ],
},

{
  "id": 4,
  "title": "Bài học 4",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai4.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "刘明",
          "hanzi": "一飞忙吗？",
          "pinyin": "Yīfēi máng ma?",
          "vietnamese": "Nhất Phi có bận không?"
        },
        {
          "id": 2,
          "speaker": "王一雪",
          "hanzi": "她很忙。",
          "pinyin": "Tā hěn máng.",
          "vietnamese": "Cô ấy rất bận."
        },
        {
          "id": 3,
          "speaker": "刘明",
          "hanzi": "她有多少个学生？",
          "pinyin": "Tā yǒu duōshao gè xuéshēng?",
          "vietnamese": "Cô ấy có bao nhiêu học sinh?"
        },
        {
          "id": 4,
          "speaker": "王一雪",
          "hanzi": "她有二十个学生。",
          "pinyin": "Tā yǒu èrshí gè xuéshēng.",
          "vietnamese": "Cô ấy có 20 học sinh."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "一飞有多少个学生？ (Nhất Phi có bao nhiêu học sinh?)",
          "options": ["十个", "十五个", "二十个", "二十五个"],
          "answer": 2,
          "explanation": "Trong bài khóa, 王一雪 trả lời: “她有二十个学生” (Cô ấy có 20 học sinh)."
        },
        {
          "id": 2,
          "question": "Từ “多少” (duōshao) có nghĩa là gì?",
          "options": ["Bao nhiêu", "Cái gì", "Ở đâu", "Ai"],
          "answer": 0,
          "explanation": "多少 (duōshao) dùng để hỏi số lượng (bao nhiêu)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai4.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "我有两个哥哥，你呢？",
          "pinyin": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
          "vietnamese": "Tôi có hai người anh trai, còn bạn thì sao?"
        },
        {
          "id": 2,
          "speaker": "杨同乐",
          "hanzi": "我没有哥哥。",
          "pinyin": "Wǒ méiyǒu gēge.",
          "vietnamese": "Tôi không có anh trai."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "你家有几口人？",
          "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
          "vietnamese": "Gia đình bạn có mấy người?"
        },
        {
          "id": 4,
          "speaker": "杨同乐",
          "hanzi": "我家有四口人，爸爸、妈妈、妹妹和我。",
          "pinyin": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
          "vietnamese": "Gia đình tôi có 4 người: bố, mẹ, em gái và tôi."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "杨同乐家有几口人？ (Gia đình Dương Đồng Lạc có mấy người?)",
          "options": ["三口人", "四口人", "五口人", "六口人"],
          "answer": 1,
          "explanation": "Trong hội thoại, 杨同乐 nói: “我家有四口人” (Gia đình tôi có 4 người)."
        },
        {
          "id": 2,
          "question": "Lượng từ dùng cho thành viên trong gia đình là gì?",
          "options": ["个", "口", "只", "本"],
          "answer": 1,
          "explanation": "Khi hỏi hay nói về số lượng thành viên gia đình, người Trung Quốc dùng lượng từ 口 (kǒu)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai4.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "杨同乐",
          "hanzi": "这是您儿子吗？",
          "pinyin": "Zhè shì nín érzi ma?",
          "vietnamese": "Đây là con trai của cô phải không?"
        },
        {
          "id": 2,
          "speaker": "王一雪",
          "hanzi": "是的。我有两个孩子，一个儿子，一个女儿。",
          "pinyin": "Shì de. Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ'ér.",
          "vietnamese": "Đúng vậy. Tôi có hai đứa con, một con trai, một con gái."
        },
        {
          "id": 3,
          "speaker": "杨同乐",
          "hanzi": "您儿子几岁？",
          "pinyin": "Nín érzi jǐ suì?",
          "vietnamese": "Con trai cô mấy tuổi?"
        },
        {
          "id": 4,
          "speaker": "王一雪",
          "hanzi": "他今年五岁。",
          "pinyin": "Tā jīnnián wǔ suì.",
          "vietnamese": "Cháu năm nay 5 tuổi."
        },
        {
          "id": 5,
          "speaker": "杨同乐",
          "hanzi": "您女儿多大？",
          "pinyin": "Nín nǚ'ér duō dà?",
          "vietnamese": "Con gái cô bao nhiêu tuổi?"
        },
        {
          "id": 6,
          "speaker": "王一雪",
          "hanzi": "她今年十二。",
          "pinyin": "Tā jīnnián shí'èr.",
          "vietnamese": "Cháu năm nay 12 tuổi."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "王一雪的儿子今年几岁？ (Con trai của Vương Nhất Tuyết năm nay mấy tuổi?)",
          "options": ["三岁", "五岁", "十岁", "十二岁"],
          "answer": 1,
          "explanation": "Trong hội thoại, 王一雪 trả lời: “他今年五岁” (Cháu năm nay 5 tuổi)."
        },
        {
          "id": 2,
          "question": "王一雪有几个孩子？ (Vương Nhất Tuyết có mấy đứa con?)",
          "options": ["一个", "两个", "三个", "四个"],
          "answer": 1,
          "explanation": "王一雪 nói: “我有两个孩子，一个儿子，一个女儿” (Tôi có 2 đứa con, 1 con trai, 1 con gái)."
        },
      ],
    },
  ],
},

{
  "id": 5,
  "title": "Bài học 5",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai5.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "今天几号？",
          "pinyin": "Jīntiān jǐ hào?",
          "vietnamese": "Hôm nay là ngày mấy?"
        },
        {
          "id": 2,
          "speaker": "刘明",
          "hanzi": "今天9月8号。",
          "pinyin": "Jīntiān jiǔ yuè bā hào.",
          "vietnamese": "Hôm nay là ngày 8 tháng 9."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "星期几？",
          "pinyin": "Xīngqī jǐ?",
          "vietnamese": "Thứ mấy?"
        },
        {
          "id": 4,
          "speaker": "刘明",
          "hanzi": "星期日。今天我休息。",
          "pinyin": "Xīngqīrì. Jīntiān wǒ xiūxi.",
          "vietnamese": "Chủ nhật. Hôm nay tôi nghỉ ngơi."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong hội thoại 今天几月几号？ (Hôm nay là ngày mấy tháng mấy?)",
          "options": ["8月9号", "9月8号", "9月9号", "8月8号"],
          "answer": 1,
          "explanation": "Trong hội thoại, 刘明 trả lời: “今天9月8号” (Hôm nay là ngày 8 tháng 9)."
        },
        {
          "id": 2,
          "question": "今天星期几？ (Hôm nay là thứ mấy?)",
          "options": ["星期六", "星期日", "星期一", "星期五"],
          "answer": 1,
          "explanation": "刘明 trả lời: “星期日” (Chủ nhật)."
        },
        {
          "id": 3,
          "question": "Trong bài 刘明: 今天我(         )。",
          "options": ["工作 (Làm việc)", "学习 (Học tập)", "休息 (Nghỉ ngơi)", "买东西 (Mua đồ)"],
          "answer": 2,
          "explanation": "刘明 nói: “今天我休息” (Hôm nay tôi nghỉ ngơi)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai5.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "你会做饭吗？",
          "pinyin": "Nǐ huì zuò fàn ma?",
          "vietnamese": "Bạn biết nấu ăn không?"
        },
        {
          "id": 2,
          "speaker": "杨同乐",
          "hanzi": "我会做。",
          "pinyin": "Wǒ huì zuò.",
          "vietnamese": "Tôi biết nấu."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "你会做什么？",
          "pinyin": "Nǐ huì zuò shénme?",
          "vietnamese": "Bạn biết làm món gì?"
        },
        {
          "id": 4,
          "speaker": "杨同乐",
          "hanzi": "我会做面条儿、饺子，也会做一些菜。星期天我也做饭。",
          "pinyin": "Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.",
          "vietnamese": "Tôi biết làm mì, bánh há cảo, và cũng biết làm một vài món ăn. Chủ nhật nào tôi cũng nấu ăn."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài 杨同乐 không đề cập đến việc làm món nào sau đây?",
          "options": ["面条儿 (Mì)", "饺子 (Bánh há cảo)", "米饭 (Cơm)", "一些菜 (Một vài món ăn)"],
          "answer": 2,
          "explanation": "Trong bài 杨同乐 liệt kê biết làm 面条儿, 饺子 và 一些菜, không đề cập riêng 米饭."
        },
        {
          "id": 2,
          "question": "杨同乐什么时候也做饭？ (Dương Đồng Lạc khi nào cũng nấu ăn?)",
          "options": ["星期一", "星期五", "星期六", "星期天"],
          "answer": 3,
          "explanation": "杨同乐 nói: “星期天我也做饭” (Chủ nhật nào tôi cũng nấu ăn)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai5.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "同乐，下班吗？",
          "pinyin": "Tónglè, xiàbān ma?",
          "vietnamese": "Đồng Lạc, tan làm à?"
        },
        {
          "id": 2,
          "speaker": "杨同乐",
          "hanzi": "下班。",
          "pinyin": "Xiàbān.",
          "vietnamese": "Tan làm."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "这是你的新电脑吗？",
          "pinyin": "Zhè shì nǐ de xīn diànnǎo ma?",
          "vietnamese": "Đây là máy tính mới của bạn à?"
        },
        {
          "id": 4,
          "speaker": "杨同乐",
          "hanzi": "是的，是我的新电脑。",
          "pinyin": "Shì de, shì wǒ de xīn diànnǎo.",
          "vietnamese": "Đúng vậy, là máy tính mới của tôi."
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "真好看！",
          "pinyin": "Zhēn hǎokàn!",
          "vietnamese": "Thật là đẹp!"
        },
        {
          "id": 6,
          "speaker": "杨同乐",
          "hanzi": "我也很喜欢它。",
          "pinyin": "Wǒ yě hěn xǐhuan tā.",
          "vietnamese": "Tôi cũng rất thích nó."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "“下班” (xiàbān) có nghĩa là gì?",
          "options": ["Đi làm", "Tan làm", "Tăng ca", "Nghỉ phép"],
          "answer": 1,
          "explanation": "下班 (xiàbān) có nghĩa là tan làm / tan ca."
        },
        {
          "id": 2,
          "question": "Trong đoạn hội thoại 杨同乐: “我也很 (......) 它。”",
          "options": ["喜欢 (xǐhuān)", "希望 (xīwàng)", "休息 (xiūxí)", "谢谢 (xièxiè)"],
          "answer": 0,
          "explanation": "杨同乐 nói: “我也很喜欢它” (Tôi cũng rất thích nó)."
        },
      ],
    },
  ],
},

{
  "id": 6,
  "title": "Bài học 6",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai6.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "家月，你的手机号是多少？",
          "pinyin": "Jiāyuè, nǐ de shǒujīhào shì duōshao?",
          "vietnamese": "Gia Nguyệt, số điện thoại của bạn là bao nhiêu?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我的手机号是+33 601493190。",
          "pinyin": "Wǒ de shǒujīhào shì sān sān liù líng yāo sì jiǔ sān yāo jiǔ líng.",
          "vietnamese": "Số điện thoại của tôi là +33 601493190."
        },
        {
          "id": 3,
          "speaker": "李文",
          "hanzi": "我的手机号是+86 13552721160。",
          "pinyin": "Wǒ de shǒujīhào shì bā liù yāo sān wǔ wǔ èr qī èr yāo yāo liù líng.",
          "vietnamese": "Số điện thoại của tôi là +86 13552721160."
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "好的。",
          "pinyin": "Hǎo de.",
          "vietnamese": "Được rồi."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "“手机号” có nghĩa là gì?",
          "options": ["Số nhà", "Số điện thoại", "Số hộ chiếu", "Số phòng"],
          "answer": 1,
          "explanation": "手机号 (shǒujīhào) có nghĩa là số điện thoại di động."
        },
        {
          "id": 2,
          "question": "Trong số điện thoại, chữ số “1” thường được đọc là gì?",
          "options": ["yī", "yāo", "èr", "sān"],
          "answer": 1,
          "explanation": "Khi đọc số điện thoại hoặc số phòng, số 1 (一) thường được phát âm là “yāo”."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai6.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "陈天中",
          "hanzi": "家月，明天你去哪儿？",
          "pinyin": "Jiāyuè, míngtiān nǐ qù nǎr?",
          "vietnamese": "Gia Nguyệt, ngày mai bạn đi đâu?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我想去超市买东西。",
          "pinyin": "Wǒ xiǎng qù chāoshì mǎi dōngxi.",
          "vietnamese": "Tôi muốn đi siêu thị mua đồ."
        },
        {
          "id": 3,
          "speaker": "陈天中",
          "hanzi": "你去超市买什么？",
          "pinyin": "Nǐ qù chāoshì mǎi shénme?",
          "vietnamese": "Bạn đi siêu thị mua gì?"
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "我想买些牛奶。",
          "pinyin": "Wǒ xiǎng mǎi xiē niúnǎi.",
          "vietnamese": "Tôi muốn mua một ít sữa tươi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong đoạn hột thoại 白家月：“我想去(......)买东西。",
          "options": ["饭店 (Nhà hàng)", "超市 (Siêu thị)", "学校 (Trường học)", "医院 (Bệnh viện)"],
          "answer": 1,
          "explanation": "Trong bài khóa, 白家月 nói: “我想去超市买东西” (Tôi muốn đi siêu thị mua đồ)."
        },
        {
          "id": 2,
          "question": "白家月想买什么？ (Bạch Gia Nguyệt muốn mua cái gì?)",
          "options": ["面包 (Bánh mì)", "水 (Nước)", "牛奶 (Sữa)", "苹果 (Táo)"],
          "answer": 2,
          "explanation": "白家月 trả lời: “我想买些牛奶” (Tôi muốn mua một ít sữa tươi)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai6.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "星期天我们去哪儿吃晚饭？",
          "pinyin": "Xīngqītiān wǒmen qù nǎr chī wǎnfàn?",
          "vietnamese": "Chủ nhật chúng ta đi đâu ăn tối?"
        },
        {
          "id": 2,
          "speaker": "刘明",
          "hanzi": "我还想去西安饭店。",
          "pinyin": "Wǒ hái xiǎng qù Xī'ān Fàndiàn.",
          "vietnamese": "Anh vẫn muốn đến nhà hàng Tây An."
        },
        {
          "id": 3,
          "speaker": "刘小雪",
          "hanzi": "那边的包子非常好吃，我想吃包子。",
          "pinyin": "Nàbiān de bāozi fēicháng hǎochī, wǒ xiǎng chī bāozi.",
          "vietnamese": "Bánh bao ở đó rất là ngon, con muốn ăn bánh bao."
        },
        {
          "id": 4,
          "speaker": "刘小明",
          "hanzi": "妈妈，我想吃米饭，不想吃包子。",
          "pinyin": "Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.",
          "vietnamese": "Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao."
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "好的。我们怎么去？",
          "pinyin": "Hǎo de. Wǒmen zěnme qù?",
          "vietnamese": "Được rồi. Chúng ta đi bằng gì đây?"
        },
        {
          "id": 6,
          "speaker": "刘明",
          "hanzi": "坐出租车去。",
          "pinyin": "Zuò chūzūchē qù.",
          "vietnamese": "Đi bằng xe taxi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "他们星期天想去哪儿吃晚饭？ (Chủ nhật họ muốn đi đâu ăn tối?)",
          "options": ["北京饭店", "西安饭店", "上海饭店", "四川饭店"],
          "answer": 1,
          "explanation": "刘明 nói: “我还想去西安饭店” (Anh vẫn muốn đến nhà hàng Tây An)."
        },
        {
          "id": 2,
          "question": "刘小雪想吃什么？ (Lưu Tiểu Tuyết muốn ăn gì?)",
          "options": ["米饭 (Cơm)", "面条 (Mì)", "包子 (Bánh bao)", "饺子 (Bánh há cảo)"],
          "answer": 2,
          "explanation": "刘小雪 nói: “...我想吃包子” (Con muốn ăn bánh bao)."
        },
        {
          "id": 3,
          "question": "Trong đoạn hội thoại 刘小明： 妈妈，我想吃（......），不想吃包子。",
          "options": ["包子", "米饭", "水果", "菜"],
          "answer": 1,
          "explanation": "刘小明 nói: “妈妈，我想吃米饭，不想吃包子” (Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao)."
        },
        {
          "id": 4,
          "question": "他们怎么去? (Họ đi bằng phương tiện gì?)",
          "options": ["坐公交车 (Đi xe buýt)", "坐出租车 (Đi xe taxi)", "骑自行车 (Đi xe đạp)", "走路 (Đi bộ)"],
          "answer": 1,
          "explanation": "刘明 trả lời: “坐出租车去” (Đi bằng xe taxi)."
        },
      ],
    },
  ],
},

{
  "id": 7,
  "title": "Bài học 7",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai7.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "现在几点？",
          "pinyin": "Xiànzài jǐ diǎn?",
          "vietnamese": "Bây giờ là mấy giờ?"
        },
        {
          "id": 2,
          "speaker": "安妮",
          "hanzi": "早上八点四十。",
          "pinyin": "Zǎoshang bā diǎn sìshí.",
          "vietnamese": "8 giờ 40 phút sáng."
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "我上午十点十分有课。",
          "pinyin": "Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.",
          "vietnamese": "Buổi sáng 10 giờ 10 phút tôi có lớp học."
        },
        {
          "id": 4,
          "speaker": "安妮",
          "hanzi": "好的，我们下午两点见吧。",
          "pinyin": "Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.",
          "vietnamese": "Được rồi, vậy 2 giờ chiều chúng ta gặp nhau nhé."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài 现在几点了？ (Bây giờ là mấy giờ?)",
          "options": ["8:10 sáng", "8:40 sáng", "10:10 sáng", "2:00 chiều"],
          "answer": 1,
          "explanation": "安妮 trả lời: “早上八点四十” (8 giờ 40 phút sáng)."
        },
        {
          "id": 2,
          "question": "白家月什么时候有课？ (Bạch Gia Nguyệt khi nào có lớp học?)",
          "options": ["早上 8:40", "上午 10:10", "下午 2:00", "下午 4:30"],
          "answer": 1,
          "explanation": "白家月 nói: “我上午十点十分有课” (Buổi sáng 10 giờ 10 phút tôi có lớp học)."
        },
        {
          "id": 3,
          "question": "安妮 và 白家月 hẹn gặp nhau lúc mấy giờ?",
          "options": ["8:40 sáng", "10:10 sáng", "2:00 chiều", "4:00 chiều"],
          "answer": 2,
          "explanation": "安妮 đề xuất: “我们下午两点见吧” (Chúng ta 2 giờ chiều gặp nhau nhé)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai7.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "下午我想去电影院看电影，你去吗？",
          "pinyin": "Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?",
          "vietnamese": "Chiều nay tôi muốn đi rạp chiếu phim xem phim, bạn đi không?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我现在不想去，下午还有事。",
          "pinyin": "Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.",
          "vietnamese": "Tôi không muốn đi, chiều nay tôi còn có việc."
        },
        {
          "id": 3,
          "speaker": "李文",
          "hanzi": "好的。明天呢？",
          "pinyin": "Hǎo de. Míngtiān ne?",
          "vietnamese": "Được rồi. Còn ngày mai thì sao?"
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "我明天下午两点还上课呢，四点半下课。",
          "pinyin": "Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.",
          "vietnamese": "Chiều mai 2 giờ tôi còn phải đi học, 4 giờ rưỡi mới tan học."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "李文下午想去哪儿？ (Chiều nay Lý Văn muốn đi đâu?)",
          "options": ["去超市 (Đi siêu thị)", "去电影院 (Đi rạp chiếu phim)", "去学校 (Đi đến trường)", "回家 (Về nhà)"],
          "answer": 1,
          "explanation": "李文 nói: “下午我想去电影院看电影” (Chiều nay tôi muốn đi rạp chiếu phim xem phim)."
        },
        {
          "id": 2,
          "question": "白家月为什么下午不去？ (Tại sao Bạch Gia Nguyệt chiều nay không đi?)",
          "options": ["生病了 (Bị bệnh)", "没钱 (Không có tiền)", "下午还有事 (Chiều nay còn có việc)", "不想看电影 (Không thích xem phim)"],
          "answer": 2,
          "explanation": "白家月 trả lời: “我不想去，下午还有事” (Tôi không muốn đi, chiều nay tôi còn có việc)."
        },
        {
          "id": 3,
          "question": "Trong bài 白家月: 我明天下午两点还上课呢，(        )下课。",
          "options": ["两点 (2:00)", "三点半 (3:30)", "四点半 (4:30)", "五点 (5:00)"],
          "answer": 2,
          "explanation": "白家月 nói: “四点半下课” (4 giờ rưỡi tan học)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai7.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "喂，你在哪儿呢？",
          "pinyin": "Wèi, nǐ zài nǎr ne?",
          "vietnamese": "Alo, anh đang ở đâu đấy?"
        },
        {
          "id": 2,
          "speaker": "刘明",
          "hanzi": "我在家里呢。",
          "pinyin": "Wǒ zài jiā li ne.",
          "vietnamese": "Anh đang ở trong nhà."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "我晚上六点半下班。",
          "pinyin": "Wǒ wǎnshang liù diǎn bàn xiàbān.",
          "vietnamese": "Em 6 giờ rưỡi tối mới tan làm."
        },
        {
          "id": 4,
          "speaker": "刘明",
          "hanzi": "我八点去医院上班。",
          "pinyin": "Wǒ bā diǎn qù yīyuàn shàngbān.",
          "vietnamese": "8 giờ, anh phải đi bệnh viện làm việc."
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "好的，你去店里买些菜吧。",
          "pinyin": "Hǎo de, nǐ qù diàn li mǎi xiē cài ba.",
          "vietnamese": "Được rồi, anh ghé cửa hàng mua ít thức ăn nhé."
        },
        {
          "id": 6,
          "speaker": "刘明",
          "hanzi": "好，我十分钟后去。",
          "pinyin": "Hǎo, wǒ shí fēnzhōng hòu qù.",
          "vietnamese": "Được, 10 phút nữa anh đi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài: 刘明: 我(       )呢。",
          "options": ["在医院 (Ở bệnh viện)", "在家里 (Ở trong nhà)", "在店里 (Ở cửa hàng)", "在公司 (Ở công ty)"],
          "answer": 1,
          "explanation": "刘明 trả lời: “我在家里呢” (Anh đang ở trong nhà)."
        },
        {
          "id": 2,
          "question": "王一雪晚上几点下班？ (Vương Nhất Tuyết mấy giờ tối tan làm?)",
          "options": ["六点 (6:00)", "六点半 (6:30)", "七点 (7:00)", "八点 (8:00)"],
          "answer": 1,
          "explanation": "王一雪 nói: “我晚上六点半下班” (Em 6 giờ rưỡi tối tan làm)."
        },
        {
          "id": 3,
          "question": "刘明在哪里工作？ (Lưu Minh làm việc ở đâu?)",
          "options": ["学校 (Trường học)", "饭店 (Nhà hàng)", "医院 (Bệnh viện)", "超市 (Siêu thị)"],
          "answer": 2,
          "explanation": "刘明 nói: “我八点去医院上班” (Anh 8 giờ đi bệnh viện làm việc)."
        },
        {
          "id": 4,
          "question": "Lưu Minh bao lâu nữa thì đi mua thức ăn?",
          "options": ["5 phút nữa", "10 phút nữa", "20 phút nữa", "30 phút nữa"],
          "answer": 1,
          "explanation": "刘明 trả lời: “好，我十分钟后去” (Được, 10 phút nữa anh đi)."
        },
      ],
    },
  ],
},

{
  "id": 8,
  "title": "Bài học 8",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai8.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "房间外有一只小猫。",
          "pinyin": "Fángjiān wài yǒu yì zhī xiǎo māo.",
          "vietnamese": "Bên ngoài phòng có một con mèo nhỏ."
        },
        {
          "id": 2,
          "speaker": "陈天中",
          "hanzi": "我没看见，缓在哪儿呢？",
          "pinyin": "Wǒ méi kànjiàn, tā zài nǎr ne?",
          "vietnamese": "Tôi không nhìn thấy, nó ở đâu thế?"
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "它在桌子下呢。",
          "pinyin": "Tā zài zhuōzi xià ne.",
          "vietnamese": "Nó ở dưới bàn đấy."
        },
        {
          "id": 4,
          "speaker": "陈天中",
          "hanzi": "这只小猫真漂亮！",
          "pinyin": "Zhè zhī xiǎo māo zhēn piàoliang!",
          "vietnamese": "Con mèo nhỏ này xinh quá!"
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "小猫在哪儿？ (Mèo nhỏ ở đâu?)",
          "options": ["在椅子上 (Trên ghế)", "在桌子下 (Dưới bàn)", "在房间里 (Trong phòng)", "在门后 (Sau cửa)"],
          "answer": 1,
          "explanation": "白家月 nói: “它在桌子下呢” (Nó ở dưới bàn đấy)."
        },
        {
          "id": 2,
          "question": "Lượng từ dùng cho con vật là gì?",
          "options": ["个 (gè)", "只 (zhī)", "本 (běn)", "条 (tiáo)"],
          "answer": 1,
          "explanation": "Lượng từ dùng cho động vật như mèo, chó... là “只” (zhī)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai8.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "我们在哪儿见呢？",
          "pinyin": "Wǒmen zài nǎr jiàn ne?",
          "vietnamese": "Chúng ta gặp nhau ở đâu nhỉ?"
        },
        {
          "id": 2,
          "speaker": "李文",
          "hanzi": "在学校书店前见吧。",
          "pinyin": "Zài xuéxiào shūdiàn qián jiàn ba.",
          "vietnamese": "Gặp nhau ở trước hiệu sách của trường đi."
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "好的。下午两点你能到吗？",
          "pinyin": "Hǎo de. Xiàwǔ liǎng diǎn nǐ néng dào ma?",
          "vietnamese": "Được rồi. 2 giờ chiều bạn có thể đến nơi không?"
        },
        {
          "id": 4,
          "speaker": "李文",
          "hanzi": "我能到。我在学校吃午饭。",
          "pinyin": "Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.",
          "vietnamese": "Tôi có thể đến. Tôi ăn trưa ở trường."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "他们在哪儿见呢？(Họ hẹn gặp nhau ở đâu?)",
          "options": ["在超市前 (Trước siêu thị)", "在学校书店前 (Trước hiệu sách trường học)", "在饭店里 (Trong nhà hàng)", "在电影院 (Tại rạp chiếu phim)"],
          "answer": 1,
          "explanation": "李文 đề xuất: “在学校书店前见吧” (Gặp nhau ở trước hiệu sách trường học đi)."
        },
        {
          "id": 2,
          "question": "Trong bài 白家月: (       )你能到吗？",
          "options": ["下午一点 (1:00 chiều)", "下午两点 (2:00 chiều)", "下午三点 (3:00 chiều)", "下午四点 (4:00 chiều)"],
          "answer": 1,
          "explanation": "白家月 hỏi: “下午两点你能到吗？” (2 giờ chiều bạn có thể đến nơi không?)."
        },
        {
          "id": 3,
          "question": "Trong bài 李文: “我(       )吃午饭",
          "options": ["在家里 (Ở nhà)", "在饭店 (Ở nhà hàng)", "在学校 (Ở trường)", "在公司 (Ở công ty)"],
          "answer": 2,
          "explanation": "李文 nói: “我在学校吃午饭” (Tôi ăn cơm trưa ở trường)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai8.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "刘明",
          "hanzi": "小胡，还没吃饭呢？",
          "pinyin": "Xiǎo Hú, hái méi chī fàn ne?",
          "vietnamese": "Tiểu Hồ, vẫn chưa ăn cơm à?"
        },
        {
          "id": 2,
          "speaker": "胡医生",
          "hanzi": "没吃呢。",
          "pinyin": "Méi chī ne.",
          "vietnamese": "Chưa ăn."
        },
        {
          "id": 3,
          "speaker": "刘明",
          "hanzi": "大医院病人多，医生非常忙。",
          "pinyin": "Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.",
          "vietnamese": "Bệnh viện lớn bệnh nhân nhiều, bác sĩ rất bận rộn."
        },
        {
          "id": 4,
          "speaker": "胡医生",
          "hanzi": "是的。我爸爸也在医院工作，他也非常忙。",
          "pinyin": "Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.",
          "vietnamese": "Đúng vậy. Bố tôi cũng làm việc ở bệnh viện, ông ấy cũng rất bận."
        },
        {
          "id": 5,
          "speaker": "刘明",
          "hanzi": "你家有两个医生？",
          "pinyin": "Nǐ jiā yǒu liǎng gè yīshēng?",
          "vietnamese": "Nhà bạn có hai bác sĩ hả?"
        },
        {
          "id": 6,
          "speaker": "胡医生",
          "hanzi": "对。",
          "pinyin": "Duì.",
          "vietnamese": "Đúng vậy."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "胡医生吃饭了吗? (Bác sĩ Hồ đã ăn cơm chưa?)",
          "options": ["吃了 (Đã ăn)", "不想吃 (Không muốn ăn)", "正在吃 (Đang ăn)", "没吃呢 (Chưa ăn)"],
          "answer": 3,
          "explanation": "胡医生 trả lời: “没吃呢” (Chưa ăn)."
        },
        {
          "id": 2,
          "question": "Trong bài 胡医生: 是的。我爸爸也(       )，他也非常忙。",
          "options": ["在学校工作 (Làm giáo viên ở trường)", "在医院工作 (Làm việc ở bệnh viện)", "在超市工作 (Làm việc ở siêu thị)", "在饭店工作 (Làm việc ở nhà hàng)"],
          "answer": 1,
          "explanation": "胡医生 nói: “我爸爸也在医院工作...” (Bố tôi cũng làm việc ở bệnh viện...)."
        },
      ],
    },
  ],
},

{
  "id": 9,
  "title": "Bài học 9",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai9.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "学校前边有一家电影院。",
          "pinyin": "Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.",
          "vietnamese": "Phía trước trường học có một rạp chiếu phim."
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "对。我们晚上去那个电影院看电影吧。",
          "pinyin": "Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.",
          "vietnamese": "Đúng rồi. Buổi tối chúng ta đến rạp chiếu phim đó xem phim đi."
        },
        {
          "id": 3,
          "speaker": "李文",
          "hanzi": "好！我们七点在电影院外边见，好吗？",
          "pinyin": "Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?",
          "vietnamese": "Được! Chúng ta gặp nhau ở bên ngoài rạp chiếu phim lúc 7 giờ, được không?"
        },
        {
          "id": 4,
          "speaker": "白家月",
          "hanzi": "好的，晚上七点见！",
          "pinyin": "Hǎo de, wǎnshang qī diǎn jiàn!",
          "vietnamese": "Được rồi, 7 giờ tối gặp nhé!"
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "电影院在哪儿？ (Rạp chiếu phim ở đâu?)",
          "options": ["学校后边 (Phía sau trường học)", "学校前边 (Phía trước trường học)", "学校里边 (Bên trong trường học)", "学校旁边 (Bên cạnh trường học)"],
          "answer": 1,
          "explanation": "李文 nói: “学校前边有一家电影院” (Phía trước trường học có một rạp chiếu phim)."
        },
        {
          "id": 2,
          "question": "他们晚上几点见？ (Buổi tối họ hẹn gặp nhau lúc mấy giờ?)",
          "options": ["六点 (6 giờ)", "六点半 (6 giờ rưỡi)", "七点 (7 giờ)", "八点 (8 giờ)"],
          "answer": 2,
          "explanation": "李文 đề xuất và 白家月 đồng ý: “晚上七点见！” (7 giờ tối gặp!)."
        },
        {
          "id": 3,
          "question": "Trong bài 李文: 好！我们七点在(        )见，好吗？",
          "options": ["电影院里边 (Bên trong rạp)", "电影院外边 (Bên ngoài rạp)", "学校里边 (Bên trong trường)", "家里面 (Ở trong nhà)"],
          "answer": 1,
          "explanation": "李文 nói: “我们七点在电影院外边见” (Chúng ta gặp nhau ở bên ngoài rạp chiếu phim lúc 7 giờ)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai9.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "椅子上有一本中文书，那是谁的书？",
          "pinyin": "Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?",
          "vietnamese": "Trên ghế có một quyển sách tiếng Trung, đó là sách của ai thế?"
        },
        {
          "id": 2,
          "speaker": "陈天中",
          "hanzi": "是我的书，谢谢。这是我的第二本中文书。",
          "pinyin": "Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.",
          "vietnamese": "Là sách của tôi, cảm ơn bạn. Đây là cuốn sách tiếng Trung thứ hai của tôi."
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "不客气。你明天上午在哪儿？",
          "pinyin": "Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?",
          "vietnamese": "Không có gì. Sáng mai bạn ở đâu?"
        },
        {
          "id": 4,
          "speaker": "陈天中",
          "hanzi": "我明天上午在学校学习。",
          "pinyin": "Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.",
          "vietnamese": "Sáng mai tôi ở trường học tập."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "中文书在哪儿？ (Sách tiếng Trung ở đâu?)",
          "options": ["桌子上 (Trên bàn)", "椅子上 (Trên ghế)", "包里 (Trong cặp)", "床上 (Trên giường)"],
          "answer": 1,
          "explanation": "白家月 nói: “椅子上有一本中文书” (Trên ghế có một quyển sách tiếng Trung)."
        },
        {
          "id": 2,
          "question": "这本中文书是陈天中的第几本书？ (Đây là cuốn sách tiếng Trung thứ mấy của Trần Thiên Trung?)",
          "options": ["第一本 (Quyển thứ nhất)", "第二本 (Quyển thứ hai)", "第三本 (Quyển thứ ba)", "第四本 (Quyển thứ tư)"],
          "answer": 1,
          "explanation": "陈天中 nói: “这是我的第二本中文书” (Đây là cuốn sách tiếng Trung thứ hai của tôi)."
        },
        {
          "id": 3,
          "question": "Trong bài 陈天中: 我明天上午(        )",
          "options": ["在家里看电视 (Ở nhà xem tivi)", "去电影院看电影 (Đi rạp xem phim)", "去超市买东西 (Đi siêu thị mua đồ)", "在学校学习 (Ở trường học tập)"],
          "answer": 3,
          "explanation": "陈天中 trả lời: “我明天上午在学校学习” (Sáng mai tôi ở trường học tập)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai9.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "明天星期六，你做什么？",
          "pinyin": "Míngtiān Xīngqīliù, nǐ zuò shénme?",
          "vietnamese": "Ngày mai là thứ Bảy, bạn làm gì?"
        },
        {
          "id": 2,
          "speaker": "杨同乐",
          "hanzi": "我白天在家里读书，晚上和朋友们去外边唱歌。",
          "pinyin": "Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.",
          "vietnamese": "Ban ngày tôi ở nhà đọc sách, buổi tối đi ra ngoài hát cùng các bạn."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "你唱歌很好听。",
          "pinyin": "Nǐ chàng gē hěn hǎotīng.",
          "vietnamese": "Bạn hát rất hay đó."
        },
        {
          "id": 4,
          "speaker": "杨同乐",
          "hanzi": "谢谢！您星期六做什么？",
          "pinyin": "Xièxie! Nín Xīngqīliù zuò shénme?",
          "vietnamese": "Cảm ơn chị! Thứ Bảy chị làm gì?"
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "我在家里做饭、看电视，和孩子们、小狗玩。",
          "pinyin": "Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.",
          "vietnamese": "Tôi ở nhà nấu ăn, xem tivi, chơi với các con và chú chó nhỏ."
        },
        {
          "id": 6,
          "speaker": "杨同乐",
          "hanzi": "我也有只小狗。",
          "pinyin": "Wǒ yě yǒu yì zhī xiǎo gǒu.",
          "vietnamese": "Tôi cũng có một chú chó nhỏ."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "杨同乐星期六白天做什么？ (Dương Đồng Lạc làm gì vào ban ngày thứ Bảy?)",
          "options": ["在家里读书 (Ở nhà đọc sách)", "去外边唱歌 (Đi ra ngoài hát)", "在家里做饭 (Ở nhà nấu ăn)", "去超市 (Đi siêu thị)"],
          "answer": 0,
          "explanation": "杨同乐 nói: “我白天在家里读书...” (Ban ngày tôi ở nhà đọc sách...)."
        },
        {
          "id": 2,
          "question": "Trong bài 杨同乐: 我白天在家里读书，晚上(        )。",
          "options": ["看电视 (Xem tivi)", "和朋友们去外边唱歌 (Cùng các bạn ra ngoài hát)", "做饭 (Nấu ăn)", "睡觉 (Đi ngủ)"],
          "answer": 1,
          "explanation": "杨同乐 nói: “...晚上和朋友们去外边唱歌” (...buổi tối cùng các bạn ra ngoài hát)."
        },
        {
          "id": 3,
          "question": "Vương Nhất Tuyết ở nhà làm những việc gì?",
          "options": ["读书、看电影 (Đọc sách, xem phim)", "做饭、看电视，和孩子们、小狗玩 (Nấu ăn, xem tivi, chơi cùng các con và chó nhỏ)", "工作、打扫 (Làm việc, dọn dẹp)", "睡觉、听音乐 (Ngủ, nghe nhạc)"],
          "answer": 1,
          "explanation": "王一雪 trả lời: “我在家里做饭、看电视，和孩子们、小狗玩”."
        },
        {
          "id": 4,
          "question": "杨同乐家有什么宠物？ (Nhà Dương Đồng Lạc nuôi thú cưng gì?)",
          "options": ["一只小猫 (Một chú mèo nhỏ)", "一只鸟 (Một con chim)", "一只小狗 (Một chú chó nhỏ)", "没有宠物 (Không nuôi thú cưng)"],
          "answer": 2,
          "explanation": "杨同乐 nói câu cuối: “我也有只小狗” (Tôi cũng có một chú chó nhỏ)."
        },
      ],
    },
  ],
},

{
  "id": 10,
  "title": "Bài học 10",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai10.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "请问，有杯子吗？",
          "pinyin": "Qǐngwèn, yǒu bēizi ma?",
          "vietnamese": "Xin hỏi, ở đây có cốc không?"
        },
        {
          "id": 2,
          "speaker": "售货员",
          "hanzi": "有，杯子在这边。",
          "pinyin": "Yǒu, bēizi zài zhèbiān.",
          "vietnamese": "Có, cốc ở bên này."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "多少钱一个？",
          "pinyin": "Duōshao qián yí gè?",
          "vietnamese": "Bao nhiêu tiền một cái?"
        },
        {
          "id": 4,
          "speaker": "售货员",
          "hanzi": "这些五块钱一个，那些十块钱一个。",
          "pinyin": "Zhèxiē wǔ kuài qián yí gè, nàxiē shí kuài qián yí gè.",
          "vietnamese": "Những cái này 5 tệ một cái, những cái kia 10 tệ một cái."
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "我买这个吧。",
          "pinyin": "Wǒ mǎi zhège ba.",
          "vietnamese": "Tôi mua cái này vậy."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "王一雪想买什么？ (Vương Nhất Tuyết muốn mua gì?)",
          "options": ["苹果 (Táo)", "杯子 (Cốc)", "衣服 (Quần áo)", "电脑 (Máy tính)"],
          "answer": 1,
          "explanation": "王一雪 hỏi: “请问，有杯子吗？” (Xin hỏi ở đây có cốc không?)."
        },
        {
          "id": 2,
          "question": "Những cái cốc ở gần giá bao nhiêu tiền một cái?",
          "options": ["三块钱 (3 tệ)", "十块钱 (10 tệ)", "七块钱 (7 tệ)", "五块钱 (5 tệ)"],
          "answer": 3,
          "explanation": "售货员 nói: “这些五块钱一个...” (Những cái này 5 tệ một cái...)."
        },
        {
          "id": 3,
          "question": "Những cái cốc ở xa giá bao nhiêu tiền một cái?",
          "options": ["五块钱 (5 tệ)", "六块钱 (6 tệ)", "十块钱 (10 tệ)", "二十块钱 (20 tệ)"],
          "answer": 2,
          "explanation": "售货员 nói: “...那些十块钱一个” (...những cái kia 10 tệ một cái)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai10.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "这儿的水果真不少！",
          "pinyin": "Zhèr de shuǐguǒ zhēn bù shǎo!",
          "vietnamese": "Hoa quả ở đây thật là nhiều!"
        },
        {
          "id": 2,
          "speaker": "售货员",
          "hanzi": "您想买什么？",
          "pinyin": "Nín xiǎng mǎi shénme?",
          "vietnamese": "Chị muốn mua gì ạ?"
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "我想买两斤苹果。",
          "pinyin": "Wǒ xiǎng mǎi liǎng jīn píngguǒ.",
          "vietnamese": "Tôi muốn mua 2 cân táo."
        },
        {
          "id": 4,
          "speaker": "售货员",
          "hanzi": "苹果三块五一斤。这些七块二，七块钱吧。",
          "pinyin": "Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.",
          "vietnamese": "Táo 3.5 tệ một cân. Chỗ này 7.2 tệ, lấy chị 7 tệ thôi."
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "好的，这儿的苹果真便宜！",
          "pinyin": "Hǎo de, zhèr de píngguǒ zhēn piányi!",
          "vietnamese": "Được rồi, táo ở đây rẻ thật!"
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "王一雪想买多少苹果？ (Vương Nhất Tuyết muốn mua bao nhiêu táo?)",
          "options": ["一斤 (1 cân)", "两斤 (2 cân)", "三斤 (3 cân)", "五斤 (5 cân)"],
          "answer": 1,
          "explanation": "王一雪 nói: “我想买两斤苹果” (Tôi muốn mua 2 cân táo)."
        },
        {
          "id": 2,
          "question": "苹果一斤多少钱？ (Một cân táo bao nhiêu tiền?)",
          "options": ["三块五 (3.5 tệ)", "三块钱 (3 tệ)", "五块钱 (5 tệ)", "七块钱 (7 tệ)"],
          "answer": 0,
          "explanation": "售货员 trả lời: “苹果三块五一斤” (Táo 3.5 tệ một cân)."
        },
        {
          "id": 3,
          "question": "Trong bài 王一雪: 这儿的苹果(       )!",
          "options": ["真贵 (Rất đắt)", "真便宜 (Rất rẻ)", "不好吃 (Không ngon)", "很少 (Rất ít)"],
          "answer": 1,
          "explanation": "王一雪 khen: “这儿的苹果真便宜！” (Táo ở đây rẻ thật!)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai10.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "这家商店衣服真多！这件一百元，怎么样？",
          "pinyin": "Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?",
          "vietnamese": "Cửa hàng này nhiều quần áo thật! Bộ này 100 tệ, anh thấy thế nào?"
        },
        {
          "id": 2,
          "speaker": "刘明",
          "hanzi": "好看，也不贵。",
          "pinyin": "Hǎokàn, yě bú guì.",
          "vietnamese": "Đẹp đấy, cũng không đắt."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "小雪能穿，买一件吧。",
          "pinyin": "Xiǎoxuě néng chuān, mǎi yí jiàn ba.",
          "vietnamese": "Tiểu Tuyết mặc vừa đấy, mua một bộ đi."
        },
        {
          "id": 4,
          "speaker": "刘明",
          "hanzi": "好的。小明能穿吗？",
          "pinyin": "Hǎo de. Xiǎomíng néng chuān ma?",
          "vietnamese": "Được thôi. Tiểu Minh có mặc được không?"
        },
        {
          "id": 5,
          "speaker": "王一雪",
          "hanzi": "不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。",
          "pinyin": "Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.",
          "vietnamese": "Không được. Mấy bộ này là quần áo bé gái mặc, quần áo bé trai ở đằng kia cơ."
        },
        {
          "id": 6,
          "speaker": "刘明",
          "hanzi": "好的。",
          "pinyin": "Hǎo de.",
          "vietnamese": "Được rồi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài 王一雪: 这家商店衣服真多！这件(       )，怎么样？",
          "options": ["五十元 (50 tệ)", "八十元 (80 tệ)", "一百元 (100 tệ)", "二百元 (200 tệ)"],
          "answer": 2,
          "explanation": "王一雪 nói: “这件一百元，怎么样？” (Bộ này 100 tệ, anh thấy thế nào?)."
        },
        {
          "id": 2,
          "question": "Bộ quần áo 100 tệ đó ai có thể mặc vừa?",
          "options": ["王一雪", "刘明", "小雪", "小明"],
          "answer": 2,
          "explanation": "王一雪 nói: “小雪能穿，买一件吧” (Tiểu Tuyết mặc vừa đấy, mua một bộ đi)."
        },
        {
          "id": 3,
          "question": "男孩子的衣服在哪里? (Quần áo của bé trai nằm ở đâu?)",
          "options": ["在这儿 (Ở đây)", "在那儿 (Ở đằng kia)", "在家里 (Ở nhà)", "没有售卖 (Không có bán)"],
          "answer": 1,
          "explanation": "王一雪 nói: “...男孩子的衣服在那儿” (...quần áo con trai ở đằng kia)."
        },
      ],
    },
  ],
},

{
  "id": 11,
  "title": "Bài học 11",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai11.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一飞",
          "hanzi": "喂，李文，你什么时候能到饭店？",
          "pinyin": "Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?",
          "vietnamese": "Alo, Lý Văn, khi nào bạn mới tới nhà hàng?"
        },
        {
          "id": 2,
          "speaker": "李文",
          "hanzi": "还不知道，正在找呢。它是不是在超市后边？",
          "pinyin": "Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?",
          "vietnamese": "Tôi vẫn chưa biết, đang tìm đây. Có phải nó ở phía sau siêu thị không?"
        },
        {
          "id": 3,
          "speaker": "王一飞",
          "hanzi": "是的。你开车没开车？",
          "pinyin": "Shì de. Nǐ kāichē méi kāichē?",
          "vietnamese": "Đúng rồi. Bạn có tự lái xe đi không?"
        },
        {
          "id": 4,
          "speaker": "李文",
          "hanzi": "我没开车，坐车呢。",
          "pinyin": "Wǒ méi kāichē, zuò chē ne.",
          "vietnamese": "Tôi không lái xe, tôi đang ngồi xe tới (đi taxi/xe buýt)."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "李文正在做什么？ (Lý Văn đang làm gì?)",
          "options": ["找饭店 (Tìm nhà hàng)", "吃饭 (Ăn cơm)", "买东西 (Mua đồ)", "睡觉 (Ngủ)"],
          "answer": 0,
          "explanation": "李文 nói: “...正在找呢” (Tôi đang tìm đây) để tìm vị trí của nhà hàng."
        },
        {
          "id": 2,
          "question": "饭店在哪儿？ (Nhà hàng ở đâu?)",
          "options": ["在超市前边 (Ở phía trước siêu thị)", "在超市后边 (Ở phía sau siêu thị)", "在超市里边 (Ở bên trong siêu thị)", "在学校旁边 (Ở bên cạnh trường học)"],
          "answer": 1,
          "explanation": "李文 hỏi: “它是不是在超市后边？” và 王一飞 xác nhận: “是的”."
        },
        {
          "id": 3,
          "question": "李文是怎么去的？ (Lý Văn đi bằng phương tiện gì/thế nào?)",
          "options": ["自己开车 (Tự lái xe)", "走路 (Đi bộ)", "骑自行车 (Đi xe đạp)", "没开车，坐车 (Không lái xe, ngồi/đi xe taxi/buýt)"],
          "answer": 3,
          "explanation": "李文 trả lời: “我没开车，坐车呢”."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai11.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一飞",
          "hanzi": "你还在读大学吗？",
          "pinyin": "Nǐ hái zài dú dàxué ma?",
          "vietnamese": "Bạn vẫn đang học đại học à?"
        },
        {
          "id": 2,
          "speaker": "李文",
          "hanzi": "对，我读大学呢，还是大学生。",
          "pinyin": "Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.",
          "vietnamese": "Đúng vậy, tôi đang học đại học, vẫn là sinh viên đại học."
        },
        {
          "id": 3,
          "speaker": "王一飞",
          "hanzi": "你们学习忙不忙？",
          "pinyin": "Nǐmen xuéxí máng bu máng?",
          "vietnamese": "Việc học của các bạn có bận không?"
        },
        {
          "id": 4,
          "speaker": "李文",
          "hanzi": "非常忙，我学医，我们的课很多。",
          "pinyin": "Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.",
          "vietnamese": "Rất bận, tôi học ngành Y, tiết học của chúng tôi rất nhiều."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài 李文: 对，我读大学呢，还是(       )。",
          "options": ["老师 (Giáo viên)", "医生 (Bác sĩ)", "大学生 (Sinh viên đại học)", "售货员 (Nhân viên bán hàng)"],
          "answer": 2,
          "explanation": "李文 nói: “...还是大学生” (Vẫn là sinh viên đại học)."
        },
        {
          "id": 2,
          "question": "李文学什么专业？ (Lý Văn học chuyên ngành gì?)",
          "options": ["学中文 (Học tiếng Trung)", "学医 (Học ngành Y)", "学做饭 (Học nấu ăn)", "学开车 (Học lái xe)"],
          "answer": 1,
          "explanation": "李文 giải thích: “...我学医，我们的课很多” (Tôi học Y, bài học của chúng tôi rất nhiều)."
        },
        {
          "id": 3,
          "question": "李文的大学学习生活怎么样？ (Cuộc sống học tập đại học của Li Wen ra sao?)",
          "options": ["非常忙 (Rất bận)", "不太忙 (Không bận lắm)", "很不忙 (Rất rảnh rỗi)", "不清楚 (Không rõ)"],
          "answer": 0,
          "explanation": "李文 trả lời: “非常忙...” (Rất bận...)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai11.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "刘明",
          "hanzi": "弟弟起床没起床呢？",
          "pinyin": "Dìdi qǐchuáng méi qǐchuáng ne?",
          "vietnamese": "Em trai đã thức dậy hay chưa?"
        },
        {
          "id": 2,
          "speaker": "刘小雪",
          "hanzi": "没起床呢，还在睡觉。",
          "pinyin": "Méi qǐchuáng ne, hái zài shuìjiào.",
          "vietnamese": "Vẫn chưa dậy ạ, em ấy vẫn đang ngủ."
        },
        {
          "id": 3,
          "speaker": "刘明",
          "hanzi": "还睡呢？他今天去不去那里？",
          "pinyin": "Hái shuì ne? Tā jīnnián qù bu qù nàlǐ?",
          "vietnamese": "Vẫn còn ngủ cơ à? Hôm nay nó có đi đến đó không?"
        },
        {
          "id": 4,
          "speaker": "刘小雪",
          "hanzi": "去哪里？",
          "pinyin": "Qù nǎlǐ?",
          "vietnamese": "Đi đâu cơ ạ?"
        },
        {
          "id": 5,
          "speaker": "刘明",
          "hanzi": "去超市。",
          "pinyin": "Qù chāoshì.",
          "vietnamese": "Đi siêu thị."
        },
        {
          "id": 6,
          "speaker": "刘小雪",
          "hanzi": "我昨天问他，他对我说，不去，他今天要和小朋友玩。",
          "pinyin": "Wǒ zuótiān wèn tā, tā duì wǒ shuō, bú qù, tā jīnnián yào hé xiǎopéngyou wán.",
          "vietnamese": "Hôm qua con có hỏi em, em bảo với con là không đi, hôm nay em muốn chơi với các bạn nhỏ."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "弟弟现在正在做什么？ (Bây giờ em trai đang làm gì?)",
          "options": ["吃早饭 (Ăn sáng)", "在睡觉 (Đang ngủ)", "看电视 (Xem tivi)", "写作业 (Làm bài tập)"],
          "answer": 1,
          "explanation": "刘小雪 trả lời: “没起床呢，还在睡觉” (Vẫn chưa dậy, vẫn đang ngủ)."
        },
        {
          "id": 2,
          "question": "Trong bài 刘小雪: 我昨天问他，他对我说，不去，他今天要(        )。",
          "options": ["去超市买东西 (Đi siêu thị mua đồ)", "在家学习 (Ở nhà học bài)", "和小朋友玩 (Chơi với các bạn nhỏ)", "和爸爸去工作 (Đi làm với bố)"],
          "answer": 2,
          "explanation": "刘小雪 nói: “...他今天要和小朋友玩” (...hôm nay em ấy muốn chơi với các bạn nhỏ)."
        },
        {
          "id": 3,
          "question": "刘小雪是什么时候问弟弟的？ (Lưu Tiểu Tuyết hỏi em trai khi nào?)",
          "options": ["今天 (Hôm nay)", "昨天 (Hôm qua)", "前天 (Hôm kia)", "刚才 (Vừa nãy)"],
          "answer": 1,
          "explanation": "刘小雪 nói: “我昨天问他...” (Hôm qua con đã hỏi em...)."
        },
      ],
    },
  ],
},

{
  "id": 12,
  "title": "Bài học 12",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai12.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "今天天气怎么样？",
          "pinyin": "Jīntiān tiānqì zěnmeyàng?",
          "vietnamese": "Thời tiết hôm nay thế nào?"
        },
        {
          "id": 2,
          "speaker": "王一飞",
          "hanzi": "这里的天下不太好，下雨了。",
          "pinyin": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
          "vietnamese": "Thời tiết ở đây không tốt lắm, trời mưa rồi."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "雨大吗？",
          "pinyin": "Yǔ dà ma?",
          "vietnamese": "Mưa có to không?"
        },
        {
          "id": 4,
          "speaker": "王一飞",
          "hanzi": "有点儿大，我觉得很冷。",
          "pinyin": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
          "vietnamese": "Mưa hơi to, tôi cảm thấy rất lạnh."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "今天天气怎么样？ (Thời tiết hôm nay thế nào?)",
          "options": ["很好 (Rất tốt)", "不太好，下雨了 (Không tốt lắm, trời mưa rồi)", "刮风了 (Trời nổi gió)", "下雪了 (Tuyết rơi)"],
          "answer": 1,
          "explanation": "王一飞 nói: “这里的天不太好，下雨了” (Thời tiết ở đây không tốt lắm, trời mưa rồi)."
        },
        {
          "id": 2,
          "question": "雨大不大？ (Mưa có to không?)",
          "options": ["不大 (Không to)", "非常小 (Rất nhỏ)", "有点儿大 (Hơi to)", "没下雨 (Không mưa)"],
          "answer": 2,
          "explanation": "王一飞 trả lời: “有点儿大...” (Hơi to...)."
        },
        {
          "id": 3,
          "question": "王一飞: 有点儿大，我觉得(        )。",
          "options": ["很热 (Rất nóng)", "很冷 (Rất lạnh)", "很累 (Rất mệt)", "很高兴 (Rất vui)"],
          "answer": 1,
          "explanation": "王一飞 nói: “...我觉得很冷” (...tôi cảm thấy rất lạnh)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai12.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一雪",
          "hanzi": "昨天下雪了。",
          "pinyin": "Zuótiān xià xuě le.",
          "vietnamese": "Hôm qua tuyết rơi rồi."
        },
        {
          "id": 2,
          "speaker": "杨同乐",
          "hanzi": "是的，太冷了。",
          "pinyin": "Shì de, tài lěng le.",
          "vietnamese": "Đúng vậy, lạnh quá."
        },
        {
          "id": 3,
          "speaker": "王一雪",
          "hanzi": "你昨天没来公司，生病了？",
          "pinyin": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
          "vietnamese": "Hôm qua bạn không đến công ty, bị ốm à?"
        },
        {
          "id": 4,
          "speaker": "杨同乐",
          "hanzi": "对，我昨天去医院看病了。",
          "pinyin": "Duì, wǒ zuótiān qù yīyuàn kànbìng le.",
          "vietnamese": "Đúng vậy, hôm qua tôi đi bệnh viện khám bệnh rồi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "昨天天气怎么样？(Hôm qua thời tiết thế nào?)",
          "options": ["下雨了 (Trời mưa)", "下雪了 (Tuyết rơi)", "刮大风 (Gió lớn)", "晴天 (Trời nắng)"],
          "answer": 1,
          "explanation": "王一雪 nói: “昨天下雪了” (Hôm qua tuyết rơi rồi)."
        },
        {
          "id": 2,
          "question": "杨同乐昨天为什么没来公司？ (Tại sao hôm qua Dương Đồng Lạc không đến công ty?)",
          "options": ["生病去医院看病了 (Bị ốm đi bệnh viện khám)", "在家休息 (Ở nhà nghỉ ngơi)", "去旅游了 (Đi du lịch)", "去超市了 (Đi siêu thị)"],
          "answer": 0,
          "explanation": "杨同乐 trả lời: “对，我昨天去医院看病了” (Đúng vậy, hôm qua tôi đi bệnh viện khám bệnh rồi)."
        },
        {
          "id": 3,
          "question": "Từ “生病” (shēngbìng) có nghĩa là gì?",
          "options": ["Khám bệnh", "Bệnh viện", "Uống thuốc", "Bị ốm"],
          "answer": 3,
          "explanation": "生病 (shēngbìng) có nghĩa là bị ốm, bị bệnh."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai12.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "杨同乐",
          "hanzi": "医生，我病了。",
          "pinyin": "Yīshēng, wǒ bìng le.",
          "vietnamese": "Bác sĩ ơi, tôi bị ốm rồi."
        },
        {
          "id": 2,
          "speaker": "胡医生",
          "hanzi": "我看看。你觉得怎么样？",
          "pinyin": "Wǒ kànkan. Nǐ juéde zěnmeyàng?",
          "vietnamese": "Để tôi xem nào. Anh cảm thấy trong người thế nào?"
        },
        {
          "id": 3,
          "speaker": "杨同乐",
          "hanzi": "我很冷。",
          "pinyin": "Wǒ hěn lěng.",
          "vietnamese": "Tôi thấy rất lạnh."
        },
        {
          "id": 4,
          "speaker": "胡医生",
          "hanzi": "好的，吃一点儿药，今天休息半天吧。",
          "pinyin": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
          "vietnamese": "Được rồi, hãy uống một ít thuốc, hôm nay nghỉ ngơi nửa ngày nhé."
        },
        {
          "id": 5,
          "speaker": "杨同乐",
          "hanzi": "好的。",
          "pinyin": "Hǎo de.",
          "vietnamese": "Vâng ạ."
        },
        {
          "id": 6,
          "speaker": "胡医生",
          "hanzi": "回家后再喝些热水。",
          "pinyin": "Huí jiā hòu zài hē xiē rè shuǐ.",
          "vietnamese": "Sau khi về nhà thì uống thêm ít nước ấm nhé."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "杨同乐觉得身体怎么样？ (Dương Đồng Lạc cảm thấy cơ thể thế nào?)",
          "options": ["很冷 (Rất lạnh)", "很热 (Rất nóng)", "头疼 (Đau đầu)", "肚子疼 (Đau bụng)"],
          "answer": 0,
          "explanation": "杨同乐 trả lời: “我很冷” (Tôi thấy rất lạnh)."
        },
        {
          "id": 2,
          "question": "Trong bài 胡医生: 好的，吃一点儿药，今天休息(        )吧。",
          "options": ["一天 (Một ngày)", "半天 (Nửa ngày)", "两天 (Hai ngày)", "不用休息 (Không cần nghỉ)"],
          "answer": 3,
          "explanation": "胡医生 nói: “...今天休息半天吧” (...hôm nay nghỉ ngơi nửa ngày nhé)."
        },
        {
          "id": 3,
          "question": "Trong bài 胡医生: 回回家后再(       )。",
          "options": ["喝冷水 (Uống nước lạnh)", "喝些热水 (Uống ít nước ấm)", "看电视 (Xem tivi)", "做饭 (Nấu ăn)"],
          "answer": 1,
          "explanation": "胡医生 dặn: “回家后再喝些热水” (Sau khi về nhà uống thêm ít nước ấm)."
        },
        {
          "id": 4,
          "question": "Từ “吃药” (chī yào) dịch sang tiếng Việt là gì?",
          "options": ["Ăn cơm", "Uống thuốc", "Khám bệnh", "Đi tiêm"],
          "answer": 1,
          "explanation": "Trong tiếng Trung, dùng từ “吃” với “药” (吃药) để chỉ hành động uống thuốc."
        },
      ],
    },
  ],
},

{
  "id": 13,
  "title": "Bài học 13",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai13.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "王老师，我可以再问您一个问题吗？",
          "pinyin": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
          "vietnamese": "Cô Vương ơi, em có thể hỏi thầy/cô thêm một câu hỏi nữa không ạ?"
        },
        {
          "id": 2,
          "speaker": "王一飞",
          "hanzi": "可以。你有什么问题？",
          "pinyin": "Kěyǐ. Nǐ yǒu shénme wèntí?",
          "vietnamese": "Được chứ. Em có câu hỏi gì nào?"
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "那个小店卖不卖手机？",
          "pinyin": "Nàge xiǎo diàn mài bu mài shǒujī?",
          "vietnamese": "Cửa hàng nhỏ kia có bán điện thoại di động không ạ?"
        },
        {
          "id": 4,
          "speaker": "王一飞",
          "hanzi": "我不知道。你可以打电话问一下。",
          "pinyin": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
          "vietnamese": "Thầy/Cô không biết. Em có thể gọi điện thoại hỏi thử xem."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Bạch Gia Nguyệt muốn làm gì?",
          "options": ["买手机 (Mua điện thoại)", "问老师一个问题 (Hỏi giáo viên một câu hỏi)", "打电话 (Gọi điện thoại)", "去小店 (Đến cửa hàng nhỏ)"],
          "answer": 1,
          "explanation": "白家月 nói: “王老师，我可以再问您一个问题吗？” (Cô Vương ơi, em có thể hỏi cô thêm một câu hỏi nữa không ạ?)."
        },
        {
          "id": 2,
          "question": "Trong bài 白家月: 那个小店卖不卖(        )？",
          "options": ["电脑", "手机", "衣服", "水果"],
          "answer": 1,
          "explanation": "白家月 hỏi: “那个小店卖不卖手机？” (Cửa hàng nhỏ kia có bán điện thoại không ạ?)."
        },
        {
          "id": 3,
          "question": "Trong bài 王一飞: 我不知道。你可以(         )。",
          "options": ["去小店看 (Đến cửa hàng xem)", "打电话问一下 (Gọi điện thoại hỏi xem)", "不买手机 (Không mua điện thoại)", "问别的老师 (Hỏi giáo viên khác)"],
          "answer": 1,
          "explanation": "王一飞 nói: “我不知道。你可以打电话问一下” (Cô không biết. Em có thể gọi điện thoại hỏi xem)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai13.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "服务员",
          "hanzi": "女士，请坐！您喝什么？",
          "pinyin": "Nǚshì, qǐng zuò! Nín hē shénme?",
          "vietnamese": "Xin chào quý cô, mời ngồi! Cô uống gì ạ?"
        },
        {
          "id": 2,
          "speaker": "王一雪",
          "hanzi": "我看一下。请给我一杯牛奶。",
          "pinyin": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
          "vietnamese": "Để tôi xem một chút. Cho tôi một cốc sữa tươi nhé."
        },
        {
          "id": 3,
          "speaker": "服务员",
          "hanzi": "好的。您还要什么？",
          "pinyin": "Hǎo de. Nín hái yào shénme?",
          "vietnamese": "Vâng ạ. Cô còn muốn dùng thêm gì nữa không ạ?"
        },
        {
          "id": 4,
          "speaker": "王一雪",
          "hanzi": "我还没吃早饭，再要这个面包和鸡蛋吧。",
          "pinyin": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
          "vietnamese": "Tôi vẫn chưa ăn sáng, cho tôi thêm bánh mì và trứng gà này nữa."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "王一雪想喝什么？ (Vương Nhất Tuyết muốn uống gì?)",
          "options": ["茶 (Trà)", "咖啡 (Cà phê)", "牛奶 (Sữa tươi)", "水 (Nước)"],
          "answer": 2,
          "explanation": "王一雪 nói: “请给我一杯牛奶” (Cho tôi một cốc sữa tươi)."
        },
        {
          "id": 2,
          "question": "Trong bài 王一雪: 我(       )早饭，再要这个面包和鸡蛋吧。",
          "options": ["吃了 (Đã ăn rồi)", "还没吃 (Vẫn chưa ăn)", "不想吃 (Không muốn ăn)", "在家里吃了 (Đã ăn ở nhà)"],
          "answer": 1,
          "explanation": "王一雪 nói: “我还没吃早饭...” (Tôi vẫn chưa ăn sáng...)."
        },
        {
          "id": 3,
          "question": "Ngoài đồ uống,Vương Nhất Tuyết còn gọi thêm thức ăn gì?",
          "options": ["包子和米饭 (Bánh bao và cơm)", "面包和鸡蛋 (Bánh mì và trứng gà)", "面条 (Mì)", "饺子 (Bánh há cảo)"],
          "answer": 1,
          "explanation": "王一雪 nói: “...再要这个面包和鸡蛋吧” (...cho tôi thêm bánh mì và trứng gà này nữa)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai13.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "服务员",
          "hanzi": "先生，请坐！您要什么？",
          "pinyin": "Xiānsheng, qǐng zuò! Nín yào shénme?",
          "vietnamese": "Xin chào ngài, mời ngồi! Ngài dùng gì ạ?"
        },
        {
          "id": 2,
          "speaker": "刘明",
          "hanzi": "我要一斤饺子。",
          "pinyin": "Wǒ yào yì jīn jiǎozi.",
          "vietnamese": "Tôi muốn lấy một cân bánh há cảo."
        },
        {
          "id": 3,
          "speaker": "服务员",
          "hanzi": "好的。一斤饺子40个。",
          "pinyin": "Hǎo de. Yì jīn jiǎozi sìshí gè.",
          "vietnamese": "Vâng ạ. Một cân bánh há cảo là 40 cái."
        },
        {
          "id": 4,
          "speaker": "刘明",
          "hanzi": "40个太多了，我要一半吧。",
          "pinyin": "Sìshí gè tài duō le, wǒ yào yíbàn ba.",
          "vietnamese": "40 cái nhiều quá, tôi lấy một nửa vậy."
        },
        {
          "id": 5,
          "speaker": "服务员",
          "hanzi": "半斤20个。您想喝什么？",
          "pinyin": "Bàn jīn èrshí gè. Nín xiǎng hē shénme?",
          "vietnamese": "Nửa cân là 20 cái ạ. Ngài muốn uống gì không ạ?"
        },
        {
          "id": 6,
          "speaker": "刘明",
          "hanzi": "请给我一杯茶吧。",
          "pinyin": "Qǐng gěi wǒ yì bēi chá ba.",
          "vietnamese": "Cho tôi một cốc trà nhé."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "一斤饺子有多少个？ (Một cân bánh há cảo có bao nhiêu cái?)",
          "options": ["20个", "30个", "40个", "50个"],
          "answer": 2,
          "explanation": "服务员 nói: “一斤饺子40个” (Một cân bánh há cảo là 40 cái)."
        },
        {
          "id": 2,
          "question": "Lưu Minh cuối cùng gọi bao nhiêu chiếc bánh há cảo?",
          "options": ["一斤 (1 cân / 40 cái)", "半斤 / 一半 (Nửa cân / 20 cái)", "两斤 (2 cân / 80 cái)", "不吃了 (Không ăn nữa)"],
          "answer": 1,
          "explanation": "刘明 nói: “40个太多了，我要一半吧” và phục vụ xác nhận: “半斤20个”."
        },
        {
          "id": 3,
          "question": "Trong bài 刘明: 请给我一杯(        )吧。",
          "options": ["牛奶 (Sữa tươi)", "茶 (Trà)", "咖啡 (Cà phê)", "水 (Nước)"],
          "answer": 1,
          "explanation": "刘明 trả lời: “请给我一杯茶吧” (Cho tôi một cốc trà nhé)."
        },
        {
          "id": 4,
          "question": "Từ “一半” (yíbàn) trong bài có nghĩa là gì?",
          "options": ["Một nửa", "Tất cả", "Một cân", "Gấp đôi"],
          "answer": 0,
          "explanation": "一半 (yíbàn) có nghĩa là một nửa."
        },
      ],
    },
  ],
},

{
  "id": 14,
  "title": "Bài học 14",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai14.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "白家月",
          "hanzi": "你们上火车后看见王老师了吗？",
          "pinyin": "Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?",
          "vietnamese": "Sau khi lên tàu hỏa các bạn có nhìn thấy cô Vương không?"
        },
        {
          "id": 2,
          "speaker": "陈天中",
          "hanzi": "没看见。中午车开后，有些人在看书，有些人睡觉了。",
          "pinyin": "Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kàn shū, yǒuxiē rén shuìjiào le.",
          "vietnamese": "Không thấy. Buổi trưa sau khi tàu chạy, có một số người đọc sách, có một số người đi ngủ."
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "你呢？",
          "pinyin": "Nǐ ne?",
          "vietnamese": "Còn bạn thì sao?"
        },
        {
          "id": 4,
          "speaker": "陈天中",
          "hanzi": "我看了一个电影。",
          "pinyin": "Wǒ kànle yí gè diànyǐng.",
          "vietnamese": "Tôi đã xem một bộ phim."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "陈天中上火车后看见王老师了吗？ (Trần Thiên Trung sau khi lên tàu hỏa có nhìn thấy cô Vương không?)",
          "options": ["看见了 (Đã nhìn thấy)", "没看见 (Không nhìn thấy)", "王一飞看到了 (Vương Nhất Phi thấy)", "不清楚 (Không rõ)"],
          "answer": 1,
          "explanation": "陈天中 trả lời: “没看见” (Không nhìn thấy)."
        },
        {
          "id": 2,
          "question": "中午车开后，大家在做什么？ (Sau khi xe chạy vào buổi trưa, mọi người làm gì?)",
          "options": ["都在睡觉 (Tất cả đều ngủ)", "都在看书 (Tất cả đều đọc sách)", "有些人看书，有些人睡觉 (Có người đọc sách, có người đi ngủ)", "都在看电影 (Tất cả đều xem phim)"],
          "answer": 2,
          "explanation": "陈天中 nói: “...有些人看书，有些人睡觉了” (...có người đọc sách, có người đi ngủ)."
        },
        {
          "id": 3,
          "question": "陈天中在火车上做了什么？ (Trần Thiên Trung đã làm gì trên tàu hỏa?)",
          "options": ["看书 (Đọc sách)", "睡觉 (Đi ngủ)", "看了一个电影 (Xem một bộ phim)", "找王老师 (Tìm cô Vương)"],
          "answer": 2,
          "explanation": "陈天中 trả lời: “我看了一个电影” (Tôi đã xem một bộ phim)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai14.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一飞",
          "hanzi": "你们会说汉语了，也会写汉字了吗？",
          "pinyin": "Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?",
          "vietnamese": "Các em đã biết nói tiếng Trung rồi, cũng đã biết viết chữ Hán chưa?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我们都会写了。",
          "pinyin": "Wǒmen dōu huì xiě le.",
          "vietnamese": "Chúng em đều biết viết rồi ạ."
        },
        {
          "id": 3,
          "speaker": "陈天中",
          "hanzi": "老师，我听不见。",
          "pinyin": "Lǎoshī, wǒ tīng bú jiàn.",
          "vietnamese": "Thưa cô, em không nghe thấy ạ."
        },
        {
          "id": 4,
          "speaker": "王一飞",
          "hanzi": "请大家不要说话！请听老师的问题：你们都会写哪些汉字了？",
          "pinyin": "Qǐng dàjiā búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?",
          "vietnamese": "Xin mọi người đừng nói chuyện nữa! Hãy nghe câu hỏi của cô: Các em đều đã biết viết những chữ Hán nào rồi?"
        },
        {
          "id": 5,
          "speaker": "陈天中",
          "hanzi": "我会写这些字了，您看！",
          "pinyin": "Wǒ huì xiě zhèxiē zì le, nín kàn!",
          "vietnamese": "Em đã biết viết những chữ này rồi, cô xem này!"
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "白家月会写汉字了吗？ (Bạch Gia Nguyệt đã biết viết chữ Hán chưa?)",
          "options": ["不会写 (Chưa biết viết)", "会写了 (Đã biết viết)", "只会说 (Chỉ biết nói)", "不清楚 (Không rõ)"],
          "answer": 1,
          "explanation": "白家月 trả lời: “我们都会写了” (Chúng em đều biết viết rồi)."
        },
        {
          "id": 2,
          "question": "陈天中对老师说了什么？ (Trần Thiên Trung nói gì với cô giáo?)",
          "options": ["老师，我不懂 (Thưa cô em không hiểu)", "老师，我听不见 (Thưa cô em nghe không thấy)", "老师，我不想写 (Thưa cô em không muốn viết)", "老师，我很累 (Thưa cô em rất mệt)"],
          "answer": 1,
          "explanation": "陈天中 nói: “老师，我听不见” (Thưa cô em không nghe thấy)."
        },
        {
          "id": 3,
          "question": "Trong bài: 王一飞: 请大家不(          )! 请听老师的问题：你们都会写哪些汉字了？",
          "options": ["不要说话 (Đừng nói chuyện)", "写汉字 (Viết chữ Hán)", "读课文 (Đọc bài khóa)", "回答问题 (Trả lời câu hỏi)"],
          "answer": 0,
          "explanation": "王一飞 nói: 请大家不要说话！请听老师的问题：你们都会写哪些汉字了？."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai14.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "刘明",
          "hanzi": "明年女儿上中学。",
          "pinyin": "Míngnián nǚ'ér shàng zhōngxué.",
          "vietnamese": "Năm sau con gái lên học trung học."
        },
        {
          "id": 2,
          "speaker": "王一雪",
          "hanzi": "对。儿子也上小学了。",
          "pinyin": "Duì. Érzi yě shàng xiǎoxué le.",
          "vietnamese": "Đúng vậy. Con trai cũng vào học tiểu học rồi."
        },
        {
          "id": 3,
          "speaker": "刘明",
          "hanzi": "我们家有了个中学生。",
          "pinyin": "Wǒmen jiā yǒu le gè zhōngxuéshēng.",
          "vietnamese": "Nhà mình đã có một học sinh trung học rồi."
        },
        {
          "id": 4,
          "speaker": "王一雪",
          "hanzi": "还有了个小学生。",
          "pinyin": "Hái yǒu le gè xiǎoxuéshēng.",
          "vietnamese": "Còn có thêm một học sinh tiểu học nữa."
        },
        {
          "id": 5,
          "speaker": "刘明",
          "hanzi": "上学后，他们都忙了。",
          "pinyin": "Shàngxué hòu, tāmen dōu máng le.",
          "vietnamese": "Sau khi đi học, chúng nó đều bận rộn rồi."
        },
        {
          "id": 6,
          "speaker": "王一雪",
          "hanzi": "是的。太晚了，睡觉吧。",
          "pinyin": "Shì de. Tài wǎn le, shuìjiào ba.",
          "vietnamese": "Đúng vậy. Muộn quá rồi, đi ngủ thôi."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "女儿明年上什么学？ (Con gái năm sau lên học cấp mấy?)",
          "options": ["小学 (Tiểu học)", "中学 (Trung học)", "大学 (Đại học)", "不上学 (Không đi học)"],
          "answer": 1,
          "explanation": "刘明 nói: “明年女儿上中学” (Năm sau con gái lên học trung học)."
        },
        {
          "id": 2,
          "question": "儿子上什么学了？ (Con trai đi học trường gì rồi?)",
          "options": ["幼儿园 (Mẫu giáo)", "小学 (Tiểu học)", "中学 (Trung học)", "大学 (Đại học)"],
          "answer": 1,
          "explanation": "王一雪 nói: “...儿子也上小学了” (...con trai cũng vào tiểu học rồi)."
        },
        {
          "id": 3,
          "question": "上学后，孩子们怎么样了？ (Sau khi đi học, các con thế nào?)",
          "options": ["都不忙 (Đều không bận)", "都忙了 (Đều bận rộn rồi)", "都生病了 (Đều bị ốm)", "都不想去 (Đều không muốn đi)"],
          "answer": 1,
          "explanation": "刘明 nói: “上学后，他们都忙了” (Sau khi đi học, chúng nó đều bận rộn hơn rồi)."
        },
      ],
    },
  ],
},

{
  "id": 15,
  "title": "Bài học 15",
  "passages": [
    {
      "id": 1,
      "title": "Bài khóa 1",
      "audio": "/audio/hsk1/bai15.1.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "你们爱吃哪个菜？",
          "pinyin": "Nǐmen ài chī nǎge cài?",
          "vietnamese": "Các bạn thích ăn món nào?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "我喜欢这个，也喜欢那个。",
          "pinyin": "Wǒ xǐhuan zhège, yě xǐhuan nàge.",
          "vietnamese": "Tôi thích món này, cũng thích món kia."
        },
        {
          "id": 3,
          "speaker": "陈天中",
          "hanzi": "这些菜都好吃，还很好看。",
          "pinyin": "Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.",
          "vietnamese": "Những món này đều ngon, lại còn rất đẹp mắt."
        },
        {
          "id": 4,
          "speaker": "李文",
          "hanzi": "我爱吃中国菜，也喜欢做。大家多吃点儿。",
          "pinyin": "Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.",
          "vietnamese": "Tôi thích ăn món Trung Quốc, cũng thích nấu nữa. Mọi người ăn nhiều một chút nhé."
        },
      ],
      "questions": [
        {
          "id": 1,
          "question": "Trong bài 陈天中:这些菜都好吃，(       )。",
          "options": ["不好吃 (Không ngon)", "不好看 (Không đẹp)", "还很好看 (còn rất đẹp mắt)", "太辣了 (Quá cay)"],
          "answer": 2,
          "explanation": "陈天中 nói: “这些菜都好吃，还很好看” (Những món này đều ngon, lại còn rất đẹp mắt)."
        },
        {
          "id": 2,
          "question": "Trong bài 李文: “我爱吃(        )，也喜欢做”",
          "options": ["法国菜 (Món Pháp)", "中国菜 (Món Trung Quốc)", "泰国菜 (Món Thái Lan)", "越南菜 (Món Việt Nam)"],
          "answer": 1,
          "explanation": "李文 nói: “我爱吃中国菜，也喜欢做” (Tôi thích ăn món Trung Quốc, cũng thích nấu)."
        },
        {
          "id": 3,
          "question": "Lý Văn bảo mọi người làm gì?",
          "options": ["多喝水 (Uống nhiều nước)", "多吃点儿 (Ăn nhiều một chút)", "少吃点儿 (Ăn ít một chút)", "快点吃 (Ăn nhanh lên)"],
          "answer": 1,
          "explanation": "李文 nói: “大家多吃点儿” (Mọi người ăn nhiều một chút nhé)."
        },
      ],
    },
    {
      "id": 2,
      "title": "Bài khóa 2",
      "audio": "/audio/hsk1/bai15.2.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "李文",
          "hanzi": "你们都想去哪儿？",
          "pinyin": "Nǐmen dōu xiǎng qù nǎr?",
          "vietnamese": "Các bạn đều muốn đi đâu?"
        },
        {
          "id": 2,
          "speaker": "安妮",
          "hanzi": "去年我和男朋友去了西安，今年我想去北京。",
          "pinyin": "Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.",
          "vietnamese": "Năm ngoái tôi và bạn trai đã đi Tây An, năm nay tôi muốn đi Bắc Kinh."
        },
        {
          "id": 3,
          "speaker": "白家月",
          "hanzi": "前几年去了西安，非常好玩儿。今年我也想去北京。",
          "pinyin": "Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.",
          "vietnamese": "Mấy năm trước tôi đã đi Tây An, rất là vui. Năm nay tôi cũng muốn đi Bắc Kinh."
        },
        {
          "id": 4,
          "speaker": "李文",
          "hanzi": "我和王老师都是北京人，北京非常漂亮。",
          "pinyin": "Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.",
          "vietnamese": "Tôi và cô Vương đều là người Bắc Kinh, Bắc Kinh cực kỳ đẹp."
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "Năm nay Annie và Bạch Gia Nguyệt đều muốn đi đâu?",
          "options": ["西安 (Tây An)", "北京 (Bắc Kinh)", "法国 (Nước Pháp)", "泰国 (Thái Lan)"],
          "answer": 1,
          "explanation": "Cả 安妮 và 白家月 đều nói: “今年我想去北京”."
        },
        {
          "id": 2,
          "question": "我和王老师都是(        )，北京非常漂亮",
          "options": ["西安人 (Người Tây An)", "广州人 (Người Quảng Châu)", "上海人 (Người Thượng Hải)", "北京人 (Người Bắc Kinh)"],
          "answer": 3,
          "explanation": "李文 nói: “我和王老师都是北京人...” (Tôi và cô Vương đều là người Bắc Kinh...)."
        },
      ],
    },
    {
      "id": 3,
      "title": "Bài khóa 3",
      "audio": "/audio/hsk1/bai15.3.mp3",
      "dialogues": [
        {
          "id": 1,
          "speaker": "王一飞",
          "hanzi": "你们的飞机到北京要几个小时？",
          "pinyin": "Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?",
          "vietnamese": "Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?"
        },
        {
          "id": 2,
          "speaker": "白家月",
          "hanzi": "九个小时。",
          "pinyin": "Jiǔ gè xiǎoshí.",
          "vietnamese": "9 tiếng ạ."
        },
        {
          "id": 3,
          "speaker": "王一飞",
          "hanzi": "我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。",
          "pinyin": "Wǒ jiārén dōu zài Běijīng, Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.",
          "vietnamese": "Người nhà cô đều ở Bắc Kinh, Chủ nhật chị gái cô cũng có thời gian, chị ấy có thể đi ra sân bay đón các em, các em cũng có thể ở nhà cô."
        },
        {
          "id": 4,
          "speaker": "安妮",
          "hanzi": "我们星期日早上八点到大兴机场，早不早？",
          "pinyin": "Wǒmen Xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?",
          "vietnamese": "Chúng em 8 giờ sáng Chủ nhật tới sân bay Đại Hưng, có sớm quá không ạ?"
        },
        {
          "id": 5,
          "speaker": "王一飞",
          "hanzi": "不早。",
          "pinyin": "Bù zǎo.",
          "vietnamese": "Không sớm đâu."
        },
        {
          "id": 6,
          "speaker": "白家月",
          "hanzi": "谢谢老师！那我们和您姐姐在大兴机场见！",
          "pinyin": "Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!",
          "vietnamese": "Cảm ơn cô ạ! Vậy thì chúng em và chị gái cô hẹn gặp nhau ở sân bay Đại Hưng nhé!"
        }
      ],
      "questions": [
        {
          "id": 1,
          "question": "Chuyến bay đến Bắc Kinh mất bao lâu?",
          "options": ["七个小时 (7 tiếng)", "八个小时 (8 tiếng)", "九个小时 (9 tiếng)", "十个小时 (10 tiếng)"],
          "answer": 2,
          "explanation": "白家月 trả lời: “九个小时” (9 tiếng ạ)."
        },
        {
          "id": 2,
          "question": "Ai có thể ra sân bay đón các bạn học sinh?",
          "options": ["王一飞老师 (Cô Vương Nhất Phi)", "王老师的姐姐 (Chị gái cô Vương)", "王老师的妈妈 (Mẹ cô Vương)", "李文 (Lý Văn)"],
          "answer": 1,
          "explanation": "王一飞 nói: “...星期天我姐姐也有时间，她可以去机场接你们...”."
        },
        
        {
          "id": 4,
          "question": "Cô Vương gợi ý các bạn học sinh có thể ở đâu khi đến Bắc Kinh?",
          "options": ["住饭店 (Ở khách sạn)", "住学校 (Ở trường học)", "住王老师家 (Ở nhà cô Vương)", "住机场 (Ở sân bay)"],
          "answer": 2,
          "explanation": "王一飞 nói: “...你们也可以住我家” (Các em cũng có thể ở nhà cô)."
        },
      ],
    },
  ],
},
];