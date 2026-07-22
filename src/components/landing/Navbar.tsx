import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#features");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
           scrolled
  ? "glass-strong border border-primary/10 bg-background/80 backdrop-blur-3xl shadow-[0_20px_60px_-30px_rgba(125,110,255,0.25)]"
  : ""
          }`}
        >
          <a href="#top" className="group flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-9 w-9 rounded-xl place-items-center rounded-lg bg-[image:var(--gradient-primary)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="text-[15px]">NovaFlow</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    active === l.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
            >
              Get started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        <AnimatePresence>
  {open && (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="mt-2 rounded-2xl border border-white/10 bg-background/95 p-3 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:hidden"
    >
      <ul className="flex flex-col">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}

        <li className="mt-2 border-t border-border pt-2">
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
          >
            Get started
          </a>
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </motion.header>
  );
}
