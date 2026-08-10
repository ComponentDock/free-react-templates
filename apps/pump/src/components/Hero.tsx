import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    title: 'Fuel Your Body Fitness',
    sub: 'Challenge Yourself',
    image: 'https://picsum.photos/seed/pump-hero-1/1600/900',
  },
  {
    title: 'Be One Of Us',
    sub: 'Join The Community',
    image: 'https://picsum.photos/seed/pump-hero-2/1600/900',
  },
  {
    title: 'Challenge Yourself',
    sub: 'Get Your Body Fit',
    image: 'https://picsum.photos/seed/pump-hero-3/1600/900',
  },
  {
    title: 'Get Your Body Fit',
    sub: 'Train With The Best',
    image: 'https://picsum.photos/seed/pump-hero-4/1600/900',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length)

  return (
    <section id="home" className="relative flex min-h-[560px] items-center overflow-hidden bg-ink">
      {slides.map((item, i) => (
        <div
          key={item.title}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-brand">{slide.sub}</p>
        <h1 className="max-w-3xl font-display text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
          {slide.title}
        </h1>
        <a
          href="#program"
          className="mt-8 inline-flex items-center justify-center rounded bg-gradient-to-br from-brand to-brand-orange px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand sm:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand sm:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
