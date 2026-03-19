/* ============================================================
   ORION RACING — Iniciativas Page
   Orion Sports: tenis y fútbol bajo filosofía de alto rendimiento
   Design: Light Precision Engineering
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const SPORTS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-sports-bg-35uxGqwiKjYHQ7utZtNj4G.webp';
const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-hero-bg-7WhatRW7abrowpYbmHe2Lw.webp';

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function PillarCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          padding: '2.5rem 2rem',
          border: '2px solid #e9d5ff',
          borderLeft: hovered ? '3px solid #6d28d9' : '3px solid #a78bfa',
          background: hovered ? '#f3f0ff' : '#ffffff',
          transition: 'all 0.4s ease',
          boxShadow: hovered ? '0 0 20px rgba(109, 40, 217, 0.15)' : 'none',
          height: '100%',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            marginBottom: '1.5rem',
            color: hovered ? '#6d28d9' : '#a78bfa',
            transition: 'color 0.3s ease',
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#1f1f2e',
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
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
          {description}
        </p>
      </div>
    </div>
  );
}

function SportCard({
  sport,
  description,
  attributes,
  delay,
}: {
  sport: string;
  description: string;
  attributes: string[];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          padding: '3rem 2.5rem',
          border: '2px solid #e9d5ff',
          borderLeft: '3px solid #6d28d9',
          background: hovered ? '#f3f0ff' : '#ffffff',
          transition: 'all 0.4s ease',
          boxShadow: hovered ? '0 0 30px rgba(109, 40, 217, 0.15)' : 'none',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Sport name */}
        <div
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 800,
            fontSize: '3rem',
            lineHeight: 1,
            background: 'linear-gradient(135deg, rgba(109,40,217,0.3), rgba(124,58,237,0.2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          {sport}
        </div>

        <p
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 300,
            fontSize: '0.95rem',
            color: '#4c1d95',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          {description}
        </p>

        {/* Attributes */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {attributes.map((attr) => (
            <span
              key={attr}
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6d28d9',
                border: '1px solid #c4b5fd',
                padding: '0.3rem 0.75rem',
              }}
            >
              {attr}
            </span>
          ))}
        </div>

        {/* Hover glow */}
        {hovered && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #6d28d9, transparent)',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Iniciativas() {
  const [heroVisible, setHeroVisible] = useState(false);
  const introRef = useReveal();
  const pillarsRef = useReveal();
  const sportsRef = useReveal();
  const visionRef = useReveal();

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
          height: '70vh',
          minHeight: '500px',
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
            backgroundImage: `url(${SPORTS_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: heroVisible ? 0.3 : 0,
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
            paddingTop: '80px',
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
            Orion Sports
          </div>
          <h1
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#1f1f2e',
              maxWidth: '650px',
              marginBottom: '1.5rem',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.35s',
            }}
          >
            Expandiendo el{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              alto rendimiento.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#4c1d95',
              maxWidth: '500px',
              lineHeight: 1.7,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            La misma disciplina que construye el auto más veloz de México, aplicada al desarrollo de atletas de élite.
          </p>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────── */}
      <section
        ref={introRef}
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
            className="intro-grid"
          >
            <div>
              <div className="reveal orion-label" style={{ marginBottom: '1.25rem' }}>
                La iniciativa
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
                Un ecosistema de{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  excelencia.
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
                  Orion Sports extiende nuestra filosofía más allá de la ingeniería, llevando el alto rendimiento al desarrollo de atletas en tenis y fútbol. Aplicamos la misma disciplina, enfoque competitivo y búsqueda de excelencia en cada área donde competimos.
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
                  src={SPORTS_BG}
                  alt="Orion Sports"
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

      {/* ─── PILLARS ──────────────────────────────────────────── */}
      <section
        ref={pillarsRef}
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
          <div style={{ marginBottom: '4rem' }}>
            <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
              Metodología
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#1f1f2e',
                letterSpacing: '-0.02em',
                maxWidth: '550px',
                lineHeight: 1.1,
              }}
            >
              Los mismos principios.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Otro campo.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <PillarCard
              icon={
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L44 40H4L24 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M24 16L36 36H12L24 16Z" fill="currentColor" opacity="0.2"/>
                </svg>
              }
              title="Disciplina Estructurada"
              description="Programas de entrenamiento basados en datos, con métricas de progreso claras y ciclos de mejora continua aplicados a cada atleta."
              delay={0}
            />
            <PillarCard
              icon={
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 8v16l10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title="Enfoque Competitivo"
              description="Preparación orientada a la competencia desde el primer día. Cada sesión tiene un objetivo medible y un estándar de rendimiento definido."
              delay={0.1}
            />
            <PillarCard
              icon={
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 40L24 8L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 28h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title="Búsqueda de Excelencia"
              description="Los estándares de Orion Racing se trasladan directamente: sin mediocridad, sin excusas. Solo trabajo, análisis y resultados."
              delay={0.2}
            />
            <PillarCard
              icon={
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 24h32M24 8v32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              }
              title="Visión de Impacto"
              description="Construir un ecosistema deportivo que proyecte talento a nivel nacional e internacional, bajo la misma marca de alto rendimiento."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ─── SPORTS ───────────────────────────────────────────── */}
      <section
        ref={sportsRef}
        style={{ padding: '7rem 0', background: '#ffffff' }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <div style={{ marginBottom: '4rem' }}>
            <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
              Disciplinas
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
              Donde competimos,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                dominamos.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}
            className="sports-grid"
          >
            <SportCard
              sport="Tenis"
              description="Desarrollo de jugadores con metodología de alto rendimiento. Análisis técnico, preparación física específica y mentalidad competitiva de élite aplicada a cada sesión de entrenamiento."
              attributes={['Análisis técnico', 'Preparación física', 'Mentalidad competitiva', 'Desarrollo progresivo']}
              delay={0}
            />
            <SportCard
              sport="Fútbol"
              description="Formación de atletas con enfoque en rendimiento colectivo e individual. Metodología basada en datos, análisis de partido y ciclos de mejora continua que elevan el nivel de cada jugador."
              attributes={['Análisis de partido', 'Trabajo colectivo', 'Rendimiento individual', 'Ciclos de mejora']}
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* ─── VISION ───────────────────────────────────────────── */}
      <section
        ref={visionRef}
        style={{
          padding: '7rem 0',
          background: 'linear-gradient(180deg, #ffffff 0%, #f3f0ff 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div className="reveal orion-label" style={{ marginBottom: '1.5rem' }}>
            Visión
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
            Una marca.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Múltiples campos.
            </span>{' '}
            Un estándar.
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
            Orion Sports no es una extensión secundaria. Es la demostración de que los principios que construyen campeones en ingeniería son los mismos que forjan atletas de alto nivel. La excelencia no tiene límites de disciplina.
          </p>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/equipo">
              <button className="orion-btn">
                <span>Conocer el Equipo</span>
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
          .intro-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .sports-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
