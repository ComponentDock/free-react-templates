import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    image: 'https://picsum.photos/seed/catalog-person-1/100/100',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.',
  },
  {
    name: 'Christine Aguilar',
    image: 'https://picsum.photos/seed/catalog-person-2/100/100',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.',
  },
  {
    name: 'Robert Spears',
    image: 'https://picsum.photos/seed/catalog-person-3/100/100',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="py-12 md:py-20" id="contact">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-10 text-xl font-bold text-primary-500">Testimonials</h2>

        <figure className="mb-6">
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto mb-3 h-20 w-20 rounded-full object-cover"
            width={80}
            height={80}
          />
          <figcaption className="text-sm font-bold text-ink">{t.name}</figcaption>
        </figure>

        <blockquote className="mb-8 text-lg italic text-body">&ldquo;{t.quote}&rdquo;</blockquote>

        <div className="flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-ink transition hover:bg-black/20"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === current ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-ink transition hover:bg-black/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
