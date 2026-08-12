import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const slides: ReadonlyArray<{
  image: string
  alt: string
  lineOne: string
  lineTwo: string
  subheading: string
}> = [
  {
    image: 'https://picsum.photos/id/1081/1600/900',
    alt: 'Modern white medical building facade',
    lineOne: 'Helping Your',
    lineTwo: 'Stay Happy One',
    subheading: 'Everyday We Bring Hope and Smile to the Patient We Serve',
  },
  {
    image: 'https://picsum.photos/id/1015/1600/900',
    alt: 'Bright blue landscape under a clear sky',
    lineOne: 'Smile Makes',
    lineTwo: 'A Lasting Impression',
    subheading: 'Your Health is Our Top Priority with Comprehensive, Affordable medical.',
  },
]

/** 600px photo slider with two bright slides, black headlines and a lime
    CTA, plus prev/next arrows and dot controls (the source .home-slider). */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const previous = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)

  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-white">
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.image}
          aria-hidden={slideIndex !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            slideIndex === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl lg:ml-auto lg:mr-[6%] lg:text-right">
                <p className="text-lg font-normal text-black/80">{slide.subheading}</p>
                <h1 className="mt-3 text-3xl font-light leading-tight text-ink md:text-5xl">
                  {slide.lineOne} <span className="block">{slide.lineTwo}</span>
                </h1>
                <ButtonLink
                  href="#services"
                  className="mt-6 h-auto rounded bg-lime px-8 py-3 text-base text-white hover:bg-lime-hover"
                >
                  View our works
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={previous}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink transition-colors hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink transition-colors hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-current={dotIndex === index ? 'true' : undefined}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              dotIndex === index ? 'bg-primary' : 'bg-black/30 hover:bg-black/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
