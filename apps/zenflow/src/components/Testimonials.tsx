import { useState } from 'react'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    avatar: 'https://picsum.photos/seed/zenflow-avatar1/100/100',
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam.',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director, InnovateCo',
    avatar: 'https://picsum.photos/seed/zenflow-avatar2/100/100',
    quote:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    name: 'Carol Davis',
    role: 'Founder, StartupXYZ',
    avatar: 'https://picsum.photos/seed/zenflow-avatar3/100/100',
    quote:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const testimonial = testimonials[current]!

  return (
    <section id="clients" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Our Happy Clients
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="relative mx-auto mt-12 max-w-3xl text-center">
          <article>
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <blockquote className="mt-6 text-lg italic leading-relaxed text-body">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <cite className="mt-4 block not-italic">
              <span className="font-display text-lg font-bold text-ink">{testimonial.name}</span>
              <span className="block text-sm text-muted">{testimonial.role}</span>
            </cite>
          </article>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-body hover:text-primary-400"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-body hover:text-primary-400"
          >
            &#8594;
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-primary-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
