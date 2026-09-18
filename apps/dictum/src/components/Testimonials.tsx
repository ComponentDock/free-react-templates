import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Clarence Bell',
    role: 'CEO, XYZ Corp',
    image: 'https://picsum.photos/seed/dictum-test1/80/80',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Roger Scott',
    role: 'Marketing, ABC Inc',
    image: 'https://picsum.photos/seed/dictum-test2/80/80',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Jane Cooper',
    role: 'Director, DEF Ltd',
    image: 'https://picsum.photos/seed/dictum-test3/80/80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section id="testimonials-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            People Says
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">Testimonials</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <img
            src={t.image}
            alt={t.author}
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
          />
          <blockquote className="text-lg text-smoke italic leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <cite className="not-italic">
            <span className="block text-ink font-semibold">{t.author}</span>
            <span className="text-sm text-muted">{t.role}</span>
          </cite>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-mist hover:bg-primary-300 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-mist hover:bg-primary-300 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
