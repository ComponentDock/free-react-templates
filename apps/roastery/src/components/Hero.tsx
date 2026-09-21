import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/roastery-hero/1600/900"
          alt="Freshly brewed coffee in a ceramic cup"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="max-w-2xl">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Roastery
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Crafted Coffee,
            <br />
            <span className="text-brand">Perfectly Blended</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            From single-origin beans to signature blends, every cup is roasted with care and served
            with passion. Discover your new favorite roast.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-charcoal transition-colors hover:bg-brand-dark"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-brand hover:text-brand"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
