import Link from "next/link";

const hskLevels = [
  {
    level: 1,
    title: "HSK 1",
    subtitle: "Nhập môn",
    description: "Làm quen với tiếng Trung, từ vựng và những mẫu câu cơ bản.",
    href: "/hsk1",
    active: true,
    chinese: "入门",
  },
  {
    level: 2,
    title: "HSK 2",
    subtitle: "Sơ cấp",
    description: "Mở rộng vốn từ và giao tiếp trong những tình huống quen thuộc.",
    href: "#",
    active: false,
    chinese: "初级",
  },
  {
    level: 3,
    title: "HSK 3",
    subtitle: "Trung cấp",
    description: "Phát triển khả năng giao tiếp và đọc hiểu tiếng Trung.",
    href: "#",
    active: false,
    chinese: "中级",
  },
  {
    level: 4,
    title: "HSK 4",
    subtitle: "Trung cấp cao",
    description: "Sử dụng tiếng Trung trong nhiều tình huống học tập và đời sống.",
    href: "#",
    active: false,
    chinese: "进阶",
  },
  {
    level: 5,
    title: "HSK 5",
    subtitle: "Cao cấp",
    description: "Nâng cao khả năng đọc, viết và diễn đạt bằng tiếng Trung.",
    href: "#",
    active: false,
    chinese: "高级",
  },
  {
    level: 6,
    title: "HSK 6",
    subtitle: "Thành thạo",
    description: "Hướng tới khả năng sử dụng tiếng Trung ở trình độ cao.",
    href: "#",
    active: false,
    chinese: "精通",
  },
];

