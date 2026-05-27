import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import ResumeButton from '../components/ResumeButton';
import Reveal from '../components/Reveal';
import { site } from '../data/portfolio';

export default function ContactPage() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <div>
      {/* Header */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 64,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(251,146,60,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="wrap"
          style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
        >
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}
            >
              Reach Out
            </span>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(40px, 7vw, 88px)',
                color: 'var(--t1)',
                marginBottom: 16,
              }}
            >
              Get In Touch
            </h1>
            <p
              style={{
                fontSize: 17,
                color: 'var(--t2)',
                lineHeight: 1.7,
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              I'm actively seeking Flutter, frontend, backend, and full-stack developer
              roles. If you have an opportunity or just want to connect, reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────── */}
      <section style={{ paddingBottom: 96 }}>
        <div className="wrap-md">
          {/* Large email link */}
          <Reveal style={{ marginBottom: 48 }}>
            <a
              href={`mailto:${site.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '28px 32px',
                background: 'var(--bg-2)',
                border: '1px solid var(--bdr)',
                borderRadius: 16,
                textDecoration: 'none',
                transition: 'border-color 0.18s, transform 0.18s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,146,60,0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr)';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(251,146,60,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--t3)', marginBottom: 2 }}>Best way to reach me</div>
                  <div
                    style={{
                      fontSize: 'clamp(14px, 2.5vw, 20px)',
                      fontWeight: 600,
                      color: 'var(--t1)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {site.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={20} style={{ color: 'var(--t3)', flexShrink: 0 }} />
            </a>
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.08} style={{ marginBottom: 40 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 12,
              }}
            >
              {[
                {
                  icon: <GithubIcon size={20} />,
                  label: 'GitHub',
                  value: 'github.com/noahfoe',
                  href: site.github,
                  desc: 'Code & open source',
                },
                {
                  icon: <LinkedinIcon size={20} />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/noahfoe',
                  href: site.linkedin,
                  desc: 'Professional profile',
                },
              ].map(card => (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '18px 22px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--bdr)',
                    borderRadius: 14,
                    textDecoration: 'none',
                    transition: 'border-color 0.18s, transform 0.18s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-md)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr)';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                >
                  <div style={{ color: 'var(--t2)', flexShrink: 0 }}>{card.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--t1)', marginBottom: 2 }}>
                      {card.label}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--t3)', marginBottom: 2 }}>
                      {card.desc}
                    </div>
                    <div
                      className="mono"
                      style={{ fontSize: 11, color: 'var(--t3)', letterSpacing: '0.02em' }}
                    >
                      {card.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Resume download */}
          <Reveal delay={0.14}>
            <div
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--bdr)',
                borderRadius: 16,
                padding: '28px 32px',
                textAlign: 'center',
                marginBottom: 32,
              }}
            >
              <h3
                className="display"
                style={{ fontSize: 20, color: 'var(--t1)', marginBottom: 6 }}
              >
                Download My Resume
              </h3>
              <p style={{ fontSize: 14, color: 'var(--t3)', marginBottom: 20 }}>
                Available in PDF or Word format.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 12,
                }}
              >
                <ResumeButton variant="solid" label="Download Resume" />
                <a
                  href={`mailto:${site.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '10px 22px',
                    borderRadius: 9,
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--t1)',
                    border: '1px solid var(--bdr-md)',
                    textDecoration: 'none',
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    transition: 'border-color 0.14s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-hi)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-md)'; }}
                >
                  <Mail size={14} />
                  Send Email
                </a>
              </div>
            </div>
          </Reveal>

          {/* Availability badge */}
          <Reveal delay={0.2}>
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  borderRadius: 99,
                  fontSize: 12,
                  color: 'var(--green)',
                  background: 'var(--green-dim)',
                  border: '1px solid var(--green-bdr)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    flexShrink: 0,
                    animation: 'pulse-dot 2.2s ease-in-out infinite',
                  }}
                />
                Open to new opportunities in Flutter, Frontend, Backend, and Full-Stack
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
