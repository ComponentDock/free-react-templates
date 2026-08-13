import { useState } from 'react'
import { heroSlides, modelStats } from '../data'
import { cn } from '@free-react-templates/ui'

/**
 * Full-viewport hero slider: four model slides, each with a cover photo,
 * a pink position label, a huge uppercase model name, a seven-cell stats
 * row (Height/Bust/Waist/Hips/Shoe/Eyes/Hair), a solid pink "Read more"
 * button and a pink-outline "View Gallery" button, plus pink slider dots.
 */
export function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {heroSlides.map((item, index) => (
        <div
          key={item.name}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="text-xl font-light tracking-wide text-brand uppercase">{slide.position}</p>
          <h1 className="mt-3 font-heading text-5xl font-bold tracking-wide text-white uppercase lg:text-6xl">
            {slide.name}
          </h1>
          <dl className="mt-8 mb-8 flex flex-wrap gap-y-4">
            {modelStats.map((stat) => (
              <div
                key={stat.label}
                className="w-1/4 border-l border-white/20 pr-4 pl-3 sm:w-auto sm:flex-none sm:pr-6"
              >
                <dt className="text-[11px] tracking-wider text-white/70 uppercase">{stat.label}</dt>
                <dd className="mt-1 font-heading text-xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-brand px-4 py-3 font-heading text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-brand"
            >
              Read more
            </a>
            <a
              href="#models"
              className="border border-brand px-4 py-3 font-heading text-sm font-bold tracking-wider text-brand uppercase transition-colors hover:bg-brand hover:text-white"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
