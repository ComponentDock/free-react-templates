import { Rocket, Settings, Building2, Phone } from 'lucide-react'
import type { ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'High Performance',
    description: 'Experience lightning-fast processing with our latest chipset technology.',
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Smart Design',
    description: 'Precision-crafted materials meet ergonomic design for all-day comfort.',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Built to Last',
    description: 'Premium build quality with water resistance and scratch-proof glass.',
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Seamless Connect',
    description: 'Stay connected with calls, messages, and notifications on your wrist.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Top Features That Make Us Unique
          </h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src="https://picsum.photos/seed/ticktock-watch/500/300"
            alt="Smartwatch collection"
            className="rounded-xl object-cover shadow-md"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
