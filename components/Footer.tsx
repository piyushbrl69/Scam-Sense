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
            Made with ❤️ and efforts
            <a
              href="https://piyush-portfolio-black.vercel.app/"
              className="hover:text-emerald-500"
            >
              {" "}
              by Piyush
            </a>
          </span>
          <a
            href="https://github.com/piyushbrl69"
            className="hover:text-emerald-500"
          >
            Github
          </a>
          <a href="#" className="hover:text-emerald-500"></a>
        </div>
      </div>
    </footer>
  );
}
