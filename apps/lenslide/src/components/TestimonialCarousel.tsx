import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface Testimonial {
  image: string
  quote: string
  author: string
}

const defaultTestimonials: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/lenslide-1/800/600',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, at! Atque totam obcaecati veniam eius vero, similique quibusdam! Sunt sequi, nemo. Quam consequuntur ipsum suscipit repellat molestiae laboriosam, incidunt!',
    author: 'Craig Stephen',
  },
  {
    image: 'https://picsum.photos/seed/lenslide-2/800/600',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, at! Atque totam obcaecati veniam eius vero, similique quibusdam! Sunt sequi, nemo. Quam consequuntur ipsum suscipit repellat molestiae laboriosam, incidunt!',
    author: 'Craig Stephen',
  },
]

export interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
}

export function TestimonialCarousel({
  testimonials: items = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? items.length - 1 : a - 1))
  const next = () => setActive((a) => (a === items.length - 1 ? 0 : a + 1))

  return (
    <section className="relative bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-lg font-medium text-ink dark:text-white">
          Testimonials
        </h2>

        <div className="relative overflow-hidden">
          {/* Testimonial slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="w-full shrink-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image — 40% */}
                  <div
                    className="h-64 w-full bg-cover bg-center md:h-[400px] md:w-[40%]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    role="img"
                    aria-label={`Photo of ${item.author}`}
                  />
                  {/* Text — 60% */}
                  <div className="flex w-full items-center bg-surface px-6 py-10 md:w-[60%] md:px-16">
                    <blockquote className="relative pb-10">
                      <p className="text-base font-light leading-relaxed text-muted">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <div className="absolute bottom-0 left-0 text-sm text-ink dark:text-white">
                        &mdash; {item.author}
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-ink/60 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-ink/60 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-0 z-10 flex w-full justify-center gap-1">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`inline-block h-[3px] transition-all duration-300 ${
                  i === active ? 'w-4 bg-brand' : 'w-4 bg-brand-light'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
