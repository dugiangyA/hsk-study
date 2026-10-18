import Link from "next/link";

export default function GrammarPage() {
  const lessons = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-[#EEF4F1] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Nút quay lại */}
        <div className="mb-8">
          <Link
            href="/hsk1"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#356859] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Quay lại HSK 1
          </Link>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-[#356859] px-7 py-10 text-white shadow-lg md:px-12 md:py-12">

          {/* Chữ Hán trang trí */}
          <div className="pointer-events-none absolute -right-4 -top-12 select-none text-[180px] font-serif leading-none text-white/5">
            文
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              HSK 1 · Ngữ pháp
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Ngữ pháp HSK 1
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Nắm vững những cấu trúc ngữ pháp cơ bản để hiểu câu tiếng Trung
              và tự tin sử dụng trong giao tiếp hằng ngày.
            </p>
          </div>
        </section>

        {/* Tiêu đề danh sách */}
        <div className="mt-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
              Lộ trình học
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#29483F] md:text-3xl">
              Chọn bài ngữ pháp
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            30 bài học · HSK 1
          </p>
        </div>

        {/* Danh sách bài học */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              href={`/hsk1/Nguphap/${lesson}`}
              className="group relative overflow-hidden rounded-2xl border border-[#D9E6E0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Số bài */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E2F0EA] text-lg font-bold text-[#356859]">
                  {lesson}
                </div>

                <span className="text-2xl text-[#B8CCC4] transition duration-300 group-hover:translate-x-1 group-hover:text-[#356859]">
                  →
                </span>
              </div>

              {/* Nội dung */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-[#4F8A78]">
                  Bài {lesson}
                </p>

                <h3 className="mt-1 text-lg font-semibold leading-7 text-[#29483F]">
                  Bài ngữ pháp số {lesson}
                </h3>
              </div>

              {/* Thanh trang trí */}
              <div className="mt-5 h-1 w-10 rounded-full bg-[#C8DCD4] transition-all duration-300 group-hover:w-16 group-hover:bg-[#356859]" />
            </Link>
          ))}
        </div>
        
        {/* Bài học đặc biệt */}
        <section className="mt-12">
          <div>

            <h2 className="mt-1 text-2xl font-bold text-[#29483F] md:text-3xl">
              ⭐ Bài học đặc biệt
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
              Học cách đọc số và số tiền trong các tình huống thực tế.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Bài cách đọc số */}
            <Link
              href="/hsk1/Nguphap/sonumber"
              className="group rounded-2xl border border-[#D9E6E0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#A8C9BA] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E2F0EA] text-3xl">
                  🔢
                </div>

                <span className="text-2xl text-[#B8CCC4] transition group-hover:translate-x-1 group-hover:text-[#356859]">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#29483F]">
                Cách đọc số trong tiếng Trung
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Học cách đọc số từ cơ bản đến hàng chục, hàng trăm, hàng nghìn, hàng vạn và luyện tập với các ví dụ.
              </p>

              <div className="mt-5 inline-flex rounded-full bg-[#E2F0EA] px-3 py-1.5 text-sm font-semibold text-[#356859]">
                Học cách đọc số
              </div>
            </Link>

            {/* Bài cách đọc số tiền */}
            <Link
              href="/hsk1/Nguphap/money"
              className="group rounded-2xl border border-[#D9E6E0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#A8C9BA] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0D9] text-3xl">
                  💰
                </div>

                <span className="text-2xl text-[#B8CCC4] transition group-hover:translate-x-1 group-hover:text-[#356859]">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#29483F]">
                Cách đọc số tiền trong tiếng Trung
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Tìm hiểu 元、块、角、毛、分 và luyện cách đọc giá tiền
                trong các tình huống mua sắm.
              </p>

              <div className="mt-5 inline-flex rounded-full bg-[#FFF0D9] px-3 py-1.5 text-sm font-semibold text-[#94602C]">
                Học cách đọc tiền
              </div>
            </Link>
          </div>
        </section>

        {/* Gợi ý học */}
        <section className="mt-12 rounded-2xl border border-[#D9E6E0] bg-[#F8FCFA] p-6 text-center shadow-sm md:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E2F0EA] text-2xl">
            📝
          </div>

          <h2 className="mt-4 text-xl font-bold text-[#29483F]">
            Học ngữ pháp qua ví dụ
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Đừng chỉ ghi nhớ công thức. Hãy đọc ví dụ, hiểu cách sử dụng
            và thử tự đặt câu để biến ngữ pháp thành phản xạ tự nhiên.
          </p>
        </section>

      </div>
    </main>
  );
}