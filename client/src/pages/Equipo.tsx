/* ============================================================
   ORION RACING — Equipo Page
   Grid limpio, minimalista. Hover: zoom + overlay morado
   Design: Light Precision Engineering
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const TEAM_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446925801/WdoWfgYnNC7sEdsreSiyKj/orion-team-bg-WSAXtPoeaeAmx5tCrP3LV8.webp';

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

function MemberCard({
  name,
  role,
  area,
  initials,
  delay,
}: {
  name: string;
  role: string;
  area: string;
  initials: string;
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
          overflow: 'hidden',
          border: '2px solid #e9d5ff',
          transition: 'all 0.4s ease',
          boxShadow: hovered ? '0 0 20px rgba(109, 40, 217, 0.2)' : 'none',
          borderColor: hovered ? '#6d28d9' : '#e9d5ff',
        }}
      >
        {/* Avatar area */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '1/1',
            background: hovered
              ? 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #a78bfa 100%)'
              : 'linear-gradient(135deg, #f3f0ff 0%, #e9d5ff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            transition: 'background 0.4s ease',
          }}
        >
          {/* Initials */}
          <span
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: '2.5rem',
              color: hovered ? '#ffffff' : '#6d28d9',
              letterSpacing: '0.05em',
              transition: 'color 0.4s ease',
              zIndex: 1,
            }}
          >
            {initials}
          </span>

          {/* Hover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: hovered
                ? 'linear-gradient(135deg, rgba(109,40,217,0.3) 0%, rgba(124,58,237,0.2) 100%)'
                : 'transparent',
              transition: 'background 0.4s ease',
            }}
          />

          {/* Decorative grid lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(109,40,217,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: hovered ? 0.3 : 0.1,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Photo placeholder indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.75rem',
              right: '0.75rem',
              fontSize: '0.6rem',
              fontFamily: "'Exo 2', sans-serif",
              letterSpacing: '0.1em',
              color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(109,40,217,0.3)',
              textTransform: 'uppercase',
            }}
          >
            Foto
          </div>
        </div>

        {/* Info */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: hovered ? '#f3f0ff' : '#ffffff',
            transition: 'background 0.4s ease',
          }}
        >
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#1f1f2e',
              marginBottom: '0.25rem',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 600,
              fontSize: '0.75rem',
              color: '#6d28d9',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.25rem',
            }}
          >
            {role}
          </div>
          <div
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.75rem',
              color: '#a78bfa',
              letterSpacing: '0.05em',
            }}
          >
            {area}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            height: '2px',
            background: hovered
              ? 'linear-gradient(90deg, #6d28d9, #7c3aed, #a78bfa)'
              : 'linear-gradient(90deg, #e9d5ff, #c4b5fd)',
            transition: 'background 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}

export default function Equipo() {
  const [heroVisible, setHeroVisible] = useState(false);
  const gridRef = useReveal();
  const valuesRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const teamMembers = [
    { name: 'Capitán del Equipo', role: 'Team Captain', area: 'Liderazgo & Estrategia', initials: 'TC' },
    { name: 'Ing. Jefe', role: 'Chief Engineer', area: 'Ingeniería & Diseño', initials: 'CE' },
    { name: 'Dir. Aerodinámica', role: 'Aero Lead', area: 'CFD & Aerodinámica', initials: 'AL' },
    { name: 'Dir. Sistemas', role: 'Systems Lead', area: 'Electrónica & Control', initials: 'SL' },
    { name: 'Dir. Manufactura', role: 'Manufacturing Lead', area: 'Fabricación & Ensamble', initials: 'ML' },
    { name: 'Dir. Negocio', role: 'Business Lead', area: 'Sponsors & Estrategia', initials: 'BL' },
    { name: 'Dir. Comunicación', role: 'Comms Lead', area: 'Branding & Marketing', initials: 'CL' },
    { name: 'Dir. Orion Sports', role: 'Sports Director', area: 'Tenis & Fútbol', initials: 'SD' },
  ];

  return (
    <div className="page-transition" style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '65vh',
          minHeight: '450px',
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
            backgroundImage: `url(${TEAM_BG})`,
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
            Tampico, Tamaulipas
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
            El sistema{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              detrás del auto.
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
            Cada integrante de Orion Racing opera con precisión de ingeniería y mentalidad de alto rendimiento.
          </p>
        </div>
      </section>

      {/* ─── TEAM GRID ────────────────────────────────────────── */}
      <section
        ref={gridRef}
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
              Estructura
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
              Roles definidos.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Objetivos claros.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {teamMembers.map((member, i) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                area={member.area}
                initials={member.initials}
                delay={i * 0.07}
              />
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem 2rem',
              border: '2px solid #e9d5ff',
              background: '#f3f0ff',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '2px',
                height: '40px',
                background: 'linear-gradient(180deg, #6d28d9, #a78bfa)',
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.85rem',
                color: '#4c1d95',
                lineHeight: 1.6,
              }}
            >
              Las fotos y nombres completos del equipo serán actualizados próximamente. Los roles y áreas reflejan la estructura operativa actual de Orion Racing.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section
        ref={valuesRef}
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
              ADN del equipo
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
              No somos un equipo.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Somos un sistema.
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
                num: '01',
                title: 'Ingeniería como cultura',
                desc: 'Cada decisión se basa en datos. Cada proceso tiene una metodología. La intuición se valida con evidencia.',
              },
              {
                num: '02',
                title: 'Rendimiento colectivo',
                desc: 'El resultado en pista es consecuencia del trabajo coordinado de cada área. No hay victorias individuales en Orion Racing.',
              },
              {
                num: '03',
                title: 'Evolución constante',
                desc: 'Cada competencia es un punto de datos. Cada error es una iteración. El equipo que llegó a la final no es el mismo que salió de ella.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="reveal"
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
                    letterSpacing: '-0.02em',
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
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 0',
          background: '#ffffff',
          borderTop: '2px solid #e9d5ff',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <div className="orion-label" style={{ marginBottom: '0.5rem' }}>
              Únete a la misión
            </div>
            <h3
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#1f1f2e',
              }}
            >
              Apoya a Orion Racing como partner.
            </h3>
          </div>
          <Link href="/partners">
            <button className="orion-btn">
              <span>Ver Partners</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
