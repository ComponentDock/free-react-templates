import { Star } from 'lucide-react'
import { hotels, hotelsSectionTitle } from '../data'

export function Hotels() {
  return (
    <section id="hotels-section" className="px-6 pb-16 pt-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-ink">{hotelsSectionTitle}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <article key={hotel.title} className="group relative">
              <div className="relative overflow-hidden">
                <img src={hotel.image} alt={hotel.title} className="h-72 w-full object-cover" />
                <span className="absolute right-3 top-6 rounded-full bg-white px-4 py-1.5 text-xl font-semibold text-ink shadow-sm transition-colors group-hover:bg-brand group-hover:text-white">
                  {hotel.price}
                </span>
              </div>
              <div className="pt-6">
                <span className="text-sm uppercase tracking-[2px] text-fade">
                  {hotel.perPerson}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-black">{hotel.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-fade">
                  <span className="flex text-brand" aria-label={`${hotel.title} rating`}>
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="text-sm">{hotel.reviews}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
