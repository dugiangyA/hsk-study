import Link from "next/link";
import { grammar as grammarData } from "../data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GrammarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lessonNumber = Number(id);

  const grammar = grammarData[lessonNumber as keyof typeof grammarData];

  // Không tìm thấy bài
  if (!grammar) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-red-600">
            Không tìm thấy bài ngữ pháp
          </h1>

          <Link
            href="/hsk1/Nguphap"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Quay lại danh sách bài
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{
        background: `repeating-linear-gradient(
          90deg,
          #ffffff 0px,
          #ffffff 30px,
          #dbeafe 30px,
          #dbeafe 60px
        )`,
      }}
    >
      <div className="mx-auto max-w-4xl">

        {/* Tiêu đề */}
        <h1 className="mt-6 text-center text-4xl font-bold text-[#1B365D]">
          Bài {lessonNumber}: {grammar.title}
        </h1>

        {/* Nút quay lại */}
        <Link
          href="/hsk1/Nguphap"
          className="mb-6 inline-block rounded-lg bg-[#6B4226] px-5 py-2 text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
        >
          Quay lại bài học
        </Link>

        <p className="mt-4 text-center text-lg text-black">
          Hãy học và ghi nhớ ngữ pháp
        </p>

        {/* Nội dung ngữ pháp */}
        <section className="mt-8 rounded-xl border-4 border-[#6B4226] bg-[#FFF9C4] p-8 shadow-md">

          {/* Từ ngữ pháp */}
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1B365D]">
              {grammar.title}
            </h2>

            <p className="mt-3 text-xl text-gray-700">
              {grammar.pinyin} — {grammar.meaning}
            </p>
          </div>

          {/* Giải thích */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-[#1B365D]">
              Giải thích
            </h3>

            <p className="text-lg leading-8 text-gray-800">
              {grammar.explanation}
            </p>
          </div>

          {/* Cấu trúc */}
          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-[#1B365D]">
              Cấu trúc
            </h3>

            <div className="rounded-lg bg-blue-50 px-6 py-5 text-center text-2xl font-semibold text-blue-700">
              {grammar.structure}
            </div>
          </div>

          {/* Ví dụ */}
          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-[#1B365D]">
              Ví dụ
            </h3>

            <div className="space-y-6">
              {grammar.examples.map((example, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-2xl font-semibold text-gray-900">
                    {example.chinese}
                  </p>

                  <p className="mt-2 text-lg text-gray-500">
                    {example.pinyin}
                  </p>

                  <p className="mt-1 text-lg text-gray-700">
                    {example.vietnamese}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
