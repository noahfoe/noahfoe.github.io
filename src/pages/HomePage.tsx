import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Terminal from '../components/Terminal';
import ResumeButton from '../components/ResumeButton';
import Reveal from '../components/Reveal';
import { projects, skillGroups, site } from '../data/portfolio';

// Two showcase projects
const FEATURED = [projects[0], projects[3]];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 96,
          paddingBottom: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background gradient */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(251,146,60,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div className="wrap">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
          >
            {/* Available badge */}
            <div style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 14px',
                  borderRadius: 99,
                  fontSize: 12,
                  fontWeight: 500,
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
                Open to new roles
              </span>
            </div>

            {/* Name */}
            <h1
              className="display"
              style={{
                fontSize: 'clamp(60px, 10vw, 128px)',
                color: 'var(--t1)',
                marginBottom: 20,
              }}
            >
              Noah Foley
            </h1>

            {/* Tagline */}
            <p
              className="mono"
              style={{
                fontSize: 14,
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Flutter · Frontend · Full-Stack Developer
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: 17,
                color: 'var(--t2)',
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 36,
              }}
            >
              5+ years building production apps and websites. Actively seeking Flutter,
              frontend, backend, and full-stack developer roles.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '11px 24px',
                  borderRadius: 9,
                  background: 'var(--accent)',
                  color: '#0c0d10',
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  letterSpacing: '-0.005em',
                  transition: 'opacity 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                View Projects <ArrowRight size={14} />
              </Link>

              <ResumeButton variant="outlined" label="Download Resume" />

              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '11px 20px',
                  borderRadius: 9,
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--t2)',
                  textDecoration: 'none',
                  transition: 'color 0.14s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t2)'; }}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' as const }}
            style={{ marginTop: 48, maxWidth: 680 }}
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: 'linear-gradient(to bottom, transparent, var(--bg))',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* ── Featured Work ─────────────────────────────────── */}
      <section style={{ padding: '96px 0' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'flex' }}>
              Featured Work
            </span>
            <h2
              className="display"
              style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--t1)' }}
            >
              Selected Projects
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {FEATURED.map((proj, i) => (
              <Reveal key={proj.id} delay={i * 0.08} style={{ height: '100%' }}>
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--bdr)',
                    borderRadius: 14,
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'border-color 0.18s, transform 0.18s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-md)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr)';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: 'var(--bg-3)',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={proj.images[0]}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 22px', flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 6,
                      }}
                    >
                      <h3
                        className="display"
                        style={{ fontSize: 18, color: 'var(--t1)' }}
                      >
                        {proj.title}
                      </h3>
                      <ExternalLink size={14} style={{ color: 'var(--t3)', flexShrink: 0 }} />
                    </div>
                    <p
                      className="mono"
                      style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 10, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    >
                      {proj.tagline}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {proj.tech.slice(0, 4).map(t => (
                        <span
                          key={t}
                          style={{
                            fontSize: 11,
                            color: 'var(--t3)',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid var(--bdr)',
                            borderRadius: 4,
                            padding: '2px 8px',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} style={{ marginTop: 28 }}>
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 14,
                color: 'var(--accent)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'gap 0.14s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px'; }}
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section
        style={{
          padding: '72px 0',
          borderTop: '1px solid var(--bdr)',
          borderBottom: '1px solid var(--bdr)',
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 8,
              marginBottom: 40,
            }}
          >
            {[
              { value: '5+', label: 'Years experience' },
              { value: '4', label: 'Live products' },
              { value: '4', label: 'Roles held' },
              { value: '∞', label: 'Stack depth' },
            ].map(stat => (
              <Reveal key={stat.label}>
                <div style={{ padding: '24px 20px', textAlign: 'center' }}>
                  <div
                    className="display"
                    style={{ fontSize: 42, color: 'var(--accent)', lineHeight: 1, marginBottom: 6 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--t3)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section style={{ padding: '96px 0' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: 40 }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'flex' }}>
              Technical Skills
            </span>
            <h2
              className="display"
              style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--t1)' }}
            >
              What I Work With
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                    padding: '22px 24px',
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {group.skills.map(skill => (
                      <span
                        key={skill}
                        style={{
                          fontSize: 13,
                          color: 'var(--t2)',
                          padding: '4px 10px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--bdr)',
                          borderRadius: 5,
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

      {/* ── CTA strip ─────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 0',
          borderTop: '1px solid var(--bdr)',
        }}
      >
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: 540 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 12px',
                  borderRadius: 99,
                  fontSize: 11,
                  color: 'var(--green)',
                  background: 'var(--green-dim)',
                  border: '1px solid var(--green-bdr)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    animation: 'pulse-dot 2.2s ease-in-out infinite',
                  }}
                />
                Available for Flutter, Frontend, Backend, Full-Stack
              </span>
              <h2
                className="display"
                style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--t1)', marginBottom: 12 }}
              >
                Let's build something together.
              </h2>
              <p style={{ color: 'var(--t2)', fontSize: 16, marginBottom: 28 }}>
                Have a role or project in mind? I'd love to hear from you.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a
                  href={`mailto:${site.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '11px 24px',
                    borderRadius: 9,
                    background: 'var(--accent)',
                    color: '#0c0d10',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  Send an Email <ArrowRight size={14} />
                </a>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '11px 20px',
                    borderRadius: 9,
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--t2)',
                    border: '1px solid var(--bdr-md)',
                    textDecoration: 'none',
                    transition: 'color 0.14s, border-color 0.14s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--t1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-hi)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--t2)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--bdr-md)';
                  }}
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
