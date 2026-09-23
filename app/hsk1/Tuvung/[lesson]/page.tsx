import Flashcard from "./Flashcard";
import Link from "next/link";
import { vocabulary } from "../data";

export default async function LessonPage({ params }) {
  const { lesson } = await params;
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

        <h1 className="mt-6 text-4xl font-bold text-[#1B365D] text-center">
          Bài {lessonNumber} : {lessonTitles[lesson]}
        </h1>

        <Link
          href="/hsk1/Tuvung"
          className="inline-block mb-6 rounded-lg bg-[#6B4226] shadow-md px-5 py-2 text-white transition hover:bg-[#6B4226]-700 hover:-translate-y-1 hover:shadow-1g"
        >
        Quay lại bài học
        </Link>

        <p className="mt-4 text-lg text-black text-center">
          Hãy chăm chỉ ghi nhớ từ vựng
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
  {words.map((word, index) => (
    <Flashcard
      key={index}
      word={word}
    />
  ))}
</div>

      </div>
    </main>
  );
}