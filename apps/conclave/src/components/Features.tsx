import { Lightbulb, Network, Users } from 'lucide-react'
import { FEATURES } from '../data'

const ICON_MAP = {
  users: Users,
  lightbulb: Lightbulb,
  network: Network,
} as const

/* Features ('Why Join') section: white background, 3 cards with circular
   icon backgrounds, title, description, and two CTA buttons. */

export function Features() {
  return (
    <section id="features" className="bg-white py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Join
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-[#242424] md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Conclave Features
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP]
            return (
              <article key={feature.title} className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3b1d82] text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3
                  className="mt-6 text-xl font-bold uppercase tracking-wide text-[#242424]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#797979]">{feature.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center rounded-[4px] border-2 border-[#3b1d82] px-8 py-3 text-sm font-medium uppercase tracking-wider text-[#3b1d82] transition-all hover:bg-[#3b1d82] hover:text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Learn More
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-[4px] bg-[#ea0763] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#c90656]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </section>
  )
}
