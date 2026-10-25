import { channels } from '../content'
import { SectionHeading, containerClass } from './ui'

/** Bars are scaled against the largest channel, so 44 % draws full width. */
export function Channels() {
  return (
    <section id="channels" className="scroll-mt-28 border-y border-gray-200 bg-gray-50 py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={channels.kicker} title={channels.title} />

        <ul className="mt-12 divide-y divide-gray-200 border-t border-gray-200">
          {channels.rows.map((row) => (
            <li key={row.name} className="grid gap-4 py-6 lg:grid-cols-12 lg:items-center lg:gap-8">
              <div className="lg:col-span-3">
                <p className="text-base leading-6 font-semibold text-gray-900">{row.name}</p>
                <p className="text-sm leading-5 text-gray-500">{row.share}% of bookings</p>
              </div>
              <div className="lg:col-span-4">
                <div
                  className="h-8 overflow-hidden rounded-md bg-gray-100"
                  role="img"
                  aria-label={`${row.name}: ${row.share} percent of bookings`}
                >
                  <div className="h-full rounded-md bg-primary-700" style={{ width: `${row.fill}%` }} />
                </div>
              </div>
              <p className="text-sm leading-6 text-gray-600 lg:col-span-3">{row.blurb}</p>
              <p className="text-sm leading-5 lg:col-span-2 lg:text-right">
                <span className="font-medium text-accent-700">Setup:</span>{' '}
                <span className="text-gray-500">{row.setup}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 max-w-3xl space-y-2">
          <p className="text-sm leading-6 text-gray-500">{channels.note}</p>
          <p className="text-sm leading-6 text-gray-500">{channels.secondNote}</p>
        </div>
      </div>
    </section>
  )
}
