import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  seed: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Success Agency is, hands down, one of the best companies that we have worked with! The company has either met or exceeded all of the goals that we initially set.',
    name: 'Rodney Williams',
    role: 'Producer',
    seed: 'client-1',
  },
  {
    quote:
      'Success Agency is, hands down, one of the best companies that we have worked with! The company has either met or exceeded all of the goals that we initially set.',
    name: 'Nazrul Islam',
    role: 'Producer',
    seed: 'client-2',
  },
  {
    quote:
      'Success Agency is, hands down, one of the best companies that we have worked with! The company has either met or exceeded all of the goals that we initially set.',
    name: 'Williams Rodney',
    role: 'Producer',
    seed: 'client-3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Quote icon */}
        <div className="mb-6 text-5xl text-brand">&ldquo;</div>

        {/* Quote text */}
        <blockquote className="mb-6 text-lg leading-relaxed text-text-dark">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Stars */}
        <div className="mb-4 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-brand text-brand" aria-label="Star" />
          ))}
        </div>

        {/* Client info */}
        <h5 className="text-base font-semibold text-text-dark">{t.name}</h5>
        <span className="text-sm text-text-muted">{t.role}</span>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-dark transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-dark transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Client thumbnails */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.seed}
              type="button"
              aria-label={`View ${item.name}'s testimonial`}
              onClick={() => setCurrent(i)}
              className={`h-14 w-14 overflow-hidden rounded-full border-2 transition-colors ${
                i === current ? 'border-brand' : 'border-transparent'
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/100/100`}
                alt={item.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
