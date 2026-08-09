import { Clock } from 'lucide-react'
import { Reveal } from './Reveal'

interface Venue {
  name: string
  cuisine: string
  hours: string
  blurb: string
  image: string
}

const venues: Venue[] = [
  {
    name: 'The Azure',
    cuisine: 'Contemporary Fine Dining',
    hours: 'Dinner 6:00 PM – 11:00 PM',
    blurb: 'Seasonal tasting menus and an extensive wine cellar with ocean views.',
    image: 'https://picsum.photos/seed/seacliff-11/800/600',
  },
  {
    name: 'Coral Bar',
    cuisine: 'Craft Cocktails & Small Plates',
    hours: 'Open 4:00 PM – 1:00 AM',
    blurb: 'Live music, signature cocktails, and light bites as the sun goes down.',
    image: 'https://picsum.photos/seed/seacliff-12/800/600',
  },
  {
    name: 'Sunrise Cafe',
    cuisine: 'International Breakfast & Brunch',
    hours: 'Breakfast 6:30 AM – 11:00 AM',
    blurb: 'Bakery-fresh pastries, tropical fruit, and specialty coffee every morning.',
    image: 'https://picsum.photos/seed/seacliff-13/800/600',
  },
]

export function Dining() {
  return (
    <section id="dining" className="py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Culinary Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Three distinct venues, one shared obsession with flavor and hospitality.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {venues.map((venue) => (
            <Reveal
              key={venue.name}
              delay={100}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={venue.image} alt={venue.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  {venue.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {venue.cuisine}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {venue.blurb}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {venue.hours}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
