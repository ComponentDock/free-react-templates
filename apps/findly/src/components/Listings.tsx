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
import { LISTINGS, LISTING_CATEGORY } from '../data'
import { cn } from '@free-react-templates/ui'

const CARDS_PER_VIEW = 4

/* Popular Things To do — client-side carousel of listing cards. A
   wrapping window of four cards is visible; the arrows shift the window
   by one card and the dots reflect the active window start. */
export function Listings() {
  const [index, setIndex] = useState(0)
  const total = LISTINGS.length

  const visible = Array.from(
    { length: CARDS_PER_VIEW },
    (_, offset) => LISTINGS[(index + offset) % total]!,
  )

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

  return (
    <section id="listing" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-navy">Popular Things To do</h2>
          <p className="mt-3 text-lg font-light text-muted">
            Popular Exclusive Listings In Our Directory
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((listing) => (
            <article
              key={listing.title}
              className="overflow-hidden rounded-[5px] bg-paper shadow-[0px_6px_6px_0px_rgba(2,25,65,0.08)]"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-56 w-full rounded-t-[5px] object-cover"
                />
                <span className="absolute left-7 top-8 rounded-full bg-[rgba(126,109,92,0.9)] px-4 py-1.5 text-sm text-white">
                  Closed
                </span>
                <button
                  type="button"
                  aria-label={`Save ${listing.title}`}
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
              <div className="border-b border-[#ebeff4] px-5 pt-4 pb-3">
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
            aria-label="Previous listings"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DEE0E5] text-navy transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <ul role="list" className="flex items-center gap-2">
            {LISTINGS.map((listing, dotIndex) => (
              <li key={listing.title}>
                <button
                  type="button"
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  aria-current={dotIndex === index ? 'true' : undefined}
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    dotIndex === index ? 'bg-brand' : 'bg-[#DEE0E5] hover:bg-brand/50',
                  )}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Next listings"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DEE0E5] text-navy transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
