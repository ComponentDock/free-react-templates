import { Quote } from 'lucide-react'
import { testimonials } from '../data'

/** Testimonials carousel (static list of all testimonials). */
export function Testimonials() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Testimonial
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink md:text-4xl">
            Happy Clients
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand/30" />
              <p className="mb-6 text-sm leading-relaxed text-slate-body">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
