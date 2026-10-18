
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
      subtitle: "Luyện nghe và đọc",
      description:
        "Luyện nghe hội thoại, đọc chữ Hán để hiểu cách người Trung Quốc giao tiếp.",
      icon: "一",
      color: "bg-[#FFE1EB]",
      border: "border-[#FFC2D8]",
    },
    {
      id: 2,
      title: "Bài khóa 2",
      subtitle: "Luyện nghe và đọc",
      description:
        "Luyện nghe hội thoại, đọc chữ Hán để hiểu cách người Trung Quốc giao tiếp.",
      icon: "二",
      color: "bg-[#FFD6E5]",
      border: "border-[#FFB6D0]",
    },
    {
      id: 3,
      title: "Bài khóa 3",
      subtitle: "Luyện nghe và đọc",
      description:
        "Luyện nghe hội thoại, đọc chữ Hán để hiểu cách người Trung Quốc giao tiếp.",
      icon: "三",
      color: "bg-[#FFE8F0]",
      border: "border-[#F7C8D9]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF5F9] px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* NÚT QUAY LẠI */}
        <Link
          href="/hsk1/Nghedoc"
          className="group inline-flex items-center gap-2 rounded-full border border-[#FFC2D8] bg-white px-5 py-2.5 text-sm font-semibold text-[#B83268] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          Quay lại danh sách bài học
        </Link>

        {/* TIÊU ĐỀ */}
        <section className="relative mt-8 overflow-hidden rounded-[28px] bg-[#FFD6E5] from-[#FF8FB8] via-[#FF9FC3] to-[#FFC2D8] px-6 py-10 text-white shadow-lg shadow-[#FF8FB8]/20 sm:px-10 sm:py-12 md:px-14">
          {/* Họa tiết trang trí */}
          <div className="pointer-events-none absolute -right-3 -top-10 select-none font-serif text-[170px] leading-none text-[#FFF5F9] sm:text-[220px]">
            听
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#78374D] bg-[#FFF5F7] px-4 py-2 text-sm font-medium text-[#78374D]">
              HSK 1 · Nghe và nói
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#78374D] leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Bài học {lesson}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78374D] sm:text-base md:text-lg">
              Chọn một bài khóa để bắt đầu luyện nghe, đọc chữ Hán
              và khám phá những mẫu câu tiếng Trung cơ bản.
            </p>
          </div>
        </section>

        {/* TIÊU ĐỀ DANH SÁCH */}
        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>

              <h2 className="mt-2 text-2xl font-bold text-[#A83263] sm:text-3xl">
                Chọn bài khóa
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#956F7D]">
                Học từng bài một để ghi nhớ kiến thức hiệu quả hơn.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFC2D8] bg-white px-4 py-2 text-sm font-semibold text-[#B83268]">
              <span className="h-2 w-2 rounded-full bg-[#FF69A6]" />
              3 bài khóa
            </div>
          </div>

          {/* DANH SÁCH BÀI KHÓA */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {passages.map((passage) => (
              <Link
                key={passage.id}
                href={`/hsk1/Nghedoc/${lesson}/${passage.id}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border ${passage.border} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FF8FB8]/15`}
              >
                {/* Số bài trang trí */}
                <div className="pointer-events-none absolute right-4 top-2 select-none text-6xl font-black text-[#FFB6D0]/30">
                  0{passage.id}
                </div>

                {/* Biểu tượng */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${passage.color} text-3xl font-bold text-[#B83268] shadow-sm transition duration-300 group-hover:rotate-3 group-hover:scale-110`}
                >
                  {passage.icon}
                </div>

                {/* Nội dung */}
                <div className="mt-5">
                  <h3 className="text-2xl font-extrabold text-[#78374D]">
                    {passage.title}
                  </h3>

                  <p className="mt-2 font-semibold text-[#D95787]">
                    {passage.subtitle}
                  </p>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#806B74]">
                    {passage.description}
                  </p>
                </div>

                {/* Nhãn luyện tập */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5 text-xs font-semibold text-[#B83268]">
                    🎧 Luyện nghe
                  </span>

                  <span className="rounded-full bg-[#FFE5EE] px-3 py-1.5 text-xs font-semibold text-[#B83268]">
                    📖 Luyện đọc
                  </span>
                </div>

                {/* Nút bắt đầu */}
                <div className="mt-auto flex items-center justify-between border-t border-[#FBE4EC] pt-5 mt-6">
                  <span className="text-sm font-bold text-[#B83268]">
                    Bắt đầu học
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE5EE] text-lg text-[#D95787] transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GỢI Ý HỌC TẬP */}
        <section className="mt-10 rounded-3xl border border-[#FFC2D8] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFE5EE] text-3xl">
              💡
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#A83263] sm:text-xl">
                Mẹo học tiếng Trung hiệu quả
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#806B74]">
                Hãy nghe bài khóa trước, sau đó đọc chữ Hán kết hợp với
                pinyin và nghĩa tiếng Việt. Cuối cùng, làm các câu hỏi
                trắc nghiệm để kiểm tra khả năng hiểu bài. Đừng quên
                luyện đọc thành tiếng để ghi nhớ lâu hơn nhé!
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5 text-xs font-semibold text-[#B83268]">
                  01 · Nghe trước
                </span>
                <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5 text-xs font-semibold text-[#B83268]">
                  02 · Đọc thành tiếng
                </span>
                <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5 text-xs font-semibold text-[#B83268]">
                  03 · Ôn tập
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CHÂN TRANG */}
        <footer className="mt-8 pb-2 text-center">
          <p className="text-sm font-medium text-[#A77D8B]">
            HSK 1
            <span className="mx-2 text-[#FFB6D0]">✿</span>
            听力与阅读
            <span className="mx-2 text-[#FFB6D0]">✿</span>
            Học tiếng Trung mỗi ngày
          </p>
        </footer>
      </div>
    </main>
  );
}