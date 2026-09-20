import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          HSK Study
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Học tiếng Trung từng cấp độ HSK
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* HSK 1 */}
          <Link
            href="/hsk1"
            className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">HSK 1</h2>
            <p className="mt-2 text-gray-500">
              Cơ bản
            </p>
          </Link>

          {/* HSK 2 */}
          <button className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold">HSK 2</h2>
            <p className="mt-2 text-gray-500">
              Sơ cấp
            </p>
          </button>

          {/* HSK 3 */}
          <button className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold">HSK 3</h2>
            <p className="mt-2 text-gray-500">
              Trung cấp
            </p>
          </button>

        </div>
      </div>
    </main>
  );
}