"use client";

import Link from "next/link";
import { useState } from "react";

const moneyUnits = [
  {
    chinese: "元",
    pinyin: "yuán",
    meaning: "đồng / yuan",
    description: "Đơn vị tiền tệ chính thức.",
  },
  {
    chinese: "块",
    pinyin: "kuài",
    meaning: "đồng / yuan",
    description: "Cách nói thông dụng trong giao tiếp.",
  },
  {
    chinese: "角",
    pinyin: "jiǎo",
    meaning: "hào",
    description: "1 角 = 0,1 元.",
  },
  {
    chinese: "毛",
    pinyin: "máo",
    meaning: "hào",
    description: "Cách nói khẩu ngữ của 角.",
  },
  {
    chinese: "分",
    pinyin: "fēn",
    meaning: "xu",
    description: "1 分 = 0,01 元.",
  },
];

const examples = [
  {
    money: "¥5",
    chinese: "五块",
    pinyin: "wǔ kuài",
    note: "5 yuan",
  },
  {
    money: "¥10",
    chinese: "十块",
    pinyin: "shí kuài",
    note: "10 yuan",
  },
  {
    money: "¥15",
    chinese: "十五块",
    pinyin: "shí wǔ kuài",
    note: "15 yuan",
  },
  {
    money: "¥12.5",
    chinese: "十二块五",
    pinyin: "shí èr kuài wǔ",
    note: "12 yuan 5 jiao",
  },
  {
    money: "¥12.50",
    chinese: "十二块五毛",
    pinyin: "shí èr kuài wǔ máo",
    note: "12 yuan 5 jiao",
  },
  {
    money: "¥12.05",
    chinese: "十二块零五分",
    pinyin: "shí èr kuài líng wǔ fēn",
    note: "12 yuan 5 fen",
  },
];

const practiceMoney = [
  {
    money: "¥8",
    answer: "八块",
    pinyin: "bā kuài",
  },
  {
    money: "¥20",
    answer: "二十块",
    pinyin: "èr shí kuài",
  },
  {
    money: "¥35",
    answer: "三十五块",
    pinyin: "sān shí wǔ kuài",
  },
  {
    money: "¥6.5",
    answer: "六块五",
    pinyin: "liù kuài wǔ",
  },
  {
    money: "¥18.2",
    answer: "十八块二",
    pinyin: "shí bā kuài èr",
  },
  {
    money: "¥10.05",
    answer: "十块零五分",
    pinyin: "shí kuài líng wǔ fēn",
  },
];

