import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'An exceptional photographer who truly understands how to capture the essence of a moment. The wedding photos exceeded all our expectations.',
    author: 'Graig Smith',
  },
  {
    quote:
      'Working with this team was a fantastic experience. They brought creativity and professionalism to our corporate event that made it truly memorable.',
    author: 'Carl Spencer',
  },
  {
    quote:
      'The attention to detail and artistic vision is outstanding. Every photo tells a story and evokes genuine emotion. Highly recommended.',
    author: 'Ryan Peters',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-gold-400 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">What Clients Are Saying</h2>

        <div className="relative">
          <Quote className="w-10 h-10 text-white/30 mx-auto mb-6" />
          <blockquote className="text-white text-lg leading-relaxed mb-6">{t.quote}</blockquote>
          <cite className="text-white/80 font-semibold not-italic">— {t.author}</cite>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
