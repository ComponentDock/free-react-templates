import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Jean Smith',
    text: 'An incredible eye for detail and composition. Every photograph tells a unique story that captures the essence of the moment beautifully.',
    image: 'https://picsum.photos/seed/lumier-person1/200/200',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    text: 'Working with this photographer was a wonderful experience. The creativity and professionalism exceeded all expectations.',
    image: 'https://picsum.photos/seed/lumier-person2/200/200',
  },
  {
    id: 3,
    name: 'David Chen',
    text: 'Stunning work that brings emotions to life. The ability to capture light and shadow in such a captivating way is truly remarkable.',
    image: 'https://picsum.photos/seed/lumier-person3/200/200',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonial = testimonials[current]!

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider mb-12 font-heading">
          Testimonial
        </h2>

        <div className="relative">
          <div className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-white font-bold mb-4">{testimonial.name}</p>
            <blockquote className="text-white/80 italic leading-relaxed px-8">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-brand' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
