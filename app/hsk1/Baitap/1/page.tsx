"use client";

import Link from "next/link";
import { useState } from "react";

const initials = [
  "b","p","m","f",
  "d","t","n","l",
  "g","k","h",
];

const finals = [
 "óng", "ěi", "ān", "ù", "ǎo", "à", "áng", "ōu", "ěng", "án", "ěn", "ǐ", "è", "ó", "ǎi"
];

const tones = [" ˉ Thanh 1", " ˊ Thanh 2", " ˇ Thanh 3", " ˋ Thanh 4"];

const initialQuestions = [
  { final: "à", answer: "d" },
  { final: "ěi", answer: "g" },
  { final: "án", answer: "p" },
  { final: "ù", answer: "b" },
  { final: "ǎi", answer: "m" },
  { final: "ěng", answer: "l" },
  { final: "ó", answer: "f" },
  { final: "ǎo", answer: "h" },
  { final: "óng", answer: "t" },
  { final: "ěn", answer: "h" },
  { final: "ān", answer: "b" },
  { final: "ōu", answer: "d" },
  { final: "è", answer: "k" },
  { final: "ǐ", answer: "n" },
  { final: "áng", answer: "m" }
];

const finalQuestions = [
  { initial: "t", answer: "ā" },
  { initial: "h", answer: "ěn" },
  { initial: "m", answer: "āo" },
  { initial: "d", answer: "ì" },
  { initial: "f", answer: "áng" },
  { initial: "d", answer: "ōng" },
  { initial: "h", answer: "àn" },
  { initial: "g", answer: "ǒu" },
  { initial: "p", answer: "áng" },
  { initial: "g", answer: "ē" },
  { initial: "k", answer: "āi" },
  { initial: "f", answer: "ēi" },
  { initial: "n", answer: "ù" },
  { initial: "l", answer: "ěng" },
  { initial: "b", answer: "ō" }
];

const toneQuestions = [
  { syllable: "lao", answer: 3 },
  { syllable: "neng", answer: 2 },
  { syllable: "ge", answer: 4 },
  { syllable: "ba", answer: 1 },
  { syllable: "fen", answer: 1 },
  { syllable: "kan", answer: 4 },
  { syllable: "bai", answer: 2 },
  { syllable: "li", answer: 3 },
  { syllable: "gong", answer: 1 },
  { syllable: "mang", answer: 2 },
  { syllable: "gou", answer: 3 },
  { syllable: "hou", answer: 4 }
];

function SectionTitle({
  number,
  chinese,
  english,
}: {
  number: string;
  chinese: string;
  english: string;
}) {
  return (
    <div className="mb-7">
      <div className="inline-flex items-center gap-3 rounded-2xl bg-[#F9E547] px-5 py-3 shadow-sm">
        <span className="text-xl font-black text-[#594900]">{number}</span>

        <span className="text-lg font-bold text-[#594900]">
          {chinese}
        </span>

        <span className="border-l border-[#BFA900]/30 pl-3 text-sm font-bold text-[#746200]">
          {english}
        </span>
      </div>
    </div>
  );
}

