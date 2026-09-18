import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Where Kids Learn & Grow Together',
    subtext: 'Nurturing young minds in a fun, safe, and colorful environment.',
    image: 'https://picsum.photos/seed/tinybrights-hero1/1920/900',
    alt: 'Children playing in a bright classroom',
  },
  {
    heading: 'Fun Education for Bright Futures',
    subtext: 'Building strong foundations through creative play and exploration.',
    image: 'https://picsum.photos/seed/tinybrights-hero2/1920/900',
    alt: 'Kids learning with colorful materials',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  const slide = slides[active]!

  return (
    <section id="home" className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === active ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={i !== active}
        >
          <img src={s.image} alt={s.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {slide.heading}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">{slide.subtext}</p>
        <a
          href="#about"
          className="btn-pill mt-8 inline-flex items-center gap-2 bg-brand-blue px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue/90"
        >
          Learn More
        </a>
      </div>

      {/* Pagination dots */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === active ? 'bg-brand-blue' : 'bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
