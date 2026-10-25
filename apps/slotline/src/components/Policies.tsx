import { cn } from '@free-react-templates/ui'
import { policies, type RungTone } from '../content'
import { SectionHeading, containerClass } from './ui'

const pillClass: Record<RungTone, string> = {
  sage: 'bg-accent-100 text-accent-900',
  plum: 'bg-primary-100 text-primary-900',
  ink: 'bg-gray-900 text-white',
}

/** Refund, deposit, half price, full price — the escalation is the colour. */
export function Policies() {
  return (
    <section id="policies" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={policies.kicker} title={policies.title} />

        <p className="mt-10 text-xs font-semibold tracking-[0.16em] text-gray-400 uppercase">{policies.ladderLabel}</p>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {policies.rungs.map((rung) => (
            <li key={rung.title} className="rounded-xl border border-gray-200 p-6">
              <span
                className={cn(
                  'inline-flex rounded-full px-3 py-1 text-xs leading-4 font-semibold',
                  pillClass[rung.tone],
                )}
              >
                {rung.pill}
              </span>
              <h3 className="mt-4 font-serif text-xl leading-7 font-semibold text-gray-900">{rung.title}</h3>
              <p className="mt-2 text-sm leading-5 text-gray-600">{rung.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-xs font-semibold tracking-[0.16em] text-gray-400 uppercase">{policies.settingsLabel}</p>

        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.settings.map((setting) => (
            <div key={setting.label} className="border-t border-gray-200 pt-4">
              <dt className="flex items-baseline justify-between gap-3 text-sm leading-5 font-medium text-gray-900">
                {setting.label}
                <span className="text-sm leading-5 font-semibold text-accent-700 tabular-nums">{setting.value}</span>
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-600">
                Applied to every new booking on every calendar.
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-3xl text-sm leading-6 text-gray-600">{policies.closing}</p>
      </div>
    </section>
  )
}
