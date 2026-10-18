
import Link from "next/link";

export default function NgheDocPage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-[#FFF5F7] px-5 py-10 sm:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Nút quay lại */}
        <div>
          <Link
            href="/hsk1"
            className="inline-flex items-center gap-2 rounded-full border border-[#FFD6E5] bg-white px-5 py-2.5 text-sm font-semibold text-[#B94F73] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Quay lại HSK 1
          </Link>
        </div>

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-[28px] bg-[#FFD6E5] px-6 py-10 text-white shadow-lg shadow-[#B94F73]/10 sm:px-10 sm:py-12 md:px-14 md:py-14">
          {/* Họa tiết trang trí */}
          <div className="pointer-events-none absolute -right-5 -top-12 select-none font-serif text-[180px] leading-none text-[#FFF5F7] sm:text-[230px]">
            听
          </div>


          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#78374D] bg-[#FFF5F7] px-4 py-2 text-sm font-medium text-[#78374D]">
              HSK 1 · Nghe và nói
            </div>

            <h1 className="mt-6 text-3xl text-[#78374D] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Luyện nghe và nói HSK 1
            </h1>

            <p className="mt-5 max-w-2xl text-[#78374D] text-sm leading-7 sm:text-base md:text-lg">
              Luyện nghe, đọc và làm quen với cách diễn đạt tiếng Trung
              qua từng bài học. Học từng bước để giao tiếp tự nhiên hơn
              mỗi ngày.
            </p>
          </div>
        </section>

        {/* Tiêu đề danh sách */}
        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C76B8A]">
                Learning path
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#78374D] sm:text-3xl">
                Chọn bài học
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#956F7D]">
                Chọn một bài để bắt đầu hành trình luyện nghe và đọc.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F9DCE5] px-4 py-2 text-sm font-semibold text-[#963D60]">
              <span className="h-2 w-2 rounded-full bg-[#D97896]" />
              15 bài học
            </div>
          </div>

          {/* Danh sách bài học */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson}
                href={`/hsk1/Nghedoc/${lesson}`}
                className="group relative overflow-hidden rounded-2xl border border-[#F2DDE4] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#EFA3B8] hover:shadow-lg hover:shadow-[#B94F73]/10"
              >
                {/* Vệt màu khi hover */}
                <div className="absolute left-0 top-0 h-full w-1 origin-bottom scale-y-0 bg-[#B94F73] transition-transform duration-300 group-hover:scale-y-100" />

                <div className="flex items-center gap-4">
                  {/* Số bài học */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F9DCE5] text-lg font-bold text-[#B94F73] transition duration-300 group-hover:bg-[#B94F73] group-hover:text-white">
                    {String(lesson).padStart(2, "0")}
                  </div>

                  {/* Nội dung */}
                  <div className="min-w-0 flex-1">
                    <h3 className="mt-1 text-lg font-bold text-[#78374D] transition-colors group-hover:text-[#B94F73]">
                      Bài học {lesson}
                    </h3>

                    <p className="mt-1 text-sm text-[#947782]">
                      Nghe và đọc tiếng Trung
                    </p>
                  </div>

                  {/* Mũi tên */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF5F7] text-lg text-[#C76B8A] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#F9DCE5] group-hover:text-[#B94F73]">
                    →
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#F8E8ED] pt-4">
                  <span className="text-xs font-medium text-[#A77D8B]">
                    HSK 1 · Sơ cấp
                  </span>

                  <span className="text-xs font-semibold text-[#B94F73] opacity-0 transition-opacity group-hover:opacity-100">
                    Bắt đầu học 
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Gợi ý học tập */}
        <section className="mt-12 rounded-3xl border border-[#F2DDE4] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F9DCE5] text-3xl">
              🌸
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#78374D]">
                Mỗi ngày một chút, tiến bộ từng ngày
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#956F7D]">
                Hãy nghe kỹ, đọc thành tiếng và thử nhắc lại những câu
                đã học. Luyện tập đều đặn sẽ giúp bạn ghi nhớ từ vựng
                và phản xạ tiếng Trung tốt hơn.
              </p>
            </div>
          </div>
        </section>

        {/* Cuối trang */}
        <footer className="mt-8 pb-2 text-center">
          <p className="text-sm font-medium text-[#A77D8B]">
            HSK 1
            <span className="mx-2 text-[#E8B7C7]">✦</span>
            听力与朗读
            <span className="mx-2 text-[#E8B7C7]">✦</span>
            Học tiếng Trung mỗi ngày
          </p>
        </footer>
      </div>
    </main>
  );
}