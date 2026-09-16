import { HardHat, Shield, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: HardHat,
    title: 'Quality Construction',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Shield,
    title: 'Professional Liability',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Users,
    title: 'Dedicated To Our Clients',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function FeaturesStrip() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-400/10 rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
