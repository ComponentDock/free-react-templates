import { Heart, MapPin } from 'lucide-react'
import { properties } from '../data'

/* Reference: section.hotel-rooms.spad — 3-column grid of .room-items
   property cards (radius 4px, shadow 2px 2px 30px rgba(0,0,0,.1)): photo
   with a heart link top-right, h5 title, Location / Show on Map links,
   four feature stats (Lot Size / Beds / Baths / Garage), a "For Sale"
   price block, and a "View Property" outline button (green fill on hover). */
export function Properties() {
  return (
    <section id="properties" aria-label="Property listings" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[32px] font-medium text-navy">{properties.heading}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded bg-white shadow-[2px_2px_30px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <img
                  src={card.photo}
                  alt={card.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <a
                  href="#properties"
                  aria-label={`Save ${card.title}`}
                  className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-navy transition-colors hover:bg-brand hover:text-white"
                >
                  <Heart size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-medium leading-snug text-navy">{card.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-[12px] font-medium text-outline">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} aria-hidden="true" />
                    {card.location}
                  </span>
                  <span>{card.showMap}</span>
                </div>
                <dl className="mt-4 grid grid-cols-4 gap-2 border-y border-divider py-3 text-center">
                  <div>
                    <dt className="text-[11px] text-outline">Lot Size</dt>
                    <dd className="text-[13px] font-medium text-navy">{card.lotSize}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-outline">Beds</dt>
                    <dd className="text-[13px] font-medium text-navy">{card.beds}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-outline">Baths</dt>
                    <dd className="text-[13px] font-medium text-navy">{card.baths}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-outline">Garage</dt>
                    <dd className="text-[13px] font-medium text-navy">{card.garage}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[16px] text-outline">{properties.forSaleLabel}</p>
                    <p className="text-[24px] font-medium text-navy">{card.price}</p>
                  </div>
                  <a
                    href="#properties"
                    className="rounded border-2 border-outline px-5 py-2.5 text-[16px] font-medium text-outline transition-colors hover:border-brand hover:bg-brand hover:text-white"
                  >
                    {properties.viewLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
