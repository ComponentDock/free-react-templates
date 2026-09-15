import { Compass, Ship, Car, Headphones } from 'lucide-react'

const services = [
  {
    Icon: Compass,
    title: 'Amazing Travel',
    description:
      'Discover breathtaking destinations around the world. We curate unforgettable experiences tailored to your wanderlust.',
  },
  {
    Icon: Ship,
    title: 'Our Cruises',
    description:
      'Sail across crystal waters on luxury cruises. From Mediterranean gems to tropical paradise routes.',
  },
  {
    Icon: Car,
    title: 'Book Your Trip',
    description:
      'Seamless booking from start to finish. Flights, hotels, and transfers all in one place.',
  },
  {
    Icon: Headphones,
    title: 'Nice Support',
    description:
      'Our dedicated team is available around the clock to assist you with any travel needs.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20" aria-label="Services">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(({ Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Icon size={32} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
