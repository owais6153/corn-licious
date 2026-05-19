import { useEffect, useState } from "react";
import logo from "@/assets/corn.jpeg";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#flavors", label: "Flavors" },
  { href: "#chef", label: "Chef" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" },
];

export function CornNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full border border-border/60 px-4 py-2.5 backdrop-blur-xl transition-all ${
            scrolled ? "bg-card/80 shadow-soft" : "bg-card/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-black tracking-tight">
            <img src={logo} alt="Cornlicious logo" className="h-9 w-9 rounded-full object-cover shadow-soft" width={72} height={72} />
            <span className="text-[var(--leaf-deep)]">Cornlicious</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#order"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105 hover:shadow-pop"
            >
              Order Now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"
              aria-label="Menu"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 md:hidden rounded-3xl border border-border/60 bg-card/95 p-3 backdrop-blur-xl shadow-pop">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium hover:bg-muted">
                {l.label}
              </a>
            ))}
            <a href="#order" onClick={() => setOpen(false)} className="mt-1 block rounded-2xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground">
              Order Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
