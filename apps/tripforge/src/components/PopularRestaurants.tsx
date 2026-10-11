import { UtensilsCrossed } from 'lucide-react'
import { RESTAURANTS } from '../data/content'
import { ListingCard } from './ListingCard'
import { SectionHeading } from './SectionHeading'

export function PopularRestaurants() {
  return (
    <section id="restaurants" className="section-gap bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading subheading="Special Offers" lead="Popular" rest="Restaurants" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESTAURANTS.map((restaurant) => (
            <ListingCard
              key={restaurant.image}
              item={restaurant}
              image={restaurant.image}
              icon={UtensilsCrossed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
