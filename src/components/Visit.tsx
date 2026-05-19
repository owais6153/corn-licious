import { motion } from "motion/react";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[40px] gradient-leaf p-10 shadow-pop md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--corn)]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-[var(--corn)]/20 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="rounded-full bg-[var(--corn)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--leaf-deep)]">Visit Us</span>
              <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[var(--corn)] md:text-7xl">
                Come for the corn.<br /><span className="italic text-card">Stay for the buzz.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-card/85">
                Find us across Kuwait — Salmiya, Hawally, Kuwait City. Or get it delivered while it's still steaming.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#order" id="order" className="rounded-full bg-[var(--corn)] px-7 py-4 font-bold text-[var(--leaf-deep)] shadow-pop transition hover:scale-105">
                  Order on Delivery
                </a>
                <a href="#" className="rounded-full border-2 border-[var(--corn)] px-7 py-4 font-semibold text-[var(--corn)] transition hover:bg-[var(--corn)]/10">
                  Get Directions
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="grid gap-4">
              {[
                { c: "Salmiya", a: "Salem Al Mubarak St.", h: "10am — 1am" },
                { c: "Hawally", a: "Tunis St., Block 4", h: "10am — 1am" },
                { c: "Kuwait City", a: "Avenues Mall, 1st Floor", h: "10am — 12am" },
              ].map((l) => (
                <div key={l.c} className="flex items-center justify-between gap-4 rounded-2xl bg-card/10 p-5 backdrop-blur-md">
                  <div>
                    <div className="font-display text-2xl text-[var(--corn)]">{l.c}</div>
                    <div className="text-sm text-card/80">{l.a}</div>
                  </div>
                  <div className="text-right text-sm text-card/80">{l.h}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
