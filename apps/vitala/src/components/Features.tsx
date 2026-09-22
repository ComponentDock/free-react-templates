import { Siren, CalendarClock, Stethoscope } from 'lucide-react'

const features = [
  {
    icon: Siren,
    title: 'Emergency Services',
    description:
      'Round-the-clock emergency care with rapid response teams and fully equipped ambulances ready to serve you 24/7.',
    cta: { label: 'Call Us: 215 - 3695 - 9584', href: 'tel:+9530123654896' },
  },
  {
    icon: CalendarClock,
    title: 'Doctors Schedule',
    description:
      'View and book appointments with our experienced doctors across multiple specialties at your convenience.',
    cta: { label: 'Learn More', href: '#about' },
  },
  {
    icon: Stethoscope,
    title: 'Online Appointment',
    description:
      'Schedule your visit online with our easy booking system. Choose your doctor, pick a time, and confirm.',
    cta: { label: 'Get Appointment', href: '#appointment' },
  },
]

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-gray-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-400">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              <a
                href={feature.cta.href}
                className="text-sm font-medium text-sky-400 transition-colors hover:text-sky-600"
              >
                {feature.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
