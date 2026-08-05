import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'John Smith',
    quote:
      '“Chimper helped us launch a brand we are truly proud of. Every detail was considered and the process felt effortless from start to finish.”',
  },
  {
    name: 'Christine Aguilar',
    quote:
      '“Our new website doubled our inbound leads within the first month. The team understood exactly what our business needed.”',
  },
  {
    name: 'Robert Spears',
    quote:
      '“Working with the Chimper team was a joy. Clear communication, beautiful design, and a launch that went flawlessly.”',
  },
  {
    name: 'Bruce Rogers',
    quote:
      '“They turned a vague idea into a polished product. I would recommend this agency to anyone looking for quality work.”',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  return (
    <section id="testimonials" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="relative inline-block pb-5 text-4xl font-bold text-black after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[100px] after:-translate-x-1/2 after:bg-primary-600 dark:text-white">
          Testimonials
        </h2>

        <div className="mt-12 min-h-56">
          {testimonials.map((testimonial, i) =>
            i === index ? (
              <figure
                key={testimonial.name}
                aria-label={testimonial.name}
                className="mx-auto max-w-3xl"
              >
                <blockquote className="text-2xl italic leading-relaxed text-gray-700 dark:text-gray-300">
                  {testimonial.quote}
                </blockquote>
                <img
                  src={`https://picsum.photos/seed/chimper-avatar-${i + 1}/100/100`}
                  alt={testimonial.name}
                  className="mx-auto mt-8 h-24 w-24 rounded-full object-cover"
                />
                <figcaption className="mt-4 font-bold text-black dark:text-white">
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
