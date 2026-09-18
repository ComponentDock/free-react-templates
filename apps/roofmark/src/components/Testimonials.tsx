import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Excellent Service',
    body: 'The team at Roofmark made our home buying experience smooth and stress-free. Their expertise and dedication truly set them apart.',
    author: 'Sarah Johnson',
  },
  {
    quote: 'Professional Team',
    body: 'From the first consultation to closing day, everything was handled with professionalism. We found our dream home in just two weeks.',
    author: 'Michael Chen',
  },
  {
    quote: 'Highly Recommended',
    body: 'Outstanding experience! The agents were knowledgeable, responsive, and genuinely cared about finding the right property for us.',
    author: 'Emily Davis',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/roofmark-8/800/500"
              alt="Testimonials"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/50" />
          </div>

          {/* Right - Quotes */}
          <div>
            <p className="text-brand-secondary text-sm uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-brand-body mb-8">What Our Clients Say</h2>

            <div className="relative">
              <Quote size={40} className="text-brand-green/30 mb-4" />
              <h3 className="text-xl font-bold text-brand-body mb-3">
                {testimonials[current]!.quote}
              </h3>
              <p className="text-brand-secondary leading-relaxed mb-4">
                {testimonials[current]!.body}
              </p>
              <p className="text-brand-green font-semibold">— {testimonials[current]!.author}</p>
            </div>

            {/* Controls */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-brand-muted/30 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-brand-muted/30 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
