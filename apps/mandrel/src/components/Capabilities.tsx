import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { CAPABILITIES, CAPABILITIES_COPY, SECTORS } from '../content'
import { BandHeading, Container } from './ui'

/**
 * The argument band: seven trades down, five sectors across, a tick where we
 * have done the work and an honest em-dash where we have not. Every one of the
 * 35 cells also carries the same fact as a sentence, because a screen reader
 * cannot read a tick.
 */
export function Capabilities() {
  return (
    <section id="capabilities" className="section bg-white dark:bg-gray-950">
      <Container>
        <BandHeading
          eyebrow={CAPABILITIES_COPY.eyebrow}
          heading={CAPABILITIES_COPY.heading}
          lede={CAPABILITIES_COPY.lede}
        />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <caption className="sr-only">{CAPABILITIES_COPY.caption}</caption>
            <thead>
              <tr className="border-b-2 border-ink-200 dark:border-gray-700">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-white py-3.5 pl-0 pr-6 text-sm font-bold text-ink-400 dark:bg-gray-950 dark:text-gray-400"
                >
                  Capability
                </th>
                {SECTORS.map((sector) => (
                  <th
                    key={sector}
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-bold text-ink-600 dark:text-gray-300"
                  >
                    {sector}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAPABILITIES.map((capability) => (
                <tr
                  key={capability.name}
                  className="border-b border-ink-100 last:border-b-0 dark:border-gray-800"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white py-3.5 pl-0 pr-6 text-base font-semibold text-ink-800 dark:bg-gray-950 dark:text-white"
                  >
                    {capability.name}
                  </th>
                  {SECTORS.map((sector) => {
                    const has = capability.sectors.includes(sector)
                    return (
                      <td
                        key={sector}
                        data-cell={has ? 'yes' : 'no'}
                        className="px-3 py-3.5 text-center align-middle"
                      >
                        <span className="sr-only">{`${capability.name} in ${sector}: ${has ? 'yes' : 'no'}`}</span>
                        {has ? (
                          <Check
                            aria-hidden="true"
                            className={cn('mx-auto h-5 w-5 text-primary-600 dark:text-primary-400')}
                            strokeWidth={2.6}
                          />
                        ) : (
                          <span aria-hidden="true" className="text-ink-200 dark:text-gray-600">
                            &mdash;
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-400 dark:text-gray-400">
          {CAPABILITIES_COPY.footnote}
        </p>
      </Container>
    </section>
  )
}
