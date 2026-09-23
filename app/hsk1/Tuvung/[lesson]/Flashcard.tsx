"use client";

import { useState } from "react";
type Word = {
  hanzi: string;
  pinyin: string;
  meaning: string;
};

type FlashcardProps = {
  word: Word;
};

export default function Flashcard({ word }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-64 w-full cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* MẶT TRƯỚC */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-5 border-[#6B4226] bg-white shadow-lg [backface-visibility:hidden]">
          <div
            className="text-7xl font-medium text-[#6B4226]"
            style={{
              fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            }}
          >
            {word.hanzi}
          </div>

          <p className="mt-6 text-sm text-black">
            Bấm để xem pinyin và nghĩa
          </p>
        </div>

        {/* Mặt sau*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-5 border-[#6B4226] bg-blue-50 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div
            className="text-7xl font-medium text-[#6B4226]"
            style={{
              fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            }}
          >
            {word.hanzi}
          </div>
       

          <div className="mt-5 text-2xl font-semibold text-[#003366]">
            {word.pinyin}
          </div>

          <div className="mt-3 text-lg text-[#6B4226]">
            {word.meaning}
          </div>

          <p className="mt-5 text-sm text-black">
            Bấm để lật lại
          </p>
        </div>
      </div>
    </div>
  );
}