import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/luxury/Nav";
import { SmoothScroll } from "@/components/luxury/SmoothScroll";
import { CursorGlow } from "@/components/luxury/CursorGlow";
import { Reveal, RevealLines } from "@/components/luxury/Reveal";
import { Counter } from "@/components/luxury/Counter";
import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tower.jpg";
import villaImg from "@/assets/project-villa.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import plottedImg from "@/assets/project-plotted.jpg";
import blueprintImg from "@/assets/design-blueprint.jpg";
import delightImg from "@/assets/delight-interior.jpg";
import futureImg from "@/assets/future-city.jpg";
import legacyHeritageImg from "@/assets/legacy-heritage.jpg";
import philosophyCourtImg from "@/assets/philosophy-court.jpg";
import contactAerialImg from "@/assets/contact-aerial.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dukes Realty — Building Timeless Spaces for Modern Living" },
      { name: "description", content: "Luxury developments crafted with precision, trust, and long-term value across residential, commercial, and plotted communities." },
      { property: "og:title", content: "Dukes Realty — Design. Discipline. Delight." },
      { property: "og:description", content: "Four decades of legacy. International scale. Investor-grade real estate." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative bg-[var(--ivory)] text-[var(--charcoal)]">
      <SmoothScroll />
      <CursorGlow />
      <Nav />
      <Hero />
      <Legacy />
      <Scale />
      <Philosophy />
      <Values />
      <Journey />
      <FmcgToRealty />
      <DesignDisciplineDelight />
      <Difference />
      <Portfolio />
      <Clientele />
      <Subsidiaries />
      <Leadership />
      <FutureVision />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[var(--royal-deep)]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, color-mix(in oklab, var(--royal-deep) 70%, transparent) 0%, color-mix(in oklab, var(--royal-deep) 40%, transparent) 50%, var(--royal-deep) 100%)"
        }} />
      </motion.div>

      {/* floating gold particles */}
      <Particles />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-28 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]"
        >
          <span className="h-px w-12 bg-[var(--gold)]" />
          Design. Discipline. Delight.
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,8.5vw,9rem)] leading-[0.95] text-white">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Building Timeless
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-[var(--gold-soft)]"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Spaces.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="mt-10 max-w-xl text-balance text-base font-light leading-relaxed text-white/70"
        >
          Luxury developments crafted with precision, trust, and long-term value across residential, commercial, and plotted communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a href="#portfolio" className="group inline-flex items-center gap-4 bg-[var(--gold)] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[var(--royal-deep)] transition-all hover:shadow-[var(--shadow-gold)]">
            Explore Projects
            <span className="h-px w-6 bg-current transition-all group-hover:w-12" />
          </a>
          <a href="#legacy" className="group inline-flex items-center gap-4 border border-white/30 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]">
            Discover Legacy
            <span className="h-px w-6 bg-current transition-all group-hover:w-12" />
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-white/50">Scroll</span>
          <div className="h-12 w-px overflow-hidden bg-white/15">
            <motion.div
              className="h-1/3 w-full bg-[var(--gold)]"
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Particles() {
  const particles = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i * 0.7) % 8;
        const dur = 12 + ((i * 3) % 10);
        const size = 1 + ((i * 7) % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[var(--gold)]"
            style={{ left: `${left}%`, bottom: -20, width: size, height: size, opacity: 0.5 }}
            animate={{ y: ["0vh", "-110vh"], opacity: [0, 0.7, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ───────────────────────── LEGACY ───────────────────────── */
function Legacy() {
  return (
    <section id="legacy" className="relative grain overflow-hidden bg-[var(--ivory)] py-32 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              The Dukes Legacy
            </div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1] text-[var(--royal-deep)]">
            <RevealLines text="Four decades" />
            <br />
            <span className="italic text-[var(--gold)]"><RevealLines text="of trust." /></span>
          </h2>
          <Reveal delay={0.3}>
            <div className="relative mt-12 overflow-hidden">
              <motion.img
                src={legacyHeritageImg}
                alt="Architectural heritage"
                className="h-[520px] w-full object-cover grayscale"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="eyebrow text-white/90">Est. 1988</div>
                <div className="eyebrow text-[var(--gold)]">Mumbai · India</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
          <Reveal delay={0.2}>
            <p className="text-lg font-light leading-[1.8] text-[var(--charcoal)]/80">
              Since 1988, the Dukes Group has built a reputation on enduring craftsmanship and disciplined growth. From a heritage in fast-moving consumer goods across more than 120 countries, the group brings a global perspective to a deeply local craft — building places people are proud to call their own.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12 gold-divider" />
          </Reveal>
          <Reveal delay={0.5}>
            <Timeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { year: "1988", text: "Group founded" },
    { year: "2002", text: "International expansion" },
    { year: "2014", text: "Realty division launched" },
    { year: "2024", text: "Pan-format developer" },
  ];
  return (
    <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={it.year}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 1 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-[var(--charcoal)]/15">
            <motion.span
              className="absolute left-0 top-0 h-px bg-[var(--gold)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="pt-6">
            <div className="font-display text-3xl text-[var(--royal-deep)]">{it.year}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--charcoal)]/60">{it.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ───────────────────────── SCALE ───────────────────────── */
function Scale() {
  const stats = [
    { n: 40, suffix: "+", label: "Years of legacy" },
    { n: 120, suffix: "+", label: "Countries served" },
    { n: 17, suffix: "", label: "Manufacturing facilities" },
    { n: 500, suffix: "+", label: "Acres developed" },
    { n: 1, suffix: "M+ sq ft", label: "Delivered space" },
    { n: 50, suffix: "+", label: "Commercial clients" },
  ];
  return (
    <section id="scale" className="relative overflow-hidden bg-[var(--royal-deep)] py-32 lg:py-44 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--royal) 80%, transparent), transparent 60%)"
      }} />
      <FloatingGradient />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Scale & Impact
            </div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-white">
            <RevealLines text="A measurable" />
            <br />
            <span className="italic text-[var(--gold)]"><RevealLines text="legacy of growth." /></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 1 }}
              className="group relative bg-[var(--royal-deep)] p-10 transition-all duration-700 hover:bg-[color:color-mix(in_oklab,var(--royal)_50%,var(--royal-deep))]"
            >
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[var(--gold)] transition-transform duration-700 group-hover:scale-x-100" />
              <div className="font-display text-6xl text-white lg:text-7xl">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-6 text-xs uppercase tracking-[0.22em] text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingGradient() {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 25%, transparent), transparent 70%)", filter: "blur(40px)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--royal) 60%, transparent), transparent 70%)", filter: "blur(60px)" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ───────────────────────── PHILOSOPHY ───────────────────────── */
