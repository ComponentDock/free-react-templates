import { Building2, Users, ShieldAlert, Home, Heart, Gavel } from 'lucide-react'

interface PracticeArea {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  title: string
  description: string
}

const areas: PracticeArea[] = [
  {
    icon: Building2,
    title: 'Business Law',
    description:
      'Comprehensive legal solutions for businesses of all sizes, from startups to corporations.',
  },
  {
    icon: Users,
    title: 'Family Law',
    description:
      'Compassionate guidance through divorce, custody, adoption, and other family legal matters.',
  },
  {
    icon: ShieldAlert,
    title: 'Criminal Law',
    description: 'Aggressive defense strategies to protect your rights in criminal proceedings.',
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description:
      'Expert counsel on property transactions, disputes, and real estate regulatory compliance.',
  },
  {
    icon: Heart,
    title: 'Personal Injury',
    description:
      'Dedicated representation to secure fair compensation for your injuries and losses.',
  },
  {
    icon: Gavel,
    title: 'Judicial Law',
    description:
      'Skilled courtroom advocacy and thorough preparation for litigation and trial proceedings.',
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" aria-labelledby="practice-heading" className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="practice-heading"
          className="font-heading mb-12 text-center text-3xl font-bold text-[#1a1a2e]"
        >
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="rounded border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-4 h-10 w-10 text-[#c5a55a]" aria-hidden={true} />
                <h3 className="mb-2 text-lg font-bold text-[#1a1a2e]">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[#666666]">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
