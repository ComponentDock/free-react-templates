import { Rocket, Settings, Building2, Phone } from 'lucide-react'
import { features } from '../data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Settings,
  Building2,
  Phone,
}

export function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-body">Top Features That Set Us Apart</h2>
          <p className="text-muted">Innovative design meets unmatched performance</p>
        </div>
        <div className="grid items-center gap-8 md:grid-cols-3">
          {/* Left column: 2 features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-body">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Center: product image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/bezel-product/400/500"
              alt="Featured smartwatch"
              className="rounded-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Right column: 2 features */}
          <div className="space-y-8">
            {features.slice(2).map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-body">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
