export type ScamType =
  | "upi_scam"
  | "phishing"
  | "instagram_scam"
  | "fake_job";

export const scams: Record<
  ScamType,
  {
    title: string;
    immediateSteps: string[];
    discription: string;
    avoid: string[];
    links: { label: string; url: string }[];
  }
> = {
  upi_scam: {
    title: "UPI / Payment Scam",
    immediateSteps: [
      "Call your bank immediately",
      "Block your UPI ID",
      "Check recent transactions",
      "File complaint on cybercrime portal"
    ],
    discription: "Any upi related/payment related scams",
    avoid: [
      "Do not share OTP",
      "Do not trust refund calls",
      "Do not delay bank contact"
    ],
    links: [
      { label: "Cyber Crime Portal", url: "https://cybercrime.gov.in" }
    ]
  },

  phishing: {
    title: "Phishing Attack",
    immediateSteps: [
      "Disconnect internet",
      "Change passwords",
      "Enable 2FA",
      "Scan device for malware"
    ],
    discription: "Any phishing related scams",
    avoid: [
      "Do not click suspicious links",
      "Do not download unknown files"
    ],
    links: []
  },

  instagram_scam: {
    title: "Instagram Scam",
    immediateSteps: [
      "Report the account",
      "Block the user",
      "Secure your account"
    ],
    discription: "Any Instagram related scams",
    avoid: [
      "Do not send money",
      "Do not share verification codes"
    ],
    links: []
  },

  fake_job: {
    title: "Fake Job Scam",
    immediateSteps: [
      "Stop communication",
      "Do not pay registration fees",
      "Report the recruiter"
    ],
    discription: "Any fakeJobs related scams",
    avoid: [
      "Do not share documents",
      "Do not trust WhatsApp offers"
    ],
    links: []
  }
};
