import { Heart, PersonStanding, Salad, Scale, Users, type LucideIcon } from 'lucide-react'
import { SERVICE_CARDS } from '../data'

const SERVICE_ICONS: LucideIcon[] = [Heart, Scale, Users, Salad, PersonStanding]

/* Services — centered "Sexy & Healthy / Get a Perfect Body" heading and
   five icon cards in a row. */
export function ServicesSection() {
  return (
    <section id="services-section" aria-label="Services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Sexy &amp; Healthy
          </span>
          <h2 className="mt-2 text-4xl font-bold text-black">Get a Perfect Body</h2>
          <p className="mt-4 text-black/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = SERVICE_ICONS[i]!
            return (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-full border border-gray-100 bg-white px-4 py-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-base font-bold text-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{card.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
