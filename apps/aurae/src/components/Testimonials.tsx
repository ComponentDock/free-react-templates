import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    name: 'Denise Thomas',
    role: 'Designer',
    rating: 5,
  },
  {
    quote:
      'At Aurae, I found the perfect balance between challenge and tranquility. The trainers are exceptional and the community is welcoming.',
    name: 'Maria Santos',
    role: 'Marketing Director',
    rating: 5,
  },
  {
    quote:
      'The yoga therapy sessions transformed my approach to wellness. I feel more flexible, stronger, and mentally refreshed than ever before.',
    name: 'Sarah Chen',
    role: 'Software Engineer',
    rating: 4,
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/aurae-review-bg/1600/900"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-6 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < t.rating ? 'fill-brand text-brand' : 'text-white/30'}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <blockquote className="font-display text-xl leading-relaxed text-white sm:text-2xl">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="mt-8">
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-sm text-white/60">{t.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
