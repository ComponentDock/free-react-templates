import { useState } from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    name: 'John Doe',
    role: 'CEO, TechCorp',
    avatar: 'https://picsum.photos/seed/finpilot-author1/80/80',
  },
  {
    quote:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    name: 'Jane Smith',
    role: 'Director, GrowthHub',
    avatar: 'https://picsum.photos/seed/finpilot-author2/80/80',
  },
  {
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    name: 'Robert Johnson',
    role: 'Manager, FinGroup',
    avatar: 'https://picsum.photos/seed/finpilot-author3/80/80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="py-20 bg-paper">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-ink">What Our Clients Say</h2>
        <div className="rounded-xl bg-white p-8 shadow-sm">
          {/* Quote mark */}
          <svg
            className="mx-auto mb-4 h-8 w-8 text-brand/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
          </svg>
          <p className="mb-6 text-lg text-mist leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-mist">{t.role}</p>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white hover:border-brand"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white hover:border-brand"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
