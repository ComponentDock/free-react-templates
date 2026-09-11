import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const slides = [
  {
    heading: "We Are Everyone's Coincast Agency",
    text: 'Start a buzz in the coin market with our cryptocurrency agency services. We deliver cutting-edge solutions for your digital currency needs.',
    align: 'left' as const,
    image: 'https://picsum.photos/seed/coincast-hero1/1920/800',
  },
  {
    heading: 'Your Trusted Crypto Partner',
    text: 'We provide comprehensive cryptocurrency consulting, trading strategies, and blockchain development services for businesses worldwide.',
    align: 'right' as const,
    image: 'https://picsum.photos/seed/coincast-hero2/1920/800',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[current]!

  return (
    <section id="home" className="relative h-[500px] w-full overflow-hidden md:h-[600px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === current ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
          style={{ backgroundImage: `url(${s.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className={cn('max-w-xl text-white', slide.align === 'right' && 'ml-auto text-right')}>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {slide.heading.split(' ').map((word, wi) => (
              <span key={wi}>
                {wi === 3 ? <span className="text-brand">{word} </span> : word + ' '}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-lg text-white/80">{slide.text}</p>
          <Button variant="primary" size="lg" className="mt-6">
            Read More
          </Button>
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
        onClick={next}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-brand' : 'bg-white/50',
            )}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
