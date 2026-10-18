
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
      <main className="flex min-h-screen items-center justify-center bg-[#FFF5F9] px-5 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-[#FFC2D8] bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFE5EE] text-3xl">
            🌸
          </div>

          <h1 className="mt-5 text-2xl font-extrabold text-[#A83263]">
            Không tìm thấy bài khóa
          </h1>

          <p className="mt-3 leading-7 text-[#806B74]">
            Vui lòng kiểm tra lại bài học và bài khóa bạn muốn xem.
          </p>

          <Link
            href={`/hsk1/Nghedoc/${params.lesson}`}
            className="mt-6 inline-flex items-center rounded-full bg-[#FF69A6] px-6 py-3 font-bold text-white transition hover:bg-[#E94F8C]"
          >
            Quay lại bài học
          </Link>
        </div>
      </main>
    );
  }

  const questions = passage.questions ?? [];
  const totalQuestions = questions.length;

  const completedCount = questions.filter(
    (question) => checkedQuestions[question.id]
  ).length;

  const correctCount = questions.filter(
    (question) =>
      checkedQuestions[question.id] &&
      answers[question.id] === question.answer
  ).length;

  const allChecked =
    totalQuestions > 0 && completedCount === totalQuestions;

  const progress = totalQuestions
    ? Math.round((completedCount / totalQuestions) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-[#FFF5F9] px-4 py-7 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        {/* ĐIỀU HƯỚNG */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/hsk1/Nghedoc/${lessonId}`}
            className="group inline-flex items-center gap-2 rounded-full border border-[#FFC2D8] bg-white px-4 py-2.5 text-sm font-bold text-[#B83268] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFE5EE]"
          >
            Danh sách bài khóa
          </Link>

          <Link
            href="/hsk1/Nghedoc"
            className="text-sm font-semibold text-[#A83263] transition hover:text-[#FF69A6]"
          >
            Trở về tất cả bài học 
          </Link>
        </div>

        {/* HEADER BÀI HỌC */}
        <header className="relative mt-6 overflow-hidden rounded-[28px] bg-[#FFD6E5] p-6 text-white shadow-lg shadow-[#FF8FB8]/20 sm:p-9 md:p-11">
          <div className="pointer-events-none absolute -right-5 -top-12 select-none font-serif text-[150px] leading-none text-white/20 sm:text-[210px]">
            听
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/40 bg-white/20 text-[#78374D] px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
                🌸 Bài học {lessonId}
              </span>
            </div>

            <h1 className="mt-2 text-3xl text-[#78374D] font-bold sm:text-4xl md:text-5xl">
              {passage.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78374D] sm:text-base">
              Hãy lắng nghe, quan sát chữ Hán, đọc Pinyin và khám phá
              ý nghĩa của từng câu. Học chậm mà chắc nhé!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl">🎧</span>
                <div>
                  <p className="text-sm text-[#78374D] font-bold">Luyện nghe</p>
                  <p className="text-xs text-[#78374D]">Nghe và nhận biết</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="text-sm text-[#78374D] font-bold">Luyện đọc</p>
                  <p className="text-xs text-[#78374D]">Hán tự và Pinyin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* LỘ TRÌNH HỌC */}
        <section className="mt-6 rounded-2xl border border-[#FFC2D8] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-[#A83263]">
                Lộ trình học tập
              </h2>
              <p className="mt-1 text-sm text-[#947782]">
                Hoàn thành từng bước để củng cố kiến thức.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFE5EE] text-2xl">
              {allChecked ? "🏆" : "🌷"}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="rounded-xl bg-[#FFF5F9] p-3 text-center">
              <span className="text-lg">🎧</span>
              <p className="mt-1 text-xs font-bold text-[#A83263] sm:text-sm">
                Nghe bài khóa
              </p>
            </div>

            <div className="rounded-xl bg-[#FFF5F9] p-3 text-center">
              <span className="text-lg">📚</span>
              <p className="mt-1 text-xs font-bold text-[#A83263] sm:text-sm">
                Đọc hội thoại
              </p>
            </div>

            <div
              className={`rounded-xl p-3 text-center ${
                allChecked ? "bg-[#FFE5EE]" : "bg-[#FFF5F9]"
              }`}
            >
              <span className="text-lg">✍️</span>
              <p className="mt-1 text-xs font-bold text-[#A83263] sm:text-sm">
                Làm trắc nghiệm
              </p>
            </div>
          </div>

          {totalQuestions > 0 && (
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-[#806B74]">
                  Tiến độ kiểm tra
                </span>
                <span className="font-extrabold text-[#D95787]">
                  {completedCount}/{totalQuestions} câu
                </span>
              </div>

              <div
                className="h-3 overflow-hidden rounded-full bg-[#FFE5EE]"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Tiến độ làm bài trắc nghiệm"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF8FB8] to-[#FF69A6] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </section>

        {/* KHU VỰC NGHE */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-[#FFC2D8] bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#FBE4EC] bg-gradient-to-r from-[#FFF0F5] to-white px-5 py-4 sm:px-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD6E5] text-2xl">
              🎧
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#A83263]">
                Bước 1 · Nghe bài đọc
              </h2>
              <p className="mt-1 text-xs text-[#947782]">
                Hãy thử nghe một lượt trước khi đọc nội dung.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <div className="rounded-2xl bg-[#FFF5F9] p-4 sm:p-5">
              <audio
                key={passage.audio}
                controls
                preload="none"
                className="w-full"
              >
                <source src={passage.audio} type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ phát âm thanh.
              </audio>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#F7D5E1] bg-[#FFFAFC] p-4">
              <span className="text-xl">💡</span>
              <p className="text-sm leading-6 text-[#806B74]">
                <strong className="text-[#A83263]">Mẹo nhỏ:</strong>{" "}
                Lần đầu hãy nghe mà chưa nhìn nghĩa tiếng Việt.
                Lần thứ hai, chú ý những từ bạn đã biết và thử nhắc
                lại theo giọng đọc.
              </p>
            </div>
          </div>
        </section>

        {/* TÙY CHỈNH NỘI DUNG */}
        <section className="mt-6 rounded-3xl border border-[#FFC2D8] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFE5EE] text-xl">
              ⚙️
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#A83263]">
                Tùy chỉnh nội dung học
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#947782]">
                Bật hoặc ẩn từng phần để luyện nhớ chủ động.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              type="button"
              aria-pressed={showHanzi}
              onClick={() => setShowHanzi((prev) => !prev)}
              className={`flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                showHanzi
                  ? "border-[#FF9FC3] bg-[#FFF0F5] text-[#A83263]"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>
                <span className="block text-base font-bold">Hán tự</span>
              </span>
              <span
                className={`flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition ${
                  showHanzi ? "bg-[#FF69A6]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    showHanzi ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </span>
            </button>

            <button
              type="button"
              aria-pressed={showPinyin}
              onClick={() => setShowPinyin((prev) => !prev)}
              className={`flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                showPinyin
                  ? "border-[#FF9FC3] bg-[#FFF0F5] text-[#A83263]"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>
                <span className="block text-base font-bold">Phiên âm</span>
              </span>
              <span
                className={`flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition ${
                  showPinyin ? "bg-[#FF69A6]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    showPinyin ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </span>
            </button>

            <button
              type="button"
              aria-pressed={showVietnamese}
              onClick={() => setShowVietnamese((prev) => !prev)}
              className={`flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                showVietnamese
                  ? "border-[#FF9FC3] bg-[#FFF0F5] text-[#A83263]"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>
                <span className="block text-base font-bold">Nghĩa tiếng Việt</span>
              </span>
              <span
                className={`flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition ${
                  showVietnamese ? "bg-[#FF69A6]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    showVietnamese ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setShowHanzi(true);
                setShowPinyin(true);
                setShowVietnamese(true);
              }}
              className="rounded-full bg-[#FF69A6] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#E94F8C]"
            >
              Hiện tất cả
            </button>

            <button
              type="button"
              onClick={() => {
                setShowHanzi(true);
                setShowPinyin(false);
                setShowVietnamese(false);
              }}
              className="rounded-full border border-[#FFC2D8] bg-white px-4 py-2 text-xs font-bold text-[#B83268] transition hover:bg-[#FFF0F5]"
            >
              Kiểm tra nhớ Hán tự
            </button>
          </div>
        </section>

        {/* NỘI DUNG HỘI THOẠI */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-[#FFC2D8] bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#FBE4EC] bg-gradient-to-r from-[#FFF0F5] to-white px-5 py-4 sm:px-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD6E5] text-2xl">
              📖
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#A83263]">
                Bước 2 · Nội dung bài khóa
              </h2>
              <p className="mt-1 text-xs text-[#947782]">
                Đọc từng câu, chú ý chữ Hán và thanh điệu.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#956F7D]">
              <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5">
                Chữ Hán
              </span>
              <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5">
                Pinyin 
              </span>
              <span className="rounded-full bg-[#FFF0F5] px-3 py-1.5">
                Nghĩa tiếng Việt
              </span>
            </div>

            <div className="space-y-4">
              {passage.dialogues.map((dialogue, index) => (
                <article
                  key={dialogue.id}
                  className="relative overflow-hidden rounded-2xl border border-[#F7D5E1] bg-[#FFFAFC] p-4 transition hover:border-[#FF9FC3] sm:p-6"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#FFB6D0]" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFE5EE] font-extrabold text-[#B83268]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#C76B8A]">
                        NGƯỜI NÓI
                      </p>
                      <h3 className="mt-0.5 font-extrabold text-[#78374D]">
                        {dialogue.speaker}
                      </h3>
                    </div>
                  </div>

                  {showHanzi && (
                    <div className="mt-3 rounded-xl bg-[#FFF0F5] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C76B8A]">
                        Hanzi
                      </p>
                      <p className="mt-1 break-words text-base leading-7 text-[#78374D] sm:text-2g">
                        {dialogue.hanzi}
                      </p>
                    </div>
                  )}

                  {showPinyin && (
                    <div className="mt-3 rounded-xl bg-[#FFF0F5] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C76B8A]">
                        Pinyin
                      </p>
                      <p className="mt-1 break-words text-base leading-7 text-[#78374D] sm:text-lg">
                        {dialogue.pinyin}
                      </p>
                    </div>
                  )}

                  {showVietnamese && (
                    <div className="mt-3 rounded-xl bg-[#FFF0F5] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C76B8A]">
                        Nghĩa tiếng việt
                      </p>
                      <p className="mt-1 break-words text-base leading-7 text-[#78374D] sm:text-lg">
                        {dialogue.vietnamese}
                      </p>
                    </div>
                  )}

                  {!showHanzi && !showPinyin && !showVietnamese && (
                    <p className="mt-4 rounded-xl bg-gray-100 p-4 text-sm italic text-gray-500">
                      Nội dung đang được ẩn. Hãy bật lại một phần để tiếp tục học.
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRẮC NGHIỆM */}
        {totalQuestions > 0 && (
          <section className="mt-6 overflow-hidden rounded-3xl border border-[#FFC2D8] bg-white shadow-sm">
            <div className="bg-gradient-to-r from-[#FF8FB8] to-[#FFB6D0] p-5 text-white sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/25 text-2xl">
                  ✍️
                </div>

                <div>
                  <h2 className="mt-1 text-2xl font-bold">
                    Bước 3 · Kiểm tra kiến thức
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-white/95">
                Chọn đáp án phù hợp nhất. Bạn sẽ biết kết quả ngay sau
                khi kiểm tra từng câu.
              </p>
            </div>

            <div className="p-4 sm:p-7">
              {/* TỔNG KẾT TIẾN ĐỘ */}
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#FFF0F5] p-4">
                  <p className="text-xs font-semibold text-[#956F7D]">
                    Đã kiểm tra
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-[#A83263]">
                    {completedCount}/{totalQuestions}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FFF0F5] p-4">
                  <p className="text-xs font-semibold text-[#956F7D]">
                    Trả lời đúng
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-[#A83263]">
                    {correctCount}
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-[#FFF0F5] p-4 sm:col-span-1">
                  <p className="text-xs font-semibold text-[#956F7D]">
                    Tỉ lệ đúng
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-[#A83263]">
                    {completedCount > 0
                      ? Math.round((correctCount / completedCount) * 100)
                      : 0}
                    %
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {questions.map((question) => {
                  const selectedAnswer = answers[question.id];
                  const isChecked = checkedQuestions[question.id];
                  const isCorrect =
                    selectedAnswer === question.answer;

                  return (
                    <article
                      key={question.id}
                      className="rounded-2xl border border-[#F7D5E1] p-4 sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFE5EE] text-sm font-extrabold text-[#B83268]">
                          {String(question.id).padStart(2, "0")}
                        </span>

                        <h3 className="pt-1 font-bold leading-7 text-[#78374D]">
                          {question.question}
                        </h3>
                      </div>

                      <div className="mt-5 space-y-3">
                        {question.options.map((option, index) => {
                          const selected = selectedAnswer === index;
                          const correct = question.answer === index;

                          let optionStyle =
                            "border-[#F0E4E8] bg-white hover:border-[#FF9FC3] hover:bg-[#FFFAFC]";

                          if (isChecked && correct) {
                            optionStyle =
                              "border-emerald-400 bg-emerald-50 text-emerald-800";
                          } else if (isChecked && selected && !correct) {
                            optionStyle =
                              "border-rose-400 bg-rose-50 text-rose-800";
                          } else if (selected) {
                            optionStyle =
                              "border-[#FF69A6] bg-[#FFF0F5] text-[#A83263]";
                          }

                          return (
                            <label
                              key={index}
                              className={`flex items-start gap-3 rounded-xl border p-4 transition ${optionStyle} ${
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
                                className="mt-1 h-4 w-4 shrink-0 accent-[#FF69A6]"
                              />

                              <span className="flex-1 text-sm leading-6 sm:text-base">
                                {option}
                              </span>

                              {isChecked && correct && (
                                <span className="shrink-0 font-bold text-emerald-600">
                                  ✓
                                </span>
                              )}

                              {isChecked && selected && !correct && (
                                <span className="shrink-0 font-bold text-rose-600">
                                  ✕
                                </span>
                              )}
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
                          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF69A6] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#E94F8C] disabled:cursor-not-allowed disabled:bg-[#E7DDE1] disabled:text-gray-500"
                        >
                          Kiểm tra đáp án
                        </button>
                      ) : (
                        <div
                          className={`mt-5 rounded-2xl border p-4 ${
                            isCorrect
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : "border-rose-200 bg-rose-50 text-rose-800"
                          }`}
                        >
                          <p className="font-bold">
                            {isCorrect
                              ? "🎉 Chính xác! Làm tốt lắm!"
                              : "🌱 Chưa chính xác, hãy ghi nhớ đáp án nhé!"}
                          </p>

                          {!isCorrect && (
                            <p className="mt-2 text-sm leading-6">
                              <strong>Đáp án đúng:</strong>{" "}
                              {question.options[question.answer]}
                            </p>
                          )}

                          {question.explanation && (
                            <p className="mt-2 text-sm leading-6">
                              <strong>Giải thích:</strong>{" "}
                              {question.explanation}
                            </p>
                          )}

                          <button
                            type="button"
                            onClick={() => {
                              setCheckedQuestions((prev) => ({
                                ...prev,
                                [question.id]: false,
                              }));
                              setAnswers((prev) => {
                                const next = { ...prev };
                                delete next[question.id];
                                return next;
                              });
                            }}
                            className="mt-3 rounded-full border border-current px-4 py-2 text-xs font-bold transition hover:bg-white/70"
                          >
                            Làm lại câu này
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

              {/* HOÀN THÀNH */}
              {allChecked && (
                <div className="mt-7 rounded-3xl border border-[#FFC2D8] bg-gradient-to-br from-[#FFF0F5] to-white p-6 text-center sm:p-8">
                  <div className="text-5xl">
                    {correctCount === totalQuestions ? "🏆" : "🌸"}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[#A83263]">
                    {correctCount === totalQuestions
                      ? "Tuyệt vời! Bạn đã hoàn thành!"
                      : "Bạn đã hoàn thành bài kiểm tra!"}
                  </h3>

                  <p className="mt-3 text-[#806B74]">
                    Bạn trả lời đúng{" "}
                    <strong className="text-[#B83268]">
                      {correctCount}/{totalQuestions}
                    </strong>{" "}
                    câu hỏi.
                  </p>

                  <div className="mx-auto mt-5 h-3 max-w-sm overflow-hidden rounded-full bg-[#FFD6E5]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF8FB8] to-[#FF69A6]"
                      style={{
                        width: `${Math.round(
                          (correctCount / totalQuestions) * 100
                        )}%`,
                      }}
                    />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#B83268]">
                    {Math.round((correctCount / totalQuestions) * 100)}% số câu đúng
                  </p>

                  <Link
                    href={`/hsk1/Nghedoc/${lessonId}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF69A6] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#E94F8C]"
                  >
                    Quay lại các bài khóa
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CHƯA CÓ CÂU HỎI */}
        {totalQuestions === 0 && (
          <section className="mt-6 rounded-3xl border border-[#FFC2D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F5] text-2xl">
                🌷
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#A83263]">
                  Tiếp tục luyện tập nhé!
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#806B74]">
                  Bài khóa này chưa có câu hỏi trắc nghiệm. Bạn hãy
                  tiếp tục nghe, đọc hội thoại và luyện phát âm để
                  ghi nhớ kiến thức.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* NHẮC NHỞ CUỐI TRANG */}
        <footer className="mt-8 rounded-2xl bg-white/70 px-5 py-5 text-center">
          <p className="text-sm font-bold text-[#A83263]">
            每天进步一点点 🌸
          </p>
          <p className="mt-2 text-xs leading-6 text-[#947782]">
            Mỗi ngày tiến bộ một chút. Hãy học đều đặn và tận hưởng
            hành trình chinh phục tiếng Trung!
          </p>
        </footer>
      </div>
    </main>
  );
}