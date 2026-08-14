import { Bath, Bed, Frame, Heart, MapPin } from 'lucide-react'
import { APARTMENTS } from '../data'

/* Apartments (source: div.apartment_part — three listing cards with photo +
   heart corner, location line, price, title, and a Home/Apartment meta line
   with bed/bath icons; "View More" link top-right). */
export function Apartments() {
  return (
    <section id="properties" aria-label="Featured apartments" className="bg-white pb-[130px] pt-[130px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-12 flex flex-wrap items-end justify-between">
          <h2 className="relative pb-4 text-[40px] font-bold leading-[1.25] text-ink">
            {APARTMENTS.heading}
            <span className="absolute bottom-0 left-0 h-[2px] w-[90px] bg-brand" aria-hidden="true" />
          </h2>
          <a href="#blog" className="hidden text-[15px] font-medium text-muted transition-colors hover:text-brand md:inline-block">
            {APARTMENTS.viewMoreLabel}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {APARTMENTS.cards.map((card) => (
            <article key={card.title} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="border border-t-0 border-gray-100 p-6">
                <p className="flex items-center gap-2 text-[13px] text-muted">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {card.location}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold text-brand">{card.price}</h3>
                <p className="mt-1 text-[16px] font-medium capitalize text-ink">{card.title}</p>
                <p className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 text-[13px] capitalize text-muted">
                  <Bed className="h-4 w-4" aria-hidden="true" />
                  <Bath className="h-4 w-4" aria-hidden="true" />
                  <Frame className="h-4 w-4" aria-hidden="true" />
                  {card.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
