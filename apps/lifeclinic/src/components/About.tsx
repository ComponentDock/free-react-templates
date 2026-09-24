import { Stethoscope, Baby, FlaskConical, HeartPulse } from 'lucide-react'
import { aboutTitle, aboutDescription, aboutLearnMore, aboutServices } from '../data'

const iconMap = {
  stethoscope: Stethoscope,
  baby: Baby,
  'flask-conical': FlaskConical,
  'heart-pulse': HeartPulse,
} as const

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-heading">{aboutTitle}</h2>
        <p className="mt-4 max-w-3xl text-muted">{aboutDescription}</p>
        <a
          href="#services"
          className="mt-4 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-hover"
        >
          {aboutLearnMore}
        </a>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {aboutServices.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="flex items-start gap-4 rounded-lg border border-card-border p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-heading">{service.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
