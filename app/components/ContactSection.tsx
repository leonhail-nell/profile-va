"use client";

import { useState } from "react";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "leonhail.paypa.dev@gmail.com",
    href: "mailto:leonhail.paypa.dev@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone / WhatsApp",
    value: "+63 993 845 8191",
    href: "https://wa.me/639938458191",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/leonhail-paypa",
    href: "https://linkedin.com/in/leonhail-paypa",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "Panabo City, Philippines (PHT UTC+8)",
    href: null,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("leonhail.paypa.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="badge" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Get In Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--heading)",
              marginBottom: 14,
            }}
          >
            Ready to{" "}
            <span className="gradient-text">Work Together?</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 480, margin: "0 auto" }}>
            I&#39;m available for remote VA work and open to part-time or full-time
            engagements. Let&#39;s talk about how I can support your business.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_ITEMS.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "var(--teal-bg)",
                    border: "1px solid rgba(13,148,136,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--teal)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-dim)", marginBottom: 2 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--teal-dark)",
                        textDecoration: "none",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability blurb */}
            <div
              style={{
                padding: 20,
                borderRadius: 16,
                background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
                border: "1px solid rgba(13,148,136,0.2)",
                display: "flex",
                gap: 14,
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 28 }}>🟢</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--teal-dark)" }}>
                  Currently Available
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
                  Open to full-time, part-time, or project-based remote work. Flexible
                  with hours to accommodate international time zones.
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            className="card"
            style={{
              padding: 36,
              background: "linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #14b8a6 100%)",
              border: "none",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.7, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
                Let&#39;s Connect
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
                Hire a VA Who Delivers Results
              </h3>
              <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.7 }}>
                Whether you need inbox management, research, scheduling, or AI-powered
                automation — I&#39;m here to make your workday lighter and more productive.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:leonhail.paypa.dev@gmail.com"
                style={{
                  padding: "14px 24px",
                  borderRadius: 12,
                  background: "#fff",
                  color: "var(--teal-dark)",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.92")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              >
                📧 Send Me an Email
              </a>
              <a
                href="https://wa.me/639938458191"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 24px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)")}
              >
                💬 WhatsApp Me
              </a>
              <button
                onClick={copyEmail}
                style={{
                  padding: "14px 24px",
                  borderRadius: 12,
                  background: "transparent",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 500,
                  fontSize: 13,
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {copied ? "✓ Email Copied!" : "Copy Email Address"}
              </button>
            </div>

            {/* Response time note */}
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.1)",
                fontSize: 13,
                opacity: 0.85,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ⚡ Typical response time: <strong>within 2 hours</strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
