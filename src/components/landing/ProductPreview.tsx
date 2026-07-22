import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageSquare, FileCode, ListTodo } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WorkspaceMock } from "./WorkspaceMock";
import { AgentsMock } from "./AgentsMock";
import { PipelineMock } from "./PipelineMock";

const tabs = [
  {
    id: "workspace",
    label: "Workspace",
    icon: MessageSquare,
    description:
      "Collaborate across projects, documents and AI in one unified workspace.",
  },
  {
    id: "agents",
    label: "Agents",
    icon: FileCode,
    description:
      "Deploy intelligent AI agents that automate repetitive work with full context.",
  },
  {
    id: "pipelines",
    label: "Pipelines",
    icon: ListTodo,
    description:
      "Build visual workflows and monitor every automation in real time.",
  },
];

export function ProductPreview() {
  const [tab, setTab] = useState("workspace");

  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Inside NovaFlow"
          title="One surface, every workflow."
          description="Switch modes without switching tools. NovaFlow adapts to how your team thinks."
        />

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex min-w-[140px] items-center justify-center gap-2 rounded-full px-5 py-2 text-sm transition-all duration-200 ${
                  tab === t.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full border border-primary/20 bg-primary/10 shadow-[0_0_25px_rgba(125,110,255,0.18)]"
                  />
                )}

                <t.icon className="relative h-4 w-4" />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Description */}
        <motion.p
          key={tab + "-description"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {tabs.find((t) => t.id === tab)?.description}
        </motion.p>

        {/* Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative glass-strong mx-auto mt-8 max-w-7xl overflow-hidden rounded-[30px] p-1.5 shadow-[0_60px_160px_-40px_rgba(125,110,255,0.45)]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

            {/* Live Badge */}
            <div className="absolute right-20 top-4 z-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-border-strong">
              <div className="h-[400px] w-full overflow-hidden">
                {tab === "workspace" && <WorkspaceMock />}
                {tab === "agents" && <AgentsMock />}
                {tab === "pipelines" && <PipelineMock />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}