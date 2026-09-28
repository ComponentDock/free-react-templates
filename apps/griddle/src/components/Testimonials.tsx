import { TESTIMONIALS } from '../data'
import { Star } from 'lucide-react'

/**
 * Testimonials — customer reviews carousel. Source: .testimonial_area.
 * Shows 3 testimonial cards (shown as a static row; carousel behavior is
 * optional in React).
 */
export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="block text-sm font-medium uppercase tracking-widest text-brand">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-heading md:text-4xl">
            Happy Customers
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-lg bg-light p-8 text-center shadow-sm">
              <p className="mb-6 italic leading-relaxed text-body">"{t.text}"</p>
              <img
                src={`https://picsum.photos/seed/${t.name.replace(/\s+/g, '-')}/100/100`}
                alt={t.name}
                loading="lazy"
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              />
              <h4 className="font-display text-sm font-bold text-heading">{t.name}</h4>
              <div className="mt-2 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(t.stars)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'fill-brand-gold/50 text-brand-gold/50'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
