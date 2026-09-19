import { MapPin, Users, Home, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Find Places Anywhere In The World',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Users,
    title: 'We Have Agents With Experience',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Home,
    title: 'Buy & Rent Modern Properties',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: TrendingUp,
    title: 'Making Money',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Services() {
  return (
    <section id="about" className="bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
