import { MapPin } from 'lucide-react'
import { popularLocations } from '../data'

export function PopularLocations() {
  return (
    <section id="listing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 block font-script text-3xl text-brand">Most visited places</span>
          <h2 className="text-3xl font-semibold text-navy md:text-5xl">Popular Locations</h2>
        </div>

        {/* Location cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularLocations.map((loc) => (
            <div key={loc.name} className="group relative overflow-hidden rounded-xl">
              <div className="overflow-hidden">
                <img
                  src={loc.image}
                  alt={`${loc.name} cityscape`}
                  className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                <span className="mb-3 block text-2xl font-bold text-white">{loc.name}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-brand opacity-0 shadow transition-all duration-300 group-hover:opacity-100">
                  <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
