import { Shield, Award, CheckCircle, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Highly Trained Staff',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Award,
    title: 'Best Equipments',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: CheckCircle,
    title: '100% Warranty',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Zap,
    title: 'Fast & Effective Service',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Features() {
  return (
    <section aria-label="Features" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-400">
          Why Choose Us?
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <f.icon className="h-7 w-7 text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
