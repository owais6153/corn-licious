import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-corn-cup.jpg";
import kernel from "@/assets/corn-kernel.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full gradient-sun opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--leaf)]/15 blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-50" />
      </div>

      {/* floating kernels */}
      {[
        { top: "12%", left: "6%", size: 70, delay: 0 },
        { top: "70%", left: "10%", size: 50, delay: 1.2 },
        { top: "22%", right: "8%", size: 60, delay: 0.6 },
        { top: "78%", right: "14%", size: 80, delay: 1.8 },
        { top: "45%", left: "48%", size: 36, delay: 0.3 },
      ].map((k, i) => (
        <motion.img
          key={i}
          src={kernel}
          alt=""
          aria-hidden
          className="pointer-events-none absolute select-none drop-shadow-[0_20px_30px_rgba(212,150,0,0.35)]"
          style={{ top: k.top, left: k.left, right: k.right, width: k.size }}
          animate={{ y: [0, -22, 0], rotate: [0, 12, -8, 0] }}
          transition={{ duration: 6 + i, delay: k.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-12">
        <motion.div style={{ y }} className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--leaf)]/20 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--leaf-deep)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--leaf)]" />
            Made in Kuwait · Corn-Obsessed Since Day One
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[0.95] text-[var(--leaf-deep)] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Kuwait's Most{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Corn-Obsessed</span>
              <span className="absolute inset-x-0 -bottom-1 h-4 -skew-x-6 rounded-full gradient-sun opacity-70" />
            </span>{" "}
            Flavor Experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-balance text-lg text-foreground/70"
          >
            Cheese pulls, chili snaps, cream swirls — every cup is a little riot of golden kernels. We don't just serve corn. We worship it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-pop transition hover:scale-[1.03]">
              Explore Menu
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#order" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--leaf-deep)]/15 bg-card/60 px-7 py-4 font-semibold text-[var(--leaf-deep)] backdrop-blur transition hover:bg-card">
              Order Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center gap-6 text-sm text-foreground/60"
          >
            <div>
              <div className="font-display text-3xl text-[var(--leaf-deep)]">12+</div>
              <div>Signature Flavors</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-[var(--leaf-deep)]">100%</div>
              <div>Fresh Sweet Corn</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-[var(--leaf-deep)]">★ 4.9</div>
              <div>2k+ Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg }} className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[520px]"
          >
            <div className="absolute inset-0 rounded-[40%] gradient-sun blur-2xl opacity-60" />
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path id="circle" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-[var(--leaf-deep)] font-display text-[14px] tracking-[0.4em] uppercase">
                  <textPath href="#circle">
                    Cornlicious · Kuwait · Cheese · Spicy · Cream · Signature ·
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-6 overflow-hidden rounded-full shadow-pop">
              <img src={heroImg} alt="Cornlicious signature corn cup with cheese drizzle" className="h-full w-full object-cover" width={1536} height={1536} />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-2 rounded-2xl bg-card px-4 py-3 shadow-pop"
            >
              <div className="text-xs uppercase tracking-wider text-foreground/50">Today's Pick</div>
              <div className="font-display text-lg text-[var(--leaf-deep)]">Cheese Corn Cup</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 rounded-full gradient-leaf px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-pop"
            >
              🌽 Hot
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
