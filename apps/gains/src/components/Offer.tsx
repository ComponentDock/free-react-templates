import { ArrowRight } from 'lucide-react'
import { OFFER_CARDS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Offer — "best Courses" section: four image cards that reveal a hover
 * overlay with a Teko title, copy, and a gradient circle arrow button.
 */
export function Offer() {
  return (
    <section id="courses" className="py-24 lg:py-35">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          kicker="best Courses"
          title="Why you Join with us"
          copy="Programs for every goal — build strength, endurance, or a brand new habit."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFER_CARDS.map((card) => (
            <a
              key={card.title}
              href="#subscribe"
              className="group relative block overflow-hidden rounded-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-night/90 via-night/40 to-transparent p-6 opacity-90 transition-opacity group-hover:opacity-100">
                <h3 className="text-2xl font-semibold uppercase text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.copy}
                </p>
                <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
