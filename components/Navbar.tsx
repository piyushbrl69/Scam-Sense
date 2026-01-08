"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldAlert, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white tracking-tight">
            ScamSense
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition">
            About
          </Link>
          <Link href="/guidance" className="hover:text-emerald-400 transition">
            Get Help
          </Link>
          <Link
            href="/report"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Report Fraud
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <Link
            href="/report"
            className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold"
          >
            Report
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 text-slate-300 font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              About
            </Link>
            <Link
              href="/guidance"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              Get Guidance
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
