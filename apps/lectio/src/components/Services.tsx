import { GraduationCap, Monitor, Code2, Network, Settings, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    icon: GraduationCap,
    title: 'Applied Studies',
    description:
      'Practical coursework designed to bridge theory and real-world application across disciplines.',
  },
  {
    icon: Monitor,
    title: 'Computer Engineering',
    description:
      'Hardware and software systems covering processors, embedded systems, and computing architectures.',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Full-stack development, agile methodologies, and modern software design patterns.',
  },
  {
    icon: Network,
    title: 'Information Engineering',
    description: 'Data systems, network architecture, and information management solutions.',
  },
  {
    icon: Settings,
    title: 'System Engineering',
    description: 'Complex system design, integration, and lifecycle management across industries.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual communication, branding, typography, and digital design fundamentals.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Our Training Centers</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-mist">
          We offer a wide range of courses across multiple disciplines, delivered by expert
          instructors with real-world experience.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-mist">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
