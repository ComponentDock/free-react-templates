import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../content'
import { useCarousel } from '../lib/carousel'
import { Stars, containerClass, sectionClass } from './ui'

/**
 * The only cool band on the page, and the only carousel. Two slides, so the
 * arrows and dots exist on a phone and nowhere else — at two columns and above
 * there is nowhere to move, and the pair fills the track instead of leaving an
 * empty third column beside it.
 */
export function Testimonials() {
  const carousel = useCarousel(testimonials.items.length)

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className={`bg-gray-900 ${sectionClass}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-900/50 px-3 py-1 text-sm leading-5 font-medium text-primary-300">
            {testimonials.pill}
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl leading-10 font-bold tracking-[-0.9px] text-white sm:text-4xl"
          >
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-ink-200">{testimonials.lead}</p>
        </div>

        <div
          data-testid="carousel"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          className="relative mt-16"
        >
          <div className="overflow-hidden">
            <div
              data-testid="carousel-track"
              className={cn(
                'flex transition-transform duration-500 ease-out motion-reduce:transition-none',
                // Centring is only correct while the slides fit; once the track
                // overflows, `justify-center` splits the overflow across both
                // edges and clips the first card in half.
                carousel.maxIndex === 0 ? 'justify-center' : 'justify-start',
              )}
              style={{ transform: `translateX(-${carousel.offset}%)` }}
            >
              {testimonials.items.map((item, index) => (
                <div
                  key={item.name}
                  data-testid="carousel-slide"
                  aria-hidden={index < carousel.index || index >= carousel.index + carousel.perView}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / carousel.perView}%` }}
                >
                  <figure className="flex h-full flex-col rounded-2xl bg-gray-800 p-8 shadow-soft">
                    <Stars />
                    <blockquote className="mt-5 flex-1 text-lg leading-7 font-medium text-white">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-900 text-lg font-semibold text-primary-400">
                        {item.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-base leading-6 font-semibold text-white">
                          {item.name}
                        </span>
                        <span className="block text-sm leading-5 text-ink-200">{item.city}</span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {carousel.maxIndex > 0 ? (
            <>
              <button
                type="button"
                aria-label="Previous review"
                onClick={carousel.previous}
                className="absolute top-1/2 -left-4 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:text-primary-400"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={carousel.next}
                className="absolute top-1/2 -right-4 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink-800 text-ink-100 transition-colors hover:text-primary-400"
              >
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </>
          ) : null}

          {carousel.dots > 0 ? (
            <div data-testid="carousel-dots" className="mt-8 flex justify-center gap-2">
              {Array.from({ length: carousel.dots }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={index === carousel.index}
                  onClick={() => carousel.goTo(index)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    index === carousel.index ? 'w-8 bg-primary-400' : 'w-2.5 bg-gray-300',
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
