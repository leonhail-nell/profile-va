"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #0d9488, #0f766e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              N
            </div>
            <span style={{ fontWeight: 600, fontSize: 14, color: "var(--text)" }}>
              Nell<span style={{ color: "var(--teal)" }}>.</span>VA
            </span>
          </div>

          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
            © {year} Leonhail Paypa · Virtual Assistant · Panabo City, Philippines
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <a
              href="https://linkedin.com/in/leonhail-paypa-97a95918b"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--teal)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-dim)")}
            >
              LinkedIn
            </a>
            <a
              href="mailto:leonhail.paypa.dev@gmail.com"
              style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--teal)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-dim)")}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
