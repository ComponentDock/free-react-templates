import { ArrowRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/crustly-hero/1920/800"
        alt="Delicious food spread"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Welcome to Crustly
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          Where every bite tells a story. Freshly baked goods and artisan meals crafted with
          passion.
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Explore Our Menu
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
