import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { DashboardMock } from "./DashboardMock";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute inset-x-0 top-0 h-[720px]"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute left-1/2 top-56 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute left-1/4 top-40 h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="container-page">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mx-auto max-w-3xl text-center"
>
          <div className="absolute left-1/2 top-24 -z-10 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
          <a
            href="#product"
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
           Introducing Autonomous AI Workflows
            <ArrowRight className="h-3 w-3" />
          </a>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            The AI workspace
            <br />
            <span className="font-[var(--font-display)] text-gradient">
              Built for Modern Teams
            </span>
          </h1>

          

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            Bring your documents, projects, and AI agents into one intelligent workspace that helps your team collaborate, automate tasks, and ship products faster.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
             className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform transition-all duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#product"
              className="glass group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-foreground transition-colors transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 hover:scale-[1.02]">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Watch 2-min demo
            </a>
          </div>

          <p className="mt-5 text-xs text-foreground/60">
            Free 14-day trial · No credit card · SOC 2 Type II
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
 {["Stripe", "Notion", "GitHub", "Linear", "Vercel"].map((logo) => (
  <motion.span
    key={logo}
    whileHover={{
      y: -3,
      scale: 1.05,
    }}
    transition={{ duration: 0.2 }}
    className="cursor-pointer text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground"
  >
    {logo}
  </motion.span>
))}
</div>

        <motion.div
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -6, 0],
  }}
  transition={{
    opacity: {
      duration: 0.7,
      delay: 0.2,
    },
    scale: {
      duration: 0.7,
      delay: 0.2,
    },
    y: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative mx-auto mt-20 max-w-6xl"
>
          <div className="glass-strong overflow-hidden rounded-[28px] p-1.5 shadow-[0_60px_160px_-40px_rgba(125,110,255,0.45)] transition-all duration-500 hover:shadow-[0_70px_180px_-30px_rgba(125,110,255,0.55)]">
            <div className="overflow-hidden rounded-[24px] border border-border-strong">
              <DashboardMock />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
