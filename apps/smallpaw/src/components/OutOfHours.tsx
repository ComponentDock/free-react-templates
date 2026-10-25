import { Phone } from 'lucide-react'
import { CONTACT, OUT_OF_HOURS } from '../data'

/**
 * The band the design exists for: the practice says out loud that it does not
 * staff its own overnight service, names who does, gives the address and
 * distance, and prints its own opening hours beside it — on `#6f284b`.
 */
export function OutOfHours() {
  return (
    <section
      id="out-of-hours"
      className="on-plum scroll-mt-24 bg-primary-800 py-14 text-primary-50"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold tracking-wider text-primary-900 uppercase">
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-800/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-900" />
              </span>
              {OUT_OF_HOURS.eyebrow}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
              {OUT_OF_HOURS.title}
            </h2>
            <p className="mt-3 leading-relaxed text-primary-200">{OUT_OF_HOURS.lede}</p>
          </div>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-3 rounded-2xl bg-accent-400 px-7 py-4 text-lg font-bold text-primary-900 transition-colors hover:bg-accent-300"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            {CONTACT.phoneLabel}
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl bg-primary-900/60 p-5 ring-1 ring-white/10">
            <p className="text-xs font-bold tracking-wider text-accent-300 uppercase">
              Where you would go
            </p>
            <p className="mt-2 text-lg font-bold text-white">{OUT_OF_HOURS.provider}</p>
            <p className="mt-1 text-sm text-primary-200">{OUT_OF_HOURS.providerAddress}</p>
            <p className="mt-3 inline-flex rounded-full bg-primary-700 px-3 py-0.5 text-xs font-medium text-primary-50">
              {OUT_OF_HOURS.distance}
            </p>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {OUT_OF_HOURS.schedule.map((cell) => (
              <div key={cell.hours} className="bg-primary-800 p-4">
                <dt className="text-xs font-bold tracking-wider text-accent-300 uppercase">
                  {cell.hours}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white">{cell.cover}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-200">
          {OUT_OF_HOURS.footnote}
        </p>
      </div>
    </section>
  )
}
