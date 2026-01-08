"use client";

import { scams, ScamType } from "@/data/scam";
import { ChevronRight, AlertCircle } from "lucide-react";

type Props = {
  onSelect: (scam: ScamType) => void;
};

export default function ScamSelector({ onSelect }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(scams).map(([key, scam]) => (
          <button
            key={key}
            onClick={() => onSelect(key as ScamType)}
            className="group flex flex-col p-8 rounded-[2rem] bg-slate-900 border border-slate-800 text-left transition-all hover:border-emerald-500/50 hover:bg-slate-800/40"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <AlertCircle size={28} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{scam.title}</h3>
            <p className="text-slate-400 text-sm line-clamp-2 mb-6">
              {scam.discription}
            </p>

            <div className="mt-auto flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-all">
              Get Help Now <ChevronRight size={14} className="ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
