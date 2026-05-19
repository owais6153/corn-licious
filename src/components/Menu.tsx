import { motion } from "motion/react";
import burger from "@/assets/burger.jpg";
import nachos from "@/assets/nachos.jpg";
import fries from "@/assets/fries.jpg";
import hotdog from "@/assets/hotdog.jpg";
import mojito from "@/assets/mojito.jpg";
import cheese from "@/assets/flavor-cheese.jpg";

const items = [
  { name: "Signature Corn Cup", cat: "Hero", img: cheese, price: "1.750", span: "md:col-span-2 md:row-span-2" },
  { name: "Chef's Smash Burger", cat: "Collab", img: burger, price: "2.250", span: "md:col-span-2" },
  { name: "Loaded Nachos", cat: "Sharing", img: nachos, price: "2.000" },
  { name: "Golden Fries", cat: "Sides", img: fries, price: "0.950" },
  { name: "Cornlicious Hot Dog", cat: "Bites", img: hotdog, price: "1.500", span: "md:col-span-2" },
  { name: "Mint Mojito", cat: "Drinks", img: mojito, price: "1.250" },
];

export function Menu() {
  return (
    <section id="menu" className="relative bg-[var(--husk)]/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl text-[var(--leaf-deep)] md:text-7xl">
            The Full <span className="italic">Menu</span>
          </h2>
          <a href="#order" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition">
            See all →
          </a>
        </div>

        <div className="grid auto-rows-[minmax(220px,_auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--leaf-deep)]/85 via-[var(--leaf-deep)]/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <span className="self-start rounded-full bg-card/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--leaf-deep)]">
                  {it.cat}
                </span>
                <div className="flex items-end justify-between gap-3 text-primary-foreground">
                  <h3 className="font-display text-2xl md:text-3xl">{it.name}</h3>
                  <span className="rounded-full bg-[var(--corn)] px-3 py-1 text-sm font-bold text-[var(--leaf-deep)]">{it.price} KD</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
