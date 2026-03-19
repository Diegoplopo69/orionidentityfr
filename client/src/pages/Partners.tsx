/* ============================================================
   ORION RACING — Partners Page
   Logos en escala de grises → color con glow morado en hover
   Layout limpio y premium
   Design: Light Precision Engineering
   ============================================================ */

import { useEffect, useRef, useState } from 'react';

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
              setTimeout(() => child.classList.add('visible'), i * 100);
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

function PartnerCard({
  name,
  category,
  initials,
  color,
  delay,
}: {
  name: string;
  category: string;
  initials: string;
  color: string;
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
          position: 'relative',
          padding: '2.5rem 2rem',
          border: '2px solid #e9d5ff',
          background: hovered ? '#f3f0ff' : '#ffffff',
          transition: 'all 0.4s ease',
          boxShadow: hovered ? `0 0 20px rgba(109, 40, 217, 0.2)` : 'none',
          borderColor: hovered ? '#6d28d9' : '#e9d5ff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          minHeight: '160px',
          justifyContent: 'center',
          cursor: 'default',
        }}
      >
        {/* Logo placeholder */}
        <div
          style={{
            width: '80px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: hovered ? 'none' : 'grayscale(100%) brightness(0.7)',
            transition: 'filter 0.4s ease',
          }}
        >
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '0.05em',
              color: hovered ? color : '#1f1f2e',
              transition: 'color 0.4s ease',
              textShadow: hovered ? `0 0 15px ${color}40` : 'none',
            }}
          >
            {initials}
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: hovered ? '#1f1f2e' : '#4c1d95',
              transition: 'color 0.4s ease',
              marginBottom: '0.25rem',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: hovered ? '#6d28d9' : '#a78bfa',
              transition: 'color 0.4s ease',
            }}
          >
            {category}
          </div>
        </div>

        {/* Hover bottom line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: hovered ? 'linear-gradient(90deg, transparent, #6d28d9, transparent)' : 'transparent',
            transition: 'background 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}

function TierSection({
  tier,
  label,
  partners,
  sectionRef,
}: {
  tier: string;
  label: string;
  partners: Array<{ name: string; category: string; initials: string; color: string }>;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={sectionRef} style={{ marginBottom: '5rem' }}>
      {/* Tier header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        <div
          className="reveal"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 800,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6d28d9',
            border: '2px solid #6d28d9',
            padding: '0.4rem 0.9rem',
          }}
        >
          {tier}
        </div>
        <div
          className="reveal"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 600,
            fontSize: '0.85rem',
            color: '#4c1d95',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </div>
        <div
          className="reveal"
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, #6d28d9, transparent)',
          }}
        />
      </div>

      {/* Partners grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {partners.map((p, i) => (
          <PartnerCard
            key={p.name}
            name={p.name}
            category={p.category}
            initials={p.initials}
            color={p.color}
            delay={i * 0.07}
          />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const [heroVisible, setHeroVisible] = useState(false);
  const platinumRef = useReveal();
  const goldRef = useReveal();
  const silverRef = useReveal();
  const ctaRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const platinumPartners = [
    { name: 'Partner Platinum', category: 'Patrocinador Principal', initials: 'PP', color: '#6d28d9' },
    { name: 'Partner Platinum', category: 'Patrocinador Principal', initials: 'PP', color: '#6d28d9' },
  ];

  const goldPartners = [
    { name: 'Partner Gold', category: 'Tecnología', initials: 'PG', color: '#f59e0b' },
    { name: 'Partner Gold', category: 'Ingeniería', initials: 'PG', color: '#f59e0b' },
    { name: 'Partner Gold', category: 'Manufactura', initials: 'PG', color: '#f59e0b' },
  ];

  const silverPartners = [
    { name: 'Partner Silver', category: 'Proveedor', initials: 'PS', color: '#a78bfa' },
    { name: 'Partner Silver', category: 'Servicios', initials: 'PS', color: '#a78bfa' },
    { name: 'Partner Silver', category: 'Logística', initials: 'PS', color: '#a78bfa' },
    { name: 'Partner Silver', category: 'Comunicación', initials: 'PS', color: '#a78bfa' },
  ];

  return (
    <div className="page-transition" style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '420px',
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
            opacity: heroVisible ? 0.2 : 0,
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
            Alianzas estratégicas
          </div>
          <h1
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#1f1f2e',
              maxWidth: '600px',
              marginBottom: '1.5rem',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.35s',
            }}
          >
            Quienes impulsan{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              la victoria.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#4c1d95',
              maxWidth: '480px',
              lineHeight: 1.7,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            Nuestros partners son parte integral del sistema Orion Racing. Sin ellos, el auto más veloz de México no existiría.
          </p>
        </div>
      </section>

      {/* ─── PARTNERS GRID ────────────────────────────────────── */}
      <section
        style={{ padding: '7rem 0', background: '#ffffff' }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
          }}
        >
          <TierSection
            tier="Platinum"
            label="Patrocinadores Principales"
            partners={platinumPartners}
            sectionRef={platinumRef}
          />
          <TierSection
            tier="Gold"
            label="Patrocinadores Gold"
            partners={goldPartners}
            sectionRef={goldRef}
          />
          <TierSection
            tier="Silver"
            label="Patrocinadores Silver"
            partners={silverPartners}
            sectionRef={silverRef}
          />
        </div>
      </section>

      {/* ─── WHY PARTNER ──────────────────────────────────────── */}
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
          <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
            <div className="orion-label" style={{ marginBottom: '1rem' }}>
              ¿Por qué ser partner?
            </div>
            <h2
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#1f1f2e',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Asocia tu marca con{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                el rendimiento.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                num: '01',
                title: 'Visibilidad nacional',
                desc: 'Presencia en competencias regionales y nacionales, con exposición ante jueces, sponsors y medios del ecosistema STEM Racing.',
              },
              {
                num: '02',
                title: 'Asociación con excelencia',
                desc: 'Tu marca aparece junto al equipo que desarrolló el auto más veloz de México. La credibilidad se transfiere.',
              },
              {
                num: '03',
                title: 'Impacto en talento joven',
                desc: 'Apoya el desarrollo de la próxima generación de ingenieros, atletas y líderes de alto rendimiento en México.',
              },
              {
                num: '04',
                title: 'Plataforma digital',
                desc: 'Exposición en todos los canales digitales de Orion Racing, con alcance en la comunidad STEM y deportiva nacional.',
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  padding: '2.5rem 2rem',
                  border: '2px solid #e9d5ff',
                  borderLeft: '3px solid #6d28d9',
                  background: '#ffffff',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.2), rgba(124,58,237,0.1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
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
                    fontSize: '0.88rem',
                    color: '#4c1d95',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        style={{
          padding: '7rem 0',
          background: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              border: '2px solid #e9d5ff',
              padding: '4rem 3rem',
              background: '#f3f0ff',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="cta-grid"
          >
            <div>
              <div className="reveal orion-label" style={{ marginBottom: '1rem' }}>
                Contacto
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#1f1f2e',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  lineHeight: 1.1,
                }}
              >
                Únete a la escudería.
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 300,
                  fontSize: '1rem',
                  color: '#4c1d95',
                  lineHeight: 1.7,
                  maxWidth: '500px',
                }}
              >
                Si tu empresa comparte nuestra visión de rendimiento, innovación y desarrollo de talento, queremos hablar contigo. Construyamos algo extraordinario juntos.
              </p>
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <button className="orion-btn" style={{ whiteSpace: 'nowrap' }}>
                <span>Ser Partner</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: '0.75rem',
                  color: '#a78bfa',
                  letterSpacing: '0.05em',
                }}
              >
                Tampico, Tamaulipas · México
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
