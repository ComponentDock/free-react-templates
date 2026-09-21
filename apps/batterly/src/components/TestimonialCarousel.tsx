import { useState } from 'react'
import { TESTIMONIALS, getStarParts, starClass } from '../data'

export function TestimonialCarousel() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[4px] text-brand">
          Testimonial
        </span>
        <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold text-ink mb-12">
          Our client say
        </h2>

        <div className="relative min-h-[200px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author}
              className={`transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              aria-hidden={i !== active}
            >
              <img
                src={`https://picsum.photos/seed/${t.seed}/100/100`}
                alt={t.author}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />
              <p className="mt-4 text-lg italic text-ink leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-3 flex items-center justify-center gap-0.5">
                {getStarParts(t.rating).map((type, j) => (
                  <svg
                    key={j}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${starClass(type)}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">
                {t.author} — {t.city}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === active ? 'bg-brand' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
