import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 62,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.25s, border-color 0.25s, backdrop-filter 0.25s',
          background: scrolled ? 'rgba(12,13,16,0.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          {/* Brand */}
          <Link
            to="/"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '-0.01em',
              color: 'var(--t1)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Noah Foley
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 2 }}
          >
            {LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={({ isActive }) => ({
                  padding: '6px 13px',
                  borderRadius: 7,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent)' : 'var(--t2)',
                  background: isActive ? 'var(--accent-dim)' : 'transparent',
                  transition: 'color 0.14s, background 0.14s',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop resume */}
          <div className="hidden md:block">
            <ResumeButton variant="ghost" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--t1)',
              cursor: 'pointer',
              padding: 8,
              borderRadius: 8,
              lineHeight: 0,
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' as const }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              background: 'rgba(12,13,16,0.97)',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 78,
              padding: '78px 24px 40px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {LINKS.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '14px 16px',
                    borderRadius: 10,
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    color: isActive ? 'var(--accent)' : 'var(--t1)',
                    background: isActive ? 'var(--accent-dim)' : 'transparent',
                    transition: 'color 0.14s, background 0.14s',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div style={{ marginTop: 20 }}>
              <ResumeButton variant="outlined" fullWidth label="Download Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
