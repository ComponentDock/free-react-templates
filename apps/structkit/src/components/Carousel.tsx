import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { KitLink } from './KitButton'

type Slide = { headline: string; image: string }

const SLIDES: Slide[] = [
  {
    headline: 'A carousel you can build on — explore the free UI kit.',
    image: 'https://picsum.photos/seed/structkit-slide-1/1920/900',
  },
  {
    headline: 'The Structkit Free UI Kit.',
    image: 'https://picsum.photos/seed/structkit-slide-2/1920/900',
  },
  {
    headline: 'Enjoy a free UI kit crafted with Structkit.',
    image: 'https://picsum.photos/seed/structkit-slide-3/1920/900',
  },
]

/** Full-width photographic slideshow with a white pill CTA on every slide. */
export function Carousel() {
  const [index, setIndex] = useState(0)
  const slideCount = SLIDES.length

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [slideCount])

  const go = (next: number) => {
    setIndex((next + slideCount) % slideCount)
  }

  const slide = SLIDES[index] as Slide

  return (
    <section id="carousel" className="relative w-full">
      <div
        className="relative flex h-[750px] items-center justify-center bg-cover bg-center px-4 text-center sm:px-6"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 bg-[linear-gradient(to_bottom,#f44336_0%,#f44336_44%,#1f0000_100%)]"
        />
        <div className="relative z-10 w-full max-w-3xl">
          <h2 className="mb-4 text-[30px] font-normal text-white">{slide.headline}</h2>
          <p>
            <KitLink
              href="#buttons"
              color="primary"
              variant="white"
              size="md"
              className="px-5 text-primary"
            >
              See all components
            </KitLink>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        {SLIDES.map((item, slideIndex) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            aria-current={slideIndex === index ? 'true' : undefined}
            onClick={() => go(slideIndex)}
            className={cn(
              'h-3 w-3 cursor-pointer rounded-full',
              slideIndex === index ? 'bg-white' : 'bg-white/50',
            )}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white"
      >
        <ChevronLeft className="h-8 w-8" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white"
      >
        <ChevronRight className="h-8 w-8" aria-hidden="true" />
      </button>
    </section>
  )
}
