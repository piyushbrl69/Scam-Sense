"use client";

import { useState } from "react";
import WarningBox from "@/components/WarningBox";
import ScamSelector from "@/components/ScamSelector";
import { ScamType, scams } from "@/data/scam";

export default function HelpPage() {
  const [selectedScam, setSelectedScam] = useState<ScamType | null>(null);

  return (
    <div>
      <h1>Get Immediate Help</h1>

      <ScamSelector onSelect={setSelectedScam} />

      {selectedScam && (
        <div className="mt-6 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-bold">{scams[selectedScam].title}</h2>

          <p className="mt-2">{scams[selectedScam].discription}</p>
        </div>
      )}
    </div>
  );
}
