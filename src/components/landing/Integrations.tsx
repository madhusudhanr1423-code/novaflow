import { motion } from "motion/react";
import {
  Github,
  Slack,
  Figma,
  Chrome,
  Database,
  Cloud,
  Mail,
  Calendar,
  Zap,
  Boxes,
  Terminal,
  Layers,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const integrations = [
  { icon: Github, label: "GitHub" },
  { icon: Slack, label: "Slack" },
  { icon: Figma, label: "Figma" },
  { icon: Chrome, label: "Chrome" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cloud, label: "AWS" },
  { icon: Mail, label: "Gmail" },
  { icon: Calendar, label: "Calendar" },
  { icon: Zap, label: "Zapier" },
  { icon: Boxes, label: "Docker" },
  { icon: Terminal, label: "CLI" },
  { icon: Layers, label: "API" },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Integrations"
              align="left"
              title="Meets your team where it works."
              description="60+ native integrations, a typed SDK, and a public API. NovaFlow plugs into your stack without reshaping it."
            />
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "GitHub, GitLab, Bitbucket — repo-aware in one click",
                "Slack, Linear, Notion, Jira — bi-directional sync",
                "PostgreSQL, Snowflake, S3 — read-only or full RAG",
                "Zapier, Make, n8n — for the long tail",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 animate-pulse shrink-0 rounded-full bg-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
            <div className="glass-strong relative grid grid-cols-4 gap-4 rounded-3xl p-6">
              {integrations.map(({ icon:Icon,label}, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -1, }}
                  className="group relative grid aspect-square place-items-center rounded-2xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(125,110,255,0.15)] transition-all duration-300 hover:border-primary/40"
                >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                  <Icon
                    className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground"
                    strokeWidth={1.75}
                  />
                  <span className="mt-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
  {label}
</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
