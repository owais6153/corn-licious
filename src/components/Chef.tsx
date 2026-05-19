import { motion } from "motion/react";
import chefImg from "@/assets/chef.jpg";
import burgerImg from "@/assets/burger.jpg";

export function Chef() {
  return (
    <section id="chef" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 -z-10 bg-grain opacity-60" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] gradient-sun opacity-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] shadow-pop">
              <img src={chefImg} alt="Chef Jassim Al-Sulaibi" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-40 overflow-hidden rounded-2xl border-4 border-card shadow-pop md:w-52"
            >
              <img src={burgerImg} alt="" loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-7 md:pl-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf-deep)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--corn)]">
            ★ A Limited Collaboration
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[var(--leaf-deep)] md:text-7xl">
            With <span className="italic">Chef Jassim</span><br />Al-Sulaibi.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            A burger built like Kuwait tastes — bold, layered, generous. Two patties, melt-pulled cheese, brioche kissed with butter, and a quiet Cornlicious whisper inside.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "Patties", v: "Wagyu Blend" },
              { k: "Cheese", v: "Triple Melt" },
              { k: "Sauce", v: "Secret" },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl bg-card p-4 shadow-soft">
                <div className="text-xs uppercase tracking-wider text-foreground/50">{b.k}</div>
                <div className="mt-1 font-display text-lg text-[var(--leaf-deep)]">{b.v}</div>
              </div>
            ))}
          </div>
          <a href="#order" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--leaf-deep)] px-7 py-4 font-semibold text-primary-foreground shadow-pop transition hover:scale-105">
            Try the Collab →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
