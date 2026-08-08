import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const quotes = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?',
    name: 'Mike Dorney',
    role: 'CEO and Co-Founder',
  },
  {
    text: 'Eligendi earum ad perferendis dolores, dolor quas. Ullam in, eaque mollitia suscipit id aspernatur rerum!',
    name: 'James Smith',
    role: 'CEO and Co-Founder',
  },
  {
    text: 'Officia, eius omnis rem non quis eos excepturi cumque sequi pariatur eaque quasi nihil dicta tempore voluptate culpa.',
    name: 'Mike Dorney',
    role: 'CEO and Co-Founder',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)

  function goTo(next: number) {
    setIndex((next + quotes.length) % quotes.length)
  }

  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <Quote className="h-7 w-7" aria-hidden="true" />
        </div>

        <blockquote className="mt-8">
          <p className="text-lg leading-relaxed text-ink dark:text-white">{quotes[index]!.text}</p>
          <cite className="mt-6 block not-italic">
            <span className="font-bold text-ink dark:text-white">{quotes[index]!.name}</span>
            {' — '}
            <span className="text-sm text-mist dark:text-white/60">{quotes[index]!.role}</span>
          </cite>
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-none border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
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
            className="flex h-10 w-10 items-center justify-center rounded-none border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
