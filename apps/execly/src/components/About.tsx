import { Diamond, Phone } from 'lucide-react'
import { about } from '../data'

const iconMap = { Diamond, Phone } as const

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/execly-about/800/600"
              alt="Interior design showcase"
              className="h-auto w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6 text-3xl font-semibold leading-tight text-heading md:text-4xl">
              {about.title}
            </h1>
            <p className="mb-8 text-body-text">{about.description}</p>
            <div className="flex flex-col gap-8 sm:flex-row">
              {about.features.map((feature) => {
                const Icon = iconMap[feature.icon]
                return (
                  <div key={feature.title} className="flex-1">
                    <Icon className="mb-4 text-brand" size={32} />
                    <h4 className="mb-3 text-lg font-semibold text-heading">{feature.title}</h4>
                    <p className="text-sm text-body-text">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
