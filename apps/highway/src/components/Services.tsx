import { Headphones, MapPin, CalendarDays, Car } from 'lucide-react'

const services = [
  {
    icon: Headphones,
    title: '24/7 Car Support',
    desc: 'Round the clock assistance for all your rental needs and questions.',
  },
  {
    icon: MapPin,
    title: 'Lots of Location',
    desc: 'Pick up and drop off your car at any of our convenient locations.',
  },
  {
    icon: CalendarDays,
    title: 'Reservation',
    desc: 'Book your vehicle in advance and ensure availability when you need it.',
  },
  {
    icon: Car,
    title: 'Rental Cars',
    desc: 'Wide selection of well-maintained vehicles for every occasion.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div key={svc.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svc.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-heading">{svc.title}</h3>
              <p className="text-sm text-body">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
