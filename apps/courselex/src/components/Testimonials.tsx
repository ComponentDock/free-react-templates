import { cn } from '@free-react-templates/ui'
import { Quote, Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    author: 'Alex Turner',
    stars: 5,
    text: 'Courselex helped me discover the perfect Python course. The curation is spot-on — every recommendation felt relevant to my career goals.',
  },
  {
    author: 'Maria Santos',
    stars: 5,
    text: 'I was overwhelmed by options until I found Courselex. Now I can compare courses from different platforms side by side. Game changer!',
  },
  {
    author: 'David Kim',
    stars: 5,
    text: 'The faculty insights and course ratings on Courselex saved me hours of research. Found an amazing UX design course in minutes.',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
          What Our Learners Say
        </h2>

        <div className="mt-12 space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={cn(
                'rounded-lg bg-brand-light p-6 shadow-sm sm:p-8',
                i === active && 'ring-2 ring-teal-grad-start',
              )}
            >
              <Quote className="mb-4 h-8 w-8 text-teal-grad-start" />
              <p className="text-base leading-relaxed text-brand-body">{t.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-brand-dark">
                  — {t.author}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple dot navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === active ? 'bg-teal-grad-start' : 'bg-gray-300',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
