import { motion } from "motion/react";
import a from "@/assets/flavor-cheese.jpg";
import b from "@/assets/flavor-spicy.jpg";
import c from "@/assets/flavor-cream.jpg";
import d from "@/assets/flavor-signature.jpg";
import e from "@/assets/nachos.jpg";
import f from "@/assets/fries.jpg";
import g from "@/assets/hotdog.jpg";
import h from "@/assets/mojito.jpg";

const imgs = [a, b, c, d, e, f, g, h];

export function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl text-[var(--leaf-deep)] md:text-6xl">
            @cornlicious<span className="italic">.kw</span>
          </h2>
          <a href="#" className="text-sm font-semibold text-[var(--leaf-deep)] underline-offset-4 hover:underline">Follow on Instagram →</a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {imgs.map((src, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <img src={src} alt="" loading="lazy" width={800} height={800} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-[var(--leaf-deep)]/0 opacity-0 transition group-hover:bg-[var(--leaf-deep)]/40 group-hover:opacity-100">
                <span className="text-2xl text-primary-foreground">📷</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
