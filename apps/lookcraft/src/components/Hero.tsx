import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/lookcraft-hero1/1920/1080',
    heading: 'The Look',
    subtitle: 'Summer Exhibition 2024',
    artist: 'Featured Artist: Elena Voss',
  },
  {
    image: 'https://picsum.photos/seed/lookcraft-hero2/1920/1080',
    heading: 'The Look',
    subtitle: 'Winter Collection',
    artist: 'Featured Artist: Marco Lin',
  },
  {
    image: 'https://picsum.photos/seed/lookcraft-hero3/1920/1080',
    heading: 'The Look',
    subtitle: 'Spring Showcase',
    artist: 'Featured Artist: Yuki Tanaka',
  },
]

const TOTAL = SLIDES.length

function nextIndex(c: number): number {
  if (c === TOTAL - 1) return 0
  return c + 1
}

function prevIndex(c: number): number {
  if (c === 0) return TOTAL - 1
  return c - 1
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const indexRef = useRef(0)

  const goTo = useCallback((index: number) => {
    indexRef.current = index
    setCurrent(index)
  }, [])

  const prev = useCallback(() => {
    const next = prevIndex(indexRef.current)
    indexRef.current = next
    setCurrent(next)
  }, [])

  const next = useCallback(() => {
    const n = nextIndex(indexRef.current)
    indexRef.current = n
    setCurrent(n)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const n = nextIndex(indexRef.current)
      indexRef.current = n
      setCurrent(n)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* White semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-navy">
            <h1
              className="font-black uppercase leading-[0.9] tracking-tight text-navy"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
            >
              {slide.heading}
            </h1>
            <p className="mt-4 text-lg font-light uppercase tracking-widest text-navy/70">
              {slide.subtitle}
            </p>
            <p className="mt-2 text-sm font-light text-navy/50">{slide.artist}</p>
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-full border-navy bg-transparent px-10 py-3 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Read More
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-navy transition-colors hover:bg-white/60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-navy transition-colors hover:bg-white/60"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-navy' : 'bg-navy/30',
            )}
          />
        ))}
      </div>
    </section>
  )
}
