import { Users, Award, Siren, Clock } from 'lucide-react'
import { whyFeatures, whyTitle } from '../data'

const iconMap = {
  Users,
  Award,
  Siren,
  Clock,
} as const

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{whyTitle}</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyFeatures.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon aria-hidden="true" className="h-7 w-7 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-heading">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
