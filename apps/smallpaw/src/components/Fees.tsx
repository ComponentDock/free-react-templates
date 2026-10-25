import { cn } from '@free-react-templates/ui'
import { FEES, FEES_CALLOUT } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * The published fee guide. The wrapper is the only bordered table on the page
 * and the `thead` is the plum ground; both money columns are right-aligned
 * `tabular-nums` so the figures line up. The `On a plan` column carries three
 * shapes on purpose — `Included`, a discounted figure, and an em dash for the
 * one thing no plan covers.
 */
export function Fees() {
  return (
    <section id="fees" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <SectionHead
          align="left"
          variant="bar"
          eyebrow="Fee guide"
          title="What common things cost"
          lede="Published because the first question everyone wants to ask is the one they feel awkward asking on the phone."
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-primary-200">
            <table className="w-full text-left">
              <caption className="sr-only">
                Fees for common procedures, with the price on a health plan
              </caption>
              <thead className="bg-primary-700 text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 text-xs font-bold tracking-wider uppercase">
                    Item
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right text-xs font-bold tracking-wider uppercase"
                  >
                    Standard
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right text-xs font-bold tracking-wider uppercase"
                  >
                    On a plan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {FEES.map((row, index) => (
                  <tr key={row.item} className={cn(index > 0 && 'border-t border-primary-100')}>
                    <td className="px-5 py-4">
                      <span className="font-semibold text-gray-900">{row.item}</span>
                      <span className="mt-0.5 block text-sm text-gray-500">{row.detail}</span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums">
                      {row.standard}
                    </td>
                    <td className="px-5 py-4 text-right tabular-nums">
                      {row.dash ? (
                        <span className="text-gray-400">{row.plan}</span>
                      ) : (
                        <span className="font-semibold text-primary-700">{row.plan}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="mt-8 rounded-2xl border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-sm leading-relaxed text-gray-700">
          {FEES_CALLOUT}
        </p>
      </div>
    </section>
  )
}
