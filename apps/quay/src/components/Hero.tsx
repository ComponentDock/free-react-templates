import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_INTERVAL_MS = 5000

/* Full-viewport background slideshow (3 slides) with a centered white
   overlay card holding the headline, blurb, and primary CTA
   (reference: .ftco-cover-1 + .box-92819). Auto-rotates and offers
   accessible prev/next controls. */
export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [index])

  const step = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      aria-label="Featured interior design projects"
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.image}
          data-slide={slideIndex}
          aria-hidden={slideIndex !== index}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            slideIndex === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="w-full max-w-[500px] bg-white p-8 shadow-lg sm:p-16">
          <h1 className="mb-3 text-3xl font-semibold text-black sm:text-4xl">Interior Design</h1>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam, ratione
            earum.
          </p>
          <ButtonLink href="#contact">Get In Touch</ButtonLink>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => step(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => step(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
