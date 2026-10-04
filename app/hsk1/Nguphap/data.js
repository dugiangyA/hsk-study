export const grammar = {
1: {
    title: "是",
    pinyin: "shì",
    meaning: "là",
    explanation:
      "是 có nghĩa là “là”. Từ này thường được dùng để nối chủ ngữ với danh từ hoặc cụm danh từ, dùng để biểu thị hoặc xác định một người hoặc một vật. Dạng phủ định là 不是 (bú shì).",
    structure: "A + 是 + B",
    examples: [
      {
        chinese: "我是学生。",
        pinyin: "Wǒ shì xuésheng.",
        vietnamese: "Tôi là sinh viên.",
      },
      {
        chinese: "他是老师。",
        pinyin: "Tā shì lǎoshī.",
        vietnamese: "Anh ấy là giáo viên.",
      },
      {
        chinese: "她是中国人。",
        pinyin: "Tā shì Zhōngguó rén.",
        vietnamese: "Cô ấy là người Trung Quốc.",
      },
    ],
  },
2: {
  title: "的",
  pinyin: "de",
  meaning: "của",
  explanation:
    "的 là trợ từ kết cấu dùng để biểu thị quan hệ sở hữu hoặc nối thành phần bổ nghĩa (định ngữ) với danh từ trung tâm. Khi danh từ đứng sau là người thân hoặc mối quan hệ rất thân thiết, 的 có thể được lược bỏ.",
  structure: "Danh từ / Đại từ + 的 + Danh từ",
  examples: [
    {
      chinese: "这是我的书。",
      pinyin: "Zhè shì wǒ de shū.",
      vietnamese: "Đây là sách của tôi.",
    },
    {
      chinese: "她是我的老师。",
      pinyin: "Tā shì wǒ de lǎoshī.",
      vietnamese: "Cô ấy là giáo viên của tôi.",
    },
    {
      chinese: "这是爸爸的手机。",
      pinyin: "Zhè shì bàba de shǒujī.",
      vietnamese: "Đây là điện thoại của bố.",
    },
  ],
},
3: {
  title: "吗",
  pinyin: "ma",
  meaning: "không / phải không",
  explanation:
    "吗 là trợ từ nghi vấn được đặt ở cuối một câu trần thuật để biến câu đó thành câu hỏi trả lời Có hoặc Không?. Trật tự từ trong câu không thay đổi.",
  structure: "Câu trần thuật + 吗？",
  examples: [
    {
      chinese: "你是学生吗？",
      pinyin: "Nǐ shì xuésheng ma?",
      vietnamese: "Bạn có phải là sinh viên không?",
    },
    {
      chinese: "你好吗？",
      pinyin: "Nǐ hǎo ma?",
      vietnamese: "Bạn có khỏe không?",
    },
    {
      chinese: "他是中国人吗？",
      pinyin: "Tā shì Zhōngguó rén ma?",
      vietnamese: "Anh ấy là người Trung Quốc phải không?",
    },
  ],
},
4: {
  title: "有",
  pinyin: "yǒu",
  meaning: "có",
  explanation:
    "有 có nghĩa là “có”, dùng để biểu thị sự sở hữu (người hoặc vật) hoặc sự tồn tại. Dạng phủ định của 有 là 没有 (méiyǒu), tuyệt đối không dùng 不有 (bùyǒu).",
  structure: "Chủ ngữ + 有/没有 + Tân ngữ",
  examples: [
    {
      chinese: "我没有汉语书。",
      pinyin: "Wǒ méiyǒu Hànyǔ shū.",
      vietnamese: "Tôi không có sách tiếng Trung.",
    },
    {
      chinese: "他有一个哥哥。",
      pinyin: "Tā yǒu yí gè gēge.",
      vietnamese: "Anh ấy có một người anh trai.",
    },
    {
      chinese: "我家有五口人。",
      pinyin: "Wǒ jiā yǒu wǔ kǒu rén.",
      vietnamese: "Nhà tôi có năm người.",
    },
  ],
},
5: {
  title: "呢",
  pinyin: "ne",
  meaning: "nhỉ, đấy, còn... thì sao",
  explanation:
    "呢 là trợ từ ngữ khí thường đặt ở cuối câu. Dùng trong câu hỏi nghi vấn để hỏi lại đối phương hoặc tìm vật/người, và dùng ở cuối câu để nhấn mạnh hành động đang diễn ra, thường đi với 在(zài)/正在(zhèngzài) để làm ngữ điệu câu mềm mại hơn.",
  structure: "Danh từ / Đại từ + 呢？ hoặc Chủ ngữ + [在/正在] + Động từ + ... + 呢",
  examples: [
    {
      chinese: "我是老师，你呢？",
      pinyin: "Wǒ shì lǎoshī, nǐ ne?",
      vietnamese: "Tôi là giáo viên, còn bạn thì sao?",
    },
    {
      chinese: "我的书呢？",
      pinyin: "Wǒ de shū ne?",
      vietnamese: "Sách của tôi đâu rồi?",
    },
    {
      chinese: "他正在看书呢。",
      pinyin: "Tā zhèngzài kànshū ne.",
      vietnamese: "Anh ấy đang đọc sách đấy.",
    },
  ],
},
6: {
  title: "名词谓语句",
  pinyin: "míngcí wèiyǔ jù",
  meaning: "Câu vị ngữ danh từ",
  explanation:
    "Câu vị ngữ danh từ là loại câu có vị ngữ do danh từ, cụm danh từ hoặc cụm số-lượng từ trực tiếp đảm nhận mà không cần dùng động từ “是”. Cấu trúc này thường dùng trong các câu ngắn gọn biểu thị thời gian, ngày tháng, tuổi tác, thời tiết hoặc quê quán.",
  structure: "Chủ ngữ + Danh từ / Cụm số-lượng từ",
  examples: [
    {
      chinese: "今天星期一。",
      pinyin: "Jīntiān xīngqīyī.",
      vietnamese: "Hôm nay là thứ Hai.",
    },
    {
      chinese: "今年我二十岁。",
      pinyin: "Jīnnián wǒ èrshí suì.",
      vietnamese: "Năm nay tôi 20 tuổi.",
    },
    {
      chinese: "今天九月一号。",
      pinyin: "Jīntiān jiǔ yuè yī hào.",
      vietnamese: "Hôm nay là ngày 1 tháng 9.",
    },
  ],
},
7: {
  title: "想",
  pinyin: "xiǎng",
  meaning: "muốn, nhớ, nghĩ",
  explanation:
    "想 là động từ năng nguyện dùng trước động từ để biểu thị mong muốn, ý định làm việc gì đó. Dạng phủ định là 不想 (bù xiǎng). Ngoài ra, 想 còn có thể đóng vai trò là động từ thường với nghĩa là “nhớ” (người/vật) hoặc “suy nghĩ”.",
  structure: "Chủ ngữ + 想/不想 + Động từ + Tân ngữ",
  examples: [
    {
      chinese: "我想喝茶。",
      pinyin: "Wǒ xiǎng hē chá.",
      vietnamese: "Tôi muốn uống trà.",
    },
    {
      chinese: "你明天想去哪儿？",
      pinyin: "Nǐ míngtiān xiǎng qù nǎr?",
      vietnamese: "Ngày mai bạn muốn đi đâu?",
    },
    {
      chinese: "我很想妈妈。",
      pinyin: "Wǒ hěn xiǎng māma.",
      vietnamese: "Tôi rất nhớ mẹ.",
    },
  ],
},
8: {
  title: "会",
  pinyin: "huì",
  meaning: "biết, sẽ",
  explanation:
    "会 là động từ năng nguyện dùng trước động từ, biểu thị kỹ năng hay khả năng có được thông qua học hỏi và rèn luyện (biết làm gì đó). Dạng phủ định là 不会 (bú huì). Ngoài ra, 会 còn được dùng để biểu thị một sự việc có khả năng cao sẽ xảy ra trong tương lai (sẽ).",
  structure: "Chủ ngữ + [不会] + 会 + Động từ + Tân ngữ",
  examples: [
    {
      chinese: "我会说汉语。",
      pinyin: "Wǒ huì shuō Hànyǔ.",
      vietnamese: "Tôi biết nói tiếng Trung.",
    },
    {
      chinese: "你不会游泳吗？",
      pinyin: "Nǐ bú huì yóuyǒng ma?",
      vietnamese: "Bạn không biết bơi sao?",
    },
    {
      chinese: "明天不会下雨。",
      pinyin: "Míngtiān bú huì xià yǔ.",
      vietnamese: "Ngày mai sẽ không mưa đâu.",
    },
  ],
},
9: {
  title: "吧",
  pinyin: "ba",
  meaning: "nhé, đi, thôi, chắc...",
  explanation:
    "吧 là trợ từ ngữ khí thường đứng ở cuối câu. Dùng để biểu thị sự đề nghị, rủ rê, thương lượng hoặc khuyên bảo (nhé, đi, thôi), giúp giọng điệu trở nên nhẹ nhàng, lịch sự hơn. Ngoài ra, 吧 còn dùng ở cuối câu hỏi để biểu thị sự suy đoán, ước đoán chưa hoàn toàn chắc chắn (chắc là, phải không).",
  structure: "Mệnh đề / Câu + 吧",
  examples: [
    {
      chinese: "我们走吧。",
      pinyin: "Wǒmen zǒu ba.",
      vietnamese: "Chúng ta đi thôi.",
    },
    {
      chinese: "请喝茶吧。",
      pinyin: "Qǐng hē chá ba.",
      vietnamese: "Mời uống trà nhé.",
    },
    {
      chinese: "你是老师吧？",
      pinyin: "Nǐ shì lǎoshī ba?",
      vietnamese: "Bạn là giáo viên đúng không / chắc?",
    },
  ],
},
}