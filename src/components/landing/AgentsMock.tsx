import { Bot, CheckCircle2, Clock3, Activity } from "lucide-react";
import { motion } from "motion/react";

const agents = [
  {
    name: "Customer Support AI",
    status: "Running",
    success: "98.4%",
    tasks: "42",
    latency: "0.8s",
  },
  {
    name: "PR Reviewer",
    status: "Running",
    success: "97.9%",
    tasks: "18",
    latency: "0.6s",
  },
  {
    name: "Meeting Assistant",
    status: "Running",
    success: "99.1%",
    tasks: "27",
    latency: "1.0s",
  },
  {
    name: "Content Generator",
    status: "Running",
    success: "96.8%",
    tasks: "35",
    latency: "0.9s",
  },
];

export function AgentsMock() {
  return (
    <div className="h-full overflow-y-auto p-4 scrollbar-hide scroll-smooth">
      <div className="space-y-4">
        {agents.map((agent) => (
          <motion.div
            key={agent.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.18 }}
            className="rounded-xl border border-border bg-card/40 p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(125,110,255,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    Autonomous Agent
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                {agent.status}
              </span>
            </div>

            {/* Stats */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="h-4 w-4" />
                  Success Rate
                </span>

                <span>{agent.success}</span>
              </div>

              <div className="h-1.5 rounded-full bg-white/5">
                <div className="h-full w-[98%] rounded-full bg-primary" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Today's Tasks</span>
                <span>{agent.tasks}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Clock3 className="h-4 w-4" />
                  Latency
                </span>

                <span>{agent.latency}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/20 py-2.5 text-sm font-medium text-primary border border-primary/20 transition-all duration-200 hover:bg-primary/50">
                <CheckCircle2 className="h-4 w-4" />
                Active
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}