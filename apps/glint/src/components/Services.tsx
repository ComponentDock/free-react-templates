import { Shield, Zap, Sparkles, Heart, Smile, Activity } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Crowns Bridges',
    description: 'Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
  },
  {
    icon: Zap,
    title: 'Implants',
    description:
      'Phasellus vehicula tempus orci vel consequat. Nullam lorem sem, viverra a rutrum sed.',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
  },
  {
    icon: Heart,
    title: 'Root Canals',
    description:
      'Phasellus vehicula tempus orci vel consequat. Nullam lorem sem, viverra a rutrum sed.',
  },
  {
    icon: Smile,
    title: 'Wisdom Teeth',
    description: 'Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.',
  },
  {
    icon: Activity,
    title: 'Braces',
    description:
      'Nullam lorem sem, viverra a rutrum sed, gravida mattis magna. Suspendisse vitae commodo.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-ink">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <h4 className="mb-3 text-xl font-semibold text-ink">{service.title}</h4>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
