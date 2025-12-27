"use client";

import { scams, ScamType } from "@/data/scam";

type Props = {
  onSelect: (scam: ScamType) => void;
};

export default function ScamSelector({ onSelect }: Props) {
  return (
    <>
      <h1>Select Scam Type</h1>

      {Object.entries(scams).map(([key, scam]) => {
        return (
          <div
            key={key}
            className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => onSelect(key as ScamType)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{scam.title}</div>
              <p className="text-gray-700 text-base">{scam.discription}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
