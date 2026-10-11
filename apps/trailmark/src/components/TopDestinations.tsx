import { DestinationCard } from './DestinationCard'
import { SectionTitle } from './SectionTitle'
import { TOP_DESTINATIONS } from '../data/content'

export function TopDestinations() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Top destinations in Europe" />

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_DESTINATIONS.map((destination) => (
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
