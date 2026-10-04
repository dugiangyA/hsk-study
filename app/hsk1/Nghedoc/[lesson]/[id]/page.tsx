"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { lessons } from "../../data";

export default function PassageDetailPage() {
  const params = useParams<{ lesson: string; id: string }>();

  const lessonId = Number(params.lesson);
  const passageId = Number(params.id);

  const lesson = lessons.find((item) => item.id === lessonId);
  const passage = lesson?.passages.find(
    (item) => item.id === passageId
  );

  const [showHanzi, setShowHanzi] = useState(true);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showVietnamese, setShowVietnamese] = useState(true);

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<
    Record<number, boolean>
  >({});

  if (!lesson || !passage) {
    return (
      <main className="min-h-screen bg-blue-50 px-5 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#1B365D]">
          Không tìm thấy bài khóa
        </h1>
        <p className="mt-3 text-gray-600">
          Vui lòng kiểm tra lại bài học và bài khóa.
        </p>
        <Link
          href={`/hsk1/Nghedoc/${params.lesson}`}
          className="mt-6 inline-block rounded-lg bg-[#6B4226] px-5 py-3 text-white"
        >
          Quay lại danh sách bài khóa
        </Link>
      </main>
    );
  }

  
  const enableQuiz = true;
  const questions = passage.questions ?? [];

  return (
    <main
      className="min-h-screen px-4 py-10 sm:px-8 sm:py-14"
      style={{
        background:
          "repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 30px, #dbeafe 30px, #dbeafe 60px)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        {/* QUAY LẠI */}
        <Link
          href={`/hsk1/Nghedoc/${lessonId}`}
          className="inline-flex rounded-lg bg-[#6B4226] px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-[#52321c]"
        >
          ← Quay lại danh sách bài khóa
        </Link>

        {/* TIÊU ĐỀ */}
        <header className="mb-8 mt-8 text-center">
          <p className="font-semibold text-[#6B4226]">
            {lesson.title}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1B365D] sm:text-4xl">
            {passage.title}
          </h1>

          <p className="mt-3 text-gray-600">
            Luyện nghe, đọc chữ Hán và hiểu nghĩa tiếng Việt.
          </p>
        </header>

        {/* NGHE BÀI ĐỌC */}
        <section className="mb-6 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-4 text-xl font-bold text-[#1B365D]">
            🎧 Nghe bài đọc
          </h2>

          <audio
            key={passage.audio}
            controls
            preload="none"
            className="w-full"
          >
            <source src={passage.audio} type="audio/mpeg" />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>

          <p className="mt-3 text-sm text-gray-500">
            Hãy nghe toàn bộ bài khóa trước khi xem nội dung.
          </p>
        </section>

        {/* CÁC NÚT ẨN / HIỆN */}
        <section className="mb-6 rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B365D]">
            Tùy chỉnh nội dung hiển thị
          </h2>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowHanzi((prev) => !prev)}
              className={`rounded-lg px-4 py-2 font-medium transition ${
                showHanzi
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {showHanzi ? "Ẩn Hán tự" : "Hiện Hán tự"}
            </button>

            <button
              type="button"
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`rounded-lg px-4 py-2 font-medium transition ${
                showPinyin
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {showPinyin ? "Ẩn Pinyin" : "Hiện Pinyin"}
            </button>

            <button
              type="button"
              onClick={() => setShowVietnamese((prev) => !prev)}
              className={`rounded-lg px-4 py-2 font-medium transition ${
                showVietnamese
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {showVietnamese ? "Ẩn nghĩa Việt" : "Hiện nghĩa Việt"}
            </button>
          </div>
        </section>

        {/* NỘI DUNG HỘI THOẠI */}
        <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-6 border-b border-gray-200 pb-4 text-xl font-bold text-[#1B365D]">
            📖 Nội dung bài khóa
          </h2>

          <div className="space-y-5">
            {passage.dialogues.map((dialogue) => (
              <article
                key={dialogue.id}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-5"
              >
                <p className="mb-3 font-bold text-[#6B4226]">
                  {dialogue.speaker}
                </p>

                {showHanzi && (
                  <p className="mb-3 text-2xl leading-relaxed text-gray-900 sm:text-3xl">
                    {dialogue.hanzi}
                  </p>
                )}

                {showPinyin && (
                  <p className="mb-2 text-lg leading-relaxed text-blue-700">
                    {dialogue.pinyin}
                  </p>
                )}

                {showVietnamese && (
                  <p className="leading-relaxed text-gray-600">
                    {dialogue.vietnamese}
                  </p>
                )}

                {!showHanzi &&
                  !showPinyin &&
                  !showVietnamese && (
                    <p className="text-sm italic text-gray-400">
                      Nội dung đang được ẩn.
                    </p>
                  )}
              </article>
            ))}
          </div>
        </section>

        {/* TRẮC NGHIỆM */}
        {enableQuiz && questions.length > 0 && (
          <section className="mt-6 rounded-2xl border border-green-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="mb-2 text-2xl font-bold text-[#1B365D]">
              📝 Câu hỏi trắc nghiệm
            </h2>

            <p className="mb-6 text-sm text-gray-500">
              Chọn một đáp án cho mỗi câu hỏi rồi kiểm tra kết quả.
            </p>

            <div className="space-y-7">
              {questions.map((question) => {
                const selectedAnswer = answers[question.id];
                const isChecked = checkedQuestions[question.id];
                const isCorrect =
                  selectedAnswer === question.answer;

                return (
                  <article
                    key={question.id}
                    className="rounded-xl border border-gray-200 p-4 sm:p-5"
                  >
                    <h3 className="mb-4 font-semibold leading-7 text-gray-800">
                      Câu {question.id}: {question.question}
                    </h3>

                    <div className="space-y-3">
                      {question.options.map((option, index) => {
                        const selected = selectedAnswer === index;
                        const correct = question.answer === index;

                        let style =
                          "border-gray-200 hover:bg-blue-50";

                        if (isChecked && correct) {
                          style =
                            "border-green-500 bg-green-50 text-green-800";
                        } else if (
                          isChecked &&
                          selected &&
                          !correct
                        ) {
                          style =
                            "border-red-500 bg-red-50 text-red-800";
                        } else if (selected) {
                          style =
                            "border-blue-500 bg-blue-50";
                        }

                        return (
                          <label
                            key={index}
                            className={`flex items-start gap-3 rounded-lg border p-3 transition ${style} ${
                              isChecked
                                ? "cursor-default"
                                : "cursor-pointer"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${lessonId}-${passageId}-${question.id}`}
                              checked={selected}
                              disabled={isChecked}
                              onChange={() =>
                                setAnswers((prev) => ({
                                  ...prev,
                                  [question.id]: index,
                                }))
                              }
                              className="mt-1 accent-blue-600"
                            />

                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>

                    {!isChecked ? (
                      <button
                        type="button"
                        disabled={selectedAnswer === undefined}
                        onClick={() =>
                          setCheckedQuestions((prev) => ({
                            ...prev,
                            [question.id]: true,
                          }))
                        }
                        className="mt-4 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                      >
                        Kiểm tra đáp án
                      </button>
                    ) : (
                      <div
                        className={`mt-4 rounded-lg p-4 ${
                          isCorrect
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        <p className="font-bold">
                          {isCorrect
                            ? "✓ Chính xác!"
                            : "✗ Chưa chính xác!"}
                        </p>

                        <p className="mt-2">
                          Đáp án đúng:{" "}
                          {question.options[question.answer]}
                        </p>

                        {question.explanation && (
                          <p className="mt-2 text-sm leading-6">
                            Giải thích: {question.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* THÔNG BÁO KHÔNG CÓ TRẮC NGHIỆM */}
        {questions.length === 0 && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-[#6B4226]">
         Bài khóa này chưa có câu hỏi trắc nghiệm. Bạn hãy tiếp tục luyện nghe và đọc.
       </div>
        )}
      </div>
    </main>
  );
}