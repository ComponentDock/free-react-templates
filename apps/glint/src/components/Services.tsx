import { Crown, SmilePlus, Sparkles, Stethoscope, Heart, Gem } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Crown,
    title: 'Crowns & Bridges',
    description:
      'Restore your smile with custom crowns and bridges designed to match your natural teeth perfectly.',
  },
  {
    icon: Gem,
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement solutions that look, feel, and function just like natural teeth.',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description:
      'Professional whitening treatments to brighten your smile by several shades in just one visit.',
  },
  {
    icon: Stethoscope,
    title: 'Root Canals',
    description:
      'Painless root canal therapy to save damaged teeth and relieve discomfort quickly.',
  },
  {
    icon: Heart,
    title: 'Wisdom Teeth',
    description:
      'Safe and efficient removal of impacted or problematic wisdom teeth with minimal recovery time.',
  },
  {
    icon: SmilePlus,
    title: 'Braces',
    description:
      'Modern orthodontic solutions including clear aligners and traditional braces for all ages.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-ink">Our Services</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-smoke">
          We offer a wide range of dental services to keep your smile healthy and beautiful.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="mb-4 h-10 w-10 text-primary-400" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-smoke">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
