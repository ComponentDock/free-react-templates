import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const SLIDES = [
  {
    heading: 'Arise, Shine',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.',
    cta: 'Watch Now',
    bg: 'https://picsum.photos/seed/nave-hero-1/1920/1080',
  },
  {
    heading: 'Explore Our Weekend Services',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.',
    cta: 'Explore Now',
    bg: 'https://picsum.photos/seed/nave-hero-2/1920/1080',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const slide = SLIDES[current] as (typeof SLIDES)[number]

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.bg})` }}
      aria-label="Hero slider"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {slide.heading}
        </h1>
        <p className="mb-8 text-base text-white/90 md:text-lg">{slide.subtitle}</p>
        <a
          href="#"
          className="inline-block border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
        >
          {slide.cta}
        </a>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-brand' : 'bg-white/50',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
