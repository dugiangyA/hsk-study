"use client";

import Link from "next/link";
import { useState } from "react";

const basicNumbers = [
  { number: "0", chinese: "零", pinyin: "líng" },
  { number: "1", chinese: "一", pinyin: "yī" },
  { number: "2", chinese: "二", pinyin: "èr" },
  { number: "3", chinese: "三", pinyin: "sān" },
  { number: "4", chinese: "四", pinyin: "sì" },
  { number: "5", chinese: "五", pinyin: "wǔ" },
  { number: "6", chinese: "六", pinyin: "liù" },
  { number: "7", chinese: "七", pinyin: "qī" },
  { number: "8", chinese: "八", pinyin: "bā" },
  { number: "9", chinese: "九", pinyin: "jiǔ" },
  { number: "10", chinese: "十", pinyin: "shí" },
];

const examples = [
  {
    number: "11",
    chinese: "十一",
    pinyin: "shí yī",
    explanation: "10 + 1",
  },
  {
    number: "20",
    chinese: "二十",
    pinyin: "èr shí",
    explanation: "2 × 10",
  },
  {
    number: "25",
    chinese: "二十五",
    pinyin: "èr shí wǔ",
    explanation: "2 × 10 + 5",
  },
  {
    number: "36",
    chinese: "三十六",
    pinyin: "sān shí liù",
    explanation: "3 × 10 + 6",
  },
  {
    number: "48",
    chinese: "四十八",
    pinyin: "sì shí bā",
    explanation: "4 × 10 + 8",
  },
  {
    number: "99",
    chinese: "九十九",
    pinyin: "jiǔ shí jiǔ",
    explanation: "9 × 10 + 9",
  },
];

const hundreds = [
  // Hàng trăm
  {
    number: "100",
    chinese: "一百",
    pinyin: "yì bǎi",
  },
  {
    number: "101",
    chinese: "一百零一",
    pinyin: "yì bǎi líng yī",
  },
  {
    number: "110",
    chinese: "一百一十",
    pinyin: "yì bǎi yì shí",
  },
  {
    number: "125",
    chinese: "一百二十五",
    pinyin: "yì bǎi èr shí wǔ",
  },
  {
    number: "305",
    chinese: "三百零五",
    pinyin: "sān bǎi líng wǔ",
  },
  {
    number: "999",
    chinese: "九百九十九",
    pinyin: "jiǔ bǎi jiǔ shí jiǔ",
  },

  // Hàng nghìn
  {
    number: "1.000",
    chinese: "一千",
    pinyin: "yì qiān",
  },
  {
    number: "1.001",
    chinese: "一千零一",
    pinyin: "yì qiān líng yī",
  },
  {
    number: "1.010",
    chinese: "一千零一十",
    pinyin: "yì qiān líng yī shí",
  },
  {
    number: "1.234",
    chinese: "一千二百三十四",
    pinyin: "yì qiān èr bǎi sān shí sì",
  },
  {
    number: "2.500",
    chinese: "两千五百",
    pinyin: "liǎng qiān wǔ bǎi",
  },
  {
    number: "9.999",
    chinese: "九千九百九十九",
    pinyin: "jiǔ qiān jiǔ bǎi jiǔ shí jiǔ",
  },

  // Hàng vạn
  {
    number: "10.000",
    chinese: "一万",
    pinyin: "yí wàn",
  },
  {
    number: "10.001",
    chinese: "一万零一",
    pinyin: "yí wàn líng yī",
  },
  {
    number: "12.000",
    chinese: "一万二千",
    pinyin: "yí wàn èr qiān",
  },
  {
    number: "12.345",
    chinese: "一万二千三百四十五",
    pinyin: "yí wàn èr qiān sān bǎi sì shí wǔ",
  },
  {
    number: "25.000",
    chinese: "两万五千",
    pinyin: "liǎng wàn wǔ qiān",
  },
  {
    number: "50.000",
    chinese: "五万",
    pinyin: "wǔ wàn",
  },
  {
    number: "100.000",
    chinese: "十万",
    pinyin: "shí wàn",
  },
];

