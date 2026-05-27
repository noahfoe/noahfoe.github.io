import { useState, useRef, useEffect } from 'react';
import { ChevronDown, FileText } from 'lucide-react';

const OPTIONS = [
  {
    href: '/MyResume2026.pdf',
    download: 'Noah_Foley_Resume.pdf',
    label: 'Download PDF',
    sub: 'Recommended',
  },
  {
    href: '/MyResume2026.docx',
    download: 'Noah_Foley_Resume.docx',
    label: 'Download Word',
    sub: '.docx format',
  },
];

interface ResumeButtonProps {
  variant?: 'ghost' | 'outlined' | 'solid';
  label?: string;
  fullWidth?: boolean;
}

export default function ResumeButton({
  variant = 'ghost',
  label = 'Resume',
  fullWidth = false,
}: ResumeButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.15s',
    border: 'none',
    fontFamily: "'DM Sans', sans-serif",
    ...(fullWidth ? { width: '100%', justifyContent: 'center' } : {}),
  };

  const variantStyle: React.CSSProperties =
    variant === 'solid'
      ? { background: 'var(--accent)', color: '#0c0d10', padding: '10px 22px', fontWeight: 600 }
      : variant === 'outlined'
      ? { background: 'transparent', color: 'var(--t1)', border: '1px solid var(--bdr-md)', padding: '10px 22px' }
      : { background: 'transparent', color: 'var(--t2)', padding: '6px 12px' };

  return (
    <div ref={ref} style={{ position: 'relative', display: fullWidth ? 'block' : 'inline-block' }}>
      <button
        style={{ ...base, ...variantStyle }}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={13}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s' }}
        />
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: fullWidth ? 0 : 0,
            left: fullWidth ? 0 : 'auto',
            minWidth: 200,
            background: 'var(--bg-3)',
            border: '1px solid var(--bdr-md)',
            borderRadius: 10,
            padding: 6,
            zIndex: 200,
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
          }}
        >
          {OPTIONS.map(opt => (
            <a
              key={opt.href}
              href={opt.href}
              download={opt.download}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 12px',
                borderRadius: 7,
                textDecoration: 'none',
                color: 'var(--t1)',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <FileText size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{opt.label}</div>
                <div style={{ fontSize: 11, color: 'var(--t3)', fontFamily: "'JetBrains Mono', monospace" }}>{opt.sub}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
