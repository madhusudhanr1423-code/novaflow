import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "How is NovaFlow different from a general-purpose AI chatbot?",
    a: "Chatbots answer questions. NovaFlow ships work. Our agents run inside your systems, act on your data with typed guardrails, and are observable end-to-end.",
  },
  {
    q: "Where does my data live?",
    a: "By default your workspace is hosted in our SOC 2 Type II environment on AWS us-east-1. Enterprise customers can deploy NovaFlow into their own VPC.",
  },
  {
    q: "Which models do you support?",
    a: "OpenAI, Anthropic, Google, Mistral, and any OpenAI-compatible endpoint. You choose per-agent, and swap models without rewrites.",
  },
  {
    q: "Do agents have access to everything?",
    a: "No — every agent runs with an explicit data boundary. You approve which sources it can read from and which actions it can take.",
  },
  {
    q: "Can we self-host?",
    a: "Yes. Our Enterprise plan supports single-tenant deployment in your cloud, with the same UX and update cadence as the hosted product.",
  },
  {
    q: "What does onboarding look like?",
    a: "Most teams are running a first agent within 30 minutes. Team plans include a shared onboarding channel; Enterprise gets a dedicated success engineer.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything else you're probably wondering."
        />

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-border rounded-[28px] border border-white/10 bg-card/60 backdrop-blur-xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}
                              className={`relative transition-all duration-300 ${
                     isOpen ? "bg-white/[0.03] shadow-[0_0_40px_rgba(125,110,255,0.08)]" : ""
                       }`}> 
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                 className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium">{f.q}</span>
                  <Plus
                   className={`h-4 w-4 shrink-0 transition-all duration-300 ${
    isOpen
        ? "rotate-45 text-primary"
        : "text-muted-foreground group-hover:text-foreground"
}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                     initial={{opacity:0,scale:.98,height:0}}
                     animate={{opacity:1,scale:1,height:"auto"}}
                     exit={{opacity:0,scale:.98,height:0}}
                     transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
