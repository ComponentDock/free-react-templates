import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const quotes = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Jason McClean',
    role: 'Customer',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. The food was unforgettable.',
    author: 'Mark Stevenson',
    role: 'Customer',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. We will certainly be back.',
    author: 'Rose Henderson',
    role: 'Customer',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)

  const goTo = (index: number) => setActive(index)
  const prev = () => setActive((current) => (current - 1 + quotes.length) % quotes.length)
  const next = () => setActive((current) => (current + 1) % quotes.length)
  const quote = quotes[active]!

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/forno-17/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="font-script text-4xl text-primary-500">Testimony</span>
        <h2 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
          Happy Customer
        </h2>

        <div className="mt-12 min-h-56" aria-live="polite">
          <div className="flex justify-center gap-1 text-primary-500">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mx-auto mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-200">{quote.quote}</p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-white">{quote.author}</p>
              <p className="mt-1 text-sm text-primary-500">{quote.role}</p>
            </div>
          </blockquote>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-primary-500"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-3">
            {quotes.map((quote, index) => (
              <button
                key={quote.author}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  index === active ? 'bg-primary-500' : 'bg-white/40 hover:bg-white',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-primary-500"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