export default function MoneyPage() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <main className="min-h-screen bg-[#EEF4F1] px-5 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/hsk1/Nguphap"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#356859] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>←</span>
          Quay lại Ngữ pháp
        </Link>

        {/* Hero */}
        <section className="relative mt-7 overflow-hidden rounded-3xl bg-[#356859] px-7 py-10 text-white shadow-lg md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[170px] font-serif leading-none text-white/5">
            钱
          </div>

          <div className="relative z-10">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              HSK 1 · Bài học đặc biệt
            </div>

            <p className="mt-6 text-sm font-medium text-white/60">
              💰 Tiền trong tiếng Trung
            </p>

            <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
              Cách đọc số tiền
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Học cách đọc giá tiền và sử dụng 元、块、角、毛、分
              trong những tình huống giao tiếp thực tế.
            </p>
          </div>
        </section>

        {/* Units */}
        <section className="mt-7 rounded-3xl border border-[#D9E6E0] bg-white p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
              ①
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                Nền tảng
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                Các đơn vị tiền
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {moneyUnits.map((unit) => (
              <div
                key={unit.chinese}
                className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-5 transition hover:-translate-y-0.5 hover:border-[#C8DCD4] hover:shadow-sm"
              >
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-bold text-[#356859]">
                    {unit.chinese}
                  </span>

                  <span className="pb-1 text-sm italic text-[#6B8178]">
                    {unit.pinyin}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-[#29483F]">
                  {unit.meaning}
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {unit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-7 rounded-2xl border border-[#D9E6E0] bg-[#F8FCFA] p-5">
            <p className="font-semibold text-[#29483F]">
              💡 Cần nhớ
            </p>

            <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
              <strong>元</strong> và <strong>块</strong> đều có nghĩa
              là yuan. Trong giao tiếp hằng ngày, <strong>块</strong>{" "}
              thường được sử dụng nhiều hơn.
            </p>

            <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
              <strong>角</strong> và <strong>毛</strong> đều chỉ 1/10
              yuan. <strong>毛</strong> thường mang tính khẩu ngữ hơn.
            </p>
          </div>
        </section>

        {/* How to read */}
        <section className="mt-6 rounded-3xl border border-[#D9E6E0] bg-[#F8FCFA] p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
              🧩
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                Quy tắc
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                Đọc số tiền như thế nào?
              </h2>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#4F8A78]">
                Số tiền nguyên
              </p>

              <p className="mt-3 text-xl font-semibold text-[#29483F]">
                Số + 块 / 元
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Ví dụ: 10 → 十块
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#4F8A78]">
                Có phần lẻ
              </p>

              <p className="mt-3 text-xl font-semibold text-[#29483F]">
                Số + 块 + 角 / 毛
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Ví dụ: 12,5 → 十二块五
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#4F8A78]">
                Có 分
              </p>

              <p className="mt-3 text-xl font-semibold text-[#29483F]">
                Số + 块 + 零 + 分
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Ví dụ: 12,05 → 十二块零五分
              </p>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="mt-6 rounded-3xl border border-[#D9E6E0] bg-white p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
              🛒
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                Thực tế
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                Ví dụ về giá tiền
              </h2>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            {examples.map((item) => (
              <div
                key={item.money}
                className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-5 md:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-3xl font-bold text-[#356859]">
                      {item.money}
                    </p>

                    <p className="mt-3 text-2xl font-bold text-[#29483F] md:text-3xl">
                      {item.chinese}
                    </p>

                    <p className="mt-1 text-base italic text-[#6B8178]">
                      {item.pinyin}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#E2F0EA] px-4 py-2 text-sm font-medium text-[#356859]">
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mt-6 rounded-3xl border border-[#E5D7C9] bg-[#FFF9F3] p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5E8DA] text-xl">
              ⚠️
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#A06A43]">
                Lưu ý
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#6B4226]">
                Những lỗi thường gặp
              </h2>
            </div>
          </div>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-red-500">
                ❌ Không nên đọc
              </p>

              <p className="mt-2 text-lg text-gray-700">
                ¥12.50 → 十二点五十
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Khi nói về giá tiền, không đọc phần thập phân
                giống như một số thập phân thông thường.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-[#356859]">
                ✅ Nên đọc
              </p>

              <p className="mt-2 text-lg font-semibold text-[#29483F]">
                ¥12.50 → 十二块五毛
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Có thể hiểu là 12 yuan và 5 hào.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-[#356859]">
                ✅ Trường hợp có 分
              </p>

              <p className="mt-2 text-lg font-semibold text-[#29483F]">
                ¥10.05 → 十块零五分
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Khi phần 角 bằng 0 nhưng vẫn có 分, cần dùng 零.
              </p>
            </div>
          </div>
        </section>

        {/* Conversation */}
        <section className="mt-6 rounded-3xl border border-[#D9E6E0] bg-white p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
              💬
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                Giao tiếp
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                Hỏi giá tiền
              </h2>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#F8FCFA] p-6">
            <p className="text-2xl font-bold text-[#29483F]">
              这个多少钱？
            </p>

            <p className="mt-2 text-base italic text-[#6B8178]">
              Zhège duōshao qián?
            </p>

            <p className="mt-2 text-gray-700">
              Cái này bao nhiêu tiền?
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-[#F8FCFA] p-6">
            <p className="text-2xl font-bold text-[#29483F]">
              十五块。
            </p>

            <p className="mt-2 text-base italic text-[#6B8178]">
              Shí wǔ kuài.
            </p>

            <p className="mt-2 text-gray-700">
              15 đồng / 15 yuan.
            </p>
          </div>
        </section>

        {/* Practice */}
        <section className="mt-6 rounded-3xl border border-[#C8DCD4] bg-[#E8F2ED] p-6 md:p-9">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
              🎯
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
              Tự luyện
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
              Thử đọc giá tiền
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#52665E]">
              Hãy tự đọc giá tiền trước khi xem đáp án.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {practiceMoney.map((item) => (
              <div
                key={item.money}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-[#356859]">
                  {item.money}
                </p>

                {showAnswers && (
                  <>
                    <p className="mt-3 text-xl font-bold text-[#29483F]">
                      {item.answer}
                    </p>

                    <p className="mt-1 text-xs italic text-[#6B8178]">
                      {item.pinyin}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="rounded-full bg-[#356859] px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#294F43] hover:shadow-md"
            >
              {showAnswers ? "Ẩn đáp án" : "Hiện đáp án"}
            </button>
          </div>
        </section>

        {/* Memory */}
        <section className="mt-6 rounded-3xl border border-[#C8DCD4] bg-[#E8F2ED] p-7 text-center md:p-9">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            🌱
          </div>

          <h2 className="mt-4 text-xl font-bold text-[#29483F]">
            Mẹo ghi nhớ
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#52665E] md:text-base">
            Khi gặp một mức giá, hãy tập phản xạ theo thứ tự:
            <strong> số tiền → 块 → phần lẻ</strong>. Sau đó tự
            đặt câu hỏi “这个多少钱？” và trả lời bằng giá tiền
            vừa học.
          </p>
        </section>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <Link
            href="/hsk1/Nguphap"
            className="inline-flex items-center gap-2 rounded-full bg-[#356859] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#294F43] hover:shadow-md"
          >
            Xem các bài ngữ pháp khác
          </Link>
        </div>
      </div>
    </main>
  );
}