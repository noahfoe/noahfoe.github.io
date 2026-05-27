import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Layers, Database, GitMerge } from "lucide-react";
import { skillGroups } from "../data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={22} />,
  layers: <Layers size={22} />,
  database: <Database size={22} />,
  "git-merge": <GitMerge size={22} />,
};

const categoryDescriptions: Record<string, string> = {
  "Mobile & Frontend": "Cross-platform apps, responsive web UIs, and modern JavaScript frameworks.",
  "State Management": "Architecture patterns for predictable, maintainable app state.",
  "Backend & Cloud": "APIs, databases, real-time sync, and serverless infrastructure.",
  "Workflow & Collaboration": "Version control, design handoff, and agile team practices.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-pad relative">
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.045) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#38bdf8] to-transparent" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#38bdf8]">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A versatile{" "}
            <span className="gradient-text">tech stack.</span>
          </h2>
          <p className="text-[#64748b] max-w-xl text-lg leading-relaxed">
            Tools I use to ship polished, production-ready software across mobile, web, and cloud.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={gi + 1}
              className="relative rounded-2xl border overflow-hidden transition-all duration-300 hover:border-[rgba(56,189,248,0.22)] hover:-translate-y-1"
              style={{
                background: "rgba(7,11,24,0.88)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(56,189,248,0.1)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Top gradient accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(56,189,248,0.35) 40%, rgba(129,140,248,0.25) 70%, transparent)",
                }}
                aria-hidden="true"
              />

              <div className="p-8">
                {/* Category header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(129,140,248,0.12) 100%)",
                      border: "1px solid rgba(56,189,248,0.18)",
                    }}
                  >
                    <span className="text-[#38bdf8]">
                      {categoryIcons[group.icon] ?? <Layers size={22} />}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span
                      className="block text-base font-bold text-white leading-tight mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {group.category}
                    </span>
                    <p className="text-[#475569] text-sm leading-snug">
                      {categoryDescriptions[group.category] ?? ""}
                    </p>
                  </div>
                </div>

                {/* Skill chips — unified monochrome */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={
                        inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
                      }
                      transition={{
                        delay: 0.25 + gi * 0.08 + si * 0.035,
                        duration: 0.28,
                        ease: "easeOut" as const,
                      }}
                      className="px-3.5 py-2 rounded-lg text-[13px] font-medium border cursor-default transition-all duration-200 font-mono"
                      style={{
                        color: "#64748b",
                        background: "rgba(56,189,248,0.04)",
                        borderColor: "rgba(56,189,248,0.1)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#38bdf8";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(56,189,248,0.08)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(56,189,248,0.28)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#64748b";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(56,189,248,0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(56,189,248,0.1)";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
