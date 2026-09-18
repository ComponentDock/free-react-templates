import { RotateCcw, Package, Award } from 'lucide-react'

const SERVICES = [
  {
    icon: RotateCcw,
    title: 'Refund Policy',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Package,
    title: 'Premium Packaging',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Award,
    title: 'Superior Quality',
    description: 'Blind texts are separated bookmarks in the morning, and the power of the return.',
  },
]

export function Services() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
