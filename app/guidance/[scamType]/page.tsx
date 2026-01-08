import { scams } from "@/data/scam";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

type Props = {
  params: Promise<{
    scamType: string;
  }>;
};

export default async function ScamGuidancePage({ params }: Props) {
  const { scamType } = await params;
  const scam = scams[scamType as keyof typeof scams];

  if (!scam) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-20 pb-24 px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 text-emerald-500 mb-4">
            <ShieldAlert size={32} />
            <span className="text-sm font-black uppercase tracking-[0.2em]">
              Emergency Guidance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            {scam.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            {scam.discription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-emerald-500/20 rounded-[2rem] p-8 shadow-2xl shadow-emerald-500/5">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-6 text-emerald-400">
              <CheckCircle2 size={24} /> Immediate Actions
            </h2>
            <ul className="space-y-4">
              {scam.immediateSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-slate-200 text-sm leading-relaxed"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-red-500/20 rounded-[2rem] p-8 shadow-2xl shadow-red-500/5">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-6 text-red-400">
              <XCircle size={24} /> What to Avoid
            </h2>
            <ul className="space-y-4">
              {scam.avoid.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-slate-200 text-sm leading-relaxed italic"
                >
                  <AlertTriangle
                    className="flex-shrink-0 text-red-500/50"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {scam.links && scam.links.length > 0 && (
          <div className="mt-12 p-8 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Official Resources & Filing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scam.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="flex items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
                >
                  <span className="font-semibold text-sm">{link.label}</span>
                  <ExternalLink
                    className="text-slate-500 group-hover:text-emerald-400"
                    size={16}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
