import { Scale, Briefcase, Gavel, Shield } from 'lucide-react'

interface FeatureCard {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  title: string
  description: string
  bgClass: string
}

const cards: FeatureCard[] = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    description:
      'Our team of expert attorneys has decades of combined experience in various areas of law.',
    bgClass: 'bg-[#2a2a2a]',
  },
  {
    icon: Briefcase,
    title: 'Case Dismissed',
    description:
      'We have a proven track record of successfully getting cases dismissed in favor of our clients.',
    bgClass: 'bg-[#222222]',
  },
  {
    icon: Gavel,
    title: 'Court Performance',
    description:
      'Our attorneys perform brilliantly in court, presenting compelling arguments and evidence.',
    bgClass: 'bg-[#1a1a1a]',
  },
  {
    icon: Shield,
    title: 'Client Satisfaction',
    description:
      'We are committed to achieving the best possible outcomes and keeping our clients informed.',
    bgClass: 'bg-[#111111]',
  },
]

export function FeatureStrip() {
  return (
    <section aria-label="Feature strip" className="py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={`${card.title}-${card.bgClass}`}
              className={`flex flex-col items-center px-6 py-10 text-center ${card.bgClass}`}
            >
              <Icon className="mb-4 h-12 w-12 text-[#c5a55a]" aria-hidden={true} />
              <h3 className="mb-2 text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[#b2b2b8]">{card.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
