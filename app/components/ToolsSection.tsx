"use client";

import { useState } from "react";

const CATEGORIES = [
  {
    label: "Productivity",
    color: "#0d9488",
    bg: "rgba(13,148,136,0.08)",
    tools: [
      { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Microsoft Office", icon: "https://cdn.simpleicons.org/microsoftoffice/D83B01" },
      { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
      { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/2D8CFF" },
      { name: "MS Teams", icon: "https://cdn.simpleicons.org/microsoftteams/6264A7" },
    ],
  },
  {
    label: "Project Mgmt",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    tools: [
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
      { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Monday.com", icon: "https://cdn.simpleicons.org/mondaydotcom/F62B54" },
    ],
  },
  {
    label: "Social Media",
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    tools: [
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
      { name: "Buffer", icon: "https://cdn.simpleicons.org/buffer/231F20" },
      { name: "Hootsuite", icon: "https://cdn.simpleicons.org/hootsuite/000000" },
      { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/E4405F" },
      { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook/1877F2" },
    ],
  },
  {
    label: "AI Tools",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
    tools: [
      { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/000000" },
      { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/000000" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/4285F4" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00" },
      { name: "Make", icon: "https://cdn.simpleicons.org/make/6D00CC" },
    ],
  },
  {
    label: "CRM & Support",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    tools: [
      { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59" },
      { name: "Salesforce", icon: "https://cdn.simpleicons.org/salesforce/00A1E0" },
      { name: "Zendesk", icon: "https://cdn.simpleicons.org/zendesk/03363D" },
      { name: "Intercom", icon: "https://cdn.simpleicons.org/intercom/6AFDEF" },
    ],
  },
];

export default function ToolsSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.label === active);

  return (
    <section id="tools" className="section" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="badge" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            Tools & Platforms
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--heading)",
              marginBottom: 14,
            }}
          >
            Tools I Work With{" "}
            <span className="gradient-text">Every Day</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 500, margin: "0 auto" }}>
            Proficient across the leading platforms for remote collaboration,
            project management, and AI-powered productivity.
          </p>
        </div>

        {/* Category filter */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {["All", ...CATEGORIES.map((c) => c.label)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: active === cat ? "1.5px solid var(--teal)" : "1.5px solid var(--border)",
                background: active === cat ? "var(--teal-bg-mid)" : "var(--surface)",
                color: active === cat ? "var(--teal-dark)" : "var(--text-muted)",
                fontWeight: 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {filtered.map((cat) => (
            <div
              key={cat.label}
              className="card"
              style={{ padding: 28 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div
                  style={{
                    padding: "5px 14px",
                    borderRadius: 999,
                    background: cat.bg,
                    color: cat.color,
                    fontWeight: 600,
                    fontSize: 13,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  {cat.label}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 16px",
                      borderRadius: 12,
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = cat.color + "60";
                      (e.currentTarget as HTMLElement).style.background = cat.bg;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      width={20}
                      height={20}
                      style={{ objectFit: "contain", flexShrink: 0 }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", whiteSpace: "nowrap" }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
