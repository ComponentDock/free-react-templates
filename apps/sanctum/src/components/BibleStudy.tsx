import { ButtonLink } from '@free-react-templates/ui'
import { bibleStudy } from '../data'

export function BibleStudy() {
  const { heading, description, countdown, ctaLabel } = bibleStudy

  return (
    <section className="bg-brand py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-white">{heading}</h3>
            <p className="mt-2 text-sm text-white/80">{description}</p>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.mins, label: 'Mins' },
                { value: countdown.secs, label: 'Secs' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="block text-2xl font-bold text-white">{item.value}</span>
                  <span className="text-xs text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
            <ButtonLink
              href="#events"
              className="rounded-[2px] bg-white px-6 py-3 text-xs font-bold uppercase tracking-[1px] text-brand transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
