import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { education } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="section-pad relative">
      <div
        className="absolute bottom-0 right-0 w-96 h-64 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container" style={{ maxWidth: '896px' }}>
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
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Academic{" "}
            <span className="gradient-text">background.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="relative rounded-2xl p-8 border border-[rgba(99,179,237,0.15)] overflow-hidden"
          style={{ background: "rgba(7,18,36,0.75)", backdropFilter: "blur(16px)" }}
        >
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#38bdf8]/40 via-[#818cf8]/40 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38bdf8]/20 to-[#818cf8]/20 border border-[rgba(56,189,248,0.2)] flex items-center justify-center text-[#38bdf8] shrink-0">
              <GraduationCap size={26} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
              <p className="text-lg font-semibold text-[#38bdf8] mb-3">{education.school}</p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                <div className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                  <MapPin size={13} className="text-[#64748b]" />
                  {education.location}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                  <Calendar size={13} className="text-[#64748b]" />
                  Graduated {education.graduated}
                </div>
              </div>

              {/* Minors */}
              <div className="flex items-start gap-2">
                <BookOpen size={14} className="text-[#64748b] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-[#64748b] uppercase tracking-wider font-semibold block mb-1.5">
                    Minors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {education.minors.map((minor) => (
                      <span
                        key={minor}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-[#94a3b8] bg-[rgba(99,179,237,0.06)] border border-[rgba(99,179,237,0.12)]"
                      >
                        {minor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
