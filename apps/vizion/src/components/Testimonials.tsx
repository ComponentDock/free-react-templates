import { Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    name: 'Robert Thomson',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/vizion-avatar1/80/80',
  },
  {
    text: 'Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui. Donec imperdiet congue orci consequat mattis.',
    name: 'Sarah Williams',
    role: 'Marketing Director',
    avatar: 'https://picsum.photos/seed/vizion-avatar2/80/80',
  },
  {
    text: 'Fusce ac mattis nulla. Morbi eget ornare dui. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat.',
    name: 'James Anderson',
    role: 'Startup Founder',
    avatar: 'https://picsum.photos/seed/vizion-avatar3/80/80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Quote className="mx-auto mb-6 text-brand" size={40} />

        <p className="mb-8 text-lg leading-relaxed text-body">{t.text}</p>

        <div className="mb-8 flex flex-col items-center gap-3">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-14 w-14 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <h4 className="font-bold text-navy">{t.name}</h4>
            <span className="text-sm text-body">{t.role}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-brand hover:text-brand"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-brand' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-brand hover:text-brand"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  )
}
