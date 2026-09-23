import Link from "next/link";

export default function Home() {
  return (
    <main
  className="min-h-screen px-6 py-16"
  style={{
    backgroundColor: "#ffffff",
    backgroundImage: `
      linear-gradient(45deg, #dbeafe 25%, transparent 25%),
      linear-gradient(-45deg, #dbeafe 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #dbeafe 75%),
      linear-gradient(-45deg, transparent 75%, #dbeafe 75%)
    `,
    backgroundSize: "80px 80px",
    backgroundPosition: "0 0, 0 40px, 40px -40px, -40px 0px",
  }}
>
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#1B365D]">
          Thư viện HSK 3.0
        </h1>

        <p className="mt-4 text-xl text-black-600">
          Học tiếng Trung từng cấp độ HSK
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* HSK 1 */}
<Link
  href="/hsk1"
  className="relative block h-48 overflow-hidden rounded-xl border-5 border-[#6B4226] shadow-md transition hover:-translate-y-1 hover:shadow-xl"
>
  {/* 3 dải màu phủ toàn bộ thẻ */}
  <div className="absolute inset-0 flex flex-col">
    <div className="flex-1 bg-[#6B4226]"></div>
    <div className="flex-1 bg-blue-50"></div>
    <div className="flex-1 bg-[#6B4226]"></div>
  </div>

  {/* Chữ nằm chính giữa và nổi lên trên */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <h2 className="text-4xl font-extrabold text-[#6B4226] drop-shadow-lg">
      HSK 1
    </h2>
  </div>
</Link>

          {/* HSK 2 */}
          <button className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#6B4226]">HSK 2</h2>
            <p className="mt-2 text-gray-500">
              Sơ cấp
            </p>
          </button>

          {/* HSK 3 */}
          <button className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-[#6B4226]">HSK 3</h2>
            <p className="mt-2 text-gray-500">
              Trung cấp
            </p>
          </button>

        </div>
      </div>
    </main>
  );
}