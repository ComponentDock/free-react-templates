import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    quote:
      'Colloquium was an incredible experience. The speakers were world-class and the networking opportunities were unmatched. I left with so many new ideas.',
    name: 'Sarah Mitchell',
    role: 'Senior Developer at TechCorp',
  },
  {
    quote:
      'The best developer conference I have ever attended. The sessions were practical and immediately applicable to my projects. Highly recommended!',
    name: 'James Wilson',
    role: 'CTO at StartupHub',
  },
  {
    quote:
      'From the organization to the content, everything was top-notch. Colloquium brings together the brightest minds in tech. Can not wait for next year.',
    name: 'Maria Garcia',
    role: 'Lead Engineer at CloudBase',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className={`bg-[#f8f9fa] py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p
          className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Testimonials
        </p>
        <h2
          className="mb-12 text-3xl font-bold text-[#222] md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What People Say
        </h2>

        <div className="rounded-lg bg-white p-8 shadow-sm" data-testid="testimonial-card">
          <Quote size={32} className="mx-auto mb-4 text-[#ff2d9b]" />
          <p className="mb-6 text-lg leading-relaxed text-[#666] italic">&ldquo;{t.quote}&rdquo;</p>
          <p
            className="text-lg font-bold text-[#222]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t.name}
          </p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-[#ff2d9b] hover:text-[#ff2d9b]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === current ? 'bg-[#ff2d9b]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-[#ff2d9b] hover:text-[#ff2d9b]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
