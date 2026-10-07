import Link from "next/link";
import { grammar as grammarData } from "../data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GrammarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lessonNumber = Number(id);

  const grammar =
    grammarData[lessonNumber as keyof typeof grammarData];

  // Không tìm thấy bài
  if (!grammar) {
    return (
      <main className="min-h-screen bg-[#EEF4F1] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E2F0EA] text-3xl text-[#356859]">
              ?
            </div>

            <h1 className="mt-5 text-3xl font-bold text-[#29483F]">
              Không tìm thấy bài ngữ pháp
            </h1>

            <p className="mt-3 text-gray-500">
              Bài học bạn đang tìm kiếm không tồn tại.
            </p>

            <Link
              href="/hsk1/Nguphap"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#356859] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#294F43] hover:shadow-md"
            >
              ← Quay lại bài học
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EEF4F1] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">

        {/* Quay lại */}
        <div className="mb-8">
          <Link
            href="/hsk1/Nguphap"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#356859] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>←</span>
            Quay lại bài học
          </Link>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-3xl bg-[#356859] px-7 py-9 text-white shadow-lg md:px-10 md:py-11">

          {/* Chữ Hán trang trí */}
          <div className="pointer-events-none absolute -right-5 -top-12 select-none text-[170px] font-serif leading-none text-white/5">
            文
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              HSK 1 · Ngữ pháp
            </div>

            <p className="mt-6 text-sm font-medium text-white/60">
              Bài {lessonNumber}
            </p>

            <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
              {grammar.title}
            </h1>

            <p className="mt-3 text-lg text-white/75">
              {grammar.pinyin}
            </p>

            <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
              {grammar.meaning}
            </div>
          </div>
        </section>

        {/* Nội dung chính */}
        <div className="mt-8 space-y-6">

          {/* Giải thích */}
          <section className="rounded-3xl border border-[#D9E6E0] bg-white p-7 shadow-sm md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
                💡
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                  Hiểu bài
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                  Giải thích
                </h2>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg md:leading-9">
              {grammar.explanation}
            </p>
          </section>

          {/* Cấu trúc */}
          <section className="rounded-3xl border border-[#D9E6E0] bg-[#F8FCFA] p-7 shadow-sm md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
                🧩
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                  Công thức
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                  Cấu trúc
                </h2>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl bg-white px-5 py-7 text-center shadow-sm">
              <p className="whitespace-nowrap text-xl font-semibold text-[#356859] md:text-2xl">
                {grammar.structure}
              </p>
            </div>
          </section>

          {/* Ví dụ */}
          <section className="rounded-3xl border border-[#D9E6E0] bg-white p-7 shadow-sm md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F0EA] text-xl">
                📖
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#4F8A78]">
                  Áp dụng
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#29483F]">
                  Ví dụ
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {grammar.examples.map((example, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#E6EEE9] bg-[#FAFCFB] p-5 transition hover:border-[#C8DCD4] hover:bg-[#F6FAF8] md:p-6"
                >
                  {/* Số thứ tự */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E2F0EA] text-sm font-bold text-[#356859]">
                      {index + 1}
                    </span>

                    <span className="text-sm font-medium text-gray-400">
                      Ví dụ {index + 1}
                    </span>
                  </div>

                  {/* Tiếng Trung */}
                  <p className="text-2xl font-semibold leading-relaxed text-[#29483F] md:text-3xl">
                    {example.chinese}
                  </p>

                  {/* Pinyin */}
                  <p className="mt-3 text-base italic leading-7 text-[#6B8178] md:text-lg">
                    {example.pinyin}
                  </p>

                  {/* Tiếng Việt */}
                  <div className="mt-3 border-l-4 border-[#C8DCD4] pl-4">
                    <p className="text-base leading-7 text-gray-700 md:text-lg">
                      {example.vietnamese}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ghi nhớ */}
          <section className="rounded-3xl border border-[#C8DCD4] bg-[#E8F2ED] p-7 text-center md:p-9">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
              🌱
            </div>

            <h2 className="mt-4 text-xl font-bold text-[#29483F]">
              Ghi nhớ
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#52665E] md:text-base">
              Hãy đọc lại cấu trúc một lần, sau đó tự đặt một câu
              bằng ngữ pháp này. Việc tự tạo câu sẽ giúp bạn nhớ lâu
              hơn chỉ học thuộc lý thuyết.
            </p>
          </section>

        </div>

        {/* Quay lại cuối trang */}
        <div className="mt-8 text-center">
          <Link
            href="/hsk1/Nguphap"
            className="inline-flex items-center gap-2 rounded-full bg-[#356859] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#294F43] hover:shadow-md"
          >
            ← Xem các bài ngữ pháp khác
          </Link>
        </div>

      </div>
    </main>
  );
}