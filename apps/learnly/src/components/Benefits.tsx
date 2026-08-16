import { Award, Laptop, Users } from 'lucide-react'
import { benefits, sectionHeadings } from '../data'

const icons = {
  laptop: Laptop,
  award: Award,
  users: Users,
} as const

export function Benefits() {
  return (
    <section id="about" aria-label="Benefits" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.learnAnythingSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.learnAnythingTitle}
          </h2>
        </div>

        <div className="mt-14 space-y-10">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon]
            return (
              <div key={benefit.title} className="flex flex-col items-start gap-6 sm:flex-row">
                <span
                  data-benefit-icon
                  className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-brand text-white"
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-medium text-ink">{benefit.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">{benefit.copy}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
