import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const quotes = [
  {
    q: "NovaFlow quietly replaced four tools in our stack. Our on-call load is down 40% because triage agents just handle it.",
    n: "Priya Ramanathan",
    r: "Head of Platform, Latch",
  },
  {
    q: "The taste level is unreal. It feels like a product designed by people who actually use it every day.",
    n: "Marco Feld",
    r: "Design Engineer, Halcyon",
  },
  {
    q: "We shipped a full internal RAG layer in a week. The typed SDK is what makes this feel like real software.",
    n: "Anh Nguyen",
    r: "Staff Engineer, Meridian",
  },
  {
    q: "Every other 'AI workspace' I've tried felt like a chatbot with a sidebar. NovaFlow feels like an operating system.",
    n: "Jules Okafor",
    r: "CTO, Northlane",
  },
  {
    q: "Observability on agent runs is what sold our security team. Everything is auditable, replayable, boring.",
    n: "Sam Weiler",
    r: "VP Eng, Foundry",
  },
  {
    q: "We onboarded 80 engineers in two weeks with zero support tickets. That's the whole review.",
    n: "Elena Sokolova",
    r: "Engineering Ops, Kestrel",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Loved by builders"
          title="The teams shipping fastest already switched."
        />

        {/* Stats */}
        <div className="mx-auto mt-12 mb-16 grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="text-4xl font-bold text-foreground">10k+</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Active Teams
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-foreground">99.9%</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Uptime
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-foreground">500M+</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Tasks Automated
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-foreground">4.9/5</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Customer Rating
            </div>
          </div>
        </div>


        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: (i % 3) * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-card/40 p-7 transition-all duration-150 hover:bg-card/70"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-200 group-hover:opacity-100" />

              {/* Stars */}
              <div className="mb-5 text-primary tracking-widest">
                ★★★★★
              </div>

              {/* Quote */}
              <div className="mb-3 text-4xl font-serif text-primary/30">
                “
              </div>

              <blockquote className="text-[15px] leading-8 text-foreground/90">
                {t.q}
              </blockquote>

              {/* User */}
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(125,110,255,0.35)]">
                  {t.n.charAt(0)}
                </div>

                <div>
                  <div className="text-sm font-medium">{t.n}</div>

                  <div className="text-xs text-muted-foreground">
                    {t.r}
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                    Early Access
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}