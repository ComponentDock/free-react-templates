import { Award, BarChart3, Coins, Package } from 'lucide-react'
import { features } from '../data'

const icons = {
  coins: Coins,
  chart: BarChart3,
  award: Award,
  package: Package,
} as const

/** White features grid overlapping the hero behind a rotated slant band:
 *  eyebrow, uppercase heading with green underline, four feature columns
 *  with green icons and right border dividers. */
export function Features() {
  return (
    <>
      <div aria-hidden="true" className="slant relative z-[4] h-[70px]">
        <div className="slant-band absolute bottom-0 left-0 top-[-110px] w-[200%] -translate-x-[20%] rotate-[-5deg] bg-white" />
      </div>
      <section
        aria-label="Features"
        className="relative z-[5] -mt-[150px] bg-white pb-16 pt-10 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/50">
              Outstanding Services
            </p>
            <h2 className="heading-underline font-heading mt-3 inline-block pb-3 text-3xl font-semibold uppercase text-black">
              Love Us Verdant
            </h2>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {features.map((feature) => {
              const Icon = icons[feature.icon as keyof typeof icons]
              return (
                <li key={feature.title} className="px-6 text-center">
                  <Icon className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold uppercase text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{feature.blurb}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
