import Link from "next/link";

const hskLevels = [
  {
    level: 1,
    title: "HSK 1",
    subtitle: "Nhập môn",
    description: "Làm quen với tiếng Trung và những mẫu câu cơ bản.",
    href: "/hsk1",
    active: true,
  },
  {
    level: 2,
    title: "HSK 2",
    subtitle: "Sơ cấp",
    description: "Mở rộng vốn từ và giao tiếp trong đời sống hằng ngày.",
    href: "#",
    active: false,
  },
  {
    level: 3,
    title: "HSK 3",
    subtitle: "Trung cấp",
    description: "Phát triển khả năng giao tiếp và đọc hiểu.",
    href: "#",
    active: false,
  },
  {
    level: 4,
    title: "HSK 4",
    subtitle: "Trung cấp cao",
    description: "Đọc hiểu và sử dụng tiếng Trung trong nhiều tình huống.",
    href: "#",
    active: false,
  },
  {
    level: 5,
    title: "HSK 5",
    subtitle: "Cao cấp",
    description: "Nâng cao khả năng đọc, viết và diễn đạt bằng tiếng Trung.",
    href: "#",
    active: false,
  },
  {
    level: 6,
    title: "HSK 6",
    subtitle: "Thành thạo",
    description: "Hướng tới khả năng sử dụng tiếng Trung ở trình độ cao.",
    href: "#",
    active: false,
  },
];

export default function Home() {
  return (
    <main
  className="min-h-screen text-[#1B365D]"
  style={{
    backgroundColor: "#FFFFFF",
    backgroundImage: `
      linear-gradient(45deg, #DCEBFA 25%, transparent 25%),
      linear-gradient(-45deg, #DCEBFA 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #DCEBFA 75%),
      linear-gradient(-45deg, transparent 75%, #DCEBFA 75%)
    `,
    backgroundSize: "60px 60px",
    backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  }}
>

      {/* HEADER */}
      <header className="border-b border-[#E5DED4] bg-[#1B365D]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl tracking-tight text-white">
              THƯ VIỆN HSK 
            </h1>
            <p className="text-sm text-white">
              Học tiếng Trung mỗi ngày
            </p>
          </div>

          <div className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1B365D] sm:block">
            HSK 3.0
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pb-12 pt-16">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border-5 border-[#6B4226] bg-[#FFF9C4] px-6 py-12 text-center shadow-sm sm:px-12">

            <h2 className="text-4xl tracking-tight text-[#1B365D] sm:text-5xl">
              HỌC TIẾNG TRUNG TỪNG CẤP ĐỘ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg">
              Thư viện được sắp xếp theo từng cấp độ HSK,
              giúp bạn học từ những kiến thức cơ bản đến trình độ nâng cao.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4226]">
                Từ vựng
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4226]">
                Ngữ pháp
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4226]">
                Nghe & nói
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B4226]">
                Luyện thi
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* HSK LEVELS */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B4226] text-center">
              Lộ trình học
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {hskLevels.map((hsk) => {

              const CardContent = (
                <>
                  <div className="p-7">

                    {/* Số HSK */}
                    <div className="flex items-start justify-between">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold ${
                          hsk.active
                            ? "bg-[#6B4226] text-white"
                            : "bg-[#EAF2FB] text-[#1B365D]"
                        }`}
                      >
                        {hsk.level}
                      </div>
                    </div>

                    {/* Nội dung */}
                    <div className="mt-6">

                      <h3 className="text-2xl font-extrabold text-[#1B365D]">
                        {hsk.title}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-[#6B4226]">
                        {hsk.subtitle}
                      </p>

                      <p className="mt-4 min-h-[56px] text-sm leading-6 text-black">
                        {hsk.description}
                      </p>

                    </div>

                    {/* Nút */}
                    <div className="mt-6">

                      {hsk.active ? (
                        <div className="flex items-center justify-between rounded-xl bg-[#FFF9C4] px-4 py-3 text-sm font-bold text-[#6B4226]">
                          <span>Khám phá HSK 1</span>
                          <span className="text-lg">→</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-400">
                          <span>Đang phát triển</span>
                          <span>🔒</span>
                        </div>
                      )}

                    </div>
                  </div>
                </>
              );

              if (hsk.active) {
                return (
                  <Link
                    key={hsk.level}
                    href={hsk.href}
                    className="group overflow-hidden rounded-2xl border-3 border-[#6B4226] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={hsk.level}
                  className="overflow-hidden rounded-2xl border-3 border-[#6B4226] bg-white shadow-sm"
                >
                  {CardContent}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5DED4] bg-[#1B365D]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">

          <div className="text-2xl font-bold text-white">
            学中文
          </div>

          <p className="mt-2 text-sm text-white">
            Thư viện học tiếng Trung theo cấp độ HSK
          </p>

          <p className="mt-4 text-xs text-white">
            © 2026 Thư viện HSK 3.0
          </p>

        </div>
      </footer>

    </main>
  );
}
