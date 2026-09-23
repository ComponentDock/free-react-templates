import { Heart, Shield, Car } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface PracticeArea {
  icon: React.ElementType
  title: string
  description: string
}

const areas: PracticeArea[] = [
  {
    icon: Heart,
    title: 'Health Law',
    description:
      'Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.',
  },
  {
    icon: Shield,
    title: 'Insurance Law',
    description:
      'Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.',
  },
  {
    icon: Car,
    title: 'Vehicle Accident',
    description:
      'Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.',
  },
]

interface PracticeAreasProps {
  className?: string
}

export function PracticeAreas({ className }: PracticeAreasProps) {
  return (
    <section id="services" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-0.5 bg-brand" />
            <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
              Our Practicing area
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading leading-tight">
            Area Of Practice That Can Help You To Win
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="border border-border-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-brand/10 rounded-full mb-6">
                <area.icon className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-heading mb-3">
                {area.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">{area.description}</p>
              <a
                href="#"
                className="text-brand text-sm font-semibold hover:text-brand-dark transition-colors"
              >
                Read More &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
