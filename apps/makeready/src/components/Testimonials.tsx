import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../content'
import { Pill, Stars, containerClass } from './ui'

/**
 * Three quotes about handover rather than beauty. At `lg` the three slides
 * exactly fill the track, so the kit renders no dots and no arrows; below it
 * the band becomes a real carousel and both controls appear.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const cards = testimonials.items

  const go = (delta: number) => {
    setIndex((current) => (current + delta + cards.length) % cards.length)
  }

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <Pill>{testimonials.eyebrow}</Pill>
          <h2 className="mt-4 text-3xl leading-9 font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {testimonials.title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600 dark:text-gray-300">
            {testimonials.lead}
          </p>
        </div>

        <div className="mt-12 overflow-hidden lg:overflow-visible">
          <div
            data-testid="testimonial-track"
            className="flex items-start transition-transform duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-3 lg:gap-6 lg:transform-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards.map((card) => (
              <figure
                key={card.name}
                className="m-0 w-full shrink-0 rounded-2xl bg-white p-8 shadow-soft lg:w-auto dark:bg-gray-950"
              >
                <Stars />
                <blockquote className="mt-4 text-lg leading-7 font-medium text-gray-800 dark:text-gray-100">
                  “{card.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 font-semibold text-primary-700 dark:bg-primary-800 dark:text-primary-100">
                    {card.initial}
                  </span>
                  <span>
                    <span className="block text-sm leading-5 font-semibold text-gray-900 dark:text-white">
                      {card.name}
                    </span>
                    <span className="block text-sm leading-5 text-gray-600 dark:text-gray-400">
                      {card.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between lg:hidden">
          <button
            type="button"
            aria-label={testimonials.previous}
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {cards.map((card, dot) => (
              <button
                key={card.name}
                type="button"
                aria-label={`Show testimonial ${dot + 1}`}
                aria-current={dot === index ? 'true' : undefined}
                onClick={() => setIndex(dot)}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors',
                  dot === index ? 'bg-primary-600' : 'bg-primary-300',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={testimonials.next}
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
