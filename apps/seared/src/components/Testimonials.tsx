import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    img: 'https://picsum.photos/seed/seared-auth1/100/100',
    name: 'Maxim Smith',
    text: '"The food was absolutely incredible. Every dish was a masterpiece, and the service was impeccable. This is fine dining at its best."',
  },
  {
    img: 'https://picsum.photos/seed/seared-auth2/100/100',
    name: 'Geert Green',
    text: '"A truly remarkable dining experience. The ambiance, the flavors, and the attention to detail made our anniversary celebration unforgettable."',
  },
  {
    img: 'https://picsum.photos/seed/seared-auth3/100/100',
    name: 'Dennis Roman',
    text: '"I have dined at many restaurants, but this place stands out. The lobster thermidor alone is worth the visit. Highly recommended!"',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Quote size={40} className="mx-auto mb-6 text-brand" />

        <img
          src={t.img}
          alt={t.name}
          className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
        />
        <h4 className="mb-4 text-lg font-bold text-ink">{t.name}</h4>
        <p className="mb-8 text-base leading-relaxed text-body italic">{t.text}</p>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition hover:border-brand hover:text-brand"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition ${
                  i === current ? 'bg-brand' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition hover:border-brand hover:text-brand"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
