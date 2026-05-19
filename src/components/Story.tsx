import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Born in Kuwait", d: "A street-food obsession turned into a brand." },
  { n: "02", t: "Corn First, Always", d: "We picked one ingredient and went deep." },
  { n: "03", t: "Built to Crave", d: "Every cup tested until kernels became culture." },
];

export function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf-deep)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--leaf-deep)]">
            Our Story
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[var(--leaf-deep)] md:text-7xl">
            A small <span className="italic">obsession</span> with a single kernel.
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            Cornlicious started in Kuwait with one quiet idea — take corn seriously. Source it sweeter, toast it slower, top it bolder. Today, every cup carries that same care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="font-display text-7xl text-[var(--corn)]">{s.n}</span>
              <h3 className="mt-4 font-display text-2xl text-[var(--leaf-deep)]">{s.t}</h3>
              <p className="mt-2 text-foreground/65">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
