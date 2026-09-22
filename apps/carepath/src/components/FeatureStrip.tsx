import { HeartPulse, Stethoscope, CalendarCheck } from 'lucide-react'

const features = [
  {
    icon: HeartPulse,
    title: 'Primary Care',
    description:
      'Land meat winged called subdue without very light in all years sea appear midst forth image him.',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Cases',
    description:
      'Land meat winged called subdue without very light in all years sea appear midst forth image him.',
  },
  {
    icon: CalendarCheck,
    title: 'Online Appointment',
    description:
      'Land meat winged called subdue without very light in all years sea appear midst forth image him.',
  },
]

export function FeatureStrip() {
  return (
    <section className="bg-light-bg py-16" aria-label="Features">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded bg-white p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                <feature.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-heading">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-body-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
