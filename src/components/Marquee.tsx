const words = ["CHEESE PULL", "🌽", "SPICY KICK", "🌽", "CREAM SWIRL", "🌽", "SIGNATURE MIX", "🌽", "KUWAIT'S FAV", "🌽"];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--leaf-deep)]/10 bg-[var(--leaf-deep)] py-5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="mx-6 font-display text-2xl font-black uppercase tracking-tight text-[var(--corn)] md:text-4xl">
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
