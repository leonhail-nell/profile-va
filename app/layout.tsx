import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonhail Paypa — Virtual Assistant",
  description:
    "Professional Virtual Assistant & Admin Support specialist with 2+ years of experience helping international clients with email management, scheduling, research, project coordination, and AI-powered productivity.",
  keywords: [
    "Virtual Assistant",
    "Admin Support",
    "Remote VA",
    "Email Management",
    "Calendar Coordination",
    "Data Entry",
    "Project Management",
    "Philippines",
  ],
  openGraph: {
    title: "Leonhail Paypa — Virtual Assistant & Admin Support",
    description:
      "Reliable remote VA with expertise in Google Workspace, project management tools, and AI-powered productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
