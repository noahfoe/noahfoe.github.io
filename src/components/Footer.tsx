import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { site } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--bdr)',
        padding: '32px 0',
        marginTop: 'auto',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Brand + nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '-0.01em',
              color: 'var(--t1)',
              textDecoration: 'none',
            }}
          >
            Noah Foley
          </Link>
          <span style={{ color: 'var(--bdr-md)', fontSize: 12 }}>·</span>
          <span
            className="mono"
            style={{ fontSize: 11, color: 'var(--t3)', letterSpacing: '0.04em' }}
          >
            Flutter · Frontend · Full-Stack
          </span>
        </div>

        {/* Social + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            style={{ color: 'var(--t3)', transition: 'color 0.14s', lineHeight: 0 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t3)'; }}
          >
            <Mail size={16} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--t3)', transition: 'color 0.14s', lineHeight: 0 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t3)'; }}
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--t3)', transition: 'color 0.14s', lineHeight: 0 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--t3)'; }}
          >
            <LinkedinIcon size={16} />
          </a>
          <span style={{ fontSize: 12, color: 'var(--t4)' }}>© {year} Noah Foley</span>
        </div>
      </div>
    </footer>
  );
}
