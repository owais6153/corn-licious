import { motion } from "motion/react";
import cake from "@/assets/cake-flakes.jpg";

export function Dessert() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 gradient-sun opacity-90" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-40" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf-deep)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--corn)]">
            Sweet Surprise
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[var(--leaf-deep)] md:text-7xl">
            Cornlicious<br /><span className="italic">Cake Flakes.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-[var(--leaf-deep)]/85">
            Crispy honey-roasted corn flakes meet warm chocolate ganache. A dessert that crunches, melts and surprises in one spoon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-card/80 px-4 py-2 text-sm font-semibold text-[var(--leaf-deep)] backdrop-blur">🍫 Belgian Chocolate</span>
            <span className="rounded-full bg-card/80 px-4 py-2 text-sm font-semibold text-[var(--leaf-deep)] backdrop-blur">🌽 Honey Flakes</span>
            <span className="rounded-full bg-card/80 px-4 py-2 text-sm font-semibold text-[var(--leaf-deep)] backdrop-blur">❄ Vanilla Cream</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-full bg-card shadow-pop" />
          <motion.img
            src={cake}
            alt="Cornlicious chocolate cake flakes"
            loading="lazy"
            width={1024}
            height={1024}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
