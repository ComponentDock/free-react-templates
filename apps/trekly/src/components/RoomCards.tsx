import { Wifi, Coffee, Car, Wind } from 'lucide-react'

const rooms = [
  {
    image: 'https://picsum.photos/seed/trekly-room-1/400/300',
    type: 'Classic Balcony Room',
    description: 'A cozy room with a private balcony offering scenic views.',
    price: '$120',
    amenities: [Wifi, Coffee],
  },
  {
    image: 'https://picsum.photos/seed/trekly-room-2/400/300',
    type: 'Deluxe Suite',
    description: 'Spacious suite with living area and premium furnishings.',
    price: '$250',
    amenities: [Wifi, Coffee, Car],
  },
  {
    image: 'https://picsum.photos/seed/trekly-room-3/400/300',
    type: 'Ocean View Room',
    description: 'Wake up to stunning ocean views from your private room.',
    price: '$180',
    amenities: [Wifi, Wind],
  },
  {
    image: 'https://picsum.photos/seed/trekly-room-4/400/300',
    type: 'Family Suite',
    description: 'Perfect for families with connecting rooms and kid-friendly amenities.',
    price: '$300',
    amenities: [Wifi, Coffee, Car, Wind],
  },
]

export function RoomCards() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            Rooms
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Greece Best Rooms Offer</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <div
              key={room.type}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-gray-900">{room.type}</h4>
                <p className="mt-2 text-sm text-gray-500">{room.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  {room.amenities.map((Icon, i) => (
                    <Icon key={i} className="h-4 w-4 text-gray-400" />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-ocean-600">{room.price}</span>
                  <span className="text-xs text-gray-400">/ night</span>
                </div>
                <button className="mt-3 w-full rounded-lg bg-ocean-600 py-2 text-sm font-semibold text-white transition hover:bg-ocean-500">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
