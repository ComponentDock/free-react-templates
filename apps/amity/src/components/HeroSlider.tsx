import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const slideCount = heroSlides.length
const AUTOPLAY_MS = 5000

const pillLink =
  'inline-flex items-center justify-center rounded-full border-2 px-10 py-[18px] text-[14px] font-semibold leading-none transition-colors'

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((i) => (i + 1) % slideCount)
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount)

  return (
    <section id="home" aria-label="Hero slides" className="relative max-h-[820px] overflow-hidden">
      <div
        data-track
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            data-slide
            aria-hidden={i !== index}
            className="relative w-full shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-[560px] w-full object-cover lg:h-[820px]"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-5xl px-4 text-white lg:px-8">
                <h1 className="text-[48px] leading-none font-semibold lg:text-[102px]">Donate</h1>
                <h4 className="mt-2 text-[32px] font-semibold lg:text-[46px]">4 a better world</h4>
                <p className="mt-6 max-w-xl text-[16px] font-medium leading-[1.8]">
                  Every child deserves a chance to learn, grow, and dream. Join us in bringing clean
                  water, education, and hope to the communities that need it most.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#donate"
                    className={cn(
                      pillLink,
                      'border-transparent bg-gradient-to-r from-brand to-brand-dark text-white hover:brightness-110',
                    )}
                  >
                    Donate Now
                  </a>
                  <a
                    href="#about"
                    className={cn(
                      pillLink,
                      'border-brand text-brand hover:from-brand hover:to-brand-dark hover:text-white hover:bg-gradient-to-r',
                    )}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-5 bottom-24 left-5 flex items-center justify-between lg:right-20 lg:left-20 lg:bottom-[60px]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white transition-transform hover:scale-105"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-3 w-3 rounded-full bg-white/50 transition-colors hover:bg-white',
                i === index && 'bg-white',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white transition-transform hover:scale-105"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
