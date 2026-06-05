import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/Dukes-Logo.png";

const links = [
  { href: "#legacy", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled || isOpen ? "py-3 glass-light" : "py-6 bg-transparent"
          }`}
        style={scrolled || isOpen ? { borderBottom: "1px solid color-mix(in oklab, var(--charcoal) 10%, transparent)" } : undefined}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <div className="flex-1">
            <a href="#top" className="group flex items-center">
              <img
                src={logoImg}
                alt="Dukes Realty"
                className="h-14 md:h-14 lg:h-14 xl:h-16 w-auto transition-all duration-500"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 lg:gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.18em] lg:tracking-[0.22em] transition-colors duration-500 ${scrolled && !isOpen ? "text-[var(--charcoal)]/70 hover:text-[var(--royal-deep)]" : "text-white/70 hover:text-white"
                  }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-6">
            <a
              href="#contact"
              className={`group hidden items-center gap-3 border px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition-all lg:inline-flex ${scrolled && !isOpen
                ? "border-[var(--royal-deep)]/20 text-[var(--royal-deep)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                : "border-white/20 text-white hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}
            >
              Get in Touch
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 flex h-10 w-10 items-center justify-center transition-colors duration-500 lg:hidden ${scrolled && !isOpen ? "text-[var(--royal-deep)]" : "text-white"
                }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-[var(--royal-deep)]/80 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[320px] flex-col bg-[var(--royal-deep)] p-8 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={logoImg} alt="Dukes Realty" className="h-14 w-auto" />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="group flex items-center justify-between border-b border-white/5 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70 transition-all hover:text-[var(--gold)]"
                    >
                      {l.label}
                      <ArrowRight size={14} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pt-12">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-between bg-[var(--gold)] px-6 py-5 text-[11px] uppercase tracking-[0.28em] text-[var(--royal-deep)] shadow-lg shadow-[var(--gold)]/10"
                  >
                    Private Consultation
                    <ArrowRight size={14} />
                  </a>

                  <div className="mt-8 space-y-4 opacity-50">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--gold)]">Follow Us</div>
                    <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white">
                      <a href="#">Instagram</a>
                      <a href="#">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
