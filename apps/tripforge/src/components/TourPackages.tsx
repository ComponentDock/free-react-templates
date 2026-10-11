import { Compass } from 'lucide-react'
import { TOURS } from '../data/content'
import { ListingCard } from './ListingCard'
import { SectionHeading } from './SectionHeading'

export function TourPackages() {
  return (
    <section id="tour" className="section-gap bg-mist">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading subheading="Special Offers" lead="Top" rest="Tour Packages" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOURS.map((tour) => (
            <ListingCard key={tour.image} item={tour} image={tour.image} icon={Compass} />
          ))}
        </div>
      </div>
    </section>
  )
}
