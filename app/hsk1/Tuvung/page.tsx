import Link from "next/link";

export default function VocabularyPage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
      <main
  className="min-h-screen px-6 py-16"
  style={{
    background: `repeating-linear-gradient(
      0deg,
      #ffffff 0px,
      #ffffff 30px,
      #dbeafe 30px,
      #dbeafe 60px
    )`,
  }}
>
      
      <div className="mx-auto max-w-4xl">

        <h1 className="mt-6 text-4xl font-bold text-[#1B365D] text-center">
          Từ vựng HSK 1
        </h1>

        <Link
          href="/hsk1"
          className="inline-block mb-6 rounded-lg bg-[#6B4226] shadow-md px-5 py-2 text-white transition hover:bg-[#6B4226]-700 hover:-translate-y-1 hover:shadow-1g"
        >
          Quay lại HSK 1
        </Link>

        <p className="mt-4 text-lg text-black text-center">
          Hãy chọn bài học
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              href={`/hsk1/Tuvung/${lesson}`}
              className="rounded-xl bg-[#FFF9C4] p-6 border-5 border-[#6B4226] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-[#6B4226] text-center">
                Bài {lesson}
              </h2>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}