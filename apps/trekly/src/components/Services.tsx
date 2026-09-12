import { Compass, Navigation, User, MapPin } from 'lucide-react'
const services = [
  {
    icon: Compass,
    title: 'Activities',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Navigation,
    title: 'Travel Arrangement',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: User,
    title: 'Private Guide',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: MapPin,
    title: 'Location Manager',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-100 text-ocean-600 transition group-hover:bg-ocean-600 group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
