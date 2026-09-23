import { Landmark, Shield, Scale, Gavel, Plane, Home, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface PracticeArea {
  icon: LucideIcon
  title: string
  description: string
}

const areas: PracticeArea[] = [
  {
    icon: Landmark,
    title: 'Bankruptcy Law',
    description:
      'Expert guidance through bankruptcy proceedings, helping you understand your options and achieve the best possible outcome.',
  },
  {
    icon: Shield,
    title: 'Business Law',
    description:
      'Comprehensive business legal services including formation, contracts, compliance, and dispute resolution.',
  },
  {
    icon: Scale,
    title: 'Civil Rights Law',
    description:
      'Protecting your civil rights with dedicated advocacy in cases of discrimination, violations, and constitutional claims.',
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    description:
      'Strong defense representation for criminal charges, ensuring your rights are protected throughout the legal process.',
  },
  {
    icon: Plane,
    title: 'Immigration Law',
    description:
      'Assisting with visa applications, green cards, citizenship, and all immigration-related legal matters.',
  },
  {
    icon: Home,
    title: 'Family Law',
    description:
      'Compassionate legal support for family matters including divorce, custody, adoption, and domestic relations.',
  },
]

interface PracticeAreasProps {
  className?: string
}

export function PracticeAreas({ className }: PracticeAreasProps) {
  return (
    <section id="practice-areas" className={cn('bg-bg-light py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced legal team covers a wide range of practice areas to serve all your legal
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <area.icon size={28} className="text-brand" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
