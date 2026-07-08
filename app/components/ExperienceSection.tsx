"use client";

const EXPERIENCE = [
  {
    role: "Virtual Assistant",
    company: "Various International Clients",
    period: "2022 — 2024",
    type: "Remote, Full-time",
    color: "#0d9488",
    bullets: [
      "Managed inboxes, calendars, and communications for multiple international clients simultaneously, achieving consistent same-day response times.",
      "Coordinated scheduling across different time zones using Google Calendar and Calendly, reducing scheduling conflicts by over 40%.",
      "Conducted web research, compiled competitor analysis reports, and maintained organised data in Google Sheets and Notion databases.",
      "Prepared professional documents, meeting agendas, meeting minutes, and follow-up reports using Google Docs and Microsoft Word.",
      "Managed client social media accounts using Canva for design and Buffer/Hootsuite for scheduling — maintaining consistent brand voice.",
      "Leveraged AI tools (ChatGPT, Claude) to draft content, summarise documents, and automate repetitive data-entry workflows via Zapier.",
      "Tracked project milestones and deadlines in Trello, Asana, and ClickUp — kept distributed teams aligned and on schedule.",
    ],
    tags: ["Google Workspace", "Trello", "Asana", "Canva", "ChatGPT", "Zapier", "Notion", "Slack"],
  },
  {
    role: "Administrative Support",
    company: "Freelance / Contract",
    period: "2021 — 2022",
    type: "Remote, Part-time",
    color: "#7c3aed",
    bullets: [
      "Provided administrative and operational support to small business owners, handling day-to-day inbox management and appointment coordination.",
      "Performed data entry, database maintenance, and spreadsheet management with high accuracy and attention to detail.",
      "Created presentation decks, business proposals, and client-facing documents using PowerPoint and Google Slides.",
      "Assisted with basic CRM management — updating contact records, tracking leads, and sending follow-up correspondence.",
    ],
    tags: ["Microsoft Office", "Google Workspace", "CRM", "Data Entry", "Email Management"],
  },
];

const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  school: "Davao del Norte State College",
  location: "Panabo City, Philippines",
  period: "Aug 2015 — Aug 2019",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="badge" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Work History
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--heading)",
              marginBottom: 14,
            }}
          >
            Experience &{" "}
            <span className="gradient-text">Background</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>
            2+ years of hands-on remote VA work for international clients — delivering
            organised, efficient, and AI-enhanced support.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 8,
              bottom: 8,
              width: 2,
              background: "linear-gradient(to bottom, var(--teal), transparent)",
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              style={{ position: "relative", marginBottom: i < EXPERIENCE.length - 1 ? 40 : 0 }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -39,
                  top: 28,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: exp.color,
                  border: "3px solid var(--bg-alt)",
                  boxShadow: `0 0 0 3px ${exp.color}30`,
                }}
              />

              <div className="card" style={{ padding: 28 }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 6,
                  }}
                >
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 20, color: "var(--heading)" }}>{exp.role}</h3>
                    <p style={{ fontSize: 15, color: exp.color, fontWeight: 600, marginTop: 2 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        padding: "5px 14px",
                        borderRadius: 999,
                        background: `${exp.color}15`,
                        color: exp.color,
                        fontWeight: 600,
                        fontSize: 13,
                        border: `1px solid ${exp.color}30`,
                        display: "inline-block",
                      }}
                    >
                      {exp.period}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>{exp.type}</div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "var(--border)", margin: "16px 0" }} />

                {/* Bullets */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 4,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: exp.color,
                          display: "block",
                        }}
                      />
                      <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 999,
                        background: "var(--teal-bg)",
                        border: "1px solid rgba(13,148,136,0.15)",
                        color: "var(--teal-dark)",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div
          style={{ marginTop: 48, paddingTop: 48, borderTop: "1px solid var(--border)" }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: 22,
              color: "var(--heading)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--teal-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--teal)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </span>
            Education
          </h3>
          <div className="card" style={{ padding: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: "var(--heading)" }}>{EDUCATION.degree}</div>
              <div style={{ fontSize: 15, color: "var(--teal)", fontWeight: 600, marginTop: 4 }}>{EDUCATION.school}</div>
              <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>
                📍 {EDUCATION.location}
              </div>
            </div>
            <div
              style={{
                padding: "5px 16px",
                borderRadius: 999,
                background: "var(--teal-bg)",
                color: "var(--teal-dark)",
                fontWeight: 600,
                fontSize: 13,
                border: "1px solid rgba(13,148,136,0.2)",
                alignSelf: "flex-start",
              }}
            >
              {EDUCATION.period}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
