import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setIndex((i) => (i + 1) % heroSlides.length)

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={`${slide.photo}-${i}`}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-12">
              <h2 className="font-script text-4xl leading-tight text-white md:col-span-7 md:text-7xl">
                {slide.heading}
              </h2>
              <div className="hidden md:col-span-5 md:block">
                <img src={slide.photo} alt={slide.alt} className="w-full rounded object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 right-4 z-20 flex items-center gap-2 md:right-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        {heroSlides.map((slide, i) => (
          <button
            key={`dot-${slide.photo}-${i}`}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              'h-[2px] w-10 transition-opacity',
              i === index ? 'bg-white opacity-100' : 'bg-white opacity-30',
            )}
          />
        ))}
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-primary"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
