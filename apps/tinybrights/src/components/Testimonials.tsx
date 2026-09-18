import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'TinyBrights has been wonderful for our daughter. She looks forward to going every single day!',
    name: 'Jessica Thompson',
    role: 'Parent',
    image: 'https://picsum.photos/seed/testimonial1/100/100',
  },
  {
    quote:
      'The teachers are incredibly patient and creative. Our son has grown so much in just a few months.',
    name: 'Robert Chen',
    role: 'Parent',
    image: 'https://picsum.photos/seed/testimonial2/100/100',
  },
  {
    quote: "Best decision we made for our child's education. The curriculum is engaging and fun.",
    name: 'Maria Garcia',
    role: 'Parent',
    image: 'https://picsum.photos/seed/testimonial3/100/100',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const current = testimonials[active]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-blue">
          What Parents Say
        </h2>

        <div className="mt-12">
          <Quote className="mx-auto h-10 w-10 text-brand-orange" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-gray-700 italic">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={current.image}
              alt={current.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-gray-800">{current.name}</p>
              <p className="text-sm text-brand-blue">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === active ? 'bg-brand-blue' : 'bg-gray-300',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
