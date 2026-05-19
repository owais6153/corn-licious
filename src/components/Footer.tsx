export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--cream)] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-sun shadow-soft font-display text-lg text-[var(--leaf-deep)]">C</span>
              <span className="font-display text-2xl font-black text-[var(--leaf-deep)]">Cornlicious</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-foreground/60">Kuwait's most corn-obsessed food brand. Made with kernels, cheese & love.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm md:grid-cols-3">
            <a href="#menu" className="text-foreground/70 hover:text-foreground">Menu</a>
            <a href="#flavors" className="text-foreground/70 hover:text-foreground">Flavors</a>
            <a href="#chef" className="text-foreground/70 hover:text-foreground">Chef Collab</a>
            <a href="#story" className="text-foreground/70 hover:text-foreground">Our Story</a>
            <a href="#visit" className="text-foreground/70 hover:text-foreground">Locations</a>
            <a href="#" className="text-foreground/70 hover:text-foreground">Instagram</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-foreground/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Cornlicious Kuwait. All kernels reserved.</span>
          <span>Crafted with 🌽 in Kuwait</span>
        </div>
      </div>
    </footer>
  );
}
