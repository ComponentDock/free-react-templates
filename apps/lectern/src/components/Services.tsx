import { Brush, Building2, Users, GraduationCap, CalendarClock, FlaskConical } from 'lucide-react'

const services = [
  { icon: Brush, title: 'Art Studio' },
  { icon: Building2, title: 'Great Facility' },
  { icon: Users, title: 'Activity Hub' },
  { icon: GraduationCap, title: 'Fully Qualified' },
  { icon: CalendarClock, title: 'Flexible Schedule' },
  { icon: FlaskConical, title: 'Chemistry Lab' },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Services
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <service.icon className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="text-lg font-bold text-ink dark:text-white">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
