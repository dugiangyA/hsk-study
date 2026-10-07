import Flashcard from "./Flashcard";
import Link from "next/link";
import { vocabulary } from "../data";

type PageProps = {
  params: Promise<{ lesson: string }>;
};

const lessonTitles: Record<number, string> = {
  1: "Xin chào AI Tiểu Ngữ",
  2: "Tôi tên là Lý Văn",
  3: "Tôi là người Trung Quốc",
  4: "Tôi có hai đứa con",
  5: "Hôm nay anh được nghỉ",
  6: "Số điện thoại của bạn là bao nhiêu?",
  7: "Em tan làm lúc 6 rưỡi",
  8: "Bố tôi cũng làm việc ở bệnh viện",
  9: "Sáng mai tôi học ở trường",
  10: "Táo ở đây rẻ thật",
  11: "Em đang học đại học",
  12: "Hôm qua tuyết rơi rồi",
  13: "Cho tôi một cốc trà",
  14: "Mình đã xem một bộ phim",
  15: "Gặp nhau ở sân bay Đại Hưng nhé",
};

export default async function LessonPage({ params }: PageProps) {
  const { lesson } = await params;
  const lessonNumber = Number(lesson);

  const words = (vocabulary as Record<number, any[]>)[lessonNumber];

  if (!words || !Array.isArray(words)) {
    return (
      <main className="min-h-screen bg-[#F7F2E8] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4D6] text-3xl">
              ?
            </div>

            <h1 className="mt-5 text-3xl font-bold text-[#1B365D]">
              Không tìm thấy bài học
            </h1>

            <p className="mt-3 text-gray-500">
              Bài học bạn đang tìm kiếm không tồn tại.
            </p>

            <Link
              href="/hsk1/Tuvung"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#6B4226] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#51321D] hover:shadow-md"
            >
              ← Quay lại bài học
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F2E8] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">

        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/hsk1/Tuvung"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#6B4226] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>←</span>
            Quay lại bài học
          </Link>
        </div>

        {/* Lesson header */}
        <section className="relative overflow-hidden rounded-3xl bg-[#1B365D] px-7 py-9 text-white shadow-lg md:px-10 md:py-10">

          {/* Decorative Chinese character */}
          <div className="pointer-events-none absolute -right-2 -top-10 select-none text-[160px] font-serif leading-none text-white/5">
            学
          </div>

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              HSK 1 · Từ vựng
            </div>

            <p className="text-sm font-medium text-white/60">
              Bài {lessonNumber}
            </p>

            <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
              {lessonTitles[lessonNumber] ?? `Bài ${lessonNumber}`}
            </h1>

            <p className="mt-4 text-base text-white/75">
              Hãy học từng từ một và ghi nhớ cách sử dụng trong câu.
            </p>
          </div>
        </section>

        {/* Progress information */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A06A43]">
              Từ vựng bài {lessonNumber}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#1B365D]">
              Hãy cùng học nhé!
            </h2>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4226] shadow-sm">
            {words.length} từ
          </div>
        </div>

        {/* Flashcards */}
        <div className="mt-7 space-y-6">
          {words.map((word, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#E8DFD2] bg-white p-4 shadow-sm transition duration-300 hover:shadow-md md:p-6"
            >
              <div className="mb-4 flex items-center justify-between px-2">
                <span className="text-sm font-semibold text-[#A06A43]">
                  Từ {index + 1}
                </span>

                <span className="text-sm text-gray-400">
                  HSK 1
                </span>
              </div>

              <Flashcard word={word} />
            </div>
          ))}
        </div>

        {/* Bottom reminder */}
        <section className="mt-10 rounded-2xl border border-[#E8DFD2] bg-[#FFFDF8] p-6 text-center shadow-sm">
          <div className="text-2xl">📖</div>

          <h2 className="mt-2 text-lg font-bold text-[#1B365D]">
            Học chậm mà chắc
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
            Hãy đọc từ mới thành tiếng, xem nghĩa và thử đặt câu.
            Ôn lại nhiều lần sẽ giúp bạn ghi nhớ lâu hơn.
          </p>
        </section>

      </div>
    </main>
  );
}