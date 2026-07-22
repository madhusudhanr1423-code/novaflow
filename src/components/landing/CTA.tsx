import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="pb-24 md:pb-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

          <h2 className="relative text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Ship the next quarter{" "}
            <span className="font-[var(--font-display)] italic text-gradient">
              in the next month.
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
            Bring your team to a workspace that actually keeps up.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="cta-email" className="sr-only">
              Work email
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm outline-none ring-primary/40 transition-shadow focus:ring-2"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Start free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="relative mt-3 text-xs text-muted-foreground">
            14 days free · No credit card · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
