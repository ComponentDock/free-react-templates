import { DestinationCard } from './DestinationCard'
import { SectionTitle } from './SectionTitle'
import { POPULAR_DESTINATIONS } from '../data/content'

export function PopularDestinations() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Popular destinations in 2018" />

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              price={destination.price}
              seed={destination.seed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
