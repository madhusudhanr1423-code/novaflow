import { motion } from "motion/react";
import { Link2, Bot, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Connect your stack",
    body: "One-click OAuth to GitHub, Slack, Linear and Notion. NovaFlow indexes your workspace securely in minutes.",
  },
  {
    n: "02",
    icon: Bot,
    title: "Design your agents",
    body: "Build AI agents from reusable primitives or start instantly with production-ready templates.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Ship & observe",
    body: "Deploy confidently, monitor every workflow, and optimize performance with real-time insights.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Build AI Workflows in Three Simple Steps"
          description="From connecting your tools to deploying intelligent workflows, NovaFlow gets your team up and running in minutes."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="group relative h-full overflow-visible rounded-[28px] border border-border bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(125,110,255,0.15)]"
              >
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-primary/40 to-transparent lg:block" />
                )}

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white/[0.03] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                {/* Step Number */}
                <div className="text-5xl font-bold leading-none text-gradient">
                  {step.n}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}