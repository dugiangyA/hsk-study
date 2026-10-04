
import Link from "next/link";

type PageProps = {
  params: Promise<{ lesson: string }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { lesson } = await params;

  const passages = [
    {
      id: 1,
      title: "Bài khóa 1",
      subtitle: "Luyện tập với bài khóa tiếng Trung",
      description: "Luyện nghe, đọc chữ Hán và hiểu nghĩa tiếng Việt.",
      icon: "1",
      color: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      id: 2,
      title: "Bài khóa 2",
      subtitle: "Luyện tập với bài khóa tiếng Trung",
      description: "Luyện nghe, đọc chữ Hán và hiểu nghĩa tiếng Việt.",
      icon: "2",
      color: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      id: 3,
      title: "Bài khóa 3",
      subtitle: "Luyện tập với bài khóa tiếng Trung",
      description: "Luyện nghe, đọc chữ Hán và hiểu nghĩa tiếng Việt.",
      icon: "3",
      color: "bg-green-50",
      border: "border-green-200",
    },
  ];

  return (
    <main
      className="min-h-screen px-5 py-10 sm:px-8 sm:py-14"
      style={{
        background:
          "repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 30px, #dbeafe 30px, #dbeafe 60px)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* NÚT QUAY LẠI */}
        <Link
          href="/hsk1/Nghedoc"
          className="inline-flex items-center gap-2 rounded-lg bg-[#6B4226] px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-[#52321c]"
        >
          <span>Quay lại bài học</span>
        </Link>

        {/* TIÊU ĐỀ */}
        <section className="mb-10 mt-10 text-center">
          <h1 className="text-3xl font-bold text-[#1B365D] sm:text-4xl">
            Bài học {lesson}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6B4226] sm:text-lg text-center">
            Chọn một bài khóa để bắt đầu luyện nghe và đọc tiếng Trung.
          </p>
        </section>

        {/* ĐƯỜNG KẺ TRANG TRÍ */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#1B365D]/20" />
          <span className="text-sm font-semibold text-[#6B4226]">
            CHỌN BÀI KHÓA
          </span>
          <div className="h-px flex-1 bg-[#1B365D]/20" />
        </div>

        {/* DANH SÁCH 3 BÀI KHÓA */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {passages.map((passage) => (
            <Link
              key={passage.id}
              href={`/hsk1/Nghedoc/${lesson}/${passage.id}`}
              className={`group relative overflow-hidden rounded-2xl border ${passage.border} bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* SỐ BÀI */}
              <div className="absolute right-4 top-3 text-5xl font-black text-[#1B365D]/5">
                0{passage.id}
              </div>

              {/* BIỂU TƯỢNG */}
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${passage.color} text-3xl font-bold text-[#1B365D] transition duration-300 group-hover:scale-110`}
              >
                {passage.icon}
              </div>

              {/* NỘI DUNG */}
              <h2 className="text-2xl font-bold text-[#1B365D] transition group-hover:text-[#6B4226]">
                {passage.title}
              </h2>

              <p className="mt-2 font-semibold text-[#6B4226]">
                {passage.subtitle}
              </p>

              <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-600">
                {passage.description}
              </p>

              {/* NHÃN LUYỆN TẬP */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1B365D]">
                  🎧 Luyện nghe
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-[#6B4226]">
                  📖 Luyện đọc
                </span>
              </div>

              {/* NÚT VÀO BÀI */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-semibold text-[#6B4226]">
                  Bắt đầu học
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* GỢI Ý HỌC TẬP */}
        <div className="mt-10 rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="text-lg font-bold text-[#1B365D]">
                Mẹo học tiếng Trung
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Bạn nên nghe bài khóa trước, sau đó đọc chữ Hán kết hợp với
                pinyin và nghĩa tiếng Việt. Cuối cùng, hãy làm câu hỏi trắc
                nghiệm để kiểm tra khả năng hiểu bài.
              </p>
            </div>
          </div>
        </div>

        {/* CHÂN TRANG */}
        <p className="mt-8 text-center text-sm text-black">
          HSK 1 · Luyện nghe · Luyện đọc · Học mỗi ngày một chút
        </p>
      </div>
    </main>
  );
}