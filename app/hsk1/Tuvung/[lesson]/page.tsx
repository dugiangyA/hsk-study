import Link from "next/link";
import { vocabulary } from "../data";

export default async function LessonPage({ params }) {
  const { lesson } = await params;

  const lessonNumber = Number(lesson);

  const words = vocabulary[lessonNumber];

  if (!words) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-red-600">
            Không tìm thấy bài học
          </h1>

          <Link
            href="/hsk1/Tuvung"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Quay lại danh sách bài
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/hsk1/Tuvung"
          className="text-blue-600 hover:underline"
        >
          ← Quay lại danh sách bài
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-blue-600">
          📚 Bài {lessonNumber}
        </h1>

        <p className="mt-2 text-gray-600">
          Từ vựng HSK 1 - Bài {lessonNumber}
        </p>

        <div className="mt-8 space-y-4">
          {words.map((word, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <div className="text-4xl font-bold">
                {word.hanzi}
              </div>

              <div className="mt-2 text-xl text-blue-600">
                {word.pinyin}
              </div>

              <div className="mt-2 text-gray-600">
                {word.meaning}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}