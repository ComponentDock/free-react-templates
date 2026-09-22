import { cn } from '@free-react-templates/ui'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Gerald Hodson',
    role: 'Businessman',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    name: 'Karen Spencer',
    role: 'Entrepreneur',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided.',
    name: 'Michael Torres',
    role: 'Travel Writer',
  },
] as const

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]!

  return (
    <section className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-ink">Happy Customer</h2>
        <div className="relative">
          <Quote className="mx-auto mb-6 h-10 w-10 text-brand/30" />
          <p className="mb-8 text-lg leading-relaxed text-mist italic">&ldquo;{t.quote}&rdquo;</p>
          <p className="text-sm font-semibold text-ink">{t.name}</p>
          <p className="text-xs text-mist">{t.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
