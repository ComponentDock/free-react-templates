import { Briefcase, Cake, Calendar, Gift, PartyPopper, Truck } from 'lucide-react'

const services = [
  {
    icon: Gift,
    title: 'Birthday Catering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Cake,
    title: 'Wedding Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: PartyPopper,
    title: 'Party Catering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Calendar,
    title: 'Event Catering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Truck,
    title: 'Catering On Demand',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We provide exceptional catering services for all occasions. Our experienced team ensures
            every event is a memorable culinary experience.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <Icon className="h-8 w-8 text-primary-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-500">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
