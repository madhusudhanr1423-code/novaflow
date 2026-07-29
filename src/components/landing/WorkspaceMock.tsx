import { motion } from "motion/react";
import { useState } from "react";
import {
  Search,
  Bell,
  Command,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Circle,
  ArrowUpRight,
} from "lucide-react";

const bars = [38, 52, 44, 68, 58, 82, 74, 92, 86, 74, 88, 96];

export function WorkspaceMock() {
  const [activeMenu, setActiveMenu] = useState("Overview");
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] bg-[oklch(0.14_0.02_265)] text-[13px]">
      {/* Sidebar */}
      <aside className="hidden border-r border-border p-3 md:block">
        <div className="mb-4 flex items-center gap-2 px-2 py-1">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[image:var(--gradient-primary)]">
            <Sparkles className="h-3 w-3 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-semibold">NovaFlow</span>
        </div>
        <nav className="space-y-0.5 text-muted-foreground">
         {[
  "Overview",
  "Agents",
  "Docs",
  "Pipelines",
  "Analytics",
  "Team",
].map((item) => (
  <button
  key={item}
  onClick={() => setActiveMenu(item)}
  className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition-all duration-200 ${
    activeMenu === item
      ? "border border-primary/20 bg-primary/10 text-foreground"
      : "hover:bg-white/5 hover:text-foreground"
  }`}
>
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        activeMenu === item ? "bg-primary" : "bg-white/20"
      }`}
    />
    {item}
  </button>
))}
        </nav>

        <div className="mt-6 rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Usage</div>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-lg font-semibold">72%</span>
            <span className="text-[11px] text-primary">+12%</span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-white/5">
            <motion.div 
            initial={{ width:0 }}
            animate={{ width:"72%" }}
            transition={{duration:1.2, delay:.4}}
className="h-1 rounded-full bg-[image:var(--gradient-primary)]"
/>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className=" relative min-w-0">
       

        {/* Topbar */}
       <div className="flex min-w-0 items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-2 rounded-md border border-border bg-white/[0.03] px-2 py-1 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(120,100,255,0.18)]">
            <Search className="h-3.5 w-3.5" />
            <span className="truncate text-xs">Search everything…</span>
            <span className="ml-4 flex items-center gap-1 rounded border border-border px-1 text-[10px]">
              <Command className="h-2.5 w-2.5" /> 
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <motion.div
             animate={{scale:[1,1.08,1]}}
            transition={{repeat:Infinity,duration:2}}
            className="h-6 w-6 rounded-full bg-[image:var(--gradient-primary)]"
/>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-3 p-4 md:grid-cols-3">
          <Stat icon={TrendingUp} label="Weekly velocity" value="248" delta="+18%" />
          <Stat icon={Zap} label="Agent runs" value="1,204" delta="+42%" />
          <Stat icon={Users} label="Active teammates" value="36" delta="+3" />

          
          {/* Chart card */}
<motion.div
  whileHover={{
    y: -4,
    scale: 1.01,
     boxShadow: "0 20px 50px rgba(125,110,255,0.18)",
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="md:col-span-2 rounded-lg border border-border bg-white/[0.02] p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(125,110,255,0.18)]"
>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Throughput
                </div>
                <div className="text-lg font-semibold">This quarter</div>
              </div>
              <div className="flex gap-1 text-[11px]">
                {["1W", "1M", "3M", "1Y"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded px-2 py-0.5 ${
                      i === 2 ? "bg-white/10 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex h-32 items-end gap-1 md:gap-2">
              {bars.map((h, i) => (
                <motion.div
                 key={i}
                 initial={{ height: 0 }}
                 whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{
                delay: i * 0.04,
                duration: 0.6,
                ease: "easeOut",
                }}
             className="flex-1 rounded-t bg-[image:var(--gradient-primary)] opacity-90"
/>
              ))}
            </div>
          </motion.div>

          {/* Agent activity */}
          <div className="rounded-lg border border-border bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Active agents
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <ul className="space-y-2">
              {[
                { n: "Triage", s: "Running", ok: true },
                { n: "Release notes", s: "Queued", ok: false },
                { n: "PR reviewer", s: "Running", ok: true },
                { n: "Standup", s: "Done", ok: true },
              ].map((a) => (
                <li key={a.n} className="flex items-center gap-2">
                  {a.ok ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  ) : (
                    <Circle className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                  <span className="flex-1 truncate">{a.n}</span>
                  <motion.span
                  animate={a.s==="Running"
                   ? {opacity:[0.4,1,0.4]}
                  : {}
                  }
                  transition={{repeat:Infinity, duration:1.5}}
                 className={`text-[11px] ${a.s==="Running"? "text-green-400" :"text-muted-foreground"
                  }`}>
                  {a.s}
                </motion.span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  delta: string;
}) {
  return (
   <motion.div
       whileHover={{
       y:-4,
       scale:1.02
       }}
      transition={{
      duration:0.18
       }}
className="rounded-lg border border-border bg-white/[0.02] p-4"
>
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="text-[11px] uppercase tracking-wide">{label}</span>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span className="text-[11px] text-primary">{delta}</span>
      </div>
    </motion.div>
  );
}
