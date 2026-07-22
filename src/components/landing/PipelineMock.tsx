import {
  Github,
  Bot,
  FlaskConical,
  Rocket,
  Bell,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Github,
    label: "GitHub Push",
    status: "Completed",
    time: "2 sec",
  },
  {
    icon: Bot,
    label: "AI Review",
    status: "Running",
    time: "18 sec",
  },
  {
    icon: FlaskConical,
    label: "Run Tests",
    status: "Queued",
    time: "--",
  },
  {
    icon: Rocket,
    label: "Deploy",
    status: "Waiting",
    time: "--",
  },
  {
    icon: Bell,
    label: "Slack Alert",
    status: "Pending",
    time: "--",
  },
];

export function PipelineMock() {
  return (
    <div className="h-full overflow-y-auto p-5">
      <div className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18 }}
              className="relative rounded-2xl border border-border bg-card/40 p-5 transition-all duration-200 hover:border-primary/25 hover:shadow-[0_12px_30px_rgba(125,110,255,0.12)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-medium">{step.label}</h3>

                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="h-3 w-3" />
                      {step.time}
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    step.status === "Completed"
                      ? "bg-green-500/15 text-green-400"
                      : step.status === "Running"
                      ? "bg-primary/15 text-primary"
                      : "bg-white/5 text-muted-foreground"
                  }`}
                >
                  {step.status}
                </span>
              </div>

              {i !== steps.length - 1 && (
                <div className="absolute left-[42px] top-full h-4 w-px bg-primary/20" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card/30 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            Overall Progress
          </span>

          <span className="text-primary font-semibold">
            40%
          </span>
        </div>

        <div className="h-2 rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full bg-primary"
          />
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-green-400" />
          2 of 5 pipeline stages completed
        </div>
      </div>
    </div>
  );
}