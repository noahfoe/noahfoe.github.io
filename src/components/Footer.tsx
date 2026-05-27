import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/portfolio";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(99,179,237,0.08)] py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="text-sm font-bold text-[#94a3b8]">Noah Foley</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#64748b] text-center">
            © {year} Noah Foley. Built with React, Vite &amp; Tailwind CSS.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { href: personal.github, icon: <GithubIcon width={16} height={16} />, label: "GitHub profile" },
              { href: personal.linkedin, icon: <LinkedinIcon width={16} height={16} />, label: "LinkedIn profile" },
              {
                href: `mailto:${personal.email}`,
                icon: <Mail size={16} />,
                label: "Email Noah Foley",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#64748b] hover:text-[#38bdf8] hover:bg-[rgba(56,189,248,0.08)] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
