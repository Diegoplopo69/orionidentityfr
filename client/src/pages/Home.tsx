/* ============================================================
   ORION RACING — Home Page
   Hero cinematográfico, filosofía, logros
   Design: Light Precision Engineering
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-hero-bg-7WhatRW7abrowpYbmHe2Lw.webp';
const CAR_RENDER = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-car-render-Aq8yqMEECMxKjX7Gq5Cq5b.webp';
const CFD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-cfd-HNgkTdLjkY8rHFkjbcU63r.webp';

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealEls = entry.target.querySelectorAll('.reveal');
            revealEls.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const philosophyRef = useReveal();
  const achievementsRef = useReveal();
  const ctaRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-transition" style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '80vh',
          minHeight: '550px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: heroVisible ? 0.4 : 0,
            transition: 'opacity 1.2s ease',
            animation: 'slowZoom 10s ease-in-out infinite alternate',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(243,240,255,0.85) 60%, rgba(255,255,255,0.9) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 50%, #ffffff 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: '3px',
            background: 'linear-gradient(180deg, transparent, #6d28d9, #a78bfa, transparent)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1400px',
            width: '100%',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <div
            className="orion-label"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.6s ease 0.2s',
              marginBottom: '1.5rem',
            }}
          >
            Tampico, Tamaulipas · STEM Racing
          </div>
          <h1
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#1f1f2e',
              maxWidth: '700px',
              marginBottom: '1.5rem',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.35s',
            }}
          >
            Diseñado para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              dominar la pista.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: '#4c1d95',
              maxWidth: '520px',
              lineHeight: 1.7,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            Ingeniería, precisión y velocidad llevadas al límite. El auto más veloz de México.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.65s',
            }}
          >
            <Link href="/nuestro-auto">
              <button className="orion-btn">
                <span>Nuestro Auto</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
            <Link href="/equipo">
              <button
                className="orion-btn"
                style={{
                  background: 'transparent',
                  color: '#6d28d9',
                  borderColor: '#6d28d9',
                }}
              >
                <span>Conocer el Equipo</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '1.5rem 3rem',
            borderTop: '1px solid #e9d5ff',
            background: 'linear-gradient(180deg, transparent, rgba(243,240,255,0.5))',
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.9s',
            gap: '3rem',
          }}
        >
          {[
            { label: 'Lugar Regional', value: '1°' },
            { label: 'Lugar Nacional', value: '3°' },
            { label: 'Auto más veloz', value: 'MX' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: '0.7rem',
                  color: '#6b21a8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          {/* Scroll indicator */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a78bfa',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '30px',
                background: 'linear-gradient(180deg, #6d28d9, transparent)',
                animation: 'scrollBounce 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY SECTION ───────────────────────────────── */}
      <section
        ref={philosophyRef}
        style={{ padding: '7rem 0', background: '#ffffff' }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
            }}
            className="philosophy-grid"
          >
            <div>
              <div className="reveal orion-label" style={{ marginBottom: '1.25rem' }}>
                Filosofía
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  lineHeight: 1.1,
                  color: '#1f1f2e',
                  marginBottom: '2rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Rendimiento{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  sin compromiso.
                </span>
              </h2>
              <div className="reveal orion-accent-border">
                <p
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 300,
                    fontSize: '1.05rem',
                    color: '#4c1d95',
                    lineHeight: 1.8,
                  }}
                >
                  Cada componente del auto es resultado de análisis, simulación y prueba. No hay espacio para la mediocridad. Orion Racing compite con la precisión de la ingeniería y la mentalidad de un equipo de élite.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="reveal" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid #6d28d9',
                  aspectRatio: '16/10',
                  background: 'linear-gradient(135deg, #f3f0ff, #ffffff)',
                }}
              >
                <img
                  src={CAR_RENDER}
                  alt="Orion Racing Auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.1) 0%, transparent 60%)',
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  width: '30px',
                  height: '30px',
                  borderTop: '2px solid #6d28d9',
                  borderRight: '2px solid #6d28d9',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '-6px',
                  width: '30px',
                  height: '30px',
                  borderBottom: '2px solid #a78bfa',
                  borderLeft: '2px solid #a78bfa',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS SECTION ─────────────────────────────── */}
      <section
        ref={achievementsRef}
        style={{
          padding: '7rem 0',
          background: 'linear-gradient(180deg, #ffffff 0%, #f3f0ff 50%, #ffffff 100%)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
            <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
              Logros
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#1f1f2e',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Resultados que{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                hablan.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                num: '1°',
                title: 'Lugar Regional',
                desc: 'Bloque Querétaro — Posicionados como uno de los equipos más fuertes del país.',
              },
              {
                num: '3°',
                title: 'Lugar Nacional',
                desc: 'Final Nacional 2025 en Aguascalientes — Élite de la competencia STEM Racing.',
              },
              {
                num: 'MX',
                title: 'Auto Más Veloz',
                desc: 'Desarrollo del auto más rápido de México — Referente en desempeño e innovación.',
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    padding: '2.5rem 2rem',
                    border: '2px solid #e9d5ff',
                    borderLeft: '3px solid #6d28d9',
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#6d28d9';
                    el.style.background = '#f3f0ff';
                    el.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#e9d5ff';
                    el.style.background = '#ffffff';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '1rem',
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: '#1f1f2e',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: '#4c1d95',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────── */}
      <section
        ref={ctaRef}
        style={{
          padding: '7rem 0',
          background: '#ffffff',
          borderTop: '2px solid #e9d5ff',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
            textAlign: 'center',
          }}
        >
          <div className="reveal orion-label" style={{ marginBottom: '1.5rem' }}>
            Próximos pasos
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              color: '#1f1f2e',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
              lineHeight: 1.1,
              maxWidth: '700px',
              margin: '0 auto 2rem',
            }}
          >
            Explora la escudería.
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: '1.05rem',
              color: '#4c1d95',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
          >
            Descubre cómo funciona el auto más veloz de México, conoce al equipo detrás del rendimiento, y sé parte de la misión.
          </p>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/nuestro-auto">
              <button className="orion-btn">
                <span>Ver Especificaciones</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
            <Link href="/partners">
              <button
                className="orion-btn"
                style={{
                  background: 'transparent',
                  color: '#6d28d9',
                  borderColor: '#6d28d9',
                }}
              >
                <span>Ser Partner</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  );
}
