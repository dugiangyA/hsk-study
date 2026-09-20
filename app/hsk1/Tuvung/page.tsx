import Link from "next/link";

export default function VocabularyPage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/hsk1"
          className="text-blue-600 hover:underline"
        >
          ← Quay lại HSK 1
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-blue-600">
          📚 Từ vựng HSK 1
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Chọn bài học
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              href={`/hsk1/Tuvung/${lesson}`}
              className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">
                Bài {lesson}
              </h2>

              <p className="mt-2 text-gray-500">
                Học từ vựng
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}