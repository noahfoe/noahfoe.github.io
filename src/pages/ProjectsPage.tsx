import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';

function ProjectEntry({ proj, index }: { proj: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      style={{
        paddingTop: 64,
        paddingBottom: 64,
        borderTop: '1px solid var(--bdr)',
      }}
    >
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: 'var(--t4)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              {num} / {String(projects.length).padStart(2, '0')}
            </div>

            <h2
              className="display"
              style={{
                fontSize: 'clamp(30px, 5vw, 52px)',
                color: 'var(--t1)',
                marginBottom: 8,
              }}
            >
              {proj.title}
            </h2>

            <span
              className="mono"
              style={{
                fontSize: 11,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 20,
                display: 'block',
              }}
            >
              {proj.tagline}
            </span>

            <p
              style={{
                fontSize: 16,
                color: 'var(--t2)',
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              {proj.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
              {proj.tech.map(t => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    color: 'var(--t3)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--bdr)',
                    borderRadius: 5,
                    padding: '4px 10px',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'gap 0.13s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px'; }}
              >
                <ExternalLink size={13} />
                {proj.kind === 'mobile' ? 'View on Google Play' : 'View Live Site'}
              </a>
            )}
          </div>

          {/* Images column */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {proj.kind === 'mobile' ? (
              /* Mobile: 3 screenshots side by side */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 10,
                  width: '100%',
                }}
              >
                {proj.images.map((src, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '1px solid var(--bdr)',
                      background: 'var(--bg-3)',
                      aspectRatio: '9/19',
                    }}
                  >
                    <img
                      src={src}
                      alt={`${proj.title} screenshot ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Web: first screenshot full width, then two small below */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <div
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: '1px solid var(--bdr)',
                    background: 'var(--bg-3)',
                    aspectRatio: '16/10',
                  }}
                >
                  <img
                    src={proj.images[0]}
                    alt={`${proj.title} screenshot 1`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {proj.images.slice(1, 3).map((src, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: 10,
                        overflow: 'hidden',
                        border: '1px solid var(--bdr)',
                        background: 'var(--bg-3)',
                        aspectRatio: '4/3',
                      }}
                    >
                      <img
                        src={src}
                        alt={`${proj.title} screenshot ${i + 2}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProjectsPage() {
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
            <span className="eyebrow" style={{ marginBottom: 14, display: 'flex' }}>Portfolio</span>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(40px, 7vw, 88px)',
                color: 'var(--t1)',
                marginBottom: 16,
              }}
            >
              Projects
            </h1>
            <p style={{ fontSize: 17, color: 'var(--t2)', maxWidth: 480, lineHeight: 1.7 }}>
              Every project below is live in production. No mockups, no demos. Built, shipped,
              and maintained by me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project entries */}
      {projects.map((proj, i) => (
        <ProjectEntry key={proj.id} proj={proj} index={i} />
      ))}

      {/* Bottom padding */}
      <div style={{ height: 64 }} />
    </div>
  );
}
