"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Terminal,
  AlertCircle,
  Cpu,
  Eye,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
      <Navbar />

      <section className="py-24 px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Minimalist Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Stop Scams <br />
            <span className="text-emerald-500">Before They Start.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto font-medium">
            Fraud Guard is an awareness platform designed to help you identify,
            understand, and bypass online frauds before becoming a victim.
          </p>
        </div>

        <div className="relative p-1 border border-slate-900 rounded-3xl bg-slate-950 mb-16 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 text-center">
            <h2 className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <Cpu size={14} /> The Project
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
              Developed by{" "}
              <a
                href="https://piyush-portfolio-black.vercel.app/"
                className="text-white hover:text-emerald-400 font-bold transition-colors underline decoration-emerald-500/30 underline-offset-4"
              >
                Piyush
              </a>{" "}
              and{" "}
              <a
                href="https://apandey-port.netlify.app/"
                className="text-white hover:text-emerald-400 font-bold transition-colors underline decoration-emerald-500/30 underline-offset-4"
              >
                Anjali
              </a>
              , this initiative focuses on building practical tools to tackle
              real-world digital threats using modern tech.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 opacity-40 hover:opacity-100 transition-opacity max-w-2xl mx-auto">
          <AlertCircle className="shrink-0" size={16} />
          <p className="text-[11px] uppercase tracking-wider leading-loose">
            Disclaimer: Educational purposes only. Does not replace official
            cybercrime legal assistance.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
