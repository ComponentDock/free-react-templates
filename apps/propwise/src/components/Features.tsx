import { Users, Briefcase, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Technicians',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: Briefcase,
    title: 'Professional Service',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
  {
    icon: HeartHandshake,
    title: 'Great Support',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and power.',
  },
] as const

export function Features() {
  return (
    <section id="service" className="bg-bg-alt py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">Why we are the best</h2>
          <p className="mt-3 text-sm text-body">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-heading">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
