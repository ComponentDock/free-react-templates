import { DestinationCard } from './DestinationCard'

const popularDestinations = [
  {
    name: 'Paris',
    image: 'https://picsum.photos/seed/trailquest-pop-1/600/400',
    rating: 5,
    price: '$299',
    description:
      'Experience the magic of the City of Light with iconic landmarks and romantic streets.',
    duration: '5 Days',
    location: 'France',
  },
  {
    name: 'Tokyo',
    image: 'https://picsum.photos/seed/trailquest-pop-2/600/400',
    rating: 4,
    price: '$499',
    description:
      "Immerse yourself in ancient traditions and cutting-edge technology in Japan's capital.",
    duration: '7 Days',
    location: 'Japan',
  },
  {
    name: 'New York',
    image: 'https://picsum.photos/seed/trailquest-pop-3/600/400',
    rating: 5,
    price: '$399',
    description:
      'Explore the vibrant city that never sleeps with world-class dining and entertainment.',
    duration: '4 Days',
    location: 'USA',
  },
]

export function PopularDestinations() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">
          Most Popular Destination
        </h2>
        <div className="flex flex-col gap-12">
          {popularDestinations.map((dest, i) => (
            <DestinationCard key={dest.name} {...dest} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
