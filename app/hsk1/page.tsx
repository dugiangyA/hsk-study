export default function HSK1Page() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-600">
          HSK 1
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Chào mừng bạn đến với khóa học HSK 1.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold">
              📚 Từ vựng
            </h2>
            <p className="mt-2 text-gray-600">
              Học từ vựng HSK 1.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold">
              📖 Ngữ pháp
            </h2>
            <p className="mt-2 text-gray-600">
              Học những cấu trúc ngữ pháp cơ bản.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold">
              📕 Đọc
            </h2>
            <p className="mt-2 text-gray-600">
              Luyện đọc tiếng Trung.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold">
              ✏️ Bài tập
            </h2>
            <p className="mt-2 text-gray-600">
              Luyện tập kiến thức HSK 1.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}