function Philosophy() {
  const points = [
    { t: "Long-term value", d: "We build for generations, not quarters. Every plan begins with a horizon measured in decades." },
    { t: "Disciplined execution", d: "Forty years of operational rigor across continents, brought to every blueprint and beam." },
    { t: "Human-centered design", d: "Architecture that serves the rituals of daily life — light, air, dignity, calm." },
  ];
  return (
    <section id="philosophy" className="relative overflow-hidden bg-[var(--ivory)] py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-24 max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Our Philosophy
            </div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-[var(--royal-deep)]">
            <RevealLines text="A quieter" /> <span className="italic text-[var(--gold)]"><RevealLines text="kind of luxury." /></span>
          </h2>
        </div>
        <div className="space-y-px bg-[var(--charcoal)]/10">
          {points.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.1 }}
              className="group grid grid-cols-12 gap-8 bg-[var(--ivory)] py-12 transition-all duration-700"
            >
              <div className="col-span-2 md:col-span-1">
                <div className="font-display text-2xl text-[var(--gold)]">0{i + 1}</div>
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-3xl text-[var(--royal-deep)] md:text-4xl">{p.t}</h3>
                <div className="mt-4 h-px w-12 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
              </div>
              <p className="col-span-12 max-w-md text-base font-light leading-[1.8] text-[var(--charcoal)]/70 md:col-span-6">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── VALUES (V I S I O N) ───────────────────────── */
function Values() {
  const cards = [
    { l: "V", t: "Visionary", d: "We see beyond the horizon." },
    { l: "I", t: "Integrity", d: "Trust is our foundation." },
    { l: "S", t: "Stewardship", d: "Stewards of communities." },
    { l: "I", t: "Innovation", d: "Future-ready by design." },
    { l: "O", t: "Operational", d: "Disciplined excellence." },
    { l: "N", t: "Nurture", d: "Spaces that grow with you." },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--royal-deep)] py-32 text-white lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— Values</div>
          </Reveal>
          <h2 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-[0.05em] text-white">
            <RevealLines text="V I S I O N" />
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.06 }}
              className="group relative overflow-hidden bg-[var(--royal-deep)] p-10"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{
                background: "radial-gradient(circle at center, color-mix(in oklab, var(--gold) 15%, transparent), transparent 70%)"
              }} />
              <div className="absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-[var(--gold)]/40" />
              <div className="relative">
                <div className="font-display text-7xl text-[var(--gold)]/40 transition-all duration-700 group-hover:text-[var(--gold)]">{c.l}</div>
                <div className="mt-8 font-display text-2xl text-white">{c.t}</div>
                <div className="mt-3 text-sm font-light text-white/60">{c.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── JOURNEY ───────────────────────── */
function Journey() {
  const milestones = [
    { y: "1988", t: "Founded", d: "The Dukes Group is established." },
    { y: "1996", t: "International", d: "Footprint extends across continents." },
    { y: "2008", t: "Manufacturing", d: "17 facilities operational worldwide." },
    { y: "2014", t: "Realty", d: "Real estate division launched." },
    { y: "2019", t: "Plotted", d: "Master-planned communities introduced." },
    { y: "2024", t: "Today", d: "Pan-format luxury developer." },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--ivory)] py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— Journey</div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-[var(--royal-deep)]">
            <RevealLines text="The road" /> <span className="italic text-[var(--gold)]"><RevealLines text="behind us." /></span>
          </h2>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <div className="mx-auto flex max-w-[1400px] gap-12 px-6 pb-8 lg:px-12">
          {milestones.map((m, i) => (
            <motion.div
              key={m.y}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="relative min-w-[260px] flex-shrink-0"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_20px_var(--gold)]" />
                <div className="h-px flex-1 bg-[var(--charcoal)]/15" />
              </div>
              <div className="font-display text-4xl text-[var(--royal-deep)]">{m.y}</div>
              <div className="mt-2 eyebrow text-[var(--gold)]">{m.t}</div>
              <p className="mt-3 text-sm font-light text-[var(--charcoal)]/70">{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FMCG TO REALTY ───────────────────────── */
function FmcgToRealty() {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative overflow-hidden">
              <motion.img
                src={delightImg}
                alt="Premium interior"
                className="h-[600px] w-full object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— From FMCG to Realty</div>
          </Reveal>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.8rem)] leading-[1.05] text-[var(--royal-deep)]">
            <RevealLines text="A global mindset," />
            <br />
            <span className="italic text-[var(--gold)]"><RevealLines text="brought home." /></span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-10 text-base font-light leading-[1.85] text-[var(--charcoal)]/75">
              Three decades of operating consumer brands across more than 120 countries taught us how to build at scale without losing the detail. We carry that discipline into every plot, every floor, every door — applying global supply chain rigor to a craft that is, ultimately, about home.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { n: "120+", l: "Countries" },
                { n: "17", l: "Facilities" },
                { n: "40+", l: "Years" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-[var(--gold)]">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DESIGN • DISCIPLINE • DELIGHT ───────────────────────── */
function DesignDisciplineDelight() {
  const panels = [
    {
      label: "Design",
      title: "Drawn with intention.",
      copy: "Every floor plan begins as a question about how a life is actually lived. Architecture follows.",
      bg: blueprintImg,
      tone: "blueprint",
    },
    {
      label: "Discipline",
      title: "Delivered with rigor.",
      copy: "Forty years of operational excellence applied to schedules, budgets, and standards that do not slip.",
      bg: commercialImg,
      tone: "grid",
    },
    {
      label: "Delight",
      title: "Lived with joy.",
      copy: "Light, materials, and proportion that age into something more beautiful than the day they were delivered.",
      bg: delightImg,
      tone: "interior",
    },
  ];
  return (
    <section className="relative bg-[var(--royal-deep)]">
      {panels.map((p, i) => (
        <Panel key={p.label} {...p} index={i} />
      ))}
    </section>
  );
}

function Panel({ label, title, copy, bg, index }: { label: string; title: string; copy: string; bg: string; tone: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  return (
    <div ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={bg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--royal-deep)]/65" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]">
            <span className="h-px w-12 bg-[var(--gold)]" />
            0{index + 1} / {label}
          </div>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] text-white">
            <RevealLines text={title} />
          </h2>
          <p className="mt-10 max-w-lg text-base font-light leading-[1.9] text-white/75">{copy}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── DIFFERENCE ───────────────────────── */
function Difference() {
  const items = [
    { t: "Vertical integration", d: "Land, design, build, deliver — under one disciplined roof." },
    { t: "Global standards", d: "Procurement and quality benchmarked to international peers." },
    { t: "Investor-grade trust", d: "Audited governance and transparent reporting at every stage." },
    { t: "Architectural restraint", d: "Buildings designed to age well and remain quietly relevant." },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--charcoal)] py-32 text-white lg:py-44">
      <FloatingGradient />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 text-center">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— What makes Dukes different</div>
          </Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05]">
            <RevealLines text="Built to outlast" /> <span className="italic text-[var(--gold)]"><RevealLines text="the moment." /></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-white/10 p-10 transition-all duration-700 hover:-translate-y-1 hover:border-[var(--gold)]/50"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{
                background: "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--gold) 12%, transparent), transparent 60%)"
              }} />
              <div className="font-display text-2xl text-[var(--gold)]">0{i + 1}</div>
              <h3 className="mt-6 font-display text-3xl text-white">{it.t}</h3>
              <div className="mt-4 h-px w-10 bg-[var(--gold)] transition-all duration-700 group-hover:w-20" />
              <p className="mt-6 max-w-sm text-sm font-light text-white/70">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PORTFOLIO ───────────────────────── */
type Project = { name: string; loc: string; cat: string; img: string };
function Portfolio() {
  const all: Record<string, Project[]> = {
    Residential: [
      { name: "Dukes Sovereign", loc: "Mumbai", cat: "Residential Tower", img: villaImg },
      { name: "Crown Heights", loc: "Bengaluru", cat: "Sky Residences", img: delightImg },
    ],
    Commercial: [
      { name: "Dukes Atrium", loc: "Hyderabad", cat: "Grade-A Workplace", img: commercialImg },
      { name: "Meridian One", loc: "Pune", cat: "Corporate Campus", img: heroImg },
    ],
    Plotted: [
      { name: "Dukes Reserve", loc: "Coimbatore", cat: "Master-Planned", img: plottedImg },
      { name: "Estuary Estates", loc: "Goa", cat: "Coastal Plots", img: villaImg },
    ],
    Ongoing: [
      { name: "The Vault", loc: "Mumbai", cat: "In Construction", img: commercialImg },
    ],
    Upcoming: [
      { name: "Skyline 27", loc: "Delhi NCR", cat: "Launching 2026", img: futureImg },
    ],
  };
  const tabs = Object.keys(all);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[var(--ivory)] py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="eyebrow mb-8 text-[var(--gold)]">— Portfolio & Developments</div>
            </Reveal>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-[var(--royal-deep)]">
              <RevealLines text="Selected" /> <span className="italic text-[var(--gold)]"><RevealLines text="works." /></span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-1 border-b border-[var(--charcoal)]/15">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active === t ? "text-[var(--royal-deep)]" : "text-[var(--charcoal)]/50 hover:text-[var(--royal-deep)]"
                }`}
              >
                {t}
                {active === t && (
                  <motion.span layoutId="tab" className="absolute inset-x-0 -bottom-px h-px bg-[var(--gold)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {all[active].map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <a href="#contact" className="group relative block overflow-hidden bg-[var(--royal-deep)]">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 transition-all duration-700" style={{
        background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--royal-deep) 90%, transparent))"
      }} />
      <div className="absolute inset-x-0 bottom-0 p-10 text-white">
        <div className="eyebrow text-[var(--gold)]">{p.cat}</div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <h3 className="font-display text-3xl">{p.name}</h3>
            <div className="mt-1 text-sm font-light text-white/70">{p.loc}</div>
          </div>
          <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-block border border-[var(--gold)] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">View</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-[var(--gold)]/60" />
    </a>
  );
}

/* ───────────────────────── CLIENTELE (marquee) ───────────────────────── */
function Clientele() {
  const brands = ["NESTLÉ", "UNILEVER", "P&G", "PHILIPS", "RECKITT", "L'ORÉAL", "DANONE", "COLGATE", "HENKEL", "PEPSICO"];
  const row = [...brands, ...brands];
  return (
    <section className="relative overflow-hidden border-y border-[var(--charcoal)]/10 bg-white py-20">
      <div className="mb-10 text-center">
        <div className="eyebrow text-[var(--gold)]">— Clientele & Partners</div>
      </div>
      <div className="relative">
        <div className="marquee flex w-max gap-20 whitespace-nowrap">
          {row.map((b, i) => (
            <span key={i} className="font-display text-3xl tracking-[0.2em] text-[var(--charcoal)]/30 transition-colors duration-500 hover:text-[var(--gold)]">
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

/* ───────────────────────── SUBSIDIARIES ───────────────────────── */
function Subsidiaries() {
  const brands = [
    { n: "Dukes Realty", t: "Real estate development" },
    { n: "Dukes Industries", t: "Manufacturing & FMCG" },
    { n: "Dukes Foundation", t: "Community impact" },
    { n: "Dukes Capital", t: "Investments & holdings" },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--ivory)] py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— Subsidiary Brands</div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-[var(--royal-deep)]">
            <RevealLines text="One group," /> <span className="italic text-[var(--gold)]"><RevealLines text="many disciplines." /></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-[var(--charcoal)]/10 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.9 }}
              className="group bg-[var(--ivory)] p-10 transition-all duration-700 hover:bg-white"
            >
              <div className="font-display text-2xl text-[var(--royal-deep)]">{b.n}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/50">{b.t}</div>
              <div className="mt-8 h-px w-8 bg-[var(--gold)] transition-all duration-700 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── LEADERSHIP ───────────────────────── */
function Leadership() {
  const people = [
    { n: "A. R. Dukes", r: "Chairman", q: "We do not chase trends. We outlast them." },
    { n: "Karan Dukes", r: "Managing Director", q: "Discipline is the most underrated luxury." },
    { n: "Rhea Mehta", r: "Chief Architect", q: "A building should age into its own beauty." },
  ];
  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— Leadership</div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05] text-[var(--royal-deep)]">
            <RevealLines text="The hands" /> <span className="italic text-[var(--gold)]"><RevealLines text="behind the work." /></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {people.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--royal-deep)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[10rem] text-white/10">{p.n.split(" ").map((s) => s[0]).join("")}</span>
                </div>
                <div className="absolute inset-0 flex items-end p-8 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{
                  background: "linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--royal-deep) 95%, transparent))"
                }}>
                  <p className="font-display text-xl italic text-white">"{p.q}"</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="font-display text-2xl text-[var(--royal-deep)]">{p.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/60">{p.r}</div>
                <div className="mt-4 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FUTURE VISION ───────────────────────── */
function FutureVision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-[var(--royal-deep)] text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={futureImg} alt="" className="h-full w-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, color-mix(in oklab, var(--royal-deep) 60%, transparent) 0%, var(--royal-deep) 100%)"
        }} />
      </motion.div>
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 lg:px-12">
        <Reveal>
          <div className="eyebrow mb-8 flex items-center gap-4 text-[var(--gold)]">
            <span className="h-px w-12 bg-[var(--gold)]" />
            Future Vision
          </div>
        </Reveal>
        <h2 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,7.5rem)] leading-[0.95] text-white">
          <RevealLines text="The next chapter" /><br />
          <span className="italic text-[var(--gold)]"><RevealLines text="is already underway." /></span>
        </h2>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-lg font-light leading-[1.8] text-white/75">
            Smart cities. Sustainable communities. Architecture that anticipates how we will live a decade from now.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--royal-deep)] py-32 text-white lg:py-44">
      <FloatingGradient />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="eyebrow mb-8 text-[var(--gold)]">— Begin a conversation</div>
          </Reveal>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[1] text-white">
            <RevealLines text="Schedule a" /><br />
            <span className="italic text-[var(--gold)]"><RevealLines text="private consultation." /></span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-md text-base font-light leading-[1.85] text-white/70">
              Our team responds personally within one business day. All inquiries are held in confidence.
            </p>
          </Reveal>
          <div className="mt-16 space-y-8">
            {[
              { l: "Headquarters", v: "Dukes House, Bandra Kurla Complex, Mumbai 400051" },
              { l: "Email", v: "investments@dukesrealty.com" },
              { l: "Telephone", v: "+91 22 0000 0000" },
            ].map((c, i) => (
              <motion.div
                key={c.l}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9 }}
              >
                <div className="eyebrow text-[var(--gold)]">{c.l}</div>
                <div className="mt-2 font-display text-xl text-white">{c.v}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass relative p-10 lg:p-12"
          >
            <div className="absolute -inset-px -z-10 opacity-50" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)" }} />
            <div className="space-y-8">
              {[
                { l: "Full name", t: "text" },
                { l: "Email address", t: "email" },
                { l: "Telephone", t: "tel" },
              ].map((f) => (
                <Field key={f.l} label={f.l} type={f.t} />
              ))}
              <FieldArea label="How can we help" />
              <button type="submit" className="group inline-flex w-full items-center justify-between border border-[var(--gold)] bg-[var(--gold)] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[var(--royal-deep)] transition-all hover:bg-transparent hover:text-[var(--gold)]">
                Send inquiry
                <span className="h-px w-8 bg-current transition-all group-hover:w-14" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="block">
      <div className="eyebrow mb-3 text-white/50">{label}</div>
      <input
        type={type}
        className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-[var(--gold)]"
      />
    </label>
  );
}
function FieldArea({ label }: { label: string }) {
  return (
    <label className="block">
      <div className="eyebrow mb-3 text-white/50">{label}</div>
      <textarea
        rows={3}
        className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-[var(--gold)]"
      />
    </label>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--charcoal)] py-16 text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">Dukes <span className="text-[var(--gold)]">Realty</span></div>
            <p className="mt-4 max-w-sm text-sm font-light text-white/50">Building timeless spaces for modern living since 1988.</p>
          </div>
          {[
            { t: "Explore", l: ["Legacy", "Portfolio", "Leadership", "Contact"] },
            { t: "Connect", l: ["LinkedIn", "Instagram", "Press", "Careers"] },
          ].map((col) => (
            <div key={col.t}>
              <div className="eyebrow mb-6 text-[var(--gold)]">{col.t}</div>
              <ul className="space-y-3">
                {col.l.map((it) => (
                  <li key={it}>
                    <a href="#" className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-[var(--gold)]">
                      <span className="inline-block w-0 overflow-hidden bg-current transition-all duration-500 group-hover:mr-3 group-hover:w-6 group-hover:bg-[var(--gold)]" style={{ height: 1 }} />
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 gold-line h-px w-full opacity-30" />
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-white/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Dukes Realty. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[var(--gold)]">Privacy</a>
            <a href="#" className="hover:text-[var(--gold)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
