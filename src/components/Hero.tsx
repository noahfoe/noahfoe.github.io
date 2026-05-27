import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Terminal } from "lucide-react";
import { personal } from "../data/portfolio";
import ResumeDropdown from "./ResumeDropdown";

const terminalLines = [
  { prefix: "~", text: "flutter create portfolio --org com.noahfoley" },
  { prefix: "~", text: "dart pub get" },
  { prefix: "~", text: "flutter run --release" },
  { prefix: "→", text: "Building production app... ✓" },
  { prefix: "→", text: "5+ years experience loaded" },
  { prefix: "→", text: "Skills: Flutter · React · Full-Stack" },
  { prefix: "→", text: "Status: open_to_opportunities = true" },
];

function useTypingEffect(lines: typeof terminalLines, speed = 36) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    const full = `${line.prefix} ${line.text}`;

    if (currentChar < full.length) {
      timeout.current = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = full.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
    } else {
      timeout.current = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 320);
    }
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [currentLine, currentChar, lines, speed]);

  return displayed;
}

function TerminalCard({ lines }: { lines: string[] }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(56,189,248,0.18)",
        boxShadow:
          "0 0 0 1px rgba(56,189,248,0.04), 0 40px 80px rgba(0,0,0,0.7), 0 0 80px rgba(56,189,248,0.06) inset, 0 0 40px rgba(56,189,248,0.05)",
        background: "rgba(6,9,17,0.95)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-5 py-3.5 border-b"
        style={{ background: "rgba(3,5,14,0.98)", borderColor: "rgba(56,189,248,0.09)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex items-center gap-2 ml-3">
          <Terminal size={11} className="text-[#3d5068]" />
          <span className="text-[#3d5068] text-xs font-mono">noah@portfolio ~ </span>
        </div>
      </div>

      {/* Glowing accent line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.25) 30%, rgba(129,140,248,0.2) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Body */}
      <div
        className="p-8 font-mono text-[13.5px] min-h-[380px] leading-relaxed"
        style={{ background: "rgba(5,8,19,0.97)" }}
        aria-live="polite"
        aria-label="Terminal output"
      >
        {terminalLines.map((line, i) => {
          const shown = lines[i] || "";
          if (!shown) return null;
          const isOutput = line.prefix === "→";
          return (
            <div key={i} className="mb-3 flex gap-3">
              <span className={`shrink-0 select-none ${isOutput ? "text-[#38bdf8]" : "text-emerald-400"}`}>
                {isOutput ? "→" : "$"}
              </span>
              <span className={isOutput ? "text-[#64748b]" : "text-[#e2e8f0]"}>
                {shown.slice(2)}
              </span>
            </div>
          );
        })}
        {lines.length < terminalLines.length && (
          <span className="inline-block w-2 h-[14px] bg-[#38bdf8] animate-pulse align-middle rounded-sm opacity-90" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const lines = useTypingEffect(terminalLines);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, var(--navy) 0%, transparent 100%)" }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, var(--navy) 0%, transparent 100%)" }}
      />

      {/* Animated orbs */}
      <div
        className="orb-1 absolute top-1/3 left-1/4 w-[900px] h-[900px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="orb-2 absolute bottom-1/3 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.055) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="orb-3 absolute top-2/3 left-2/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top radial glow */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-36 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* ── Left column ── */}
          <div className="max-w-[560px]">

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium"
                style={{
                  border: "1px solid rgba(52,211,153,0.28)",
                  background: "rgba(52,211,153,0.06)",
                  color: "#6ee7b7",
                  boxShadow: "0 0 18px rgba(52,211,153,0.08)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    background: "#34d399",
                    boxShadow: "0 0 6px rgba(52,211,153,0.8)",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                open_to_work = true
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-extrabold tracking-tight leading-[1.0] text-white mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(4rem, 9vw, 7rem)",
              }}
            >
              Noah
              <br />
              <span className="gradient-text">Foley</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-xl sm:text-2xl font-semibold text-[#94a3b8] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {personal.headline}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-lg text-[#475569] mb-12 leading-relaxed"
            >
              {personal.tagline} Building production-grade mobile apps, web apps, and client sites with care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060911]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>

              <ResumeDropdown variant="secondary" label="Resume" />

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-[#94a3b8] font-bold text-sm hover:text-white hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060911]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* ── Right column: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative items-center justify-center min-h-[600px] hidden lg:flex"
          >
            {/* Radial glow behind terminal */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[600px] h-[500px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(129,140,248,0.04) 50%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
            </div>

            {/* Terminal */}
            <div className="relative z-10 w-full max-w-[540px]">
              <TerminalCard lines={lines} />
            </div>
          </motion.div>
        </div>

        {/* Mobile terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:hidden"
        >
          <TerminalCard lines={lines} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#3d5068] hover:text-[#38bdf8] transition-colors duration-200 focus-visible:outline-none"
        aria-label="Scroll to projects"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em]">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
