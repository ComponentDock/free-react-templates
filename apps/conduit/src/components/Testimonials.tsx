import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../content'
import { useCarousel } from '../lib/carousel'
import { Badge, Stars, sectionClass, containerClass } from './ui'

/**
 * Three cards at `lg`, two at `md`, one below `sm`. The dots and arrows only exist
 * when there is somewhere to move to, so the wide layout is a static grid.
 */
export function Testimonials() {
  const carousel = useCarousel(testimonials.items.length)

  return (
    <section id="testimonials" className={`bg-gray-50 ${sectionClass} dark:bg-gray-900`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{testimonials.badge}</Badge>
          <h2 className="mt-4 text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
            {testimonials.lead}
          </p>
        </div>

        <div
          data-testid="carousel"
          className="relative mt-16"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <div className="overflow-hidden">
            <div
              data-testid="carousel-track"
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
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
                  <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-950">
                    <Stars tone="primary" />
                    <blockquote className="mt-5 flex-1 text-lg leading-7 font-medium text-gray-900 dark:text-gray-100">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 text-base font-bold text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                        {item.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                        <span className="block text-sm leading-5 text-gray-600 dark:text-gray-400">
                          {item.location}
                        </span>
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
                className="absolute top-1/2 -left-4 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-700 shadow-lg lg:flex dark:bg-gray-800 dark:text-gray-100"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={carousel.next}
                className="absolute top-1/2 -right-4 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-700 shadow-lg lg:flex dark:bg-gray-800 dark:text-gray-100"
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
                    index === carousel.index
                      ? 'w-8 bg-primary-600'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-700',
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
