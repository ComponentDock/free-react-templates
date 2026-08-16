import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-[600px] overflow-hidden md:min-h-[800px]"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          data-slide={i}
          role="group"
          aria-hidden={i !== index ? 'true' : 'false'}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
          <div
            className={cn(
              'absolute inset-0',
              slide.overlay === 'left'
                ? 'bg-gradient-to-r from-plum/95 via-plum/60 to-transparent'
                : 'bg-gradient-to-l from-plum/95 via-plum/60 to-transparent',
            )}
          />
          <div
            className={cn(
              'absolute inset-0 flex items-center',
              slide.overlay === 'left' ? 'justify-start' : 'justify-end',
            )}
          >
            <div
              className={cn(
                'max-w-2xl px-6 sm:px-12',
                slide.overlay === 'left' ? 'text-left' : 'text-right',
              )}
            >
              <span className="inline-block text-sm font-light uppercase tracking-[0.3em] text-white/90">
                {slide.kicker}
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[70px]">
                {slide.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90">
                {slide.copy}
              </p>
              <a
                href="#causes"
                className="mt-10 inline-block rounded-none bg-hero px-10 py-4 text-base font-medium text-white transition-colors hover:bg-sweep"
              >
                Active Causes
              </a>
            </div>
          </div>
        </div>
      ))}
      <div
        aria-label="Slide controls"
        className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3"
      >
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === index ? 'w-6 bg-white ring-2 ring-white/60' : 'w-2 bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
