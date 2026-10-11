import { Building2 } from 'lucide-react'
import { HOTELS } from '../data/content'
import { ListingCard } from './ListingCard'
import { SectionHeading } from './SectionHeading'

export function PopularHotels() {
  return (
    <section id="hotels" className="section-gap bg-mist">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading subheading="Special Offers" lead="Popular" rest="Hotels & Rooms" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <ListingCard key={hotel.image} item={hotel} image={hotel.image} icon={Building2} />
          ))}
        </div>
      </div>
    </section>
  )
}
