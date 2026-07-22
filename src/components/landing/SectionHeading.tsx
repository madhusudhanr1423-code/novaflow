import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
       <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
  {eyebrow}
</div>
      )}
      <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
  {title}
</span>
      </h2>
      {description && (
        <p className="mt-4 text-pretty mt-5 max-w-xl text-lg leading-8 text-muted-foreground text-muted-foreground md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
