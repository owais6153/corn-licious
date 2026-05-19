import { motion } from "motion/react";
import { useState } from "react";
import cheese from "@/assets/flavor-cheese.jpg";
import spicy from "@/assets/flavor-spicy.jpg";
import cream from "@/assets/flavor-cream.jpg";
import sig from "@/assets/flavor-signature.jpg";

const flavors = [
  { name: "Cheese", tag: "The Pull", img: cheese, desc: "Aged cheddar avalanching over hot kernels.", accent: "from-[var(--corn)] to-[var(--corn-deep)]" },
  { name: "Spicy", tag: "The Kick", img: spicy, desc: "Smoky chili, lime zest, a slap of heat.", accent: "from-[#ff7a3a] to-[#e23b3b]" },
  { name: "Cream", tag: "The Swirl", img: cream, desc: "Silky cream, sweet butter, sunshine.", accent: "from-[#fff2c7] to-[var(--corn)]" },
  { name: "Signature", tag: "The Riot", img: sig, desc: "Every topping. No regrets. Chef's chaos.", accent: "from-[var(--leaf)] to-[var(--leaf-deep)]" },
];

export function Flavors() {
  const [active, setActive] = useState(0);
  return (
    <section id="flavors" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf-deep)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--leaf-deep)]">
              The Hero Lineup
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] text-[var(--leaf-deep)] md:text-7xl">
              Four Cups. <span className="italic text-[var(--corn-deep)]">Infinite cravings.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65">
            Hover, tap, taste with your eyes. Every cup is built fresh, loaded loud, finished bold.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flavors.map((f, i) => (
            <motion.button
              key={f.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -12 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 text-left shadow-soft transition-all duration-500 ${
                active === i ? "ring-2 ring-[var(--leaf)]/60" : ""
              }`}
            >
              <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${f.accent}`}>
                <motion.img
                  src={f.img}
                  alt={`${f.name} corn cup`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover mix-blend-multiply"
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--leaf-deep)] backdrop-blur">
                  {f.tag}
                </div>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-display text-3xl text-[var(--leaf-deep)]">{f.name}</h3>
                <p className="mt-1 text-sm text-foreground/65">{f.desc}</p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-[var(--leaf-deep)]">
                  <span>From 1.500 KD</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--leaf-deep)] text-primary-foreground transition group-hover:rotate-45">+</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
