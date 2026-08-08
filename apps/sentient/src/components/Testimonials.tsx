import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'Sentient transformed our clinical documentation workflows — clinicians save hours every single shift.',
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer, MedCore',
  },
  {
    quote: "We cut our fraud detection time from days to minutes with Sentient's custom models.",
    name: 'James Rodriguez',
    role: 'Head of Data, Finly',
  },
  {
    quote:
      "Sentient's recommendation engine lifted our conversion rate by 23% in the first quarter.",
    name: 'Priya Patel',
    role: 'VP Product, Shopwave',
  },
  {
    quote:
      'The API is a joy to work with. Our team shipped our first production model in a single sprint.',
    name: 'Daniel Kim',
    role: 'Staff Engineer, Cloudnine',
  },
  {
    quote: 'Deploying NLP pipelines used to take weeks. With Sentient it takes an afternoon.',
    name: 'Elena Vasquez',
    role: 'ML Lead, Linguistix',
  },
  {
    quote: "Sentient's manufacturing yield analytics paid for itself within two months.",
    name: "James O'Brien",
    role: 'Operations Director, Steelforge',
  },
] as const

type Testimonial = (typeof testimonials)[number]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length
  const current = testimonials[index] as Testimonial
  const prev = () => setIndex((currentIndex) => (currentIndex - 1 + count) % count)
  const next = () => setIndex((currentIndex) => (currentIndex + 1) % count)

  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Trusted by AI-first teams
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div aria-live="polite">
            <figure className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
              <Quote className="mx-auto h-8 w-8 text-primary-400" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <img
                  src={`https://picsum.photos/seed/sentient-t${index + 1}/96/96`}
                  alt={current.name}
                  loading="lazy"
                  className="mx-auto h-12 w-12 rounded-full object-cover"
                />
                <div className="mt-3 font-semibold text-gray-900 dark:text-white">
                  {current.name}
                </div>
                <div className="text-sm text-gray-500">{current.role}</div>
              </figcaption>
            </figure>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index ? 'w-6 bg-primary-600' : 'w-2.5 bg-gray-300 dark:bg-gray-700',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
