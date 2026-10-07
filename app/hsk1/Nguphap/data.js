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
  structure: "Chủ ngữ + 不会/会 + Động từ + Tân ngữ",
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
10: {
  title: "连动句",
  pinyin: "liándòng jù",
  meaning: "Câu liên động",
  explanation:
    "Câu liên động là loại câu có từ hai động từ (hoặc cụm động từ) trở lên làm vị ngữ và do cùng một chủ ngữ thực hiện. Các hành động thường xảy ra theo thứ tự thời gian. Động từ thứ hai thường biểu thị mục đích của hành động thứ nhất, hoặc động từ thứ nhất biểu thị phương thức, phương tiện để thực hiện hành động thứ hai.",
  structure: "Chủ ngữ + Động từ 1 + Tân ngữ 1 + Động từ 2 + Tân ngữ 2",
  examples: [
    {
      chinese: "我去中国学汉语。",
      pinyin: "Wǒ qù Zhōngguó xué Hànyǔ.",
      vietnamese: "Tôi đi Trung Quốc học tiếng Trung.",
    },
    {
      chinese: "我们坐飞机去北京。",
      pinyin: "Wǒmen zuò fēijī qù Běijīng.",
      vietnamese: "Chúng tôi đi Bắc Kinh bằng máy bay.",
    },
    {
      chinese: "他去饭店吃饭。",
      pinyin: "Tā qù fàndiàn chīfàn.",
      vietnamese: "Anh ấy đến nhà hàng ăn cơm.",
    },
  ],
},
11: {
  title: "怎么",
  pinyin: "zěnme",
  meaning: "như thế nào, làm sao, sao",
  explanation:
    "怎么 là đại từ nghi vấn thường đứng trước động từ để hỏi về phương thức, cách thức thực hiện hành động (làm bằng cách nào/như thế nào). Ngoài ra, 怎么 còn dùng để hỏi nguyên nhân hoặc biểu thị sự ngạc nhiên.",
  structure: "Chủ ngữ + 怎么 + Động từ + Tân ngữ?",
  examples: [
    {
      chinese: "这个汉字怎么写？",
      pinyin: "Zhège Hànzì zěnme xiě?",
      vietnamese: "Chữ Hán này viết như thế nào?",
    },
    {
      chinese: "你怎么去学校？",
      pinyin: "Nǐ zěnme qù xuéxiào?",
      vietnamese: "Bạn đến trường bằng cách nào / đi bằng gì?",
    },
    {
      chinese: "你怎么了？",
      pinyin: "Nǐ zěnme le?",
      vietnamese: "Bạn làm sao thế / có chuyện gì vậy?",
    },
  ],
},
12: {
  title: "能",
  pinyin: "néng",
  meaning: "có thể",
  explanation:
    "能 là động từ năng nguyện đứng trước động từ, dùng để biểu thị năng lực thể chất, khả năng thực hiện một hành động hoặc sự cho phép của hoàn cảnh/điều kiện khách quan. Dạng phủ định là 不能 (bù néng - không thể / không được phép). Khác với 会 (biết nhờ qua học tập), 能 nhấn mạnh vào điều kiện hoặc sức khỏe có cho phép hay không.",
  structure: "Chủ ngữ + 不能/能 + Động từ + Tân ngữ",
  examples: [
    {
      chinese: "我今天能去学校。",
      pinyin: "Wǒ jīntiān néng qù xuéxiào.",
      vietnamese: "Hôm nay tôi có thể đến trường.",
    },
    {
      chinese: "这里不能抽烟。",
      pinyin: "Zhèlǐ bù néng chōuyān.",
      vietnamese: "Ở đây không được phép hút thuốc.",
    },
    {
      chinese: "你能喝几杯啤酒？",
      pinyin: "Nǐ néng hē jǐ bēi píjiǔ?",
      vietnamese: "Bạn có thể uống mấy cốc bia?",
    },
  ],
},
13: {
  title: "在",
  pinyin: "zài",
  meaning: "ở, tại, đang",
  explanation:
    "在 có thể làm động từ biểu thị sự tồn tại ở một địa điểm (ở/tại). Khi đứng trước địa điểm và kết hợp với động từ phía sau, 在 đóng vai trò làm giới từ chỉ vị trí diễn ra hành động (làm gì ở đâu). Ngoài ra, 在 còn có thể làm phó từ đứng trực tiếp trước động từ để biểu thị hành động đang diễn ra (đang).",
  structure: "Chủ ngữ + 在 + Địa điểm hoặc Chủ ngữ + 在 + Động từ",
  examples: [
    {
      chinese: "我在家。",
      pinyin: "Wǒ zài jiā.",
      vietnamese: "Tôi ở nhà.",
    },
    {
      chinese: "他在图书馆看书。",
      pinyin: "Tā zài túshūguǎn kànshū.",
      vietnamese: "Anh ấy đọc sách ở thư viện.",
    },
    {
      chinese: "妈妈在做饭。",
      pinyin: "Māma zài zuò fàn.",
      vietnamese: "Mẹ đang nấu cơm.",
    },
  ],
},
15: {
  title: "存现句",
  pinyin: "cúnxiàn jù",
  meaning: "Câu tồn hiện",
  explanation:
    "Câu tồn hiện dùng để biểu thị sự tồn tại của người hoặc vật ở một địa điểm nhất định. Hai động từ phổ biến nhất trong loại câu này là 有 và 是. Trong câu phủ định, tân ngữ không dùng số lượng cụ thể (số từ + lượng từ) mà chỉ giữ lại danh từ",
  structure: "Từ chỉ địa điểm + 有/是 + Tân ngữ (Danh từ)",
  examples: [
    {
      chinese: "桌子上有一本书。",
      pinyin: "Zhuōzi shang yǒu yì běn shū.",
      vietnamese: "Trên bàn có một quyển sách.",
    },
    {
      chinese: "我家对面是学校。",
      pinyin: "Wǒ jiā duìmiàn shì xuéxiào.",
      vietnamese: "Đối diện nhà tôi là trường học.",
    },
    {
      chinese: "房间里是什么？",
      pinyin: "Fángjiān li shì shénme?",
      vietnamese: "Trong phòng là cái gì thế?",
    },
  ],
},
16: {
  title: "第",
  pinyin: "dì",
  meaning: "thứ (chỉ số thứ tự)",
  explanation:
    "第 là tiền tố đứng trước số từ (thường kết hợp với lượng từ hoặc danh từ ở phía sau) để tạo thành số thứ tự, biểu thị thứ bậc hoặc trình tự (ví dụ: thứ nhất, thứ hai, lần đầu, bài 1...).",
  structure: "第 + Số từ + Lượng từ + Danh từ",
  examples: [
    {
      chinese: "这是我第一次来中国。",
      pinyin: "Zhè shì wǒ dì yī cì lái Zhōngguó.",
      vietnamese: "Đây là lần đầu tiên tôi đến Trung Quốc.",
    },
    {
      chinese: "今天我们学习第二课。",
      pinyin: "Jīntiān wǒmen xuéxí dì èr kè.",
      vietnamese: "Hôm nay chúng ta học bài thứ 2.",
    },
    {
      chinese: "第三个苹果是红色的。",
      pinyin: "Dì sān gè píngguǒ shì hóngsè de.",
      vietnamese: "Quả táo thứ ba có màu đỏ.",
    },
  ],
},
17: {
  title: "形容词谓语句",
  pinyin: "xíngróngcí wèiyǔ jù",
  meaning: "Câu vị ngữ tính từ",
  explanation:
    "Câu vị ngữ tính từ là loại câu có tính từ trực tiếp làm vị ngữ để miêu tả đặc điểm, tính chất hoặc trạng thái của chủ ngữ. Trong câu khẳng định đơn giản, trước tính từ thường có phó từ chỉ mức độ như 很 (chủ yếu mang tính cân bằng câu chứ không mang nghĩa mạnh là “rất”). Dạng phủ định dùng 不 đứng trước tính từ.",
  structure: "Chủ ngữ + [不/很/非常...] + Tính từ",
  examples: [
    {
      chinese: "今天天气很好。",
      pinyin: "Jīntiān tiānqì hěn hǎo.",
      vietnamese: "Thời tiết hôm nay rất tốt.",
    },
    {
      chinese: "汉语不太难。",
      pinyin: "Hànyǔ bú tài nán.",
      vietnamese: "Tiếng Trung không khó lắm.",
    },
    {
      chinese: "这个苹果很大。",
      pinyin: "Zhège píngguǒ hěn dà.",
      vietnamese: "Quả táo này rất to.",
    },
  ],
},
18: {
  title: "怎么样",
  pinyin: "zěnmeyàng",
  meaning: "thế nào?, ra sao?, như thế nào?",
  explanation:
    "怎么样 là đại từ nghi vấn thường đứng ở cuối câu. Dùng để hỏi về tính chất, tình trạng, đặc điểm của người hoặc vật (như thế nào/ra sao), hoặc dùng ở cuối câu rủ rê, đề nghị để trưng cầu ý kiến của đối phương (thấy thế nào/được không).",
  structure: "Chủ ngữ + 怎么样？ hoặc Mệnh đề / Khẩu lệnh + 怎么样？",
  examples: [
    {
      chinese: "今天天气怎么样？",
      pinyin: "Jīntiān tiānqì zěnmeyàng?",
      vietnamese: "Thời tiết hôm nay thế nào?",
    },
    {
      chinese: "这件衣服怎么样？",
      pinyin: "Zhè jiàn yīfu zěnmeyàng?",
      vietnamese: "Chiếc áo này thế nào?",
    },
    {
      chinese: "晚上我们去吃中国菜，怎么样？",
      pinyin: "Wǎnshang wǒmen qù chī Zhōngguó cài, zěnmeyàng?",
      vietnamese: "Tối nay chúng ta đi ăn món Trung Quốc, thấy sao?",
    },
  ],
},
19: {
  title: "副词、时间词语作状语的位置",
  pinyin: "fùcí, shíjiān cíyǔ zuò zhuàngyǔ de wèizhì",
  meaning: "Vị trí của phó từ và từ chỉ thời gian làm trạng ngữ",
  explanation:
    "Trong tiếng Trung, khi phó từ và các từ/cụm từ chỉ thời gian đóng vai trò làm trạng ngữ, chúng thường phải đứng trước động từ hoặc tính từ.",
  structure: "Chủ ngữ + Từ chỉ thời gian / Phó từ + Động từ / Tính từ",
  examples: [
    {
      chinese: "我明天去北京。",
      pinyin: "Wǒ míngtiān qù Běijīng.",
      vietnamese: "Ngày mai tôi đi Bắc Kinh.",
    },
    {
      chinese: "我们都很好。",
      pinyin: "Wǒmen dōu hěn hǎo.",
      vietnamese: "Chúng tôi đều rất tốt.",
    },
    {
      chinese: "妈妈早上七点做饭。",
      pinyin: "Māma zǎoshang qī diǎn zuò fàn.",
      vietnamese: "Mẹ nấu cơm lúc 7 giờ sáng.",
    },
  ],
},
20: {
  title: "正反疑问句",
  pinyin: "zhèngfǎn yíwènjù",
  meaning: "Câu hỏi chính phản",
  explanation:
    "Câu hỏi chính phản là loại câu hỏi được tạo thành bằng cách ghép hình thức khẳng định và phủ định của động từ hoặc tính từ lại với nhau (A 不 A / A 没 A). Dùng để xác nhận thông tin với người nghe và tuyệt đối không dùng trợ từ nghi vấn “吗” ở cuối câu.",
  structure: "Chủ ngữ + Động từ / Tính từ + 不/没 + Động từ / Tính từ + Tân ngữ?",
  examples: [
    {
      chinese: "你去不去北京？",
      pinyin: "Nǐ qù bú qù Běijīng?",
      vietnamese: "Bạn có đi Bắc Kinh không?",
    },
    {
      chinese: "这件衣服贵不贵？",
      pinyin: "Zhè jiàn yīfu guì bú guì?",
      vietnamese: "Chiếc áo này có đắt không?",
    },
    {
      chinese: "你有没有汉语词典？",
      pinyin: "Nǐ yǒu méi yǒu Hànyǔ cídiǎn?",
      vietnamese: "Bạn có từ điển tiếng Trung không?",
    },
  ],
},
21: {
  title: "要",
  pinyin: "yào",
  meaning: "muốn, cần, phải, sắp",
  explanation:
    "要 là động từ năng nguyện (hoặc động từ) có nhiều cách dùng phổ biến: (1) Biểu thị ý muốn, nhu cầu mạnh mẽ (muốn, cần - mang tính quyết tâm hơn 想); (2) Biểu thị sự bắt buộc, cần thiết phải làm gì (phải); (3) Biểu thị một hành động hoặc sự việc sắp xảy ra trong tương lai gần (sắp... rồi, thường đi kèm với 要...了 hoặc 快要...了). Lưu ý: Phủ định của ý muốn/nhu cầu thường dùng 不想 (không muốn) hoặc 不用 (không cần), còn 不要 thường mang nghĩa cấm đoán (đừng).",
  structure: "Chủ ngữ + 要 + Động từ + Tân ngữ hoặc Chủ ngữ + 要 + Danh từ",
  examples: [
    {
      chinese: "我要买这个苹果。",
      pinyin: "Wǒ yào mǎi zhège píngguǒ.",
      vietnamese: "Tôi cần mua quả táo này.",
    },
    {
      chinese: "明天有考试，你要好好复习。",
      pinyin: "Míngtiān yǒu kǎoshì, nǐ yào hǎohǎo fùxí.",
      vietnamese: "Ngày mai có bài kiểm tra, bạn phải ôn tập cho tốt.",
    },
    {
      chinese: "要下雨了，快回家吧。",
      pinyin: "Yào xià yǔ le, kuài huí jiā ba.",
      vietnamese: "Trời sắp mưa rồi, mau về nhà thôi.",
    },
  ],
},
22: {
  title: "在、正在",
  pinyin: "zài, zhèngzài",
  meaning: "đang (biểu thị hành động đang diễn ra)",
  explanation:
    "Phó từ 在 và 正在 đứng trước động từ để biểu thị hành động đang trong quá trình tiến hành tại một thời điểm nhất định. Trong đó, 正在 nhấn mạnh vào đúng thời điểm hành động xảy ra, còn 在 nhấn mạnh vào trạng thái của hành động.",
  structure: "Chủ ngữ + 在/正在 + Động từ + Tân ngữ.",
  examples: [
    {
      chinese: "他正在看书呢。",
      pinyin: "Tā zhèngzài kànshū ne.",
      vietnamese: "Anh ấy đang đọc sách.",
    },
    {
      chinese: "老师在讲课。",
      pinyin: "Lǎoshī zài jiǎngkè.",
      vietnamese: "Thầy giáo đang giảng bài.",
    },
    {
      chinese: "我们正在做饭。",
      pinyin: "Wǒmen zhèngzài zuò fàn.",
      vietnamese: "Chúng tôi đang nấu cơm.",
    },
  ],
},
23: {
  title: "非主谓句",
  pinyin: "fēi zhǔwèi jù",
  meaning: "Câu không có chủ-vị",
  explanation:
    "Câu không có chủ-vị là loại câu không cấu tạo theo mô hình 'Chủ ngữ - Vị ngữ' thông thường, mà do một từ hoặc một cụm từ (động từ, tính từ, danh từ) đứng độc lập tạo thành một câu hoàn chỉnh. Loại câu này thường dùng để miêu tả hiện tượng tự nhiên/thời tiết, bộc lộ cảm xúc, chào hỏi hoặc phát ra khẩu lệnh/thông báo trong giao tiếp.",
  structure: "Từ / Cụm từ (Động từ / Tính từ / Danh từ) + (Trợ từ ngữ khí / Dấu câu)",
  examples: [
    {
      chinese: "下雨了。",
      pinyin: "Xià yǔ le.",
      vietnamese: "Mưa rồi.",
    },
    {
      chinese: "太好了！",
      pinyin: "Tài hǎo le!",
      vietnamese: "Tốt quá rồi!",
    },
    {
      chinese: "上课了！",
      pinyin: "Shàngkè le!",
      vietnamese: "Vào học rồi / Đến giờ học rồi!",
    },
  ],
},
24: {
  title: "了",
  pinyin: "le",
  meaning: "đã, rồi (trợ từ động thái / trợ từ ngữ khí)",
  explanation:
    "Trợ từ “了” có hai cách dùng cơ bản: (1) Đứng sau động từ (trợ từ động thái) để biểu thị hành động đã hoàn thành; (2) Đứng ở cuối câu (trợ từ ngữ khí) để biểu thị sự thay đổi trạng thái hoặc một tình huống mới xuất hiện (đã... rồi). Dạng phủ định của hành động hoàn thành dùng 没 + Động từ (và bỏ “了”).",
  structure: "Chủ ngữ + Động từ + 了 + Tân ngữ  hoặc  Chủ ngữ + Động từ / Tính từ + ... + 了",
  examples: [
    {
      chinese: "我买了一本书。",
      pinyin: "Wǒ mǎi le yì běn shū.",
      vietnamese: "Tôi đã mua một quyển sách.",
    },
    {
      chinese: "他去医院了。",
      pinyin: "Tā qù yīyuàn le.",
      vietnamese: "Anh ấy đi bệnh viện rồi.",
    },
    {
      chinese: "天气变冷了。",
      pinyin: "Tiānqì biàn lěng le.",
      vietnamese: "Thời tiết trở lạnh rồi.",
    },
  ],
},
25: {
  title: "太……了",
  pinyin: "tài ... le",
  meaning: "quá ... rồi, ... quá",
  explanation:
    "Cấu trúc “太...了” dùng để biểu thị trình độ, mức độ cao (mang tính cảm thán), thường dùng để khen ngợi, bộc lộ cảm xúc tích cực hoặc phàn nàn về một tình huống nào đó. Giữa “太” và “了” thường là tính từ hoặc động từ chỉ trạng thái tâm lý (như 喜欢, 想...). Dạng phủ định tương ứng là “不太” + Tính từ/Động từ (không... lắm) và không đi kèm với “了”.",
  structure: "太 + Tính từ / Động từ tâm lý + 了",
  examples: [
    {
      chinese: "太好了！",
      pinyin: "Tài hǎo le!",
      vietnamese: "Tốt quá rồi! / Tuyệt quá!",
    },
    {
      chinese: "这个苹果太大了！",
      pinyin: "Zhège píngguǒ tài dà le!",
      vietnamese: "Quả táo này to quá!",
    },
    {
      chinese: "我太喜欢吃中国菜了。",
      pinyin: "Wǒ tài xǐhuan chī Zhōngguó cài le.",
      vietnamese: "Tôi cực kỳ thích ăn món Trung Quốc.",
    },
  ],
},
26: {
  title: "可以",
  pinyin: "kěyǐ",
  meaning: "có thể, được (phép)",
  explanation:
    "可以 là động từ năng nguyện đứng trước động từ, dùng để: (1) Biểu thị sự cho phép hoặc thỉnh cầu xin phép làm gì đó (có thể / được phép); (2) Biểu thị khả năng, điều kiện cho phép thực hiện hành động; (3) Đưa ra lời gợi ý, đề xuất (có thể thử...). Dạng phủ định dùng 不可以 (không được phép) để biểu thị sự cấm đoán hoặc không đồng ý.",
  structure: "Chủ ngữ + 可以 + Động từ + Tân ngữ",
  examples: [
    {
      chinese: "我可以进来吗？",
      pinyin: "Wǒ kěyǐ jìnlái ma?",
      vietnamese: "Tôi có thể vào không?",
    },
    {
      chinese: "你可以在这里坐下。",
      pinyin: "Nǐ kěyǐ zài zhèlǐ zuòxià.",
      vietnamese: "Bạn có thể ngồi ở đây.",
    },
    {
      chinese: "这里不可以拍照。",
      pinyin: "Zhèlǐ bù kěyǐ pāizhào.",
      vietnamese: "Ở đây không được chụp ảnh.",
    },
  ],
},
27: {
  title: "动词 + 一下",
  pinyin: "dòngcí + yíxià",
  meaning: "làm một chút, một lát, thử...",
  explanation:
    "“一下” đứng sau động từ để biểu thị hành động diễn ra trong thời gian ngắn, mang tính chất thử nghiệm, hoặc làm cho câu nói có sắc thái nhẹ nhàng, lịch sự và thân mật hơn.",
  structure: "Động từ + 一下 + Tân ngữ",
  examples: [
    {
      chinese: "请你看一下。",
      pinyin: "Qǐng nǐ kàn yíxià.",
      vietnamese: "Xin mời bạn xem một chút.",
    },
    {
      chinese: "我想试一下这件衣服。",
      pinyin: "Wǒ xiǎng shì yíxià zhè jiàn yīfu.",
      vietnamese: "Tôi muốn thử chiếc áo này một chút.",
    },
    {
      chinese: "请等一下，他马上来。",
      pinyin: "Qǐng děng yíxià, tā mǎshàng lái.",
      vietnamese: "Xin đợi một chút, anh ấy tới ngay đây.",
    },
  ],
},
28: {
  title: "双宾语句",
  pinyin: "shuāng bīnyǔ jù ",
  meaning: "Câu hai tân ngữ",
  explanation:
    "Câu hai tân ngữ là câu có động từ mang hai tân ngữ đi kèm. Trong đó, tân ngữ thứ nhất đứng ngay sau động từ thường chỉ người (tân ngữ gián tiếp), còn tân ngữ thứ hai đứng phía sau chỉ vật (tân ngữ trực tiếp). Bài này tập trung vào dạng câu hai tân ngữ do động từ “给” (cho, đưa) và “问” (hỏi) tạo thành.",
  structure: "Chủ ngữ + Động từ (给/问) + Tân ngữ 1 (Người) + Tân ngữ 2 (Vật)",
  examples: [
    {
      chinese: "请给我一杯牛奶。",
      pinyin: "Qǐng gěi wǒ yì bēi niúnǎi.",
      vietnamese: "Xin hãy cho tôi một cốc sữa.",
    },
    {
      chinese: "白家月给安妮一个苹果。",
      pinyin: "Bái Jiāyuè gěi Ānnī yí gè píngguǒ.",
      vietnamese: "Bạch Gia Nguyệt cho Annie một quả táo.",
    },
    {
      chinese: "我问老师两个问题。",
      pinyin: "Wǒ wèn lǎoshī liǎng gè wèntí.",
      vietnamese: "Tôi hỏi cô giáo hai câu hỏi.",
    },
  ],
},
29: {
  title: "离合词",
  pinyin: "líhécí",
  meaning: "Động từ ly hợp",
  explanation:
    "Động từ ly hợp (như 睡觉, 唱歌, 跳舞, 见面, 帮忙...) là các từ kết hợp theo cấu trúc “Động từ + Tân ngữ” . Đặc điểm quan trọng nhất: KHÔNG ĐƯỢC mang thêm tân ngữ trực tiếp ở phía sau (không nói *见面他, *帮忙我). Khi muốn bổ sung thông tin (như thời gian, số lượng, trợ từ “了/过/着”) hoặc tân ngữ chỉ đối tượng, phải chèn thành phần đó vào GIỮA động từ và tân ngữ của nó, hoặc kết hợp với cấu trúc giới từ.",
  structure:
    "Động từ + 了 / 过 / Số lượng từ / Thời lượng + Tân ngữ nội tại  hoặc  跟 / 对 / 帮 + Đối tượng] + Động từ ly hợp",
  examples: [
    {
      chinese: "昨晚我睡了八个小时觉。",
      pinyin: "Zuówǎn wǒ shuì le bā gè xiǎoshí jiào.",
      vietnamese: "Tối qua tôi đã ngủ 8 tiếng.",
    },
    {
      chinese: "明天我想跟你见面。",
      pinyin: "Míngtiān wǒ xiǎng gēn nǐ jiànmiàn.",
      vietnamese: "Ngày mai tôi muốn gặp bạn.",
    },
    {
      chinese: "她常一边洗澡一边唱歌。",
      pinyin: "Tā cháng yìbiān xǐzǎo yìbiān chànggē.",
      vietnamese: "Cô ấy thường vừa tắm vừa hát.",
    },
  ],
},
30: {
  title: "都",
  pinyin: "dōu",
  meaning: "đều, đã",
  explanation:
    "Phó từ “都” đứng trước động từ hoặc tính từ để biểu thị tổng quát, nhấn mạnh tất cả các đối tượng được đề cập ở phía trước (“đều”). Chủ ngữ hoặc thành phần đứng trước “都” thường là danh từ/đại từ số nhiều hoặc danh từ đại diện cho tập hợp. Ngoài ra, “都” còn dùng trong cấu trúc “都……了” để biểu thị thời gian đã muộn hoặc sự việc đã hoàn thành/đạt tới một mức độ nào đó (“đã... rồi”).",
  structure:
    "Chủ ngữ (số nhiều) + 都 + [Động từ / Tính từ]  hoặc  都 + [Thời gian / Số lượng] + 了",
  examples: [
    {
      chinese: "我们都会写了。",
      pinyin: "Wǒmen dōu huì xiě le.",
      vietnamese: "Chúng tôi đều biết viết rồi.",
    },
    {
      chinese: "我和我的朋友们都去。",
      pinyin: "Wǒ hé wǒ de péngyoumen dōu qù.",
      vietnamese: "Tôi và các bạn của tôi đều đi.",
    },
    {
      chinese: "同学们都没听见。",
      pinyin: "Tóngxuémen dōu méi tīngjiàn.",
      vietnamese: "Các bạn học đều không nghe thấy.",
    },
  ],
},
31: {
  title: "并列复句（...，还/也...)",
  pinyin: "bìngliè fùjù (..., hái / yě ...)",
  meaning: "Câu phức đẳng lập với “...，还/也...” (cũng... / còn...)",
  explanation:
    "Câu phức đẳng lập bao gồm hai hoặc nhiều phân câu có liên quan về mặt logic và bình đẳng (song song) về mặt cấu trúc. Trong đó, phó từ “也” (cũng) được dùng để biểu thị sự tương đồng về tính chất hoặc hành động giữa các vế, còn phó từ “还” (còn) được dùng để bổ sung thêm thông tin cho phân câu trước.",
  structure: "Câu 1 + 还/也 + câu 2",
  examples: [
    {
      chinese: "我喜欢这个，也喜欢那个。",
      pinyin: "Wǒ xǐhuan zhège, yě xǐhuan nàge.",
      vietnamese: "Tôi thích cái này, cũng thích cái kia.",
    },
    {
      chinese: "王老师是北京人，李文也是北京人。",
      pinyin: "Wáng lǎoshī shì Běijīng rén, Lǐ Wén yě shì Běijīng rén.",
      vietnamese: "Thầy Vương là người Bắc Kinh, Lý Văn cũng là người Bắc Kinh.",
    },
    {
      chinese: "我喜欢喝中国茶，还喜欢吃中国菜。",
      pinyin: "Wǒ xǐhuan hē Zhōngguó chá, hái xǐhuan chī Zhōngguó cài.",
      vietnamese: "Tôi thích uống trà Trung Quốc, còn thích ăn món Trung Quốc.",
    },
  ],
},
}