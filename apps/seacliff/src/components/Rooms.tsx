import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Room {
  name: string
  price: string
  blurb: string
  features: string[]
  image: string
}

const rooms: Room[] = [
  {
    name: 'Deluxe Ocean Room',
    price: '$299',
    blurb: 'Elegant comfort with sweeping ocean views, a king bed, and a private balcony.',
    features: ['King Bed', 'Ocean View', '45 sqm', 'Balcony'],
    image: 'https://picsum.photos/seed/seacliff-2/800/600',
  },
  {
    name: 'Premium Suite',
    price: '$499',
    blurb: 'A spacious retreat with panoramic views, a jacuzzi, and curated amenities.',
    features: ['King Bed', 'Panoramic View', '75 sqm', 'Jacuzzi'],
    image: 'https://picsum.photos/seed/seacliff-3/800/600',
  },
  {
    name: 'Presidential Villa',
    price: '$899',
    blurb: 'The ultimate Seacliff experience — two bedrooms, a private pool, and butler service.',
    features: ['2 Bedrooms', 'Private Pool', '150 sqm', 'Butler Service'],
    image: 'https://picsum.photos/seed/seacliff-4/800/600',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Rooms & Suites
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Hand-crafted accommodations designed for rest, romance, and unforgettable ocean views.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <Reveal
              key={room.name}
              delay={100}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={room.image} alt={room.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  {room.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {room.blurb}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-primary-900 dark:text-white">
                    {room.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/ night</span>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Check className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#booking"
                  className="mt-6 w-full bg-accent-500 shadow-lg shadow-accent-500/25 hover:bg-accent-600"
                >
                  Book This Room
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
