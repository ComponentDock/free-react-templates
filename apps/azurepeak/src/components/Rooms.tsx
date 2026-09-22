import { Users, Bed, Maximize } from 'lucide-react'

const rooms = [
  {
    title: 'Deluxe Ocean Room',
    price: '$299',
    perNight: '/night',
    image: 'https://picsum.photos/seed/azurepeak-deluxe/600/400',
    description:
      'Wake up to panoramic ocean views in this elegantly appointed room with modern amenities.',
    guests: '2 Guests',
    beds: '1 King Bed',
    size: '45 m²',
  },
  {
    title: 'Premium Suite',
    price: '$499',
    perNight: '/night',
    image: 'https://picsum.photos/seed/azurepeak-suite/600/400',
    description:
      'A spacious suite featuring a separate living area, private balcony, and luxurious bath.',
    guests: '3 Guests',
    beds: '1 King Bed',
    size: '75 m²',
  },
  {
    title: 'Presidential Villa',
    price: '$899',
    perNight: '/night',
    image: 'https://picsum.photos/seed/azurepeak-villa/600/400',
    description:
      'The ultimate in luxury — private pool, butler service, and breathtaking sunset views.',
    guests: '4 Guests',
    beds: '2 King Beds',
    size: '120 m²',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Our Accommodations
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Rooms &amp; Suites
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-4 py-1 text-sm font-bold text-blue-900">
                  {room.price}
                  <span className="font-normal">{room.perNight}</span>
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  {room.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{room.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" aria-hidden="true" /> {room.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" aria-hidden="true" /> {room.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" aria-hidden="true" /> {room.size}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full rounded-lg border-2 border-blue-800 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
