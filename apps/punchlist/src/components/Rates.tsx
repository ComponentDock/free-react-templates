import { RATES, RATES_COPY } from '../content'
import { BandHeading, Container } from './ui'

/**
 * The band that is the template: eight jobs with a `From` figure and a typical
 * range, in a shell with a slate head. Below `sm` each row stacks — job, then
 * what it covers, then the two figures on one line — so no price is ever
 * clipped (the reference loses its `From` column at 320 px).
 */
export function Rates() {
  return (
    <section id="rates" className="section bg-white dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-5xl">
          <BandHeading
            pill={RATES_COPY.pill}
            heading={RATES_COPY.heading}
            lede={RATES_COPY.lede}
            centered
          />

          <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <table className="block w-full text-left sm:table">
              <caption className="sr-only">
                {RATES_COPY.heading} — from prices and typical ranges
              </caption>
              <thead className="hidden bg-accent-900 text-white sm:table-header-group">
                <tr>
                  <th
                    scope="col"
                    className="w-[42%] px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wider"
                  >
                    {RATES_COPY.columns.job}
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wider"
                  >
                    {RATES_COPY.columns.covers}
                  </th>
                  <th
                    scope="col"
                    className="w-24 whitespace-nowrap px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wider"
                  >
                    {RATES_COPY.columns.from}
                  </th>
                  <th
                    scope="col"
                    className="w-32 whitespace-nowrap px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wider"
                  >
                    {RATES_COPY.columns.typical}
                  </th>
                </tr>
              </thead>
              <tbody className="block bg-white sm:table-row-group dark:bg-gray-950">
                {RATES.map((rate) => (
                  <tr
                    key={rate.job}
                    className="flex flex-wrap border-t border-gray-100 px-5 py-4 sm:table-row sm:px-0 sm:py-0 dark:border-gray-800"
                  >
                    <th
                      scope="row"
                      className="order-1 w-full text-base font-semibold leading-6 text-gray-900 sm:table-cell sm:w-auto sm:px-5 sm:py-4 sm:align-top dark:text-white"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        {rate.job}
                        {rate.popular ? (
                          <span className="inline-flex items-center rounded bg-primary-100 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-3 tracking-wider text-primary-800">
                            {RATES_COPY.popular}
                          </span>
                        ) : null}
                      </span>
                    </th>
                    <td className="order-2 w-full text-sm leading-5 text-gray-600 sm:table-cell sm:px-5 sm:py-4 sm:align-top dark:text-gray-300">
                      {rate.covers}
                    </td>
                    <td className="order-3 mr-3 mt-2 text-base font-bold tabular-nums leading-6 text-primary-700 sm:mr-0 sm:mt-0 sm:table-cell sm:w-24 sm:whitespace-nowrap sm:px-5 sm:py-4 sm:align-top dark:text-primary-300">
                      {rate.from}
                    </td>
                    <td className="order-4 mt-2 text-sm leading-6 text-gray-600 tabular-nums sm:mt-0 sm:table-cell sm:w-32 sm:whitespace-nowrap sm:px-5 sm:py-4 sm:align-top dark:text-gray-300">
                      {rate.typical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-l-4 border-primary-500 bg-primary-50 px-5 py-4 text-sm leading-6 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
              {RATES_COPY.footnote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
