"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ScamSelector from "@/components/ScamSelector";
import WarningModal from "@/components/WarningModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScamType } from "@/data/scam";
import { ShieldAlert, Zap, Lock } from "lucide-react";

export default function HelpPage() {
  const [selectedScam, setSelectedScam] = useState<ScamType | null>(null);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const router = useRouter();

  function handleScamSelect(scam: ScamType) {
    setSelectedScam(scam);
    setShowWarningModal(true);
  }

  function handleCloseModal() {
    if (!selectedScam) return;
    setShowWarningModal(false);
    router.push(`/guidance/${selectedScam}`);
  }

  function handleDisagreeModal() {
    setSelectedScam(null);
    setShowWarningModal(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
      <Navbar />
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Get Immediate <span className="text-emerald-500">Help</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Select the category that matches your situation. We will provide a
          verified checklist of actions to secure your accounts and funds.
        </p>
      </section>
      <section className="pb-24 animate-in fade-in slide-in-from-bottom-6 duration-700">
        {!selectedScam && <ScamSelector onSelect={handleScamSelect} />}
      </section>

      {showWarningModal && (
        <WarningModal
          onAccept={handleCloseModal}
          onCancel={handleDisagreeModal}
        />
      )}

      <Footer />
    </main>
  );
}
