import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { KitLink } from './KitButton'

const SLIDES = [
  { id: 'slide-1', seed: 'sorbet-slide-1', title: 'This is Carousel Bootstrap Enjoy Free UI Kit.' },
  { id: 'slide-2', seed: 'sorbet-slide-2', title: 'We are Sorbet Free UI Kit.' },
  { id: 'slide-3', seed: 'sorbet-slide-3', title: 'Get Sorbet Free UI Kit' },
]

/** Full-bleed photo slides with white headlines and outline-white pill CTAs. */
export function Carousel() {
  const [active, setActive] = useState(0)

  return (
    <section id="carousel" className="relative">
      <div className="relative min-h-[600px]">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={active === index ? undefined : true}
            className={cn(
              'flex min-h-[600px] items-center justify-center bg-cover bg-center px-4 text-center transition-opacity duration-700 sm:px-6',
              active === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
            )}
            style={{ backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/1920/900)` }}
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal text-white md:text-[50px] md:leading-tight">
                {slide.title}
              </h2>
              <p className="mt-8">
                <KitLink
                  href="#buttons"
                  color="primary"
                  variant="outline"
                  size="lg"
                  className="rounded-[40px] border-white text-white hover:bg-white hover:text-heading"
                >
                  See all components
                </KitLink>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setActive((active + SLIDES.length - 1) % SLIDES.length)}
          className="cursor-pointer text-white/80 hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
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
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
