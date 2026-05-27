import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Globe, Smartphone, Code2 } from "lucide-react";

const highlights = [
  {
    icon: <Smartphone size={20} />,
    title: "Mobile-First",
    body: "5+ years of Flutter & Dart. Two live apps on Google Play, one game and one productivity tool.",
  },
  {
    icon: <Globe size={20} />,
    title: "Web & Frontend",
    body: "React, TypeScript, HTML/CSS/JS. Built production client websites and my own business site.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Full-Stack Capable",
    body: "Firebase, REST APIs, Python, SQL. Comfortable bridging mobile, web, and backend layers.",
  },
  {
    icon: <Zap size={20} />,
    title: "Shipped & Deployed",
    body: "Government, startup, and freelance experience — all in real production environments.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-pad relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.045) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <div className="section-eyebrow">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#38bdf8]">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Building polished products,{" "}
            <span className="gradient-text">end to end.</span>
          </h2>
        </motion.div>

        {/* Bio + highlight cards */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div className="space-y-6">
            {[
              "I'm a frontend-focused developer with 5+ years of professional Flutter and Dart experience, and a genuine love for turning ideas and designs into polished, usable products.",
              "Over my career I've shipped production mobile apps, government-grade internal tools, client websites, and my own game on Google Play — across startups, federal contracting, and self-employed work.",
              "I enjoy the full picture: mobile UIs that feel native, web experiences that look great, and the backend plumbing that ties it all together. My toolkit covers Flutter, React/TypeScript, Firebase, REST APIs, and more.",
              "Right now I'm running Foley Web Systems as a self-employed operation while I'm actively seeking my next full-time Flutter, frontend, backend, or full-stack developer role. If you're building something great, I'd love to talk.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="text-[#94a3b8] leading-relaxed text-base sm:text-lg"
              >
                {para}
              </motion.p>
            ))}

            {/* Open to work chip */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={5}
              className="pt-2"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold"
                style={{
                  border: "1px solid rgba(52,211,153,0.28)",
                  background: "rgba(52,211,153,0.06)",
                  color: "#86efac",
                  boxShadow: "0 0 20px rgba(52,211,153,0.07)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    background: "#34d399",
                    boxShadow: "0 0 6px rgba(52,211,153,0.75)",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                Open to Flutter, Frontend, Backend &amp; Full-Stack roles
              </span>
            </motion.div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="group p-7 rounded-2xl border border-[rgba(56,189,248,0.09)] hover:border-[rgba(56,189,248,0.26)] transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(8,13,26,0.8)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[#38bdf8] mb-5 group-hover:scale-110 transition-transform duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.18) 0%, rgba(129,140,248,0.14) 100%)",
                    border: "1px solid rgba(56,189,248,0.18)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-white mb-2 text-[15px]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote card */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={7}
          className="mt-20 max-w-2xl"
        >
          <blockquote
            className="relative px-8 py-8 rounded-2xl"
            style={{
              background: "rgba(8,13,26,0.6)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(56,189,248,0.08)",
              borderLeft: "3px solid rgba(56,189,248,0.4)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.25)",
            }}
          >
            <span
              className="absolute top-2 right-5 text-8xl leading-none pointer-events-none select-none"
              aria-hidden="true"
              style={{
                opacity: 0.05,
                fontFamily: "'Syne', sans-serif",
                color: "#38bdf8",
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>
            <p className="text-[#94a3b8] text-base sm:text-lg italic leading-relaxed">
              &ldquo;He who stops being better stops being good.&rdquo;
            </p>
            <footer className="mt-3 text-xs font-mono text-[#3d5068]">
              — Oliver Cromwell
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
