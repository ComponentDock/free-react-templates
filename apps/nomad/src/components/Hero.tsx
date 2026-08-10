import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { author, slides } from '../data'

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = slides[active]!
  const count = slides.length

  const next = () => setActive((current) => (current + 1) % count)
  const prev = () => setActive((current) => (current - 1 + count) % count)

  return (
    <section id="home" className="relative h-[750px] overflow-hidden" aria-label="Featured stories">
      {/* Full-bleed photo + dark overlay (matches the original slider-item overlay) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        role="img"
        aria-label={`Travel photo for ${slide.headline}`}
      />
      <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true" />

      {/* Text column over the photo */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-16 lg:px-24">
          <div className="author mb-8 flex items-center">
            <img
              src={author.avatar}
              alt={`Photo of ${author.name}`}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <span className="text-sm text-white/70">Written by</span>
              <h3 className="text-base font-semibold text-white">
                {author.name}, <span className="font-normal text-white/70">{author.date}</span>
              </h3>
            </div>
          </div>

          <div className="relative max-w-2xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-6 font-display text-[100px] leading-none text-white/20 select-none"
            >
              {slide.watermark}
            </span>
            <h1 className="relative mb-4 text-4xl font-bold tracking-wide text-white lg:text-[40px]">
              {slide.headline}
            </h1>
            <p className="relative mb-8 text-lg font-light text-white/80">{slide.excerpt}</p>
            <a
              href="#blog"
              className="inline-block rounded-[30px] border border-coral bg-coral px-8 py-4 text-white transition-colors hover:bg-transparent hover:text-coral"
            >
              Continue Reading
            </a>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-coral hover:text-coral md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-coral hover:text-coral md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
