import { cn } from '@free-react-templates/ui'
import { Siren, HeartPulse, Activity, Microscope, Shield, Users } from 'lucide-react'

interface FeaturesProps {
  className?: string
}

const features = [
  {
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency dental care when you need it most.',
    Icon: Siren,
  },
  {
    title: 'Expert Consultation',
    description: 'Personalized consultations with experienced dental specialists.',
    Icon: HeartPulse,
  },
  {
    title: 'X-Ray Service',
    description: 'Advanced digital X-ray technology for accurate diagnostics.',
    Icon: Activity,
  },
  {
    title: 'Dental Science',
    description: 'Cutting-edge dental science and evidence-based treatments.',
    Icon: Microscope,
  },
  {
    title: 'Intensive Care',
    description: 'Comprehensive intensive care for complex dental procedures.',
    Icon: Shield,
  },
  {
    title: 'Family Planning',
    description: 'Complete dental care planning for the whole family.',
    Icon: Users,
  },
]

export function Features({ className }: FeaturesProps) {
  return (
    <section className={cn('py-16 px-4 bg-white', className)} data-testid="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">
          Features that make us unique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="flex items-start gap-4 p-4">
              <div className="bg-brand/10 rounded-lg p-3 flex-shrink-0">
                <feat.Icon className="text-brand" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">{feat.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
