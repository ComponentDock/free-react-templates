import { Clock, Headset, Info } from 'lucide-react'
import { why } from '../data'

const icons = {
  clock: Clock,
  headset: Headset,
  info: Info,
} as const

export function WhyUs() {
  return (
    <section className="bg-white py-[102px]" id="why">
      <div className="mx-auto max-w-[1176px] px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-ink">{why.heading}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {why.cards.map((card) => {
            const Icon = icons[card.icon]
            return (
              <div key={card.title} className="group flex items-start gap-5">
                <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-[3px] border-brand text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-ink">{card.title}</h3>
                  <p className="text-sm leading-7 text-muted">{card.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href={why.cta.href}
            className="inline-block min-w-[257px] rounded-full bg-brand px-9 py-6 text-center text-sm font-semibold uppercase text-white transition-colors hover:bg-brand/90"
          >
            {why.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
