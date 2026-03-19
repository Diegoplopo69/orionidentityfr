/* ============================================================
   ORION RACING — Navbar Component
   Header blanco con elementos morados, logo oficial
   Design: Light Precision Engineering
   ============================================================ */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-logo_68a22b1a.webp';

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <a
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 600,
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: active ? '#6d28d9' : '#1f1f2e',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          position: 'relative',
          paddingBottom: '0.25rem',
        }}
        onMouseEnter={(e) => {
          if (!active) (e.target as HTMLElement).style.color = '#6d28d9';
        }}
        onMouseLeave={(e) => {
          if (!active) (e.target as HTMLElement).style.color = '#1f1f2e';
        }}
      >
        {children}
        {active && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: '#6d28d9',
            }}
          />
        )}
      </a>
    </Link>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nuestro-auto', label: 'Nuestro Auto' },
    { href: '/iniciativas', label: 'Iniciativas' },
    { href: '/equipo', label: 'Equipo' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid #e9d5ff' : 'none',
        boxShadow: scrolled ? '0 2px 12px rgba(109, 40, 217, 0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 3rem',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
            }}
          >
            <img
              src={LOGO_URL}
              alt="Orion Racing"
              style={{
                height: '45px',
                width: 'auto',
              }}
            />
          </a>
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} active={String(location) === link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#6d28d9',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(10px)' : 'none',
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#6d28d9',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#6d28d9',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translateY(-10px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem 3rem 2rem',
            background: '#ffffff',
            borderTop: '1px solid #e9d5ff',
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: String(location) === link.href ? '#6d28d9' : '#1f1f2e',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
