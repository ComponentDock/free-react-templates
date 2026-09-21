import { Scale, Gavel, Building2, Shield } from 'lucide-react'

const features = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    description:
      'Our experienced legal team provides counsel across all areas of law with proven results.',
    bg: 'bg-dark-1',
  },
  {
    icon: Gavel,
    title: 'Case Dismissed',
    description:
      'We build strong defense strategies that protect your interests and dismiss charges.',
    bg: 'bg-dark-2',
  },
  {
    icon: Building2,
    title: 'Court Performance',
    description: 'Skilled courtroom advocacy that delivers favorable outcomes in every hearing.',
    bg: 'bg-dark-3',
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Comprehensive legal safeguards for your family, business, and personal assets.',
    bg: 'bg-dark-4',
  },
]

export function IntroStrip() {
  return (
    <section className="relative z-10 -mt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className={`flex items-center gap-4 p-6 ${f.bg} text-white`}>
            <f.icon className="h-10 w-10 flex-shrink-0 text-gold" />
            <div>
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-white/70">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
