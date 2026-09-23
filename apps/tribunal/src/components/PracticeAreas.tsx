import { Scale, Heart, Shield, Building2, Handshake, Users } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface PracticeArea {
  icon: React.ElementType
  title: string
  description: string
}

const areas: PracticeArea[] = [
  {
    icon: Scale,
    title: 'Case Investigation',
    description:
      'We conduct thorough investigations to build a strong foundation for your case, ensuring every detail is examined.',
  },
  {
    icon: Heart,
    title: 'Personal Injury',
    description:
      "Our experienced team fights for the compensation you deserve after an injury caused by another's negligence.",
  },
  {
    icon: Users,
    title: 'Legal Counseling',
    description:
      'Receive expert legal advice tailored to your unique situation from our team of seasoned attorneys.',
  },
  {
    icon: Building2,
    title: 'Civil Litigation',
    description:
      'We represent clients in civil disputes with a strategic approach to achieve the best possible outcomes.',
  },
  {
    icon: Handshake,
    title: 'Business Law',
    description:
      'Comprehensive legal solutions for businesses of all sizes, from formation to complex commercial transactions.',
  },
  {
    icon: Shield,
    title: 'Insurance Defense',
    description:
      'Strong defense representation for insurance companies and policyholders in coverage disputes and claims.',
  },
]

interface PracticeAreasProps {
  className?: string
}

export function PracticeAreas({ className }: PracticeAreasProps) {
  return (
    <section id="practice-areas" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.title} className="text-center p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-brand/10 rounded-full mx-auto mb-6">
                <area.icon className="text-brand" size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3">{area.title}</h3>
              <p className="text-text-muted leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
