import { Globe, Server, Smartphone, BookUser, Headset, Megaphone } from 'lucide-react'
import { features } from '../data'

const icons = {
  globe: Globe,
  server: Server,
  smartphone: Smartphone,
  contacts: BookUser,
  headset: Headset,
  megaphone: Megaphone,
} as const

/** Features section (reference `.features-section.spad`): centered rocket
 *  icon + eyebrow + headline, then six feature cards in a 3-column grid,
 *  each with a circular magenta icon medallion. */
export function Features() {
  return (
    <section id="services" aria-label="See our features" className="bg-white py-[105px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-20 text-center">
          <Globe className="mx-auto h-10 w-10 text-primary-600" aria-hidden="true" />
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-eyebrow uppercase">
            The best out there
          </p>
          <h2 className="mt-2 font-heading text-5xl font-bold text-ink">See our features</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, text }) => {
            const Icon = icons[icon]
            return (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-[87px] w-[87px] items-center justify-center rounded-full bg-primary-600">
                  <Icon className="h-10 w-10 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-heading text-3xl font-semibold text-ink">{title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-body-gray">
                  {text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
