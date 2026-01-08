import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 bg-slate-950 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          Don't Let Scammers <br />
          <span className="text-emerald-500">Win the Fight.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Have you been targeted by a scam? Report it to protect others, or get
          immediate guidance on how to recover your funds and secure your
          identity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/report"
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition"
          >
            Report/Help <ArrowRight size={20} />
          </Link>
          <Link
            href="/guidance"
            className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition"
          >
            I Need Guidance
          </Link>
        </div>
      </div>
    </section>
  );
}
