export type ScamType =
  | "upi_scam"
  | "phishing"
  | "instagram_scam"
  | "fake_job"
  | "women_safety"
  | "child_safety";

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
    discription: "Fraudulent transactions via QR codes, fake payment screenshots, or 'request money' links disguised as refunds.",
    immediateSteps: [
      "Call 1930 (National Cyber Crime Helpline) immediately",
      "Report the transaction in your banking or UPI app (GPay/PhonePe)",
      "Block your UPI ID and linked bank account",
      "Keep screenshots of the transaction ID and chat history"
    ],
    avoid: [
      "Never enter your UPI PIN to RECEIVE money",
      "Don't scan QR codes sent by unknown buyers on OLX/Marketplace",
      "Avoid clicking links that claim you won a lottery or scratch card"
    ],
    links: [
      { label: "National Cyber Crime Portal", url: "https://cybercrime.gov.in" },
      { label: "RBI Sachet Portal", url: "https://sachet.rbi.org.in" }
    ]
  },

  phishing: {
    title: "Phishing Attack",
    discription: "Deceptive emails or SMS (Smishing) that look like they are from banks, Netflix, or courier services to steal login credentials.",
    immediateSteps: [
      "Immediately change passwords for the affected account",
      "Enable Multi-Factor Authentication (MFA) on all sensitive apps",
      "Log out of all active sessions from account security settings",
      "Run an antivirus scan on your device"
    ],
    avoid: [
      "Don't click links in SMS regarding 'Electricity cut-off' or 'KYC expired'",
      "Check the sender's email address for spelling errors",
      "Never share your OTP with anyone calling as a 'Bank Executive'"
    ],
    links: [
      { label: "Report Phishing (CERT-In)", url: "https://www.cert-in.org.in/" }
    ]
  },

  instagram_scam: {
    title: "Social Media / Instagram",
    discription: "Account takeovers where hackers ask your friends for money, or fake 'Brand Ambassador' and crypto investment offers.",
    immediateSteps: [
      "Use 'Forget Password' to regain control via email/phone",
      "Alert your followers on other platforms that your account is hacked",
      "Report the profile through the Instagram/Facebook app",
      "Revoke access to unknown third-party apps in settings"
    ],
    avoid: [
      "Don't click links for 'Copyright Infringement' warnings in DMs",
      "Never record a 'video selfie' for someone promising crypto returns",
      "Avoid third-party 'Follower Tracker' apps"
    ],
    links: [
      { label: "Instagram Help Center", url: "https://help.instagram.com/" }
    ]
  },

  fake_job: {
    title: "Fake Job / Part-time Scam",
    discription: "Work-from-home offers involving 'liking YouTube videos' or 'data entry' that eventually demand a registration or kit fee.",
    immediateSteps: [
      "Stop all communication with the recruiter immediately",
      "Do not pay any 'security deposit' or 'laptop fee'",
      "Block the WhatsApp/Telegram numbers involved",
      "Save the recruiter's bank details provided for payment"
    ],
    avoid: [
      "No legitimate company asks for money to give you a job",
      "Don't share photos of your Aadhar or PAN with unverified recruiters",
      "Be wary of jobs offering high pay for very simple tasks"
    ],
    links: [
      { label: "Cyber Crime Portal", url: "https://cybercrime.gov.in" }
    ]
  },

  women_safety: {
    title: "Women Safety / Harassment",
    discription: "Incidents involving cyber-stalking, morphing of photos, or non-consensual sharing of private media.",
    immediateSteps: [
      "Take screenshots of all abusive messages or profiles",
      "Report the content to the platform immediately (FB/IG/X)",
      "File a complaint at the nearest Women's Police Station",
      "Use the 'Report anonymously' option on the CyberCrime portal"
    ],
    avoid: [
      "Don't engage with or threaten the harasser back",
      "Avoid sharing sensitive personal media on public profiles",
      "Do not delete evidence before showing it to the authorities"
    ],
    links: [
      { label: "NCW Complaint Portal", url: "http://ncwapps.nic.in/onlinecomplaintsv2/" },
      { label: "CyberCrime Women Cell", url: "https://cybercrime.gov.in/Webform/Crime_ChildCompnd.aspx" }
    ]
  },

  child_safety: {
    title: "Child Safety / CSAM",
    discription: "Exploitation of minors, online grooming, or circulation of harmful content involving children.",
    immediateSteps: [
      "Report the URL or profile to the NCPCR POCSO e-Box",
      "Do not share or circulate the harmful content even to 'show' others",
      "Contact the Childline India helpline at 1098",
      "Report the incident on the CyberCrime 'Child Related Crime' section"
    ],
    avoid: [
      "Don't allow children to use social media without supervision",
      "Avoid posting photos of children in school uniforms with locations",
      "Never ignore a child's sudden change in behavior regarding internet use"
    ],
    links: [
      { label: "NCPCR POCSO e-Box", url: "https://ncpcr.gov.in/user_complaints" },
      { label: "Childline India (1098)", url: "https://www.childlineindia.org/" }
    ]
  }
};