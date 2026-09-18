import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Michael Chen',
    location: 'Los Angeles',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Emma Williams',
    location: 'Chicago',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'David Brown',
    location: 'Houston',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Lisa Garcia',
    location: 'Miami',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section aria-label="Testimonials" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-400">
          Testimonial
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink">What Our Clients Say</h2>

        <div className="relative mt-10 mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <img
                src={`https://picsum.photos/seed/testimonial-${current}/100/100`}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent-400 text-accent-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-smoke italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-4 font-bold text-ink">{t.name}</p>
            <p className="text-xs text-smoke">{t.location}</p>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-colors hover:bg-gray-50"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-colors hover:bg-gray-50"
          >
            &rsaquo;
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === current ? 'bg-primary-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
