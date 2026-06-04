import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  const renderNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={ref}>
      <span className="tabular-nums">{renderNumber(n)}</span>
      {suffix && (
        <span className={`tracking-normal ml-1 inline-block align-middle ${
          suffix.length > 1 
            ? "text-[0.8rem] lg:text-[1rem] font-sans uppercase opacity-80" 
            : "text-[0.8em] -translate-y-[0.1em] opacity-100"
        }`}>
          {suffix}
        </span>
      )}
    </span>
  );
}
