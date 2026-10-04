import Link from "next/link";

export default function NgheDocPage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <main
      className="min-h-screen px-5 py-12 sm:px-8"
      style={{
        background:
          "repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 30px, #dbeafe 30px, #dbeafe 60px)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* NÚT QUAY LẠI */}
        <Link
          href="/hsk1"
          className="inline-flex items-center gap-2 rounded-lg bg-[#6B4226] px-4 py-2 font-medium text-white transition hover:bg-[#52321c]"
        >
          <span>Quay lại HSK 1</span>
        </Link>

        {/* TIÊU ĐỀ */}
        <div className="mb-10 mt-8 text-center">
          <h1 className="text-3xl font-bold text-[#1B365D] sm:text-4xl">
            Luyện nghe và nói HSK 1
          </h1>

          <p className="mt-3 text-base text-[#6B4226] sm:text-lg">
            Chọn bài học để bắt đầu luyện tập tiếng Trung.
          </p>
        </div>

        {/* DANH SÁCH 15 BÀI HỌC */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              href={`/hsk1/Nghedoc/${lesson}`}
              className="group rounded-xl border border-blue-100 bg-white p-5 shadow-md transition duration-200 hover:-translate-y-1 hover:border-[#6B4226] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                {/* SỐ THỨ TỰ */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1B365D] text-xl font-bold text-white transition group-hover:bg-[#6B4226]">
                  {String(lesson).padStart(2, "0")}
                </div>

                {/* THÔNG TIN BÀI HỌC */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-[#6B4226]">
                    Bài học {lesson}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Nghe và đọc tiếng Trung
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CUỐI TRANG */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#6B4226]">
            HSK 1 · 15 bài học luyện nghe và đọc
          </p>
        </div>
      </div>
    </main>
  );
}