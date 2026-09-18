import { Shield, Sparkles, Heart } from 'lucide-react'

const SERVICES = [
  {
    icon: Shield,
    title: 'Periodontics',
    description:
      'Expert gum disease treatment and periodontal therapy to keep your gums healthy and strong.',
  },
  {
    icon: Sparkles,
    title: 'Tooth Whitening',
    description:
      'Professional teeth whitening treatments to brighten your smile and boost your confidence.',
  },
  {
    icon: Heart,
    title: 'Preventative Care',
    description:
      'Comprehensive check-ups, cleanings, and preventive treatments to maintain oral health.',
  },
]

export function ServicesIntro() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-100 p-8 text-center transition-colors hover:bg-paper"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <service.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
