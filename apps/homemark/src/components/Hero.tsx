import { heroSlides } from '../data'
import { Play } from 'lucide-react'

/** Hero section with background image, headline, social icons, and details panel. */
export function Hero() {
  const slide = heroSlides[0]

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-navy" data-testid="hero">
      {/* Background image */}
      <img
        src={slide.image}
        alt="Modern home exterior"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
        </div>
      </div>

      {/* Social icons on right */}
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 space-y-3 md:right-8">
        {['Facebook', 'LinkedIn', 'Twitter', 'YouTube', 'Instagram'].map((s) => (
          <a
            key={s}
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xs text-white backdrop-blur-sm transition-colors hover:bg-brand"
            aria-label={s}
          >
            {s[0]}
          </a>
        ))}
      </div>

      {/* Details panel at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-6 lg:px-8">
          <Play size={20} className="text-brand" aria-hidden="true" />
          <div>
            <h5 className="text-sm font-semibold text-navy">{slide.bedrooms}</h5>
            <p className="text-xs text-subtle">{slide.available}</p>
          </div>
          <span className="ml-auto text-2xl font-bold text-brand">{slide.price}</span>
        </div>
      </div>
    </section>
  )
}
