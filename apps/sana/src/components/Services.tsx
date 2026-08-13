import { HeartPulse, Siren, Stethoscope, Users } from 'lucide-react'

const services = [
  {
    icon: Siren,
    name: '24/7 Emergency',
    description: 'A dedicated emergency team ready around the clock with advanced life support.',
  },
  {
    icon: Stethoscope,
    name: 'Expert Consultation',
    description:
      'Specialist doctors across every major department, available for detailed consults.',
  },
  {
    icon: HeartPulse,
    name: 'Intensive Care',
    description: 'Modern intensive care units with continuous monitoring and attentive nursing.',
  },
  {
    icon: Users,
    name: 'Family Planning',
    description:
      'Compassionate guidance for every stage of family life, from planning to parenthood.',
  },
] as const

/** Four-column offered-services grid with brand-blue icons. */
export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-3xl font-bold text-ink-900">Our Offered Services</h2>
        <p className="mt-4 text-sm leading-6 text-mute-500">
          Complete medical services under one roof, delivered with modern technology and genuine
          compassion.
        </p>
      </div>
      <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, name, description }) => (
          <div key={name}>
            <Icon className="mx-auto h-9 w-9 text-primary-500" aria-hidden="true" />
            <h4 className="mt-5 text-lg font-medium text-ink-900 transition-colors hover:text-primary-500">
              {name}
            </h4>
            <p className="mt-3 text-sm leading-6 text-mute-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
