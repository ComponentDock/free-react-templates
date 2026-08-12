import {
  Activity,
  Baby,
  HeartPulse,
  Scan,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const services: ReadonlyArray<{ title: string; blurb: string; icon: LucideIcon }> = [
  {
    title: 'Dental Implants',
    blurb: 'Permanent, natural-looking replacements that restore your smile and your bite.',
    icon: ShieldCheck,
  },
  {
    title: 'Cosmetic Dentistry',
    blurb: 'Whitening, veneers and smile design tailored to the face you want to show the world.',
    icon: Sparkles,
  },
  {
    title: 'Dental Care',
    blurb: 'Gentle check-ups and cleanings that keep small problems from ever becoming big ones.',
    icon: HeartPulse,
  },
  {
    title: 'Teeth Whitening',
    blurb: 'Safe in-office and take-home whitening for a brighter smile in as little as one visit.',
    icon: Smile,
  },
  {
    title: 'Dental Calculus',
    blurb: 'Professional scaling and polishing that removes hardened plaque and stains.',
    icon: Activity,
  },
  {
    title: 'Periodontics',
    blurb: 'Expert treatment for gum disease to protect the foundation your teeth stand on.',
    icon: Scan,
  },
  {
    title: 'Clip & Braces',
    blurb: 'Modern orthodontics — from classic braces to clear aligners for all ages.',
    icon: Baby,
  },
  {
    title: 'Root Canal',
    blurb: 'Comfortable, precise endodontic care that saves teeth instead of extracting them.',
    icon: Stethoscope,
  },
]

/** "Our Clinic Services" — eight icon cards in a 4-column grid (the source
    .ftco-services block). */
export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="Services"
          title="Our Clinic Services"
          intro="Everything your smile needs, delivered by specialists who genuinely care about your comfort."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/5">
                  <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-normal text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
