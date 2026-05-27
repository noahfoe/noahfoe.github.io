import { useState, useEffect, useRef } from "react";
import { Download, FileText, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ResumeDropdownProps {
  className?: string;
  variant?: "primary" | "secondary" | "ghost-nav";
  label?: string;
  dropdownAlign?: "left" | "right";
}

export default function ResumeDropdown({
  className = "",
  variant = "secondary",
  label = "Resume",
  dropdownAlign = "left",
}: ResumeDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const buttonBase =
    "inline-flex items-center gap-2 font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060911]";

  const buttonVariants: Record<string, string> = {
    primary:
      "px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97]",
    secondary:
      "px-6 py-3 rounded-xl border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-sm hover:bg-[rgba(56,189,248,0.08)] hover:border-[rgba(56,189,248,0.55)]",
    "ghost-nav":
      "px-4 py-2 rounded-lg border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-sm hover:bg-[rgba(56,189,248,0.08)] transition-colors duration-200",
  };

  const alignClass = dropdownAlign === "right" ? "right-0" : "left-0";

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`${buttonBase} ${buttonVariants[variant]}`}
        aria-haspopup="true"
        aria-expanded={open}
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        <Download size={15} />
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className={`absolute top-full mt-2 z-[200] min-w-[200px] rounded-xl overflow-hidden ${alignClass}`}
            role="menu"
            aria-label="Resume format"
            style={{
              background: "rgba(5,8,20,0.98)",
              border: "1px solid rgba(56,189,248,0.22)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(56,189,248,0.04), 0 0 30px rgba(56,189,248,0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Header label */}
            <div className="px-5 pt-3.5 pb-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#475569] font-mono">
                Choose format
              </span>
            </div>

            <a
              href="/MyResume2026.pdf"
              download="Noah_Foley_Resume.pdf"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3.5 px-5 py-3 text-sm text-[#94a3b8] hover:text-white hover:bg-[rgba(56,189,248,0.07)] transition-colors duration-150"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.18)" }}
              >
                <FileText size={13} className="text-[#38bdf8]" />
              </span>
              <span>
                <span className="block font-semibold text-white text-[13px]">PDF</span>
                <span className="block text-[11px] text-[#475569]">Best for email / print</span>
              </span>
            </a>

            <div className="mx-4 h-px bg-[rgba(56,189,248,0.07)]" aria-hidden="true" />

            <a
              href="/MyResume2026.docx"
              download="Noah_Foley_Resume.docx"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3.5 px-5 py-3 mb-1 text-sm text-[#94a3b8] hover:text-white hover:bg-[rgba(56,189,248,0.07)] transition-colors duration-150"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.18)" }}
              >
                <FileText size={13} className="text-[#818cf8]" />
              </span>
              <span>
                <span className="block font-semibold text-white text-[13px]">Word (.docx)</span>
                <span className="block text-[11px] text-[#475569]">Editable format</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
