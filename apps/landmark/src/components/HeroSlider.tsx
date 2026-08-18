import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const last = HERO_SLIDES.length - 1

  return (
    <section
      id="home"
      aria-label="Featured listing"
      className="relative isolate min-h-[640px] overflow-hidden bg-ink"
    >
      {HERO_SLIDES.map((slide, i) => {
        const active = i === index
        return (
          <figure
            key={slide.title}
            data-slide={i}
            aria-hidden={active ? undefined : 'true'}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              active ? 'opacity-100' : 'opacity-0',
            )}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[rgba(25,40,57,0.6)] via-[rgba(26,41,58,0.4)] to-[rgba(29,39,59,0.1)]"
            />
            <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-center px-4 py-28 text-white">
              <span className="text-lg">{slide.eyebrow}</span>
              <h1 className="mt-2 text-6xl font-medium leading-tight">{slide.title}</h1>
              <p className="mt-4 max-w-xl text-lg font-light text-white/85">{slide.blurb}</p>
              <span className="mt-4 text-4xl font-medium">{slide.price}</span>
              <a
                href="#properties"
                className="mt-8 rounded bg-brand px-[30px] py-[25px] text-lg transition-colors hover:bg-navy"
              >
                View Property
              </a>
            </div>
          </figure>
        )
      })}

      <button
        type="button"
        aria-label="Previous slide"
        disabled={index === 0}
        onClick={() => setIndex((current) => Math.max(0, current - 1))}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        disabled={index === last}
        onClick={() => setIndex((current) => Math.min(last, current + 1))}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/50 hover:bg-white/80',
            )}
          />
        ))}
      </div>
    </section>
  )
}
