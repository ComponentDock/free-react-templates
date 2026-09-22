import { AirVent, Car, UtensilsCrossed, Waves, Truck, Coffee } from 'lucide-react'

const amenities = [
  { icon: AirVent, label: 'Air Condition' },
  { icon: Car, label: 'Car Parking' },
  { icon: Waves, label: 'Swimming Pool' },
  { icon: UtensilsCrossed, label: 'Restaurant & Bar' },
  { icon: Truck, label: 'Vehicle Rental' },
  { icon: Coffee, label: 'Complimentary Meal' },
]

const rooms = [
  {
    name: 'Double Deluxe Room',
    price: 250,
    description:
      'Spacious room with a king-size bed, city skyline views, and a marble bathroom. Perfect for couples seeking comfort and style.',
    image: 'grandeur-room1',
  },
  {
    name: 'Premium Suite',
    price: 420,
    description:
      'A luxurious suite with separate living area, panoramic views, and exclusive lounge access. The ultimate indulgence for discerning travelers.',
    image: 'grandeur-room2',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">Our Rooms</p>
          <h2 className="mb-6 font-heading text-3xl font-bold text-ink md:text-4xl">Our Rooms</h2>
          <p className="text-base leading-relaxed text-body">
            We believe that great accommodation is more than a bed — it is an experience. Our rooms
            are designed to make every guest feel at home while enjoying the finest amenities.
          </p>
        </div>

        {/* Room cards */}
        {rooms.map((room) => (
          <div key={room.name} className="mb-12 flex flex-col items-center gap-8 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src={`https://picsum.photos/seed/${room.image}/800/600`}
                alt={room.name}
                className="h-80 w-full rounded object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="mb-1 font-heading text-4xl font-bold text-brand">
                ${room.price}
                <span className="text-base font-normal text-body">/night</span>
              </p>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-ink">{room.name}</h3>
              <p className="mb-6 text-base leading-relaxed text-body">{room.description}</p>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2 text-sm text-ink">
                    <a.icon className="h-4 w-4 text-brand" />
                    {a.label}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-block rounded bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-hover"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
