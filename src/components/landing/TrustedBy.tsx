import { motion } from "motion/react";

const brands = [
  "Vercel",
  "Linear",
  "Ramp",
  "Retool",
  "Notion",
  "Framer",
  "Loom",
  "Arc",
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-14">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

      <div className="container-page relative">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by high-performing teams worldwide
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              className="cursor-default select-none text-center text-lg font-semibold tracking-tight text-muted-foreground/60 transition-all duration-200 hover:text-foreground hover:opacity-100"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}