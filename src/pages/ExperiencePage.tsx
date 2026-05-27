import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experiences, education, skillGroups } from '../data/portfolio';

export default function ExperiencePage() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <div>
      {/* Header */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 48,
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
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
          >
            <span className="eyebrow" style={{ marginBottom: 14, display: 'flex' }}>Background</span>
            <h1
              className="display"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: 'var(--t1)', marginBottom: 16 }}
            >
              Experience
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t2)', maxWidth: 500, lineHeight: 1.7 }}>
              5+ years of professional experience building Flutter apps, web applications,
              and developer tools across startups, federal agencies, and my own business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Work history ───────────────────────────────────── */}
      <section style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: 32 }}>
            <h2
              className="display"
              style={{ fontSize: 22, color: 'var(--t1)' }}
            >
              Work History
            </h2>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.07}>
                <div
                  style={{
                    paddingTop: 28,
                    paddingBottom: 28,
                    borderTop: '1px solid var(--bdr)',
                  }}
                  className="grid gap-3 sm:grid-cols-[200px_1fr]"
                >
                  {/* Left: Company + period */}
                  <div>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          fontWeight: 600,
                          fontSize: 14,
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          transition: 'opacity 0.14s',
                          marginBottom: 4,
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                      >
                        {exp.company}
                        <ExternalLink size={11} style={{ opacity: 0.6 }} />
                      </a>
                    ) : (
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          color: 'var(--t2)',
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          marginBottom: 4,
                        }}
                      >
                        {exp.company}
                      </div>
                    )}
                    <div
                      className="mono"
                      style={{ fontSize: 11, color: 'var(--t4)', letterSpacing: '0.04em' }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Right: Title + description */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <h3
                        className="display"
                        style={{ fontSize: 17, color: 'var(--t1)' }}
                      >
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 5,
                            padding: '3px 9px',
                            borderRadius: 99,
                            fontSize: 10,
                            color: 'var(--green)',
                            background: 'var(--green-dim)',
                            border: '1px solid var(--green-bdr)',
                            fontFamily: "'JetBrains Mono', monospace",
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              background: 'var(--green)',
                              animation: 'pulse-dot 2.2s ease-in-out infinite',
                            }}
                          />
                          Active
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75 }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            {/* Final border */}
            <div style={{ borderTop: '1px solid var(--bdr)' }} />
          </div>
        </div>
      </section>

      {/* ── Technical Skills ───────────────────────────────── */}
      <section
        style={{
          padding: '72px 0',
          borderTop: '1px solid var(--bdr)',
        }}
      >
        <div className="wrap">
          <Reveal style={{ marginBottom: 32 }}>
            <h2 className="display" style={{ fontSize: 22, color: 'var(--t1)' }}>
              Technical Skills
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.06}>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--bdr)',
                    borderRadius: 12,
                    padding: '20px 22px',
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 14,
                    }}
                  >
                    {group.category}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {group.skills.map(skill => (
                      <span
                        key={skill}
                        style={{
                          fontSize: 13,
                          color: 'var(--t2)',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────── */}
      <section
        style={{
          padding: '72px 0',
          borderTop: '1px solid var(--bdr)',
        }}
      >
        <div className="wrap">
          <Reveal style={{ marginBottom: 28 }}>
            <h2 className="display" style={{ fontSize: 22, color: 'var(--t1)' }}>
              Education
            </h2>
          </Reveal>

          <Reveal delay={0.07}>
            <div
              style={{
                display: 'flex',
                gap: 20,
                background: 'var(--bg-2)',
                border: '1px solid var(--bdr)',
                borderRadius: 14,
                padding: '28px 32px',
                maxWidth: 640,
              }}
            >
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
                <GraduationCap size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <h3
                    className="display"
                    style={{ fontSize: 18, color: 'var(--t1)' }}
                  >
                    {education.school}
                  </h3>
                  <span
                    className="mono"
                    style={{ fontSize: 11, color: 'var(--t4)', letterSpacing: '0.04em' }}
                  >
                    Graduated {education.graduated}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 10 }}>
                  {education.location}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--t1)', marginBottom: 12 }}>
                  {education.degree}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {education.minors.map(m => (
                    <span
                      key={m}
                      style={{
                        fontSize: 12,
                        color: 'var(--t3)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--bdr)',
                        borderRadius: 5,
                        padding: '3px 10px',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Minor: {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
