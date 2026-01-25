export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} FraudGuard. Dedicated to a safer internet
          for everyone.
        </div>
        <div className="flex gap-8 text-slate-400 text-sm">
          <span>
            Crafted with &#10084; and dedication by{" "}
            <a
              href="https://piyush-portfolio-black.vercel.app/"
              className="hover:text-emerald-500 text-white underline decoration-red-00"
            >
              Piyush
            </a>{" "}
            and{" "}
            <a
              href="https://anjalip.vercel.app/"
              className="hover:text-emerald-500 text-white underline"
            >
              Anjali
            </a>
          </span>
          <a
            href="https://github.com/piyushbrl69/Scam-Sense"
            className="hover:text-emerald-500 text-white underline"
          >
            Github
          </a>
          <a href="#" className="hover:text-emerald-500"></a>
        </div>
      </div>
    </footer>
  );
}
