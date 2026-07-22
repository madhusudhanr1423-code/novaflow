import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    h: "Product",
    l: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  },
  {
    h: "Company",
    l: ["About", "Careers", "Customers", "Press", "Contact"],
  },
  {
    h: "Resources",
    l: ["Docs", "API Reference", "Guides", "Community", "Status"],
  },
  {
    h: "Legal",
    l: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container-page py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <span className="grid h-10 w-10 rounded-xl place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
                <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </span>
              NovaFlow
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The intelligent workspace built for how modern teams actually work.
            </p>
            <div className="group mt-6 flex items-center gap-2 font-semibold">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04] hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300/>
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.l.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-foreground/80 transition-colors transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NovaFlow. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary aniamte-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
