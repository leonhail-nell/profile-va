"use client";

import { useEffect, useRef } from "react";

const TAGS = [
  "Email Management",
  "Calendar Coordination",
  "Research & Data Entry",
  "Project Coordination",
  "AI-Powered Productivity",
  "Document Preparation",
];

export default function HeroSection() {
  const tagRef = useRef<HTMLDivElement>(null);

  // Infinite scroll ticker for tags
  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const speed = 0.4;
    const track = el.querySelector(".ticker-track") as HTMLElement;
    if (!track) return;
    const totalW = track.scrollWidth / 2;
    const step = () => {
      x -= speed;
      if (Math.abs(x) >= totalW) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 40px",
      }}
    >
      {/* Background blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -100,
          right: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* Available badge */}
            <div className="badge" style={{ marginBottom: 24 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for new projects
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--heading)",
                marginBottom: 20,
              }}
            >
              Virtual Assistant{" "}
              <span className="gradient-text">&amp; Admin Support</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              Hi, I&#39;m <strong style={{ color: "var(--text)" }}>Leonhail (Nell) Paypa</strong> — a detail-oriented
              VA and Admin Support Specialist with 2+ years of remote experience serving
              international clients. Backed by a strong{" "}
              <strong style={{ color: "var(--text)" }}>technical background in web development</strong>{" "}
              — capable of handling tech-related tasks and AI tools that most VAs cannot.
              Highly organized and proactive across time zones.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #0d9488, #0f766e)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(13,148,136,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(13,148,136,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,148,136,0.35)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Hire Me
              </a>
              <a
                href="#services"
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: "var(--surface)",
                  border: "1.5px solid var(--border)",
                  color: "var(--teal-dark)",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "var(--shadow-sm)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--teal)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                }}
              >
                View Services
              </a>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 32,
                marginTop: 48,
                paddingTop: 32,
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "2+",  label: "Years VA Experience" },
                { value: "10+", label: "Clients Served" },
                { value: "100%", label: "Remote Ready" },
                { value: "AI",  label: "Tool Proficiency" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "var(--teal)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: 300,
                maxWidth: "100%",
              }}
            >
              {/* Profile photo */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  borderRadius: 28,
                  border: "3px solid var(--border)",
                  boxShadow: "var(--shadow-lg)",
                  overflow: "hidden",
                  position: "relative",
                  background: "linear-gradient(135deg, #ccfbf1, #f0fdfa)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.png"
                  alt="Leonhail Paypa — Virtual Assistant"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                {/* Name overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 20px 20px",
                    background: "linear-gradient(to top, rgba(15,47,43,0.85) 0%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>Leonhail Paypa</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Virtual Assistant &amp; Admin Support</div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      marginTop: 4,
                      padding: "3px 10px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 500,
                      width: "fit-content",
                    }}
                  >
                    🇵🇭 Philippines
                  </div>
                </div>
              </div>

              {/* Floating card: timezone */}
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: -24,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text)",
                }}
              >
                <span style={{ fontSize: 20 }}>🕐</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 12, color: "var(--text-muted)" }}>TIMEZONE</div>
                  <div>PHT (UTC +8)</div>
                </div>
              </div>

              {/* Floating card: response time */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: -20,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text)",
                }}
              >
                <span style={{ fontSize: 20 }}>⚡</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 12, color: "var(--text-muted)" }}>RESPONSE</div>
                  <div>&lt; 2 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tag ticker */}
      <div
        ref={tagRef}
        style={{
          marginTop: 64,
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface-alt)",
          padding: "14px 0",
        }}
      >
        <div
          className="ticker-track"
          style={{
            display: "flex",
            gap: 12,
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "6px 18px",
                borderRadius: 999,
                background: "var(--teal-bg)",
                border: "1px solid rgba(13,148,136,0.15)",
                color: "var(--teal-dark)",
                fontWeight: 500,
                fontSize: 13,
                flexShrink: 0,
              }}
            >
              ✦ {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
