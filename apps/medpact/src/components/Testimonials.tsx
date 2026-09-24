import { Quote } from 'lucide-react'
import { testimonialsTitle, testimonials } from '../data'

export function Testimonials() {
  return (
    <section className="bg-section-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {testimonialsTitle}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-lg border border-card-border bg-white p-8"
            >
              <Quote aria-hidden="true" className="absolute right-6 top-6 h-8 w-8 text-brand/15" />
              <p className="text-sm leading-7 text-muted">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.avatarSeed}/48/48`}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
