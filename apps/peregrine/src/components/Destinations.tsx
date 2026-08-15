import { Star } from 'lucide-react'
import { destinationSectionTitle, destinations } from '../data'

export function Destinations() {
  return (
    <section id="destination-section" className="px-6 pb-16 pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-ink">{destinationSectionTitle}</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <article key={destination.title} className="group relative">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-64 w-full object-cover"
                />
                <span className="absolute right-3 top-6 rounded-full bg-white px-4 py-1.5 text-xl font-semibold text-ink shadow-sm transition-colors group-hover:bg-brand group-hover:text-white">
                  {destination.price}
                </span>
              </div>
              <div className="pt-6">
                <span className="text-sm uppercase tracking-[2px] text-fade">
                  {destination.tour}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-black">{destination.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-fade">
                  <span className="flex text-brand" aria-label={`${destination.title} rating`}>
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="text-sm">{destination.reviews}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
