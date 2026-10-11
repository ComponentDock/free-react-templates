import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { HERO_SLIDES } from '../data/content'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const go = (delta: number) =>
    setIndex((current) => (current + delta + HERO_SLIDES.length) % HERO_SLIDES.length)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="text-[2rem] font-black uppercase leading-tight md:text-[4rem]">
          We Make Shipping
        </h1>
        <p className="mt-4 text-lg font-light md:text-2xl">A Logistics Company</p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-none border-2 border-transparent bg-primary px-10 py-4 text-sm uppercase tracking-[0.2em] text-white hover:border-white hover:bg-transparent"
        >
          Get Started!
        </ButtonLink>
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronLeft aria-hidden="true" className="h-10 w-10" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronRight aria-hidden="true" className="h-10 w-10" />
      </button>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'h-3 w-3 rounded-full border border-white',
              i === index ? 'bg-white' : 'bg-transparent',
            )}
          />
        ))}
      </div>
    </section>
  )
}
