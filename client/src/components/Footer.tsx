/* ============================================================
   ORION RACING — Footer Component
   Closing statement + navigation + location
   ============================================================ */

import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(99,46,150,0.3)',
        padding: '4rem 0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 3rem',
        }}
      >
        {/* Closing Statement */}
        <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            "Esto es Orion Racing. No somos solo un equipo. Somos un sistema diseñado para competir, evolucionar y liderar."
          </p>
        </div>

        {/* Divider */}
        <div className="orion-divider" style={{ marginBottom: '3rem' }} />

        {/* Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '0.1em',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              ORION RACING
            </div>
            <div
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.75rem',
                color: '#ac6be8',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              STEM Racing · Tampico, Tamaulipas
            </div>
            <p
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
              }}
            >
              Ingeniería, precisión y velocidad llevadas al límite.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="orion-label" style={{ marginBottom: '1rem' }}>Navegación</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nuestro-auto', label: 'Nuestro Auto' },
                { href: '/iniciativas', label: 'Iniciativas' },
                { href: '/equipo', label: 'Equipo' },
                { href: '/partners', label: 'Partners' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="orion-link" style={{ fontSize: '0.85rem' }}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Logros */}
          <div>
            <div className="orion-label" style={{ marginBottom: '1rem' }}>Logros</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { pos: '01', text: '1er Lugar Regional — Bloque Querétaro' },
                { pos: '02', text: '3er Lugar Final Nacional 2025' },
                { pos: '03', text: 'Auto más veloz de México' },
              ].map((item) => (
                <div key={item.pos} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      color: '#632e96',
                      letterSpacing: '0.1em',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {item.pos}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © {new Date().getFullYear()} Orion Racing. Todos los derechos reservados.
          </span>
          <span
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(99,46,150,0.6)',
              letterSpacing: '0.1em',
            }}
          >
            TAMPICO · TAMAULIPAS · MÉXICO
          </span>
        </div>
      </div>
    </footer>
  );
}
