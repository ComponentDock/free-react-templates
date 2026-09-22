import { HERO } from '../data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/** Hero — full-width background image with large serif heading and
    three thumbnail navigation cards (Pool, Sauna, Gym). */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO.bgImage})` }}
    >
      <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
          {HERO.heading}
        </h1>
      </div>
      {/* Thumbnail nav */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-brand transition-colors hover:bg-charcoal/80"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {HERO.thumbnails.map((thumb) => (
          <button
            key={thumb.label}
            type="button"
            aria-label={thumb.label}
            className="group overflow-hidden rounded-full border-2 border-brand"
          >
            <img
              src={thumb.image}
              alt={thumb.label}
              className="h-16 w-24 object-cover transition-transform group-hover:scale-110"
            />
          </button>
        ))}
        <button
          type="button"
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-brand transition-colors hover:bg-charcoal/80"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
