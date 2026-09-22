import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clean clothes. A reliable service every time.',
    name: 'Robart Brown',
    role: 'Creative Designer',
    avatar: 'https://picsum.photos/seed/vitalblend-avatar1/80/80',
  },
  {
    text: 'Amazing health consultation service. The team helped me completely transform my lifestyle and eating habits for the better.',
    name: 'Sarah Williams',
    role: 'Wellness Coach',
    avatar: 'https://picsum.photos/seed/vitalblend-avatar2/80/80',
  },
] as const

export function Testimonial() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="relative">
          <Quote size={48} className="mx-auto mb-6 text-brand/30" />
          <p className="mb-8 text-lg leading-relaxed text-brand-body italic">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={current.avatar}
              alt={current.name}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <span className="block font-semibold text-brand-heading">{current.name}</span>
              <span className="text-sm text-brand-body">{current.role}</span>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === active ? 'bg-brand' : 'bg-gray-300'
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
