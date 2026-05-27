import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/portfolio";
import ResumeDropdown from "./ResumeDropdown";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Best way to reach me",
    cardStyle: {
      border: "1px solid rgba(56,189,248,0.15)",
      background: "linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(6,9,17,0.6) 100%)",
    },
    iconStyle: {
      background: "rgba(56,189,248,0.1)",
      border: "1px solid rgba(56,189,248,0.2)",
      color: "#38bdf8",
    },
  },
  {
    icon: <GithubIcon width={20} height={20} />,
    label: "GitHub",
    value: "github.com/noahfoe",
    href: personal.github,
    description: "Code & projects",
    cardStyle: {
      border: "1px solid rgba(100,116,139,0.18)",
      background: "linear-gradient(135deg, rgba(100,116,139,0.07) 0%, rgba(6,9,17,0.6) 100%)",
    },
    iconStyle: {
      background: "rgba(100,116,139,0.1)",
      border: "1px solid rgba(100,116,139,0.22)",
      color: "#cbd5e1",
    },
  },
  {
    icon: <LinkedinIcon width={20} height={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/noahfoe",
    href: personal.linkedin,
    description: "Professional profile",
    cardStyle: {
      border: "1px solid rgba(59,130,246,0.16)",
      background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(6,9,17,0.6) 100%)",
    },
    iconStyle: {
      background: "rgba(59,130,246,0.1)",
      border: "1px solid rgba(59,130,246,0.22)",
      color: "#93c5fd",
    },
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-pad relative">
      {/* Bottom glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(56,189,248,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="section-container text-center" style={{ maxWidth: "896px" }}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#38bdf8]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#38bdf8]">
              Contact
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#38bdf8]" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Let&apos;s build something{" "}
            <span className="gradient-text">polished.</span>
          </h2>

          <p className="text-[#94a3b8] max-w-lg mx-auto text-lg leading-relaxed">
            I&apos;m actively seeking Flutter, frontend, backend, and full-stack developer roles.
            If you have an opportunity or want to connect, reach out — I&apos;m always happy to talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 1}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                ...link.cardStyle,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              aria-label={`${link.label}: ${link.value}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={link.iconStyle}
              >
                {link.icon}
              </div>
              <div className="text-center">
                <div
                  className="font-bold text-white text-sm mb-0.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link.label}
                </div>
                <div className="text-[#475569] text-xs">{link.description}</div>
                <div className="text-[#38bdf8] text-xs mt-1.5 font-mono truncate max-w-[160px]">
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060911]"
          >
            <Mail size={16} />
            Send Email
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <ResumeDropdown variant="secondary" label="Download Resume" />
        </motion.div>
      </div>
    </section>
  );
}
