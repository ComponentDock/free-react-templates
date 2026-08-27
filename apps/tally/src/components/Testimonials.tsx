import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'John Doe',
    position: 'CEO',
    avatar: 'https://picsum.photos/seed/tally-avatar1/100/100',
  },
  {
    quote:
      'Second testimonial. She was a second testimonial. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large second testimonial.',
    name: 'Jane Smith',
    position: 'CFO',
    avatar: 'https://picsum.photos/seed/tally-avatar2/100/100',
  },
  {
    quote:
      'Third testimonial. A wonderful third testimonial. Behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.',
    name: 'Bob Wilson',
    position: 'Director',
    avatar: 'https://picsum.photos/seed/tally-avatar3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  function next() {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  function goPrev() {
    setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[current]!

  return (
    <section id="testimonials" className="bg-light py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-8 shadow-md text-center">
            <Quote size={40} className="mx-auto mb-4 text-brand/30" />
            <p className="mb-6 text-gray-600 italic leading-relaxed">{t.quote}</p>
            <img
              src={t.avatar}
              alt="Avatar"
              className="mx-auto mb-3 h-14 w-14 rounded-full object-cover"
            />
            <p className="font-bold text-dark">{t.name}</p>
            <p className="text-sm text-gray-500">{t.position}</p>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full bg-white p-2 shadow-md text-gray-600 hover:text-brand transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-md text-gray-600 hover:text-brand transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
