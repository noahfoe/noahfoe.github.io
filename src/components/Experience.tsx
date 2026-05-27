import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { experiences } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-pad relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(56,189,248,0.035) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="section-container" style={{ maxWidth: "896px" }}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <div className="section-eyebrow">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#38bdf8]">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional{" "}
            <span className="gradient-text">timeline.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-3 bottom-3 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0.18) 60%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[13px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    exp.current
                      ? "border-[#38bdf8]"
                      : "border-[rgba(56,189,248,0.3)]"
                  }`}
                  style={{
                    background: exp.current
                      ? "rgba(56,189,248,0.18)"
                      : "var(--navy-3)",
                    boxShadow: exp.current
                      ? "0 0 14px rgba(56,189,248,0.45), 0 0 0 4px rgba(56,189,248,0.07)"
                      : "none",
                  }}
                  aria-hidden="true"
                >
                  {exp.current && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "#38bdf8",
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-8 border transition-all duration-300"
                  style={{
                    border: exp.current
                      ? "1px solid rgba(56,189,248,0.26)"
                      : "1px solid rgba(56,189,248,0.1)",
                    background: exp.current
                      ? "rgba(8,13,26,0.92)"
                      : "rgba(8,13,26,0.7)",
                    backdropFilter: "blur(16px)",
                    boxShadow: exp.current
                      ? "0 0 40px rgba(56,189,248,0.04), 0 4px 32px rgba(0,0,0,0.35)"
                      : "0 4px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  {/* Top row: title / dates */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      {/* Title + current badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3
                          className="font-extrabold text-white text-base leading-tight"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap"
                            style={{
                              background: "rgba(52,211,153,0.1)",
                              border: "1px solid rgba(52,211,153,0.28)",
                              color: "#6ee7b7",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>

                      {/* Company + optional link */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={12} className="text-[#38bdf8] shrink-0" />
                          <span className="text-[#38bdf8] text-sm font-semibold">
                            {exp.company}
                          </span>
                        </div>
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono hover:text-[#38bdf8] transition-colors duration-200"
                            style={{ color: "#3d5068" }}
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <ExternalLink size={10} />
                            <span>foleywebsystems.com</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <span className="text-xs font-mono whitespace-nowrap shrink-0 mt-0.5" style={{ color: "#3d5068" }}>
                      {exp.dates}
                    </span>
                  </div>

                  <p className="text-[#94a3b8] text-[15px] leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
