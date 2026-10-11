import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const SLIDES = [
  { id: 'slide-1', seed: 'buildkit-slide-1', title: 'This is a carousel — enjoy the free UI kit.' },
  { id: 'slide-2', seed: 'buildkit-slide-2', title: 'A free UI kit, ready to ship.' },
  { id: 'slide-3', seed: 'buildkit-slide-3', title: 'Enjoy a free UI kit built for builders.' },
]

const AUTOPLAY_MS = 5000

export function CarouselBand() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section id="carousel" className="bg-primary-600 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl text-white md:text-4xl">Bootstrap Carousel</h2>
        <div className="relative mt-10">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              data-slide={index}
              aria-hidden={active === index ? undefined : true}
              className={cn(
                'flex min-h-[320px] items-center justify-center bg-cover bg-center px-4 text-center transition-opacity duration-700',
                active === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
              )}
              style={{ backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/1600/700)` }}
            >
              <div>
                <h3 className="text-2xl text-white md:text-4xl">{slide.title}</h3>
                <p className="mt-6">
                  <ButtonLink
                    href="#buttons"
                    className="h-auto rounded-full bg-white px-[18px] py-3 text-black hover:bg-white/90"
                  >
                    See all components
                  </ButtonLink>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setActive((active + SLIDES.length - 1) % SLIDES.length)}
            className="cursor-pointer text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={cn(
                'h-3 w-3 cursor-pointer rounded-full',
                active === index ? 'bg-white' : 'bg-white/40',
              )}
            />
          ))}
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setActive((active + 1) % SLIDES.length)}
            className="cursor-pointer text-white/80 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
