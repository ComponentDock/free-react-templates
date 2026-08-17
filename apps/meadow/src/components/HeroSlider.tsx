import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroCta, heroCtaHref, heroSlides } from '../data'

const AUTOPLAY_MS = 6000

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" aria-label="Hero slider" className="relative h-[650px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          data-slide={i}
          aria-hidden={i === index ? undefined : 'true'}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6">
            <div className="max-w-xl text-center text-white">
              <span className="block text-sm font-bold uppercase tracking-[2px] text-white/70">
                {slide.eyebrow}
              </span>
              <h1 className="mt-4 text-4xl font-normal leading-tight">{slide.title}</h1>
              <p className="mt-4 text-white/70">{slide.text}</p>
              <a
                href={heroCtaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-10 py-4 font-medium text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                {heroCta}
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
