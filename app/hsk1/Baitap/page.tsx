
import Link from "next/link";

export default function ExercisePage() {
  const lessons = Array.from({ length: 15 }, (_, index) => index + 1);

  const lessonTitles: Record<number, string> = {
    1: "Xin chào AI Tiểu Ngữ",
    2: "Tôi tên là Lý Văn",
    3: "Tôi là người Trung Quốc",
    4: "Tôi có hai đứa con",
    5: "Hôm nay anh được nghỉ",
    6: "Số điện thoại của bạn là bao nhiêu?",
    7: "Em tan làm lúc 6 rưỡi",
    8: "Bố tôi cũng làm việc ở bệnh viện",
    9: "Sáng mai tôi học ở trường",
    10: "Táo ở đây rẻ thật",
    11: "Em đang học đại học",
    12: "Hôm qua tuyết rơi rồi",
    13: "Cho tôi một cốc trà",
    14: "Mình đã xem một bộ phim",
    15: "Gặp nhau ở sân bay Đại Hưng nhé",
  };

  return (
    <main className="min-h-screen bg-[#FFFDE7] px-5 py-8 sm:px-8 sm:py-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* NÚT QUAY LẠI */}
        <div>
          <Link
            href="/hsk1"
            className="group inline-flex items-center gap-2 rounded-full border border-[#F3E58A] bg-white px-5 py-2.5 text-sm font-bold text-[#827000] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFF9C4] hover:shadow-md"
          >
            Quay lại HSK 1
          </Link>
        </div>

        {/* HERO */}
        <section className="relative mt-7 overflow-hidden rounded-[28px] bg-[#FCEC68] px-6 py-10 shadow-lg shadow-[#D9BF19]/15 sm:px-10 sm:py-12 md:px-14 md:py-14">
          {/* Chữ Hán trang trí */}
          <div className="pointer-events-none absolute -right-4 -top-10 select-none font-serif text-[170px] font-bold leading-none text-[#8F7900]/10 sm:text-[220px]">
            练
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8F7900]/15 bg-white/50 px-4 py-2 text-sm font-bold text-[#746200] backdrop-blur-sm">
              HSK 1 · Luyện tập
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#594900] sm:text-4xl md:text-5xl">
              Bài tập HSK 1
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#665817] sm:text-base md:text-lg">
              Củng cố từ vựng, ngữ pháp và khả năng đọc hiểu tiếng Trung
              thông qua các bài tập thực hành. Học kiến thức mới và
              kiểm tra mức độ ghi nhớ của bạn mỗi ngày.
            </p>
          </div>
        </section>

        {/* TIÊU ĐỀ DANH SÁCH */}
        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B29A00]">
                Practice & improve
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#594900] sm:text-3xl">
                Chọn bài tập
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#827742]">
                Hãy chọn bài học bạn muốn luyện tập hôm nay.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F3E58A] bg-white px-4 py-2 text-sm font-bold text-[#827000]">
              <span className="h-2 w-2 rounded-full bg-[#E5C900]" />
              15 bài tập
            </div>
          </div>

          {/* DANH SÁCH 15 BÀI TẬP */}
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson}
                href={`/hsk1/Baitap/${lesson}`}
                className="group relative overflow-hidden rounded-3xl border border-[#F0E6A3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#E5C900] hover:shadow-xl hover:shadow-[#D9BF19]/15 sm:p-6"
              >
                {/* Số thứ tự và biểu tượng */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF8B8] text-xl font-extrabold text-[#827000] transition duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#F9E547]">
                    {String(lesson).padStart(2, "0")}
                  </div>
                </div>

                {/* Nội dung bài tập */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B29A00]">
                    Bài tập {lesson}
                  </p>

                  <h3 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-[#594900] transition-colors group-hover:text-[#9A8100]">
                    {lessonTitles[lesson]}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#827742]">
                    Ôn tập kiến thức và kiểm tra mức độ hiểu bài.
                  </p>
                </div>

                {/* Thẻ phân loại */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFF9C4] px-3 py-1.5 text-xs font-bold text-[#827000]">
                    ✏️ Thực hành
                  </span>

                  <span className="rounded-full bg-[#FFFDE7] px-3 py-1.5 text-xs font-bold text-[#827000]">
                    📚 HSK 1
                  </span>
                </div>

                {/* Bắt đầu */}
                <div className="mt-5 flex items-center justify-between border-t border-[#F5EDC4] pt-4">
                  <span className="text-sm font-bold text-[#827000] transition-colors group-hover:text-[#A18A00]">
                    Bắt đầu làm bài
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF8B8] text-lg text-[#827000] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#F9E547]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GỢI Ý HỌC TẬP */}
        <section className="mt-12 rounded-3xl border border-[#F0E6A3] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3A6] text-3xl">
              💡
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#594900]">
                Bí quyết làm bài tập hiệu quả
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#827742] sm:text-base">
                Hãy tự suy nghĩ trước khi xem đáp án. Sau mỗi bài,
                ghi lại những từ vựng hoặc cấu trúc chưa nhớ rõ rồi
                quay lại ôn tập. Đừng lo nếu trả lời sai, mỗi lần
                luyện tập đều giúp bạn tiến bộ hơn!
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#FFF9C4] px-3 py-2 text-xs font-bold text-[#827000]">
                  01 · Đọc kỹ câu hỏi
                </span>

                <span className="rounded-full bg-[#FFF9C4] px-3 py-2 text-xs font-bold text-[#827000]">
                  02 · Tự chọn đáp án
                </span>

                <span className="rounded-full bg-[#FFF9C4] px-3 py-2 text-xs font-bold text-[#827000]">
                  03 · Ôn lại lỗi sai
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CHÂN TRANG */}
        <footer className="mt-8 pb-2 text-center">
          <p className="text-sm font-semibold text-[#827742]">
            HSK 1
            <span className="mx-2 text-[#D9BF19]">✦</span>
            练习与进步
            <span className="mx-2 text-[#D9BF19]">✦</span>
            Học mỗi ngày một chút
          </p>
        </footer>
      </div>
    </main>
  );
}