function ExerciseHeader({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E5C900] text-sm font-black text-white shadow-sm">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-bold leading-7 text-[#594900]">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function Exercise1Page() {
  const [initialAnswers, setInitialAnswers] = useState<string[]>(
    Array(initialQuestions.length).fill("")
  );

  const [finalAnswers, setFinalAnswers] = useState<string[]>(
    Array(finalQuestions.length).fill("")
  );

  const [toneAnswers, setToneAnswers] = useState<string[]>(
    Array(toneQuestions.length).fill("")
  );

  const [initialChecked, setInitialChecked] = useState(false);
  const [finalChecked, setFinalChecked] = useState(false);
  const [toneChecked, setToneChecked] = useState(false);
  const [dialogueAnswers, setDialogueAnswers] = useState({
  A: "",
  B: "",
  C: "",
});
const [dialogueChecked, setDialogueChecked] = useState(false);

  
  const checkInitial = () => {
    if (initialAnswers.some((answer) => !answer)) return;
    setInitialChecked(true);
  };

  const checkFinal = () => {
    if (finalAnswers.some((answer) => !answer)) return;
    setFinalChecked(true);
  };

  const checkTone = () => {
    if (toneAnswers.some((answer) => !answer)) return;
    setToneChecked(true);
  };

  const initialScore = initialAnswers.reduce(
  (score, answer, index) =>
    score + (answer === initialQuestions[index].answer ? 1 : 0),
  0
);

  const finalScore = finalAnswers.reduce(
    (score, answer, index) =>
      score + (answer === finalQuestions[index].answer ? 1 : 0),
    0
  );

  const toneScore = toneAnswers.reduce(
    (score, answer, index) =>
      score + (Number(answer) === toneQuestions[index].answer ? 1 : 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#FFFDE7] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        {/* BACK */}
        <Link
          href="/hsk1/Baitap"
          className="group inline-flex items-center gap-2 rounded-full border border-[#F0E6A3] bg-white px-5 py-2.5 text-sm font-bold text-[#827000] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF9C4] hover:shadow-md"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Danh sách bài tập
        </Link>

        {/* HERO */}
        <header className="relative mt-6 overflow-hidden rounded-[30px] bg-[#F9E547] px-6 py-10 shadow-xl shadow-[#D9BF19]/15 sm:px-10 md:px-14">
          <div className="pointer-events-none absolute -right-4 -top-16 font-serif text-[190px] font-bold leading-none text-[#8F7900]/10 sm:text-[250px]">
            练
          </div>

          <div className="relative z-10">
            <div className="inline-flex rounded-full border border-[#8F7900]/15 bg-white/55 px-4 py-2 text-xs font-bold text-[#746200] backdrop-blur-sm">
              HSK 1 · BÀI TẬP 01
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[white] sm:text-4xl md:text-5xl">
              AI小语, 你好!
            </h1>

            <p className="mt-3 text-base font-bold text-[white] sm:text-lg">
              Xin chào AI Tiểu Ngữ!
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#665817] sm:text-base">
              Bài luyện tập giúp bạn làm quen với âm tiết tiếng Trung,
              thanh mẫu, vận mẫu, thanh điệu và luyện nghe – đọc cơ bản.
            </p>
          </div>
        </header>

        {/* ============================= */}
        {/* I. PHÁT ÂM */}
        {/* ============================= */}

        <section className="mt-12">
          <SectionTitle
            number="一"
            chinese="语音"
            english="Ngữ âm"
          />

          {/* 1. ÂM TIẾT */}
          <article className="rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={1}
              title="Âm tiết trong tiếng Trung"
            />

            <p className="text-sm leading-8 text-[#665817] sm:text-base">
              Trong tiếng Trung, mỗi chữ Hán thường tương ứng với một âm
              tiết. Mỗi âm tiết trong tiếng Hán thường bao gồm một thanh
              mẫu, một vận mẫu và một thanh điệu, mặc dù đôi khi nó chỉ
              chứa vận mẫu và một thanh điệu.
            </p>

            <div className="mt-6 rounded-2xl border border-[#F0E6A3] bg-[#FFFDE7] p-5">
              <p className="mb-4 text-sm font-bold text-[#827000]">
                Ví dụ
              </p>

              <div className="flex h-[250px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh1.png"
              className="h-full w-full object-contain"
               />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#FFF9C4] p-5">
              <p className="text-sm font-bold leading-6 text-[#746200]">
                ✏️ Hãy nhìn vào các bức tranh, lắng nghe và nhắc lại các âm tiết, sau đó đọc to.
              </p>

               <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.1.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
                 </audio>
            </div>

            <div className="flex h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh2.png"
              className="h-full w-full object-contain"
               />
              </div>
          </article>

          {/* 2. THANH MẪU VÀ VẬN MẪU */}
          <article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={2}
              title="Thanh mẫu và vận mẫu"
            />

            <p className="text-sm leading-8 text-[#665817] sm:text-base">
              Trong tiếng Trung, các thanh mẫu và vận mẫu kết hợp với
              nhau để tạo thành âm tiết, nhưng không phải tất cả các
              thanh mẫu đều có thể kết hợp với tất cả các vận mẫu.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#665817] sm:text-base">
              Trong số các thanh mẫu được liệt kê bên dưới, ngoại trừ
              các thanh mẫu <b>n</b> và <b>l</b>, không có thanh mẫu nào
              khác có thể kết hợp với vận mẫu <b>ü</b> hoặc các vận mẫu
              bắt đầu bằng <b>ü</b>. Âm <b>er</b> không kết hợp với bất
              kỳ thanh mẫu nào và đứng riêng như một âm tiết độc lập.
            </p>


            <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#FFF9C4] p-5">
              <p className="text-sm font-bold leading-6 text-[#746200]">
                ✏️ Nghe và nhắc lại các thanh mẫu và vận mẫu, sau đó đọc to.
              </p>

              <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.2.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
                 </audio>
            </div>

            <div className="flex h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh3.png"
              className="h-full w-full object-contain"
               />
            </div>
          </article>

          {/* 3. THANH ĐIỆU */}
          <article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={3}
              title="Thanh điệu"
            />

            <p className="text-sm leading-8 text-[#665817] sm:text-base">
              Tiếng Trung có bốn thanh điệu cơ bản: thanh thứ nhất
              <b> (55)</b>, thanh thứ hai <b> (35)</b>, thanh thứ ba
              <b> (214)</b> và thanh thứ tư <b> (51)</b>. Dấu thanh được đặt
              phía trên nguyên âm chính của âm tiết.
            </p>

            <div className="flex h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh4.png"
              className="h-full w-full object-contain"
               />
              </div>

            <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#FFF9C4] p-5">
              <p className="text-sm font-bold leading-6 text-[#746200]">
                ✏️ Nghe và nhắc lại các thanh điệu, sau đó đọc to.
              </p>

              <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.3.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
                 </audio>
            </div>

            <div className="flex h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh5.png"
              className="h-full w-full object-contain"
               />
            </div>

         <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#FFF9C4] p-5">
              <p className="text-sm font-bold leading-6 text-[#746200]">
                ✏️ Hãy nhìn vào các bức tranh, lắng nghe và nhắc lại các âm tiết, sau đó đọc to.
              </p>

              <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.4.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
                 </audio>
            </div>

            <div className="flex h-[600px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh6.png"
              className="h-full w-full object-contain"
               />
            </div>
          </article>
        </section>

        {/* ============================= */}
        {/* II. NGHE ĐỌC LUYỆN TẬP */}
        {/* ============================= */}

        <section className="mt-14">
          <SectionTitle
            number="二"
            chinese="听、读、练"
            english="Nghe, đọc và luyện tập"
          />

          {/* BÀI 1 */}
          <article className="rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={1}
              title="Nghe và đọc to các âm tiết dưới đây."
            />

            <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.5.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
            </audio>

            <div className="my-4 h-px w-full bg-[white]" />
 
             <div className="flex h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
              <img
              src="/images/bai1/anh7.png"
              className="h-full w-full object-contain"
               />
            </div>
            
          </article>

          {/* BÀI 2 */}
          <article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={2}
              title="Hãy lắng nghe, điền xuống thanh mẫu mà bạn nghe được, rồi đọc to."
            />

            <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.6.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
            </audio>

            <div className="my-4 h-px w-full bg-[white]" />

            
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {initialQuestions.map((question, index) => {
    const answer = initialAnswers[index];

    const correct =
      initialChecked && answer === question.answer;

    const wrong =
      initialChecked && answer !== question.answer;

    return (
      <div
        key={index}
        className={`flex items-center justify-center gap-3 rounded-2xl border p-4 transition ${
          correct
            ? "border-green-300 bg-green-50"
            : wrong
            ? "border-red-300 bg-red-50"
            : "border-[#F0E6A3] bg-[#FFFDE7]"
        }`}
      >
        {/* Phần chọn thanh mẫu - đặt phía trước */}
        <select
          value={answer}
          onChange={(e) => {
            const next = [...initialAnswers];
            next[index] = e.target.value;
            setInitialAnswers(next);
            setInitialChecked(false);
          }}
          className="h-12 w-40 shrink-0 rounded-xl border border-[#E5D77A] bg-white px-2 text-center font-bold text-[#594900] outline-none focus:border-[#CDB500] focus:ring-2 focus:ring-[#F9E547]/40"
          aria-label={`Chọn thanh mẫu câu ${index + 1}`}
        >
          <option value="">Thanh mẫu</option>

          {initials.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Vận mẫu - đặt phía sau */}
        <div className="flex min-w-0 flex-1 items-center justify-center rounded-xl bg-white/80 px-3 py-2">
          <span className="text-2xl font-bold text-[#594900]">
            {question.final}
          </span>
        </div>

        {/* Hiển thị kết quả */}
        {initialChecked && (
          <span
            className={`w-5 shrink-0 text-center text-lg font-black ${
              correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {correct ? "✓" : "✕"}
          </span>
        )}
      </div>
    );
  })}
</div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={checkInitial}
                disabled={initialAnswers.some((answer) => !answer)}
                className="rounded-xl bg-[#E5C900] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#CDB500] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra đáp án
              </button>

              
{initialChecked && (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    {/* Hiển thị kết quả */}
    <div className="rounded-xl bg-[#FFF9C4] px-5 py-3 text-center text-sm font-bold text-[#746200]">
      Kết quả: {initialScore}/{initialQuestions.length}
    </div>

    {/* Nút làm lại */}
    <button
      type="button"
      onClick={() => {
        setInitialAnswers(
          Array(initialQuestions.length).fill("")
        );
        setInitialChecked(false);
      }}
      className="flex items-center justify-center gap-2 rounded-xl border border-[#E5D77A] bg-white px-5 py-3 text-sm font-bold text-[#746200] shadow-sm transition hover:bg-[#FFF9C4]"
    >
      <span>↻</span>
      Làm lại
    </button>
  </div>
)}

            </div>
          </article>

          {/* BÀI 3 */}
          <article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={3}
              title="Hãy lắng nghe, điền xuống vận mẫu mà bạn nghe được, rồi đọc to."
            />

          <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.7.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
            </audio>

            <div className="my-4 h-px w-full bg-[white]" />

            
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {finalQuestions.map((question, index) => {
    const answer = finalAnswers[index];

    const correct =
      finalChecked && answer === question.answer;

    const wrong =
      finalChecked && answer !== question.answer;

    return (
      <div
        key={index}
        className={`flex items-center justify-center gap-3 rounded-2xl border p-4 transition ${
          correct
            ? "border-green-300 bg-green-50"
            : wrong
            ? "border-red-300 bg-red-50"
            : "border-[#F0E6A3] bg-[#FFFDE7]"
        }`}
      >
        {/* Thanh mẫu */}
        <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#594900]">
          {question.initial}
        </div>

        {/* Chọn vận mẫu */}
        <select
          value={answer}
          onChange={(e) => {
            const next = [...finalAnswers];
            next[index] = e.target.value;
            setFinalAnswers(next);
            setFinalChecked(false);
          }}
          className="h-14 min-w-0 flex-1 rounded-xl border border-[#E5D77A] bg-white px-3 text-center text-base font-bold text-[#594900] outline-none focus:border-[#CDB500] focus:ring-2 focus:ring-[#F9E547]/40"
          aria-label={`Chọn vận mẫu cho ${question.initial}`}
        >
          <option value="">Vận mẫu</option>

          {finals.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Kết quả */}
        {finalChecked && (
          <span
            className={`w-5 shrink-0 text-center text-lg font-black ${
              correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {correct ? "✓" : "✕"}
          </span>
        )}
      </div>
    );
  })}
</div>


            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={checkFinal}
                disabled={finalAnswers.some((answer) => !answer)}
                className="rounded-xl bg-[#E5C900] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#CDB500] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra đáp án
              </button>

              
{finalChecked && (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    {/* Hiển thị kết quả */}
    <div className="rounded-xl bg-[#FFF9C4] px-5 py-3 text-center text-sm font-bold text-[#746200]">
      Kết quả: {finalScore}/{finalQuestions.length}
    </div>

    {/* Nút làm lại */}
    <button
      type="button"
      onClick={() => {
        setFinalAnswers(
          Array(finalQuestions.length).fill("")
        );
        setFinalChecked(false);
      }}
      className="flex items-center justify-center gap-2 rounded-xl border border-[#E5D77A] bg-white px-5 py-3 text-sm font-bold text-[#746200] shadow-sm transition hover:bg-[#FFF9C4]"
    >
      <span>↻</span>
      Làm lại
    </button>
  </div>
)}

            </div>
          </article>

          {/* BÀI 4 */}
          <article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
            <ExerciseHeader
              number={4}
              title="Hãy lắng nghe, điền xuống các thanh điệu bạn nghe được, rồi đọc to."
            />

             <audio
                controls
                preload="none"
                className="w-full"
               >
                <source src="/audio/hsk1bt/bai1.8.mp3" type="audio/mpeg" />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
            </audio>

            <div className="my-4 h-px w-full bg-[white]" />

            
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {toneQuestions.map((question, index) => {
    const answer = toneAnswers[index];

    const correct =
      toneChecked && Number(answer) === question.answer;

    const wrong =
      toneChecked && Number(answer) !== question.answer;

    return (
      <div
        key={index}
        className={`flex items-center justify-center gap-3 rounded-2xl border p-4 transition ${
          correct
            ? "border-green-300 bg-green-50"
            : wrong
            ? "border-red-300 bg-red-50"
            : "border-[#F0E6A3] bg-[#FFFDE7]"
        }`}
      >
        {/* Âm tiết */}
        <div className="flex h-14 min-w-0 flex-1 items-center justify-center rounded-xl bg-white px-3 text-2xl font-bold text-[#594900]">
          {question.syllable}
        </div>

        {/* Chọn thanh điệu */}
        <select
          value={answer}
          onChange={(e) => {
            const next = [...toneAnswers];
            next[index] = e.target.value;
            setToneAnswers(next);
            setToneChecked(false);
          }}
          className="h-14 w-36 shrink-0 rounded-xl border border-[#E5D77A] bg-white px-2 text-center text-base font-bold text-[#594900] outline-none focus:border-[#CDB500] focus:ring-2 focus:ring-[#F9E547]/40"
          aria-label={`Chọn thanh điệu cho ${question.syllable}`}
        >
          <option value="">Thanh điệu</option>

          {tones.map((tone, toneIndex) => (
            <option
              key={toneIndex}
              value={toneIndex + 1}
            >
              {tone}
            </option>
          ))}
        </select>

        {/* Kết quả */}
        {toneChecked && (
          <span
            className={`w-5 shrink-0 text-center text-lg font-black ${
              correct ? "text-green-600" : "text-red-600"
            }`}
          >
            {correct ? "✓" : "✕"}
          </span>
        )}
      </div>
    );
  })}
</div>


            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={checkTone}
                disabled={toneAnswers.some((answer) => !answer)}
                className="rounded-xl bg-[#E5C900] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#CDB500] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra đáp án
              </button>

              
{toneChecked && (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    {/* Hiển thị kết quả */}
    <div className="rounded-xl bg-[#FFF9C4] px-5 py-3 text-center text-sm font-bold text-[#746200]">
      Kết quả: {toneScore}/{toneQuestions.length}
    </div>

    {/* Nút làm lại */}
    <button
      type="button"
      onClick={() => {
        setToneAnswers(
          Array(toneQuestions.length).fill("")
        );
        setToneChecked(false);
      }}
      className="flex items-center justify-center gap-2 rounded-xl border border-[#E5D77A] bg-white px-5 py-3 text-sm font-bold text-[#746200] shadow-sm transition hover:bg-[#FFF9C4]"
    >
      <span>↻</span>
      Làm lại
    </button>
  </div>
)}

            </div>
          </article>

          
{/* BÀI 5 */}
<article className="mt-7 rounded-[28px] border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
  <ExerciseHeader
    number={5}
    title="Hãy nhìn vào hình ảnh và chọn đoạn hội thoại đúng."
  />

  <p className="mb-6 text-sm leading-7 text-[#827742]">
    Quan sát ba hình A, B, C và chọn đoạn hội thoại tương ứng.
  </p>

  {/* Hình ảnh gồm A, B, C và hội thoại 1, 2, 3 */}
  <div className="flex h-[250px] items-center justify-center overflow-hidden rounded-2xl border border-[#E8D874] bg-white">
    <img
      src="/images/bai1/anh8.png"
      alt="Ba hình A, B, C và ba đoạn hội thoại 1, 2, 3"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Bài tập chọn đáp án */}
  {(() => {
    const correctAnswers = {
      A: "1",
      B: "3",
      C: "2",
    };

    return (
      <div className="mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {(["A", "B", "C"] as const).map((letter) => {
            const answer = dialogueAnswers[letter];
            const isCorrect = answer === correctAnswers[letter];

            return (
              <div
                key={letter}
                className={`rounded-2xl border p-4 transition ${
                  dialogueChecked
                    ? isCorrect
                      ? "border-green-300 bg-green-50"
                      : "border-red-300 bg-red-50"
                    : "border-[#F0E6A3] bg-[#FFFDE7]"
                }`}
              >
                <label
                  htmlFor={`dialogue-${letter}`}
                  className="mb-3 block text-center font-bold text-[#594900]"
                >
                  Hình {letter}
                </label>

                <div className="flex items-center gap-2">
                  <select
                    id={`dialogue-${letter}`}
                    value={answer}
                    onChange={(e) => {
                      setDialogueAnswers((prev) => ({
                        ...prev,
                        [letter]: e.target.value,
                      }));
                      setDialogueChecked(false);
                    }}
                    className="h-12 min-w-0 flex-1 rounded-xl border border-[#E5D77A] bg-white px-2 text-center font-bold text-[#594900] outline-none focus:ring-2 focus:ring-[#F9E547]/40"
                  >
                    <option value="">Chọn hội thoại</option>
                    <option value="1">Hội thoại 1</option>
                    <option value="2">Hội thoại 2</option>
                    <option value="3">Hội thoại 3</option>
                  </select>

                  {dialogueChecked && (
                    <span
                      className={`w-6 shrink-0 text-center text-2xl font-black ${
                        isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                      aria-label={isCorrect ? "Đúng" : "Sai"}
                    >
                      {isCorrect ? "✓" : "✕"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

       <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  {/* Nút kiểm tra */}
  <button
    type="button"
    onClick={() => setDialogueChecked(true)}
    disabled={Object.values(dialogueAnswers).some(
      (answer) => !answer
    )}
    className="rounded-xl bg-[#E5C900] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#CDB500] disabled:cursor-not-allowed disabled:opacity-40"
  >
    Kiểm tra đáp án
  </button>

  {/* Kết quả + Làm lại */}
  {dialogueChecked && (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      
      {/* Kết quả */}
      <div className="rounded-xl bg-[#FFF9C4] px-5 py-3 text-center text-sm font-bold text-[#746200]">
        Kết quả:{" "}
        {(["A", "B", "C"] as const).filter(
          (letter) =>
            dialogueAnswers[letter] === correctAnswers[letter]
        ).length}
        /3
      </div>

      {/* Làm lại */}
      <button
        type="button"
        onClick={() => {
          setDialogueAnswers({
            A: "",
            B: "",
            C: "",
          });
          setDialogueChecked(false);
        }}
        className="flex items-center justify-center gap-2 rounded-xl border border-[#E5D77A] bg-white px-5 py-3 text-sm font-bold text-[#746200] transition hover:bg-[#FFF9C4]"
      >
        <span>↻</span>
        Làm lại
      </button>

    </div>
  )}
</div>
      </div>
    );
  })()}
</article>

        </section>
      </div>
    </main>
  );
}