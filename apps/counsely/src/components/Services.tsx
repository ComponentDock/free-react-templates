import { ArrowRight, Briefcase, Gavel, Scale } from 'lucide-react'
import { services } from '../data'

const iconMap = {
  Scale,
  Briefcase,
  Gavel,
} as const

/** Split services section: left heading column with a CTA and three cards
 *  with 100px circular icons; each card reveals a gold circle arrow on
 *  hover. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {services.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-ink">{services.headline}</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-body">{services.description}</p>
          <a
            href={services.cta.href}
            className="mt-8 inline-block rounded bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand/90"
          >
            {services.cta.label}
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {services.cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <article key={card.title} className="group relative pb-12 pt-4 text-center">
                <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-black/5">
                  <Icon className="h-[30px] w-[30px] text-brand" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-3 px-2 text-sm leading-relaxed text-slate-body">
                  {card.description}
                </p>
                <span className="absolute bottom-0 left-1/2 flex h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
