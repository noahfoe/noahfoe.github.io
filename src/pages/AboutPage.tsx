import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const STATS = [
  { value: '5+', label: 'Years Flutter & Dart' },
  { value: '4',  label: 'Production apps & sites' },
  { value: '4',  label: 'Professional roles' },
  { value: 'Full', label: 'Stack capable' },
];

const BRINGS = [
  '5+ years Flutter & Dart in production',
  'iOS & Android mobile development',
  'React, TypeScript, and modern web tooling',
  'Firebase, REST APIs, cloud integration',
  'End-to-end: design to deployment',
  'Strong UI/UX sensibility',
  'Agile teams & professional codebases',
];

export default function AboutPage() {
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
            <span className="eyebrow" style={{ marginBottom: 14, display: 'flex' }}>Who I Am</span>
            <h1
              className="display"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: 'var(--t1)', marginBottom: 16 }}
            >
              About Me
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Stats row ──────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--bdr)',
          borderBottom: '1px solid var(--bdr)',
          padding: '48px 0',
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 0,
            }}
          >
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div
                  style={{
                    padding: '20px 24px',
                    borderRight: i < STATS.length - 1 ? '1px solid var(--bdr)' : 'none',
                    textAlign: 'center',
                  }}
                >
                  <div
                    className="display"
                    style={{ fontSize: 40, color: 'var(--accent)', lineHeight: 1, marginBottom: 6 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--t3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bio + sidebar ─────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div
            className="grid gap-12 lg:grid-cols-[1fr_340px]"
          >
            {/* Bio */}
            <Reveal>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: 'var(--t2)',
                }}
              >
                <p>
                  I'm a frontend-focused developer with over five years of experience
                  specializing in Flutter and Dart. I've built and shipped production mobile
                  apps on Google Play, client websites, and internal tooling for a federal
                  agency. Each project required real engineering care, not just prototyping.
                </p>
                <p>
                  My background spans the full stack: Flutter for cross-platform mobile and
                  web, React and TypeScript for frontend web development, Firebase and
                  RESTful APIs for backend integration, and Git-based collaboration for
                  professional team environments. I care deeply about clean UI/UX, readable
                  code, and shipping things that actually work for real users.
                </p>
                <p>
                  Currently, I run{' '}
                  <a
                    href="https://www.foleywebsystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'opacity 0.14s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >
                    Foley Web Systems
                  </a>
                  , building websites for small businesses while actively seeking my next
                  full-time Flutter, frontend, backend, or full-stack developer role. I
                  do my best work in collaborative teams and care about shipping products
                  that hold up in the real world.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                  <Link
                    to="/projects"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '10px 22px',
                      borderRadius: 9,
                      background: 'var(--accent)',
                      color: '#0c0d10',
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      transition: 'opacity 0.14s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >
                    View My Projects <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 20px',
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
                    Get In Touch
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* What I bring */}
              <Reveal delay={0.08}>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--bdr)',
                    borderRadius: 14,
                    padding: '24px 26px',
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 16,
                    }}
                  >
                    What I Bring
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {BRINGS.map(item => (
                      <li
                        key={item}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.6 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Quote */}
              <Reveal delay={0.14}>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid rgba(251,146,60,0.12)',
                    borderRadius: 14,
                    padding: '24px 26px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.35), transparent)',
                    }}
                  />
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: 'var(--t2)',
                      fontStyle: 'italic',
                      marginBottom: 12,
                    }}
                  >
                    &ldquo;He who stops being better stops being good.&rdquo;
                  </p>
                  <p
                    className="mono"
                    style={{ fontSize: 11, color: 'var(--t4)', letterSpacing: '0.04em' }}
                  >
                    — Oliver Cromwell
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
