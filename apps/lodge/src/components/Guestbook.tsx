import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  guestbookSectionLabel,
  guestbookTitle,
  ratingLabel,
  tablistLabel,
  testimonials,
} from '../data'

/* Guestbook — tabbed testimonials (reference: .testimonial-section /
   .testimonial-item): circular author-photo tabs switch the visible
   testimonial, which shows a date, five gold stars, a title, the text and
   the author name/role. */
export function Guestbook() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]!

  return (
    <section aria-label={guestbookSectionLabel} className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <h1 className="mb-16 text-center font-serif text-5xl text-heading lg:mb-20 lg:text-[72px] lg:leading-[72px]">
          {guestbookTitle}
        </h1>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div
            role="tablist"
            aria-label={tablistLabel}
            className="flex justify-center gap-5 lg:flex-col"
          >
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                type="button"
                role="tab"
                id={`lodge-tab-${index}`}
                aria-selected={active === index}
                aria-controls={`lodge-panel-${index}`}
                onClick={() => setActive(index)}
                className={cn(
                  'h-20 w-20 overflow-hidden rounded-full border-2 transition-all',
                  active === index
                    ? 'border-gold opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/160/160`}
                  alt={item.author}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`lodge-panel-${active}`}
            aria-labelledby={`lodge-tab-${active}`}
            className="text-center lg:text-left"
          >
            <span className="text-sm text-[#999999]">{testimonial.date}</span>
            <div
              aria-label={ratingLabel}
              className="mt-3 flex justify-center gap-1 lg:justify-start"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} aria-hidden="true" className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <h3 className="mt-4 font-serif text-2xl text-heading">{testimonial.title}</h3>
            <p className="mt-4 leading-7 text-heading/70">{testimonial.text}</p>
            <p className="mt-5 text-sm font-bold tracking-wide text-gold uppercase">
              {testimonial.author}
              <span className="ml-1 font-normal text-heading/60 normal-case">
                — {testimonial.role}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
