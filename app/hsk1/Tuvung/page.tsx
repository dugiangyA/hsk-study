import Link from "next/link";

export default function VocabularyPage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

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

  return (
    <main className="min-h-screen bg-[#F7F2E8] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <Link
            href="/hsk1"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#6B4226] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>←</span>
            Quay lại HSK 1
          </Link>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-[#1B365D] px-7 py-10 text-white shadow-lg md:px-12 md:py-12">

          {/* Decorative Chinese character */}
          <div className="pointer-events-none absolute -right-4 -top-10 select-none text-[180px] font-serif leading-none text-white/5">
            词
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              HSK 1 · Từ vựng
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Từ vựng HSK 1
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Học từ vựng theo từng bài, ghi nhớ từ mới và xây dựng nền tảng
              tiếng Trung vững chắc từ những từ thông dụng nhất.
            </p>
          </div>
        </section>

        {/* Section title */}
        <div className="mt-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#A06A43]">
              Lộ trình học
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#1B365D] md:text-3xl">
              Chọn bài học
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            15 bài học · HSK 1
          </p>
        </div>

        {/* Lesson cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              href={`/hsk1/Tuvung/${lesson}`}
              className="group relative overflow-hidden rounded-2xl border border-[#E8DFD2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4D6] text-lg font-bold text-[#6B4226]">
                  {lesson}
                </div>

                <span className="text-2xl text-[#D8C9B8] transition group-hover:translate-x-1 group-hover:text-[#6B4226]">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-[#A06A43]">
                  Bài {lesson}
                </p>

                <h3 className="mt-1 min-h-[56px] text-lg font-semibold leading-7 text-[#1B365D]">
                  {lessonTitles[lesson]}
                </h3>
              </div>

              {/* Bottom line */}
              <div className="mt-5 h-1 w-10 rounded-full bg-[#D8C9B8] transition-all duration-300 group-hover:w-16 group-hover:bg-[#6B4226]" />
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <section className="mt-12 rounded-2xl border border-[#E8DFD2] bg-[#FFFDF8] p-6 text-center shadow-sm md:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4D6] text-2xl">
            📚
          </div>

          <h2 className="mt-4 text-xl font-bold text-[#1B365D]">
            Học một chút mỗi ngày
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Đừng cố học quá nhiều từ cùng một lúc. Hãy học từng bài,
            ôn lại thường xuyên và sử dụng từ mới trong câu để nhớ lâu hơn.
          </p>
        </section>

      </div>
    </main>
  );
}