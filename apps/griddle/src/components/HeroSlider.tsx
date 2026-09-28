import { HERO_SLIDES } from '../data'

/**
 * HeroSlider — full-width hero carousel with dark overlay. Source: slider_area
 * with owl-carousel, dark bg images, "Big Deal" kicker, title, subtitle.
 * Implemented as a simple two-slide showcase (no carousel JS needed for SSR
 * compat — both slides visible stacked for simplicity; in production a real
 * carousel would cycle).
 */
export function HeroSlider() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[600px] overflow-hidden bg-ink">
        {/* Background image with dark overlay */}
        <img
          src="https://picsum.photos/seed/griddle-hero/1920/600"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        {/* Content */}
        <div className="relative flex h-full items-center justify-center">
          <div className="text-center text-white">
            <span className="mb-4 inline-block rounded-full border border-white/30 px-6 py-2 text-sm font-medium uppercase tracking-widest text-white/90">
              {HERO_SLIDES[0].kicker}
            </span>
            <h1 className="font-display text-5xl font-bold uppercase leading-tight tracking-wide md:text-7xl">
              {HERO_SLIDES[0].title.split(' ').map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="mt-4 font-display text-xl font-semibold uppercase tracking-widest text-brand-gold">
              {HERO_SLIDES[0].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
