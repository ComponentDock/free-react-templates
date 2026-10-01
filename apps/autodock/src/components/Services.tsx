import { Car, Droplets, Navigation, ShieldCheck, UserCheck, Wrench } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const SERVICES = [
  {
    title: 'Rental Car',
    icon: Car,
    text: 'A wide range of cars for city trips, business meetings, and weekend getaways.',
  },
  {
    title: 'Car Repair',
    icon: Wrench,
    text: 'Certified mechanics keep our fleet road-ready with fast, transparent repairs.',
  },
  {
    title: 'Taxi Service',
    icon: Navigation,
    text: 'Book a licensed driver for airport runs, meetings, or a night out in town.',
  },
  {
    title: 'Life Insurance',
    icon: ShieldCheck,
    text: 'Optional coverage that protects you and your passengers on every journey.',
  },
  {
    title: 'Car Wash',
    icon: Droplets,
    text: 'Interior deep-clean and exterior wash before every single handover.',
  },
  {
    title: 'Call Driver',
    icon: UserCheck,
    text: 'Need a chauffeur? Call us and a professional driver arrives at your address.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Our services" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-line bg-white p-8 text-center transition-shadow hover:shadow-lg"
            >
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold uppercase text-ink">{service.title}</h3>
              <p className="mt-3 text-sm text-muted">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
