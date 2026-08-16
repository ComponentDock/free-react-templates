import { Star } from 'lucide-react'
import { testimonials } from '../data'
import { SectionTitle } from './SectionTitle'

/**
 * "Food Lover's Say": three testimonial cards, each with five gold stars,
 * a quote, a circular avatar and the author name.
 */
export function Testimonials() {
  return (
    <section className="bg-ink py-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mb-[50px] flex justify-center">
          <SectionTitle heading={testimonials.heading} />
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.cards.map((card, i) => (
            <li key={`${card.author}-${i}`} className="border-t border-line px-6 pt-8 pb-2">
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-6 text-[16px] leading-[1.6] text-heading">{card.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={card.avatar}
                  alt={card.avatarAlt}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="text-[16px] text-heading">{card.author}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
