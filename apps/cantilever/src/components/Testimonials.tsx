import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Quote {
  text: string
  name: string
  role: string
}

const quotes: Quote[] = [
  {
    text: 'Cantilever turned a difficult hillside plot into the calmest house we have ever lived in. Every detail was thought through — nothing feels accidental.',
    name: 'Mark Alviro Wiens',
    role: 'Homeowner, Hillside Retreat',
  },
  {
    text: 'The concept phase alone was worth it: they showed us three directions with real massing models before a single line of construction drawing.',
    name: 'Mark Alviro Wiens',
    role: 'Director, Northline Group',
  },
  {
    text: 'Precise, patient, and genuinely creative. The team balanced our budget with materials that will look better in twenty years, not worse.',
    name: 'Mark Alviro Wiens',
    role: 'Client, Civic Library',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  function goTo(next: number) {
    setIndex((next + quotes.length) % quotes.length)
  }

  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl dark:text-white">
          What Customer Say About Us
        </h2>

        <div className="mt-10 rounded bg-white p-8 shadow-lg sm:p-12 dark:bg-gray-900">
          <div className="flex items-center justify-center gap-1" aria-label="5 star rating">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>

          <blockquote className="mt-6" data-testid="quote-text">
            <p className="text-base leading-relaxed text-ink dark:text-white">
              {quotes[index]!.text}
            </p>
            <cite className="mt-6 block not-italic">
              <span className="font-bold text-ink dark:text-white">{quotes[index]!.name}</span>
              {' — '}
              <span className="text-sm text-mist dark:text-white/60">{quotes[index]!.role}</span>
            </cite>
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {quotes.map((quote, i) => (
              <button
                key={quote.name + i}
                type="button"
                aria-label={`Go to quote ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-slate/30 hover:bg-slate/60',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next quote"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
