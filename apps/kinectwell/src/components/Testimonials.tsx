import { Quote } from 'lucide-react'
import { testimonials, testimonialsTitle } from '../data'

export function Testimonials() {
  return (
    <section className="bg-alt-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{testimonialsTitle}</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote aria-hidden="true" className="mb-4 h-8 w-8 text-brand/30" />
              <p className="text-sm leading-7 text-body">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.imageSeed}/48/48`}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
