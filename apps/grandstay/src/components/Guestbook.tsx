import { useState } from 'react'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/** Guestbook — tabbed testimonial cards with star ratings, dates, titles,
    and review text. Three reviews shown via tabs. */
export function Guestbook() {
  const [activeTab, setActiveTab] = useState(0)
  const testimonial = TESTIMONIALS[activeTab]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-navy">Guestbook</h2>
        {/* Tabs */}
        <div className="mb-8 flex justify-center gap-4">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded-full border-2 px-6 py-2 text-sm font-bold transition-colors ${
                activeTab === i
                  ? 'border-brand bg-brand text-white'
                  : 'border-brand bg-transparent text-navy hover:bg-brand/10'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
        {/* Card */}
        <div className="rounded-sm bg-offwhite p-8 text-center shadow-sm">
          <div className="mb-2 text-sm text-mute">{testimonial.date}</div>
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
            ))}
            <span className="sr-only">{testimonial.rating} out of 5 stars</span>
          </div>
          <h3 className="mb-4 font-heading text-xl font-bold text-navy">{testimonial.title}</h3>
          <p className="text-base leading-relaxed text-ink/80">{testimonial.text}</p>
        </div>
      </div>
    </section>
  )
}
