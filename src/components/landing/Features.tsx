import { motion } from "motion/react";
import { Brain, Workflow, Shield, GitBranch, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Brain,
    title: "Context-aware agents",
    body: "Agents read your docs, PRs and Slack threads to act with real project context — not generic guesses.",
  },
  {
    icon: Workflow,
    title: "Workflows that self-repair",
    body: "Declarative pipelines with retries, human handoffs, and observability built in from day one.",
  },
  {
    icon: GitBranch,
    title: "Native to your stack",
    body: "First-class GitHub, Linear, Notion, Slack and 60+ integrations. No brittle glue code.",
  },
  {
    icon: Gauge,
    title: "Instant search, everywhere",
    body: "Sub-100ms semantic search across every workspace surface. Cmd+K knows what you meant.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade privacy",
    body: "SOC 2 Type II, SSO, SCIM, VPC deployment and per-agent data boundaries.",
  },
  {
    icon: Sparkles,
    title: "Composable primitives",
    body: "Build custom agents in TypeScript. Version them, test them, ship them like real software.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Every primitive your team needs,
              <br className="hidden md:inline" /> nothing they don't.
            </>
          }
          description="NovaFlow is opinionated where it matters — and gets out of the way everywhere else."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-card/60 backdrop-blur-xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:bg-card/70 hover:shadow-[0_20px_60px_rgba(125,110,255,0.15)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-border bg-white/[0.03] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} group-hover:rotate-6/>
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
