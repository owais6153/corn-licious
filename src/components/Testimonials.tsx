import { motion } from "motion/react";

const quotes = [
  { q: "The cheese cup ruined every other snack for me. Sorry, not sorry.", n: "Dana A.", c: "Salmiya" },
  { q: "Spicy corn + mojito = my new Friday ritual.", n: "Mohammed K.", c: "Hawally" },
  { q: "The Chef Jassim burger is criminal. Order two.", n: "Reem H.", c: "Kuwait City" },
  { q: "Cake Flakes? I didn't know I needed corn in dessert.", n: "Yousef A.", c: "Jabriya" },
];

export function Testimonials() {
  return (
    <section className="relative bg-[var(--husk)]/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl text-[var(--leaf-deep)] md:text-6xl">
            What <span className="italic">Kuwait</span> is saying.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-card p-6 shadow-soft"
            >
              <div className="text-[var(--corn-deep)] text-xl">★★★★★</div>
              <blockquote className="mt-3 font-display text-xl leading-snug text-[var(--leaf-deep)]">"{q.q}"</blockquote>
              <figcaption className="mt-4 text-sm text-foreground/60">
                <span className="font-semibold text-foreground/80">{q.n}</span> · {q.c}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
