import { Star } from 'lucide-react'

const rooms = [
  {
    name: 'Suite',
    price: 120,
    description:
      'A beautifully appointed suite with panoramic views and premium amenities for the ultimate luxury stay.',
    image: 'roxyglow-room1',
    stars: 5,
  },
  {
    name: 'Family',
    price: 150,
    description:
      'Spacious family room with connecting options, perfect for those traveling with children.',
    image: 'roxyglow-room2',
    stars: 5,
  },
  {
    name: 'Deluxe',
    price: 180,
    description: 'Elegant deluxe room featuring modern design, plush bedding, and city views.',
    image: 'roxyglow-room3',
    stars: 5,
  },
  {
    name: 'Luxury',
    price: 250,
    description:
      'Our finest accommodation with exclusive lounge access, marble bathroom, and personalized butler service.',
    image: 'roxyglow-room4',
    stars: 5,
  },
  {
    name: 'Superior',
    price: 200,
    description:
      'Superior comfort with upgraded furnishings, rain shower, and complimentary minibar.',
    image: 'roxyglow-room5',
    stars: 5,
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-light-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">Our Rooms</p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-ink md:text-4xl">
            RoxyGlow Rooms
          </h2>
          <p className="text-lg text-body">Hotel Master&apos;s Rooms</p>
        </div>

        {/* Welcome image + text */}
        <div className="mb-16 flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/roxyglow-welcome/800/500"
              alt="Welcome to RoxyGlow"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="mb-4 font-heading text-2xl font-bold text-ink">
              Discover the Art of Hospitality
            </h3>
            <p className="mb-4 text-base leading-relaxed text-body">
              At RoxyGlow, we believe that every guest deserves an extraordinary experience. Our
              rooms are thoughtfully designed to blend luxury with comfort, ensuring your stay is
              nothing short of perfection.
            </p>
            <p className="text-base leading-relaxed text-body">
              From the moment you step through our doors, you&apos;ll be greeted with warm
              hospitality and world-class amenities that redefine the meaning of luxury
              accommodation.
            </p>
          </div>
        </div>

        {/* Room cards */}
        {rooms.map((room, index) => (
          <div
            key={room.name}
            className={`mb-12 flex flex-col items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={`https://picsum.photos/seed/${room.image}/800/600`}
                alt={room.name}
                className="h-80 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="mb-2 flex gap-1">
                {Array.from({ length: room.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-1 text-sm text-body">${room.price}</p>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-ink">{room.name}</h3>
              <p className="mb-4 text-base leading-relaxed text-body">{room.description}</p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-brand underline transition-colors hover:text-brand-hover"
              >
                View Room Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
