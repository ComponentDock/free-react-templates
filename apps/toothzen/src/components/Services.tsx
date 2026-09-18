import { Stethoscope, UserCheck, Pill, CalendarClock } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Emergency Service',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: UserCheck,
    title: 'Qualified Dentist',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Pill,
    title: 'General Treatment',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: CalendarClock,
    title: 'Online Appointment',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Services() {
  return (
    <section className="bg-tooth-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative -mt-16 rounded-lg bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-tooth-teal-light">
                <Icon className="h-8 w-8 text-tooth-teal" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-tooth-dark-blue">{title}</h3>
              <p className="text-sm text-tooth-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
