import { Check } from 'lucide-react'

const rooms = [
  {
    name: 'Premium King Room',
    price: 400,
    size: '30 ft²',
    capacity: 'Max 5 guests',
    bed: 'King Beds',
    services: 'Wifi, TV, Bathroom',
    image: 'https://picsum.photos/seed/retreat-room1/600/400',
  },
  {
    name: 'Deluxe Suite',
    price: 250,
    size: '45 ft²',
    capacity: 'Max 3 guests',
    bed: 'Queen Beds',
    services: 'Wifi, TV, Mini Bar',
    image: 'https://picsum.photos/seed/retreat-room2/600/400',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand text-sm tracking-widest uppercase mb-2">Our Rooms</p>
          <h2 className="text-3xl font-bold text-body">Find Your Perfect Room</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full md:w-1/2 h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-body mb-2">{room.name}</h3>
                <p className="text-brand text-2xl font-bold mb-4">
                  ${room.price} <span className="text-sm font-normal text-muted">/ Day</span>
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Size: {room.size}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Capacity: {room.capacity}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Bed: {room.bed}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Services: {room.services}
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-block mt-4 bg-brand text-white px-6 py-2 rounded-sm font-medium hover:bg-brand-dark transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
