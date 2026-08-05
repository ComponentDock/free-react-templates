import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'AR Rahman',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dolore officiis, velit id libero illum harum hic magni, quae repellendus voluptatibus.',
  },
  {
    name: 'AR Rahman',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus adipisci possimus saepe nostrum doloribus repudiandae asperiores tempore.',
  },
  {
    name: 'AR Rahman',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi voluptate, dignissimos atque fuga explicabo unde iusto.',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  return (
    <section id="testimonials" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-4xl">
          Client Says
        </h2>

        <div className="mt-12 min-h-44">
          {testimonials.map((testimonial, i) =>
            i === index ? (
              <figure
                key={`${testimonial.name}-${i}`}
                aria-label={testimonial.name}
                className="mx-auto max-w-3xl"
              >
                <blockquote className="text-2xl italic leading-relaxed text-gray-700 dark:text-gray-300">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 font-bold text-primary-600 dark:text-primary-400">
                  {testimonial.name}
                </figcaption>
              </figure>
            ) : null,
          )}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={`${testimonial.name}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-primary-500' : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
