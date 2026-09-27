import { Shield, Home, DollarSign, Lock } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Trusted by Thousands',
    description: 'A trusted platform helping thousands find their perfect property every day.',
  },
  {
    icon: Home,
    title: 'Wide Range of Properties',
    description:
      'From cozy apartments to luxury estates — discover properties that match your lifestyle.',
  },
  {
    icon: DollarSign,
    title: 'Financing Made Easy',
    description: 'Flexible financing options to make your dream home a reality.',
  },
  {
    icon: Lock,
    title: 'Locked in Pricing',
    description: 'Transparent pricing with no hidden fees — what you see is what you pay.',
  },
]

export function Features() {
  return (
    <section className="bg-blue py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Trusted by Thousands</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-gray-200">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
