import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
    text: 'Pipekit transformed our brand completely. Their creative vision and attention to detail exceeded all our expectations. Highly recommended!',
    avatar: 'https://picsum.photos/seed/pipekit-test1/80/80',
  },
  {
    id: 2,
    name: 'James Cooper',
    role: 'Marketing Director',
    text: 'Working with Pipekit was a game-changer for our digital presence. They delivered a stunning website that perfectly captures our brand identity.',
    avatar: 'https://picsum.photos/seed/pipekit-test2/80/80',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Founder, Artistry',
    text: 'The team at Pipekit brings creativity and professionalism together seamlessly. They understood our vision from day one and brought it to life beautifully.',
    avatar: 'https://picsum.photos/seed/pipekit-test3/80/80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]!

  return (
    <section className="bg-navy-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-8 flex justify-center">
          <Quote className="h-10 w-10 text-gold-400" aria-hidden="true" />
        </div>

        <blockquote className="min-h-[120px]">
          <p className="text-lg leading-relaxed text-white/90 italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-left">
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-white/60">{testimonial.role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === current ? 'bg-gold-400' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
