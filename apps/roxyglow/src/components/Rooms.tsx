import { Star } from 'lucide-react'

const rooms = [
  {
    name: 'Suite',
    price: '$120',
    image: 'https://picsum.photos/seed/roxyglow-room1/800/500',
    description: 'A spacious suite with panoramic views and premium amenities.',
  },
  {
    name: 'Family',
    price: '$150',
    image: 'https://picsum.photos/seed/roxyglow-room2/800/500',
    description: 'Perfect for families with connecting rooms and child-friendly features.',
  },
  {
    name: 'Deluxe',
    price: '$180',
    image: 'https://picsum.photos/seed/roxyglow-room3/800/500',
    description: 'Elegant deluxe room with modern decor and luxury bath.',
  },
  {
    name: 'Luxury',
    price: '$250',
    image: 'https://picsum.photos/seed/roxyglow-room4/800/500',
    description: 'The finest luxury experience with butler service and private terrace.',
  },
  {
    name: 'Superior',
    price: '$200',
    image: 'https://picsum.photos/seed/roxyglow-room5/800/500',
    description: 'Superior comfort with premium bedding and city views.',
  },
] as const

function GoldStars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand text-brand" />
      ))}
    </div>
  )
}

export function Rooms() {
  return (
    <section id="rooms" className="bg-paper-alt py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">RoxyGlow Rooms</h2>
          <p className="mt-2 text-lg text-mist">Hotel Master&apos;s Rooms</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="https://picsum.photos/seed/roxyglow-welcome/800/500"
              alt="Welcome to RoxyGlow"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-ink">Experience Luxury Living</h3>
            <p className="mt-4 text-mist">
              At RoxyGlow, we believe every guest deserves an extraordinary stay. Our rooms are
              designed with meticulous attention to detail, combining modern elegance with timeless
              comfort. From plush bedding to state-of-the-art amenities, every element is curated to
              exceed your expectations.
            </p>
            <p className="mt-4 text-mist">
              Whether you&apos;re here for business or pleasure, our dedicated team ensures your
              experience is nothing short of exceptional. Discover a new standard of hospitality.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`grid grid-cols-1 gap-0 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-64 w-full object-cover lg:h-80"
                />
              </div>
              <div
                className={`flex flex-col justify-center p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <GoldStars />
                <p className="mt-2 text-sm text-brand">{room.price}/night</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">{room.name}</h3>
                <p className="mt-2 text-mist">{room.description}</p>
                <a
                  href="#rooms"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                >
                  View Room Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
