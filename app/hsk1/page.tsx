import Link from "next/link";

const sections = [
  {
    id: "01",
    title: "Từ vựng",
    subtitle: "Vocabulary",
    description: "Học và ghi nhớ từ vựng HSK 1 qua các bài học và flashcard.",
    href: "/hsk1/Tuvung",
    icon: "词",
    bg: "bg-[#FFF8D8]",
  },
  {
    id: "02",
    title: "Ngữ pháp",
    subtitle: "Grammar",
    description: "Nắm vững những cấu trúc ngữ pháp tiếng Trung cơ bản.",
    href: "/hsk1/Nguphap",
    icon: "文",
    bg: "bg-[#FFF3D6]",
  },
  {
    id: "03",
    title: "Luyện nghe & phát âm",
    subtitle: "Listening & Pronunciation",
    description: "Luyện nghe, phát âm và làm quen với các bài khóa tiếng Trung.",
    href: "/hsk1/Nghedoc",
    icon: "听",
    bg: "bg-[#FFF8E8]",
  },
  {
    id: "04",
    title: "Bài tập",
    subtitle: "Practice",
    description: "Ôn tập và kiểm tra kiến thức HSK 1 sau mỗi bài học.",
    href: "/hsk1/Baitap",
    icon: "练",
    bg: "bg-[#F7F3EA]",
  },
];

export default function HSK1Page() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] text-[#3E2A1F]">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#E8D7B8] opacity-40 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#F1D99A] opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#E9CFAF] opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">

        {/* HEADER */}
        <div className="mb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-[#D8C4A8] bg-white/80 px-5 py-2.5 text-sm font-medium text-[#6B4226] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Về trang chủ
          </Link>
        </div>

        {/* HERO */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#E4D3B8] bg-[#FFFDF8] px-7 py-10 shadow-[0_20px_60px_rgba(107,66,38,0.10)] sm:px-12 sm:py-14">

          {/* Decorative Chinese character */}
          <div className="absolute -right-4 -top-12 select-none text-[180px] font-serif font-bold text-[#F2E5CE]">
            汉
          </div>

          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#6B4226] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
              <span>中文学习</span>
              <span className="opacity-60">•</span>
              <span>HSK 1</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#3E2A1F] sm:text-5xl">
              HSK 1
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#745F50] sm:text-lg">
              Bắt đầu hành trình học tiếng Trung từ những kiến thức cơ bản
              nhất. Học từ vựng, ngữ pháp, nghe và phát âm theo từng bước.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-xl bg-[#F8EFD9] px-4 py-2.5 text-sm font-medium text-[#6B4226]">
                📚 4 nội dung học
              </div>

              <div className="rounded-xl bg-[#F8EFD9] px-4 py-2.5 text-sm font-medium text-[#6B4226]">
                🌱 Trình độ cơ bản
              </div>

              <div className="rounded-xl bg-[#F8EFD9] px-4 py-2.5 text-sm font-medium text-[#6B4226]">
                🎯 HSK 1
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TITLE */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#A17A55]">
              Learning path
            </p>

            <h2 className="text-2xl font-bold text-[#3E2A1F] sm:text-3xl">
              Nội dung HSK 1
            </h2>
          </div>

          <div className="hidden text-sm text-[#8C7767] sm:block">
            Chọn một nội dung để bắt đầu
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-2">

          {sections.map((section) => {
            const isDisabled = section.href === "#";

            const cardContent = (
              <>
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${section.bg} text-2xl font-bold text-[#6B4226] shadow-sm`}
                  >
                    {section.icon}
                  </div>

                  <span className="text-sm font-bold tracking-widest text-[#B49A7F]">
                    {section.id}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A17A55]">
                    {section.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#3E2A1F]">
                    {section.title}
                  </h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-6 text-[#766354]">
                    {section.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[#E8DCCB] pt-5">
                  <span className="text-sm font-medium text-[#8A6B50]">
                    {isDisabled ? "Sắp ra mắt" : "Bắt đầu học"}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      isDisabled
                        ? "bg-[#E8E1D7] text-[#A99C8E]"
                        : "bg-[#6B4226] text-white"
                    } transition-transform ${
                      !isDisabled ? "group-hover:translate-x-1" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
              </>
            );

            if (isDisabled) {
              return (
                <div
                  key={section.id}
                  className="rounded-3xl border border-[#E5DCCE] bg-white/70 p-6 opacity-80 shadow-sm"
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={section.id}
                href={section.href}
                className="group rounded-3xl border border-[#E4D7C5] bg-white p-6 shadow-[0_10px_30px_rgba(107,66,38,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#CBAE88] hover:shadow-[0_18px_40px_rgba(107,66,38,0.13)]"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* FOOTER TIP */}
        <section className="mt-10 rounded-3xl border border-[#E3D2B9] bg-[#6B4226] px-6 py-7 text-white shadow-[0_15px_40px_rgba(107,66,38,0.15)] sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8D3B3]">
                学中文 · Learn Chinese
              </p>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Học từng chút một, tiến bộ mỗi ngày.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#E9DCCF]">
                Đừng cố học quá nhiều cùng lúc. Hãy bắt đầu từ từ vựng,
                sau đó kết hợp ngữ pháp, nghe và luyện tập.
              </p>
            </div>

            <div className="shrink-0 text-5xl opacity-80">
              学
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

