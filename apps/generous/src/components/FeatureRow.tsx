import { BriefcaseMedical, HeartHandshake, Users } from 'lucide-react'
import { features } from '../data'

const icons = {
  medical: BriefcaseMedical,
  donate: HeartHandshake,
  volunteers: Users,
}

export function FeatureRow() {
  return (
    <section aria-label="Features" className="site-section py-10 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons]
          return (
            <div key={feature.title} className="media block-6 flex flex-col items-start gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
              <p className="font-light text-gray-500">{feature.text}</p>
              <a
                href="#about"
                className="text-sm font-medium text-primary transition-colors hover:text-primary-700"
              >
                Learn More
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
