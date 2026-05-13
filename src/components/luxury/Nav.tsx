import { useEffect, useState } from "react";

const links = [
  { href: "#legacy", label: "Legacy" },
  { href: "#scale", label: "Scale" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid color-mix(in oklab, white 10%, transparent)" } : undefined}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-white">Dukes</span>
          <span className="eyebrow text-[var(--gold)]">Realty</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group hidden items-center gap-3 border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-white transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] md:inline-flex"
        >
          Schedule
          <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
        </a>
      </div>
    </header>
  );
}
