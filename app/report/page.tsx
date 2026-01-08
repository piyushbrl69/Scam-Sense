"use client";

import { useState } from "react";
import {
  ExternalLink,
  Landmark,
  ShieldCheck,
  UserX,
  Globe,
  MapPin,
  ShieldAlert,
  Baby,
  Fingerprint,
  MessageSquareWarning,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REPORT_TYPES = [
  {
    id: "financial",
    title: "Financial / UPI Fraud",
    description: "Unauthorized transactions, bank scams, or payment app fraud.",
    icon: <Landmark className="text-emerald-500" />,
    govtLinks: [
      {
        name: "National Cyber Crime Portal",
        url: "https://cybercrime.gov.in",
        label: "National",
      },
      {
        name: "RBI Sachet Portal",
        url: "https://sachet.rbi.org.in",
        label: "Banking",
      },
    ],
  },
  {
    id: "women-safety",
    title: "Women Safety",
    description:
      "Report cyber-stalking, non-consensual content sharing, or harassment.",
    icon: <ShieldAlert className="text-emerald-500" />,
    govtLinks: [
      {
        name: "NCW Online Complaints",
        url: "http://ncwapps.nic.in/onlinecomplaintsv2/",
        label: "National Commission",
      },
      {
        name: "CyberCrime Women Cell",
        url: "https://cybercrime.gov.in/Webform/Crime_ChildCompnd.aspx",
        label: "Specialized Unit",
      },
    ],
  },
  {
    id: "child-safety",
    title: "Child Safety",
    description: "Report exploitation of minors or harmful digital content.",
    icon: <Baby className="text-emerald-500" />,
    govtLinks: [
      {
        name: "NCPCR POCSO e-Box",
        url: "https://ncpcr.gov.in/user_complaints",
        label: "NCPCR",
      },
      {
        name: "Report Anonymously",
        url: "https://cybercrime.gov.in/Webform/Crime_ChildCompnd.aspx",
        label: "Urgent Action",
      },
    ],
  },
  {
    id: "identity-theft",
    title: "Identity Theft",
    description: "Someone using your Aadhar, PAN, or photos for fake profiles.",
    icon: <Fingerprint className="text-emerald-500" />,
    govtLinks: [
      {
        name: "UIDAI Aadhaar Support",
        url: "https://uidai.gov.in/en/contact-support/feedback.html",
        label: "Aadhaar",
      },
      {
        name: "National Cyber Portal",
        url: "https://cybercrime.gov.in",
        label: "Report Identity Fraud",
      },
    ],
  },
  {
    id: "cyber-bullying",
    title: "Cyber Bullying",
    description: "Report online threats, hate speech, or persistent trolling.",
    icon: <MessageSquareWarning className="text-emerald-500" />,
    govtLinks: [
      {
        name: "State Cyber Cell Contacts",
        url: "https://cybercrime.gov.in/Webform/Crime_StateContact.aspx",
        label: "State Police",
      },
    ],
  },
  {
    id: "social",
    title: "Social Media Scam",
    description: "Account hacking or impersonation on IG/FB/X.",
    icon: <UserX className="text-emerald-500" />,
    govtLinks: [
      {
        name: "Instagram Support",
        url: "https://help.instagram.com/contact/636278473246072",
        label: "Platform",
      },
      {
        name: "National Help Line (1930)",
        url: "tel:1930",
        label: "Emergency",
      },
    ],
  },
];

export default function ReportPage() {
  const [selectedState, setSelectedState] = useState("");
  const [activeReport, setActiveReport] = useState<
    (typeof REPORT_TYPES)[0] | null
  >(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-black mb-4">
        Select Your issue{" "}
        <span className="text-emerald-500">And Scroll Down for help</span>
      </h1>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPORT_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveReport(type)}
              className={`group text-left p-8 rounded-[2rem] border transition-all duration-300 ${
                activeReport?.id === type.id
                  ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]"
                  : "bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
              }`}
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {type.description}
              </p>
              <span className="text-emerald-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Helpful Links <ExternalLink size={14} />
              </span>
            </button>
          ))}
        </div>

        {activeReport && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Recommended Official Links for{" "}
                  <span className="text-emerald-400">{activeReport.title}</span>
                </h2>
                {selectedState && (
                  <p className="text-slate-400 font-medium tracking-wide italic">
                    Targeting resources for: {selectedState}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeReport.govtLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-emerald-500/30 transition-all group"
                  >
                    <div>
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 block">
                        {link.label}
                      </span>
                      <p className="text-lg font-bold text-white">
                        {link.name}
                      </p>
                    </div>
                    <ExternalLink
                      className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      size={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
