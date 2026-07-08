"use client";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Email Management",
    description:
      "Inbox zero strategy, sorting, drafting professional replies, managing subscriptions, and flagging priority emails so nothing falls through the cracks.",
    perks: ["Inbox organisation", "Template drafting", "Follow-up tracking"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Calendar Coordination",
    description:
      "Scheduling meetings, managing time zones, sending reminders, avoiding conflicts, and keeping your calendar optimised for deep work.",
    perks: ["Meeting scheduling", "Time zone management", "Conflict resolution"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Research & Data Entry",
    description:
      "Internet research, lead list building, competitor analysis, data collection, spreadsheet management, and clean data entry with accuracy checks.",
    perks: ["Web research", "Lead generation", "Spreadsheet management"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Document Preparation",
    description:
      "Drafting reports, proposals, presentations, meeting minutes, SOPs, and proofreading documents for clarity, accuracy, and professional polish.",
    perks: ["Report writing", "SOP creation", "Proofreading"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Project Coordination",
    description:
      "Task tracking in Trello, Asana, ClickUp, or Notion — keeping projects on schedule, updating status reports, and liaising between team members.",
    perks: ["Task management", "Status reporting", "Team coordination"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>
        <path d="M22.66 3.34a14 14 0 0 1 0 17.32M1.34 20.66a14 14 0 0 1 0-17.32"/>
      </svg>
    ),
    title: "AI-Powered Assistance",
    description:
      "Using ChatGPT, Claude, and Gemini to supercharge productivity — faster research, content drafts, automated workflows with Zapier/Make, and AI-assisted reporting.",
    perks: ["AI prompt workflows", "Automation (Zapier/Make)", "Content drafting"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="badge" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            What I Offer
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--heading)",
              marginBottom: 14,
            }}
          >
            Services That Keep Your{" "}
            <span className="gradient-text">Business Running</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 540, margin: "0 auto" }}>
            From inbox management to AI-powered automation — I handle the operational
            details so you can focus on what matters most.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
                  border: "1px solid rgba(13,148,136,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--teal)",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>

              <div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "var(--heading)", marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {s.description}
                </p>
              </div>

              {/* Perks */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
                {s.perks.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "var(--teal-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--teal)",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                        <polyline points="1,5 4.5,8.5 11,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
