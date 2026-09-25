import Link from "next/link";

export default function HSK1Page() {
  return (

<main
  className="min-h-screen px-6 py-16"
  style={{
    backgroundColor: "#ffffff",
    backgroundImage: `
      linear-gradient(45deg, #e0f2fe 25%, transparent 25%),
      linear-gradient(-45deg, #e0f2fe 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e0f2fe 75%),
      linear-gradient(-45deg, transparent 75%, #e0f2fe 75%)
    `,
    backgroundSize: "60px 60px",
    backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  }}
>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#1B365D] text-center">
          HSK 1
        </h1>
          
        <Link
          href="/"
          className="inline-block mb-6 rounded-lg bg-[#6B4226] shadow-md px-5 py-2 text-white transition hover:bg-[#6B4226]-700 hover:-translate-y-1 hover:shadow-lg"
        >
          Về trang chủ
        </Link>

        <p className="mt-4 text-lg text-black text-center">
          Chào mừng bạn đến với thư viện HSK 1 (Cơ bản).
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* TỪ VỰNG */}
          <Link
            href="/hsk1/Tuvung"
            className="rounded-xl bg-[#FFF9C4] p-6 border-5 border-[#6B4226] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#6B4226] text-center">
               Từ vựng
            </h2>
            <p className="mt-2 text-black text-center">
              Học từ vựng HSK 1.
            </p>
          </Link>

          {/* NGỮ PHÁP */}
          <Link
            href="/hsk1/Nguphap"
            className="rounded-xl bg-[#FFF9C4] p-6 border-5 border-[#6B4226] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#6B4226] text-center">
               Ngữ pháp
            </h2>
            <p className="mt-2 text-black text-center">
              Học những cấu trúc ngữ pháp cơ bản.
            </p>
          </Link>

          {/* ĐỌC */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[#6B4226]">
               Luyện phát âm
            </h2>
            <p className="mt-2 text-[#6B4226]">
              Luyện đọc bài khóa tiếng Trung.
            </p>
          </div>

          {/* BÀI TẬP */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[#6B4226]">
               Bài tập
            </h2>
            <p className="mt-2 text-[#6B4226]">
              Luyện tập kiến thức HSK 1.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}