const features = [
  {
    icon: "词",
    title: "Từ vựng",
    description: "Học từ mới theo từng cấp độ HSK.",
  },
  {
    icon: "文",
    title: "Ngữ pháp",
    description: "Nắm chắc các cấu trúc quan trọng.",
  },
  {
    icon: "听",
    title: "Nghe & phát âm",
    description: "Luyện nghe và phát âm từng bước.",
  },
  {
    icon: "练",
    title: "Luyện tập",
    description: "Ôn lại kiến thức sau mỗi bài học.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#243447]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#E5E1D8] bg-[#F7F5F0]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">

          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B365D] text-xl font-bold text-white shadow-sm transition group-hover:scale-105">
              学
            </div>

            <div>
              <div className="text-base font-bold tracking-tight text-[#1B365D]">
                THƯ VIỆN HSK
              </div>

              <div className="text-xs text-[#7A8794]">
                Học tiếng Trung mỗi ngày
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="rounded-full border border-[#D9D5CC] bg-white px-4 py-2 text-xs font-bold text-[#687585]">
              HSK 3.0
            </span>

            <span className="rounded-full bg-[#E9F0F7] px-4 py-2 text-xs font-semibold text-[#1B365D]">
              中文学习
            </span>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-[#DCE8F3] opacity-70 blur-3xl" />
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#F0E3C5] opacity-60 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#E4EEE7] opacity-50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Hero text */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9E2EC] bg-white/80 px-4 py-2 text-sm font-semibold text-[#1B365D] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#6B4226]" />
                Hành trình học tiếng Trung
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#1B365D] sm:text-6xl">

                Học tiếng Trung

                <span className="mt-2 block text-[#6B4226]">
                  theo từng cấp độ HSK
                </span>

              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#657383] sm:text-lg">
                Một thư viện học tập được xây dựng để giúp bạn đi từ những
                kiến thức đầu tiên đến khả năng sử dụng tiếng Trung thành thạo.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/hsk1"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#1B365D] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1B365D]/15 transition hover:-translate-y-0.5 hover:bg-[#142A49]"
                >
                  Bắt đầu với HSK 1
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#lo-trinh"
                  className="inline-flex items-center rounded-xl border border-[#D8D4CB] bg-white px-6 py-3.5 text-sm font-bold text-[#536273] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Xem lộ trình
                </a>

              </div>

              {/* Small stats */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-[#DDD9D0] pt-7">

                <div>
                  <div className="text-2xl font-extrabold text-[#1B365D]">
                    6
                  </div>
                  <div className="mt-1 text-xs text-[#7C8792]">
                    Cấp độ HSK
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-extrabold text-[#1B365D]">
                    3.0
                  </div>
                  <div className="mt-1 text-xs text-[#7C8792]">
                    Hệ thống HSK
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-extrabold text-[#1B365D]">
                    4
                  </div>
                  <div className="mt-1 text-xs text-[#7C8792]">
                    Nội dung học
                  </div>
                </div>

              </div>

            </div>


            {/* Hero visual */}
            <div className="relative hidden lg:block">

              <div className="relative mx-auto h-[390px] w-[390px]">

                {/* Main card */}
                <div className="absolute left-10 top-10 h-72 w-72 rotate-[-4deg] rounded-[2rem] bg-[#FFFDF7] p-7 shadow-[0_25px_70px_rgba(27,54,93,0.15)]">

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#EAF0F6] px-3 py-1 text-xs font-bold text-[#1B365D]">
                      HSK 1
                    </span>

                    <span className="text-xs text-[#9AA4AE]">
                      01 / 06
                    </span>
                  </div>

                  <div className="mt-10 text-center">
                    <div className="font-serif text-8xl font-bold text-[#1B365D]">
                      你好
                    </div>

                    <div className="mt-4 text-lg font-semibold text-[#6B4226]">
                      Nǐ hǎo
                    </div>
                  </div>
                </div>


                {/* Small floating card */}
                <div className="absolute right-0 top-0 w-44 rotate-[6deg] rounded-2xl border border-[#E3DDD2] bg-white p-5 shadow-xl">

                  <div className="text-xs font-bold uppercase tracking-wider text-[#A07A55]">
                    Từ vựng
                  </div>

                  <div className="mt-3 text-3xl font-serif font-bold text-[#1B365D]">
                    学习
                  </div>

                  <div className="mt-1 text-xs text-[#7B8794]">
                    học tập
                  </div>

                </div>


                {/* Bottom card */}
                <div className="absolute bottom-0 right-2 w-52 rotate-[-3deg] rounded-2xl bg-[#1B365D] p-5 text-white shadow-xl">

                  <div className="text-xs text-[#B8C7D7]">
                    今日学习
                  </div>

                  <div className="mt-2 text-lg font-bold">
                    Học một chút
                  </div>

                  <div className="mt-1 text-xs text-[#C9D4DF]">
                    mỗi ngày đều tiến bộ
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="border-y border-[#E5E1D8] bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-[#E7E2D9] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F4F7] font-serif text-xl font-bold text-[#6B4226] transition group-hover:bg-[#1B365D] group-hover:text-white">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#7B8794]">
                      {feature.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= HSK ROADMAP ================= */}
      <section id="lo-trinh" className="px-5 py-16 sm:px-8 sm:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A17A55]">
              Learning roadmap
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1B365D] sm:text-4xl">
              Lộ trình HSK
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#7A8794]">
              Chọn cấp độ phù hợp với trình độ hiện tại và bắt đầu hành trình
              học tiếng Trung của bạn.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {hskLevels.map((hsk) => {

              const content = (
                <div className="relative h-full p-6">

                  {/* Number */}
                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold ${
                        hsk.active
                          ? "bg-[#1B365D] text-white"
                          : "bg-[#EDF1F5] text-[#526274]"
                      }`}
                    >
                      {hsk.level}
                    </div>

                    <span className="font-serif text-3xl font-bold text-[#E5E0D8]">
                      {hsk.chinese}
                    </span>

                  </div>


                  {/* Content */}
                  <div className="mt-6">

                    <div className="flex items-center gap-3">

                      <h3 className="text-2xl font-extrabold text-[#1B365D]">
                        {hsk.title}
                      </h3>

                      {hsk.active && (
                        <span className="rounded-full bg-[#F4E7D4] px-2.5 py-1 text-[10px] font-bold text-[#8A603A]">
                          ĐANG HỌC
                        </span>
                      )}

                    </div>

                    <p className="mt-1 text-sm font-bold text-[#A17A55]">
                      {hsk.subtitle}
                    </p>

                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#71808F]">
                      {hsk.description}
                    </p>

                  </div>


                  {/* Bottom */}
                  <div className="mt-6 border-t border-[#E9E5DE] pt-5">

                    {hsk.active ? (
                      <div className="flex items-center justify-between">

                        <span className="text-sm font-bold text-[#1B365D]">
                          Khám phá HSK 1
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B365D] text-white transition group-hover:translate-x-1">
                          →
                        </span>

                      </div>
                    ) : (
                      <div className="flex items-center justify-between">

                        <span className="text-sm font-medium text-[#A0A7AE]">
                          Đang phát triển
                        </span>

                        <span className="text-sm text-[#B3B9BF]">
                          🔒
                        </span>

                      </div>
                    )}

                  </div>

                </div>
              );


              if (hsk.active) {
                return (
                  <Link
                    key={hsk.level}
                    href={hsk.href}
                    className="group relative overflow-hidden rounded-3xl border-2 border-[#1B365D] bg-white shadow-[0_12px_35px_rgba(27,54,93,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(27,54,93,0.16)]"
                  >

                    {/* Active top line */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-[#6B4226]" />

                    {content}

                  </Link>
                );
              }


              return (
                <div
                  key={hsk.level}
                  className="relative overflow-hidden rounded-3xl border border-[#E1DDD5] bg-white/70 shadow-sm"
                >
                  {content}
                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-5 pb-16 sm:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#1B365D] px-7 py-12 text-white shadow-[0_20px_50px_rgba(27,54,93,0.18)] sm:px-12">

            <div className="absolute -right-16 -top-24 font-serif text-[220px] font-bold text-white/5">
              学
            </div>

            <div className="relative max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B9C8D8]">
                Start learning
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Bạn đã sẵn sàng bắt đầu với tiếng Trung?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#C9D4DF]">
                Không cần học quá nhiều ngay từ đầu. Hãy bắt đầu với HSK 1 và tiến lên từng bước một.
              </p>

              <Link
                href="/hsk1"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#1B365D] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#FFF9ED]"
              >
                Bắt đầu học HSK 1
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E1DDD5] bg-[#F0EEE8]">

        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B365D] font-serif font-bold text-white">
                学
              </div>

              <div>
                <div className="text-sm font-bold text-[#1B365D]">
                  THƯ VIỆN HSK
                </div>

                <div className="text-xs text-[#89929B]">
                  Học tiếng Trung mỗi ngày
                </div>
              </div>

            </div>

            <div className="text-xs text-[#89929B]">
              © 2026 Thư viện HSK 3.0
            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}

