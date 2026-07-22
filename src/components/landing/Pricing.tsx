import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    tagline: "For individuals exploring NovaFlow.",
    features: ["3 agents", "1 workspace", "Community support", "NovaFlow-hosted"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Team",
    priceMonthly: 24,
    priceYearly: 19,
    tagline: "For product teams that ship weekly.",
    features: [
      "Unlimited agents",
      "Up to 25 seats",
      "Priority support",
      "GitHub, Slack, Linear",
      "SSO (Google, Microsoft)",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    tagline: "For orgs with real compliance needs.",
    features: [
      "Unlimited seats",
      "VPC / on-prem deployment",
      "SAML, SCIM, audit logs",
      "Dedicated success engineer",
      "Custom DPA",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Start free. Upgrade when your team feels the lift."
        />

        <div className="mt-8 flex justify-center">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1 text-sm">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                !yearly ? "bg-primary/15 border border-primary/20 text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${
                yearly ? "bg-primary/15 border border-primary/20 text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full animate-pulse bg-primary/20 px-1.5 py-0.5 text-[10px] text-primary">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => {
            const price = yearly ? p.priceYearly : p.priceMonthly;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`group relative flex flex-col rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-2 ${
                  p.highlighted
                    ? "border border-primary/40 bg-[linear-gradient(180deg,oklch(0.72_0.19_290/0.10),transparent)] shadow-[0_30px_80px_-30px_oklch(0.72_0.19_290/0.5)]"
                    : "border border-border bg-card/40"
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-6 rounded-full shadow-[0_8px_24px_rgba(125,110,255,0.35)] bg-[image:var(--gradient-primary)] px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground">
                    Most popular
                  </div>
                )}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-sm font-semibold">{p.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  {price === null ? (
                    <span className="text-3xl font-semibold">Custom</span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold tracking-tight">${price}</span>
                      <span className="text-sm text-muted-foreground">
                        /seat · {yearly ? "yr billed" : "mo"}
                      </span>
                    </>
                  )}
                </div>

                <a
                  href="#cta"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)] ${
                    p.highlighted
                      ? "bg-foreground text-background"
                      : "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                   <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-1">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
