import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const AUTOPLAY_MS = 6000

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  const goTo = (next: number) =>
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length)

  return (
    <section data-section="hero" className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            aria-hidden={slideIndex !== index ? 'true' : undefined}
            className="flex min-w-full items-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="h-[777px] w-full bg-gradient-to-b from-black/50 to-black/30">
              <div className="mx-auto flex h-full max-w-6xl items-center px-4">
                <div className="max-w-2xl">
                  <h2 className="flex flex-col gap-1 text-6xl font-light leading-none text-white md:text-[90px]">
                    {slide.headline.map((line) => (
                      <span
                        key={line}
                        data-headline-line
                        className="inline-block w-fit bg-primary-600 px-6 pb-4 pt-2 uppercase"
                      >
                        {line}
                      </span>
                    ))}
                  </h2>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink
                      href="#about"
                      className="min-w-[186px] rounded-none bg-white px-[47px] py-6 text-sm font-semibold uppercase tracking-wide text-navy-900 hover:bg-gray-100"
                    >
                      Read More
                    </ButtonLink>
                    <ButtonLink
                      href="#solutions"
                      className="min-w-[186px] rounded-none bg-navy-900 px-[47px] py-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy-800"
                    >
                      our Services
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white text-black shadow-md transition-colors hover:bg-primary-600 hover:text-white"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white text-black shadow-md transition-colors hover:bg-primary-600 hover:text-white"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-current={dotIndex === index ? 'true' : undefined}
            onClick={() => goTo(dotIndex)}
            className={cn(
              'h-2.5 rounded-full transition-all',
              dotIndex === index ? 'w-8 bg-primary-600' : 'w-2.5 bg-white/70 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
