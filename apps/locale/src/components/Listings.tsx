import { useState } from 'react'
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  MapPin,
  Phone,
  Star,
  UtensilsCrossed,
} from 'lucide-react'
import {
  CLOSED_LABEL,
  LISTINGS,
  LISTINGS_ID,
  LISTINGS_SUBTITLE,
  LISTINGS_TITLE,
  LISTING_CATEGORY,
  NEXT_ARROW_LABEL,
  PREVIOUS_ARROW_LABEL,
  SAVE_LABEL,
  WINDOW_SIZE,
  type Listing,
} from '../lib/site'
import {
  arrowClass,
  cardClass,
  containerClass,
  dotClass,
  sectionClass,
  sectionSubtitleClass,
  sectionTitleClass,
} from '../lib/styles'

/** The wrapping window of listings: the carousel shows four of the five cards from `start`. */
function windowOf(listings: Listing[], start: number, size: number): Listing[] {
  return [...listings.slice(start), ...listings.slice(0, start)].slice(0, size)
}

/**
 * Popular Things To do — a wrapping window of four listing cards with the arrows stepping the window
 * by one in either direction (wrapping at both ends) and the dots jumping to a listing directly.
 */
export function Listings() {
  const [start, setStart] = useState(0)
  const total = LISTINGS.length
  const visible = windowOf(LISTINGS, start, WINDOW_SIZE)

  return (
    <section id={LISTINGS_ID} className={sectionClass}>
      <div className={containerClass}>
        <div className="text-center">
          <h2 className={sectionTitleClass}>{LISTINGS_TITLE}</h2>
          <p className={sectionSubtitleClass}>{LISTINGS_SUBTITLE}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((listing) => (
            <article key={listing.title} data-testid="listing-card" className={cardClass}>
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-56 w-full rounded-t-[5px] object-cover"
                />
                <span className="absolute left-7 top-8 rounded-full bg-[rgba(126,109,92,0.9)] px-4 py-1.5 text-sm text-white">
                  {CLOSED_LABEL}
                </span>
                <button
                  type="button"
                  aria-label={`${SAVE_LABEL} ${listing.title}`}
                  className="absolute right-7 top-8 text-white transition-colors hover:text-orange"
                >
                  <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
                </button>
                <div className="absolute bottom-6 left-6 flex items-center gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                  <span className="ml-1 text-sm font-semibold">- {listing.rating}</span>
                </div>
              </div>
              <div className="border-b border-[#ebeff4] px-5 pb-3 pt-4">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
                  {listing.title}
                  <BadgeCheck className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-base text-muted">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {listing.address}
                </p>
              </div>
              <div className="flex items-center justify-between px-5 py-3">
                <span className="flex items-center gap-2 font-display text-sm font-semibold text-navy">
                  <UtensilsCrossed className="h-4 w-4 text-brand" aria-hidden="true" />
                  {LISTING_CATEGORY}
                </span>
                <span className="flex items-center gap-3 text-socials">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={PREVIOUS_ARROW_LABEL}
            onClick={() => setStart((current) => (current - 1 + total) % total)}
            className={arrowClass}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <ul role="list" className="flex items-center gap-2">
            {LISTINGS.map((listing, dotIndex) => (
              <li key={listing.title}>
                <button
                  type="button"
                  aria-label={`${listing.title} slide ${dotIndex + 1}`}
                  aria-current={dotIndex === start ? 'true' : undefined}
                  onClick={() => setStart(dotIndex)}
                  className={dotClass(dotIndex === start)}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={NEXT_ARROW_LABEL}
            onClick={() => setStart((current) => (current + 1) % total)}
            className={arrowClass}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
