import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    text: 'Absolutely incredible work! The attention to detail and creative vision exceeded all our expectations. Highly recommended for any design project.',
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    seed: 'review-1',
  },
  {
    text: 'Working with this designer was a game-changer for our brand. The designs were fresh, modern, and perfectly aligned with our vision.',
    name: 'James Porter',
    role: 'Marketing Lead',
    seed: 'review-2',
  },
  {
    text: 'Exceptional talent and professionalism. Delivered stunning visuals that truly captured the essence of our project ahead of schedule.',
    name: 'Emma Chen',
    role: 'Product Manager',
    seed: 'review-3',
  },
  {
    text: 'The creative direction and execution were flawless. Our conversion rates improved significantly after the redesign.',
    name: 'Michael Torres',
    role: 'Startup Founder',
    seed: 'review-4',
  },
  {
    text: 'A rare combination of technical skill and artistic vision. The final product was better than anything we could have imagined.',
    name: 'Lisa Park',
    role: 'Brand Strategist',
    seed: 'review-5',
  },
  {
    text: 'Incredible eye for design and a deep understanding of user experience. The project was delivered on time and beyond expectations.',
    name: 'David Kim',
    role: 'CEO, TechFlow',
    seed: 'review-6',
  },
]

export function getPrevIndex(current: number, total: number, visible: number): number {
  if (current === 0) return total - visible
  return current - 1
}

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const visibleCount = 3

  const prev = () => setCurrent((c) => getPrevIndex(c, reviews.length, visibleCount))
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  const visible = Array.from(
    { length: visibleCount },
    (_, i) => reviews[(current + i) % reviews.length]!,
  )

  return (
    <section className="bg-navy py-24 md:py-32" id="reviews">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-coral">
              Testimonials
            </p>
            <h2 className="text-2xl font-normal text-white md:text-3xl">Word from my clients</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-coral hover:text-coral"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-coral hover:text-coral"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="rounded-lg border border-card-border bg-cream p-8"
            >
              <p className="mb-6 text-sm leading-relaxed text-body">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${review.seed}/64/64`}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-semibold text-heading">{review.name}</h4>
                  <p className="text-xs text-muted">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
