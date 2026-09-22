import { Star } from './Star'
import { Check } from 'lucide-react'

const ROOMS = [
  {
    name: 'Suite',
    price: 99,
    features: ['King Bed', 'Ocean View', 'Mini Bar', 'Free WiFi'],
    rating: 5,
    image: 'https://picsum.photos/seed/luxstay-room-1/600/400',
  },
  {
    name: 'Double Room',
    price: 199,
    features: ['Queen Bed', 'City View', 'Room Service', 'Free WiFi'],
    rating: 4,
    image: 'https://picsum.photos/seed/luxstay-room-2/600/400',
  },
  {
    name: 'Family Room',
    price: 249,
    features: ['2 Double Beds', 'Garden View', 'Mini Kitchen', 'Free WiFi'],
    rating: 5,
    image: 'https://picsum.photos/seed/luxstay-room-3/600/400',
  },
  {
    name: 'Classic Double Room',
    price: 150,
    features: ['Queen Bed', 'Courtyard View', 'Tea Set', 'Free WiFi'],
    rating: 4,
    image: 'https://picsum.photos/seed/luxstay-room-4/600/400',
  },
  {
    name: 'Superior Double Room',
    price: 200,
    features: ['King Bed', 'Lake View', 'Jacuzzi', 'Free WiFi'],
    rating: 5,
    image: 'https://picsum.photos/seed/luxstay-room-5/600/400',
  },
  {
    name: 'Superior Family Room',
    price: 299,
    features: ['2 King Beds', 'Panorama View', 'Living Area', 'Free WiFi'],
    rating: 5,
    image: 'https://picsum.photos/seed/luxstay-room-6/600/400',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-bg-light-grey py-20" aria-labelledby="rooms-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <h2 id="rooms-heading" className="mb-3 font-heading text-3xl text-black">
            Rooms &amp; Suites
          </h2>
          <p className="mx-auto max-w-md text-sm text-text-body">
            Choose from our beautifully appointed rooms and suites
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {ROOMS.map((room) => (
            <div key={room.name} className="min-w-[300px] flex-shrink-0">
              <img
                src={room.image}
                alt={room.name}
                className="h-[200px] w-full rounded-t-lg object-cover"
              />
              <div className="rounded-b-lg bg-white p-5 shadow-md">
                <div className="mb-2 flex gap-0.5">
                  {[...Array(room.rating)].map((_, i) => (
                    <Star key={i} filled size={14} />
                  ))}
                </div>
                <h3 className="mb-1 font-heading text-lg text-black">{room.name}</h3>
                <p className="mb-3">
                  <span className="font-heading text-2xl text-brand-blue">${room.price}</span>
                  <span className="ml-1 text-xs text-text-body">/ night</span>
                </p>
                <ul className="mb-4 space-y-1">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-text-body">
                      <Check size={12} className="text-brand-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="block rounded-full bg-brand-blue py-2 text-center text-sm font-medium uppercase tracking-wider text-white hover:bg-blue-600"
                >
                  Book now!
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-medium text-brand-blue hover:underline">
            View all rooms →
          </a>
        </div>
      </div>
    </section>
  )
}
