"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import ScamSelector from "@/components/ScamSelector";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { ScamType } from "@/data/scam";

export default function Home() {
  const router = useRouter();

  const handleSelect = (scamKey: ScamType) => {
    router.push(`/help?type=${scamKey}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <Footer />
    </main>
  );
}
