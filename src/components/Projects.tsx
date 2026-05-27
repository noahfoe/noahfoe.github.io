import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Smartphone, Globe, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { projects, type Project } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

function getDisplayUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function FallbackImage({ accentColor, title }: { accentColor: string; title: string }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${accentColor} flex items-center justify-center`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 55%, rgba(56,189,248,0.16) 0%, transparent 55%), radial-gradient(circle at 75% 20%, rgba(129,140,248,0.14) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <span
        className="relative text-4xl font-extrabold text-white/[0.055] tracking-tight text-center px-6 select-none"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </span>
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(6,9,17,0.6)] border border-[rgba(56,189,248,0.1)]">
        <ImageOff size={10} className="text-[#475569]" />
        <span className="text-[9px] font-mono text-[#475569] uppercase tracking-wider">Preview</span>
      </div>
    </div>
  );
}

function ProjectImageArea({
  project,
  isApp,
}: {
  project: Project;
  isApp: boolean;
}) {
  const screenshots = project.screenshots ?? [];
  const count = screenshots.length;
  const [current, setCurrent] = useState(0);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const go = (dir: 1 | -1) => {
    setCurrent((c) => (c + dir + count) % count);
  };

  const src = count > 0 ? screenshots[current] : undefined;
  const hasError = errors[current];
  const showImage = !!src && !hasError;

  if (!showImage) {
    return (
      <div className="h-[280px] overflow-hidden">
        <FallbackImage accentColor={project.accentColor} title={project.title} />
      </div>
    );
  }

  if (isApp) {
    return (
      <div
        className="relative h-[340px] overflow-hidden flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #070e1c 0%, #0a1322 100%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Phone mockup */}
        <div
          className="relative z-10"
          style={{
            height: "296px",
            width: "148px",
            borderRadius: "26px",
            border: "1.5px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.6), 0 24px 64px rgba(0,0,0,0.75), 0 8px 24px rgba(56,189,248,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
            overflow: "hidden",
            background: "#000",
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            style={{
              width: "42px",
              height: "10px",
              background: "rgba(0,0,0,0.9)",
              borderRadius: "0 0 8px 8px",
            }}
            aria-hidden="true"
          />
          <img
            src={src}
            alt={`${project.title} screenshot ${current + 1} of ${count}`}
            className="w-full h-full object-cover"
            onError={() => setErrors((prev) => ({ ...prev, [current]: true }))}
          />
        </div>

        {/* Prev / next arrows */}
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
              style={{
                background: "rgba(6,9,17,0.75)",
                border: "1px solid rgba(56,189,248,0.18)",
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={14} className="text-[#94a3b8]" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
              style={{
                background: "rgba(6,9,17,0.75)",
                border: "1px solid rgba(56,189,248,0.18)",
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight size={14} className="text-[#94a3b8]" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{
                  width: i === current ? "18px" : "6px",
                  background: i === current ? "#38bdf8" : "rgba(148,163,184,0.3)",
                }}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ── Website: browser chrome frame ── */
  return (
    <div className="overflow-hidden">
      {/* Browser chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{
          background: "rgba(3,6,16,0.97)",
          borderColor: "rgba(56,189,248,0.08)",
        }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        {/* Address bar */}
        <div
          className="ml-2 flex-1 h-5 rounded flex items-center px-2.5 max-w-[220px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(56,189,248,0.09)",
          }}
        >
          <span className="text-[9px] text-[#475569] truncate font-mono leading-none">
            {getDisplayUrl(project.liveUrl)}
          </span>
        </div>
        {/* Screenshot dots in chrome */}
        {count > 1 && (
          <div className="ml-auto flex items-center gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{
                  width: i === current ? "14px" : "5px",
                  background: i === current ? "#38bdf8" : "rgba(148,163,184,0.25)",
                }}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative h-[280px] overflow-hidden group/img">
        <img
          src={src}
          alt={`${project.title} screenshot ${current + 1} of ${count}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={() => setErrors((prev) => ({ ...prev, [current]: true }))}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(6,9,17,0) 40%, rgba(6,9,17,0.92) 100%)",
          }}
        />
        {/* Prev / next arrows appear on hover */}
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(6,9,17,0.82)",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={14} className="text-[#94a3b8]" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(6,9,17,0.82)",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight size={14} className="text-[#94a3b8]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isApp = project.liveUrl.includes("play.google");
  const PlatformIcon = isApp ? Smartphone : Globe;
  const platformLabel = isApp ? "View on Google Play" : "Visit Live Site";

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={index + 1}
      className="group relative rounded-2xl overflow-hidden border border-[rgba(56,189,248,0.1)] hover:border-[rgba(56,189,248,0.32)] transition-all duration-400 hover:-translate-y-2"
      style={{
        background: "rgba(8,13,26,0.9)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.02) inset",
      }}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentColor} opacity-70 z-10`}
        aria-hidden="true"
      />

      {/* Screenshot area */}
      <ProjectImageArea project={project} isApp={isApp} />

      {/* Card body */}
      <div className="relative p-8 pt-6">
        {/* Badge + external link */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold ${project.badgeColor}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
            {project.badge}
          </span>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl border border-[rgba(56,189,248,0.14)] text-[#64748b] hover:text-[#38bdf8] hover:border-[rgba(56,189,248,0.4)] hover:bg-[rgba(56,189,248,0.08)] transition-all duration-200"
            aria-label={`Open ${project.title} in new tab`}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-extrabold text-white mb-3 group-hover:text-[#38bdf8] transition-colors duration-200 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#94a3b8] text-[15px] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 rounded-md text-xs font-medium text-[#64748b] bg-[rgba(56,189,248,0.05)] border border-[rgba(56,189,248,0.1)] font-mono hover:text-[#94a3b8] hover:border-[rgba(56,189,248,0.2)] transition-colors duration-150"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors duration-200"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <PlatformIcon size={14} className="shrink-0" />
          <span>{platformLabel}</span>
          <ExternalLink
            size={12}
            className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all duration-200"
          />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="section-pad relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <div className="section-eyebrow">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#38bdf8]">
              Featured Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real apps.{" "}
            <span className="gradient-text">Real users.</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl leading-relaxed">
            Every project below is live in production — no mockups, no demos.
            Built, shipped, and maintained by me.
          </p>
        </motion.div>

        {/* Cards grid */}
        {inView && (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
