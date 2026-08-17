import { ChevronRight } from 'lucide-react'
import { DESTINATIONS } from '../data'

/* Top Destination — six circular city photo cards; hovering reveals a
   navy overlay, a white "Explore →" link, and a slowly rotating 2px
   dotted white ring around the circle (source hover treatment). */
export function TopDestinations() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl font-semibold text-navy">
          Top Destination
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {DESTINATIONS.map((destination) => (
            <div key={destination.name} className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[180px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[rgba(26,33,61,0.5)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#listing"
                    className="flex items-center gap-1 text-base font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    Explore
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <div
                  aria-hidden="true"
                  className="animate-ring pointer-events-none absolute inset-0 m-auto h-[92%] w-[91%] rounded-full border-2 border-dotted border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 font-display text-[22px] font-semibold text-navy">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
