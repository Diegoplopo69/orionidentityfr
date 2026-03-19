/* ============================================================
   ORION RACING — Nuestro Auto Page
   Performance showcase con especificaciones técnicas
   Design: Light Precision Engineering
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const CAR_RENDER = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-car-render-Aq8yqMEECMxKjX7Gq5Cq5b.webp';
const CFD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-cfd-HNgkTdLjkY8rHFkjbcU63r.webp';
const TRACK_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-track-action-HKphWK3JBow3ECf98BWWmc.webp';
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <span
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6d28d9',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#1f1f2e',
        }}
      >
        {value}
      </span>
    </div>
  );
}

function ImageSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  reverse,
  sectionRef,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  reverse?: boolean;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        background: reverse ? 'linear-gradient(180deg, #f3f0ff, #ffffff)' : '#ffffff',
      }}
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
            gap: '4rem',
            alignItems: 'center',
          }}
          className="image-grid"
        >
          {/* Text */}
          <div style={{ order: reverse ? 2 : 1 }}>
            <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
              Especificaciones
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: '#1f1f2e',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#4c1d95',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              {description}
            </p>
          </div>

          {/* Image */}
          <div style={{ order: reverse ? 1 : 2 }} className="reveal">
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
                src={imageSrc}
                alt={imageAlt}
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
                  background: 'linear-gradient(135deg, rgba(109,40,217,0.08) 0%, transparent 60%)',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.75rem',
                color: '#6b21a8',
                marginTop: '0.75rem',
                letterSpacing: '0.05em',
              }}
            >
              {imageCaption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NuestroAuto() {
  const [heroVisible, setHeroVisible] = useState(false);
  const specsRef = useReveal();
  const cfdRef = useReveal();
  const performanceRef = useReveal();

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
            backgroundImage: `url(${HERO_BG})`,
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
            Ingeniería de punta
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
            El auto más{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              veloz de México.
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
            Cada milímetro diseñado, cada componente optimizado, cada detalle analizado. Resultado: rendimiento sin compromisos.
          </p>
        </div>
      </section>

      {/* ─── SPECS SECTION ────────────────────────────────────── */}
      <section
        ref={specsRef}
        style={{ padding: '5rem 0', background: '#ffffff' }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
              Especificaciones clave
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
              Números que{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                importan.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            <SpecItem label="Velocidad máxima" value="120+ km/h" />
            <SpecItem label="Aceleración" value="0-100 km/h" />
            <SpecItem label="Peso" value="< 200 kg" />
            <SpecItem label="Potencia" value="Optimizada" />
            <SpecItem label="Aerodinámica" value="CFD simulada" />
            <SpecItem label="Precisión" value="±0.5 mm" />
          </div>
        </div>
      </section>

      {/* ─── IMAGE SECTIONS ───────────────────────────────────── */}
      <ImageSection
        title="Diseño aerodinámico"
        description="Cada curva, cada superficie ha sido optimizada mediante simulación CFD. El auto corta el aire con precisión de ingeniería, maximizando velocidad y estabilidad en pista."
        imageSrc={CAR_RENDER}
        imageAlt="Render del auto Orion Racing"
        imageCaption="Render 3D del chasis optimizado"
        sectionRef={cfdRef}
      />

      <ImageSection
        title="Análisis CFD"
        description="Simulaciones aerodinámicas avanzadas guían cada decisión de diseño. Los datos no mienten: optimizamos basándonos en evidencia, no en intuición."
        imageSrc={CFD_IMG}
        imageAlt="Análisis CFD del auto"
        imageCaption="Visualización de flujo aerodinámico"
        reverse
        sectionRef={performanceRef}
      />

      {/* ─── PERFORMANCE SECTION ─────────────────────────────── */}
      <section
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="performance-grid"
          >
            <div>
              <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
                En pista
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  color: '#1f1f2e',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Rendimiento en competencia
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 300,
                  fontSize: '1rem',
                  color: '#4c1d95',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                El auto demuestra su capacidad en cada competencia. Velocidad consistente, manejo preciso, confiabilidad bajo presión. Estos no son números en un papel: son resultados en pista.
              </p>
              <Link href="/equipo">
                <button className="orion-btn">
                  <span>Conocer al equipo</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </div>

            <div className="reveal">
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
                  src={TRACK_IMG}
                  alt="Auto en pista"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .image-grid { grid-template-columns: 1fr !important; }
          .performance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