const practiceNumbers = [
  { number: "18", chinese: "十八", pinyin: "shí bā" },
  { number: "56", chinese: "五十六", pinyin: "wǔ shí liù" },
  { number: "99", chinese: "九十九", pinyin: "jiǔ shí jiǔ" },
  { number: "125", chinese: "一百二十五", pinyin: "yì bǎi èr shí wǔ" },
  { number: "408", chinese: "四百零八", pinyin: "sì bǎi líng bā" },
  { number: "999", chinese: "九百九十九", pinyin: "jiǔ bǎi jiǔ shí jiǔ" },
  { number: "1.025", chinese: "一千零二十五", pinyin: "yì qiān líng èr shí wǔ" },
  { number: "3.600", chinese: "三千六百", pinyin: "sān qiān liù bǎi" },
  { number: "10.008", chinese: "一万零八", pinyin: "yí wàn líng bā" },
  { number: "23.450", chinese: "两万三千四百五十", pinyin: "liǎng wàn sān qiān sì bǎi wǔ shí" },
  { number: "50.000", chinese: "五万", pinyin: "wǔ wàn" },
  { number: "100.000", chinese: "十万", pinyin: "shí wàn" },
];

export default function NumberPage() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <main className="min-h-screen bg-[#EEF4F1] px-5 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/hsk1/Nguphap"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#356859] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Quay lại Ngữ pháp
        </Link>

        {/* Hero */}
        <section className="relative mt-7 overflow-hidden rounded-3xl bg-[#356859] px-7 py-10 text-white shadow-lg md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[170px] font-serif leading-none text-white/5">
            数
          </div>

          <div className="relative z-10">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              HSK 1 · Bài học đặc biệt
            </div>

            <p className="mt-6 text-sm font-medium text-white/60">
              🔢 Số trong tiếng Trung
            </p>

            <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
              Cách đọc số
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Học cách đọc và ghép các con số trong tiếng Trung từ
              những số cơ bản đến hàng trăm, hàng nghìn, hàng vạn.
            </p>
          </div>
        </section>

        {/* 1. Basic numbers */}
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
                Các số cơ bản
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {basicNumbers.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-4 text-center transition hover:-translate-y-0.5 hover:border-[#C8DCD4] hover:shadow-sm"
              >
                <p className="text-2xl font-bold text-[#356859]">
                  {item.number}
                </p>

                <p className="mt-2 text-3xl font-semibold text-[#29483F]">
                  {item.chinese}
                </p>

                <p className="mt-1 text-sm italic text-[#6B8178]">
                  {item.pinyin}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Rule */}
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
                Cách ghép số từ 11 đến 99
              </h2>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row">
              <span className="rounded-xl bg-[#E2F0EA] px-4 py-3 font-semibold text-[#356859]">
                Số hàng chục
              </span>

              <span className="text-2xl text-[#9BB5AA]">+</span>

              <span className="rounded-xl bg-[#E2F0EA] px-4 py-3 font-semibold text-[#356859]">
                十
              </span>

              <span className="text-2xl text-[#9BB5AA]">+</span>

              <span className="rounded-xl bg-[#E2F0EA] px-4 py-3 font-semibold text-[#356859]">
                Số hàng đơn vị
              </span>
            </div>

            <div className="mt-7 rounded-2xl bg-[#F8FCFA] p-6 text-center">
              <p className="text-sm text-gray-500">Ví dụ</p>

              <p className="mt-2 text-3xl font-bold text-[#29483F]">
                25 → 二十五
              </p>

              <p className="mt-2 text-[#6B8178]">
                2 × 10 + 5
              </p>
            </div>
          </div>
        </section>

        {/* 3. Examples */}
        <section className="mt-6 rounded-3xl border border-[#D9E6E0] bg-white p-6 shadow-sm md:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
              📖
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                Áp dụng
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                Ví dụ từ 11 đến 99
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {examples.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#4F8A78]">
                    Số {item.number}
                  </span>

                  <span className="rounded-full bg-[#E2F0EA] px-3 py-1 text-xs font-medium text-[#356859]">
                    {item.explanation}
                  </span>
                </div>

                <p className="mt-5 text-3xl font-bold text-[#29483F]">
                  {item.chinese}
                </p>

                <p className="mt-2 text-base italic text-[#6B8178]">
                  {item.pinyin}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Hundreds, thousands and ten-thousands */}
<section className="mt-6 rounded-3xl border border-[#D9E6E0] bg-white p-6 shadow-sm md:p-9">
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
      💯
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
        Mở rộng
      </p>

      <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
        Hàng trăm, hàng nghìn và hàng vạn
      </h2>
    </div>
  </div>

  {/* Các đơn vị */}
  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {[
      { chinese: "十", pinyin: "shí", meaning: "10 · Mười" },
      { chinese: "百", pinyin: "bǎi", meaning: "100 · Trăm" },
      { chinese: "千", pinyin: "qiān", meaning: "1.000 · Nghìn" },
      { chinese: "万", pinyin: "wàn", meaning: "10.000 · Vạn" },
    ].map((item) => (
      <div
        key={item.chinese}
        className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-4 text-center"
      >
        <p className="text-3xl font-bold text-[#356859]">
          {item.chinese}
        </p>

        <p className="mt-1 text-sm italic text-[#6B8178]">
          {item.pinyin}
        </p>

        <p className="mt-2 text-sm font-semibold text-[#29483F]">
          {item.meaning}
        </p>
      </div>
    ))}
  </div>

  {/* Quy tắc */}
  <div className="mt-6 space-y-4">
    <div className="rounded-2xl bg-[#F8FCFA] p-5">
      <h3 className="font-bold text-[#29483F]">
        1. Cách ghép số
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-700">
        Đọc từ đơn vị lớn đến đơn vị nhỏ: hàng vạn → hàng nghìn →
        hàng trăm → hàng chục → hàng đơn vị.
      </p>

      <p className="mt-3 text-lg font-semibold text-[#356859]">
        1.234 → 一千二百三十四
      </p>

      <p className="text-sm italic text-[#6B8178]">
        yì qiān èr bǎi sān shí sì
      </p>
    </div>

    <div className="rounded-2xl bg-[#F8FCFA] p-5">
      <h3 className="font-bold text-[#29483F]">
        2. Khi nào cần dùng 零 (líng)?
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-700">
        Khi một hàng ở giữa bị bỏ trống, thường cần thêm 零 để thể
        hiện vị trí bị thiếu. Ví dụ:
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-4">
          <p className="font-semibold text-[#29483F]">
            1.001 → 一千零一
          </p>
          <p className="mt-1 text-sm text-[#6B8178]">
            Một nghìn không trăm linh một
          </p>
        </div>

        <div className="rounded-xl bg-white p-4">
          <p className="font-semibold text-[#29483F]">
            10.001 → 一万零一
          </p>
          <p className="mt-1 text-sm text-[#6B8178]">
            Một vạn không nghìn không trăm linh một
          </p>
        </div>

        <div className="rounded-xl bg-white p-4">
          <p className="font-semibold text-[#29483F]">
            1.010 → 一千零一十
          </p>
          <p className="mt-1 text-sm text-[#6B8178]">
            Một nghìn không trăm mười
          </p>
        </div>

        <div className="rounded-xl bg-white p-4">
          <p className="font-semibold text-[#29483F]">
            12.345 → 一万二千三百四十五
          </p>
          <p className="mt-1 text-sm text-[#6B8178]">
            Một vạn hai nghìn ba trăm bốn mươi lăm
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-2xl border border-[#D9E6E0] bg-[#E2F0EA] p-5">
      <h3 className="font-bold text-[#29483F]">
        3. Ghi nhớ đơn vị 万 (wàn)
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#52665E]">
        Tiếng Trung sử dụng 万 làm đơn vị 10.000. Vì vậy, 25.000
        được ghép thành 二万五千, tức hai vạn năm nghìn; 100.000
        được đọc là 十万, tức mười vạn.
      </p>
    </div>
  </div>

  {/* Ví dụ tổng hợp */}
  <h3 className="mt-8 text-xl font-bold text-[#29483F]">
    Ví dụ 
  </h3>

  <div className="mt-5 grid gap-4 sm:grid-cols-2">
    {hundreds.map((item) => (
      <div
        key={item.number}
        className="rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-5 transition hover:border-[#C8DCD4] hover:shadow-sm"
      >
        <p className="text-sm font-semibold text-[#4F8A78]">
          {item.number}
        </p>

        <p className="mt-2 break-words text-2xl font-bold text-[#29483F] md:text-3xl">
          {item.chinese}
        </p>

        <p className="mt-2 text-sm italic leading-6 text-[#6B8178]">
          {item.pinyin}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* 5. Practice */}
        <section className="mt-6 rounded-3xl border border-[#C8DCD4] bg-[#E8F2ED] p-6 md:p-9">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
              🎯
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
              Luyện tập
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
              Thử đọc các số sau
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#52665E]">
              Hãy tự đọc trước, sau đó bấm nút để kiểm tra đáp án.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {practiceNumbers.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-[#356859]">
                  {item.number}
                </p>

                {showAnswers && (
                  <>
                    <p className="mt-3 text-2xl font-bold text-[#29483F]">
                      {item.chinese}
                    </p>

                    <p className="mt-1 text-sm italic text-[#6B8178]">
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
            Đừng cố học thuộc từng số. Hãy nhớ công thức:
            <strong> số hàng chục + 十 + số hàng đơn vị</strong>.
            Sau đó tự đọc ngẫu nhiên các số để luyện phản xạ.
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