import { Zap, Settings, Building2, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description:
      'Lightning-fast processing power keeps everything running smoothly throughout your day.',
  },
  {
    icon: Settings,
    title: 'Smart Controls',
    description: 'Intuitive touch controls and customizable watch faces put you in command.',
  },
  {
    icon: Building2,
    title: 'Premium Build',
    description: 'Crafted from aerospace-grade materials for durability that lasts.',
  },
  {
    icon: Smartphone,
    title: 'Seamless Sync',
    description: 'Instant connection with all your devices for a unified experience.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Top Features</h2>
          <p className="text-gray-500">What makes our smartwatch stand out</p>
        </div>
        <div className="grid items-center gap-8 md:grid-cols-3">
          {/* Left column — 2 features */}
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Center — product image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/wristly-watch/360/400"
              alt="Wristly smartwatch product shot"
              className="w-full max-w-xs rounded-xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right column — 2 features */}
          <div className="flex flex-col gap-8">
            {features.slice(2).map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <Icon className="mb-3 h-8 w-8 text-brand-500" />
      <h4 className="mb-2 font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}
