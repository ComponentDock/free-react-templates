import { BarChart3, Link, Target, type LucideIcon } from 'lucide-react'
import { features, type FeatureIcon } from '../data'

const iconMap: Record<FeatureIcon, LucideIcon> = {
  analysis: BarChart3,
  target: Target,
  backlinks: Link,
}

export function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-[1250px] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/20 px-5 py-1.5 text-[10px] font-bold tracking-widest text-accent uppercase">
            {features.pill}
          </span>
          <h2 className="mt-4 mb-5 text-4xl font-bold text-brand">{features.heading}</h2>
          <p className="text-lg leading-relaxed text-body">{features.subline}</p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {features.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="text-center">
                <div className="relative mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-10 w-10 rounded-full bg-accent/50"
                  />
                  <Icon className="relative h-[50px] w-[50px] text-brand" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand">{item.title}</h3>
                <p className="leading-relaxed text-body">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
