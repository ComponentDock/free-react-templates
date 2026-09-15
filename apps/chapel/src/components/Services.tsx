import { Flame, Heart, Eye } from 'lucide-react'
import { services } from '../data'

const iconMap = {
  flame: Flame,
  eye: Eye,
  heart: Heart,
} as const

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.title} className="text-center">
                <h4 className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-ink">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  {s.title}
                </h4>
                <p className="text-sm text-body">{s.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {s.readmoreLabel} →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
