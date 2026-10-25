import { cn } from '@free-react-templates/ui'
import { COMPARE_ROWS, compare } from '../content'
import type { CompareRow } from '../content'
import { SectionHeading, containerClass, sectionClass } from './ui'

const MOBILE_LABEL = 'block text-xs leading-4 font-bold tracking-[0.4px] uppercase md:hidden'

function Cell({ side, text, emphatic }: { side: 'relining' | 'openCut'; text: string; emphatic: boolean }) {
  return (
    <div className="md:col-span-4">
      <span
        className={cn(
          MOBILE_LABEL,
          side === 'relining' ? 'text-primary-700' : 'text-ink-400',
        )}
      >
        {compare.columns[side]}
      </span>
      <p
        className={cn(
          'mt-1 text-base leading-6 md:mt-0',
          emphatic ? 'font-semibold text-ink-800 dark:text-white' : 'text-ink-500 dark:text-gray-400',
        )}
      >
        {text}
      </p>
    </div>
  )
}

export function ComparisonRow({ row, index }: { row: CompareRow; index: number }) {
  return (
    <div
      data-testid="compare-row"
      data-winner={row.winner}
      className={cn(
        'grid gap-3 px-6 py-5 md:grid-cols-12 md:gap-6',
        index % 2 === 1 ? 'bg-ink-50/60 dark:bg-gray-900/60' : '',
      )}
    >
      <p className="text-base leading-6 font-semibold text-ink-800 md:col-span-4 dark:text-white">
        {row.label}
      </p>
      <Cell side="relining" text={row.relining} emphatic={row.winner === 'relining'} />
      <Cell side="openCut" text={row.openCut} emphatic={row.winner === 'openCut'} />
    </div>
  )
}

export function Compare() {
  return (
    <section id="compare" className={`bg-white ${sectionClass} dark:bg-gray-950`}>
      <div className={containerClass}>
        <SectionHeading title={compare.title} lead={compare.lead} eyebrow={compare.eyebrow} />

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-200 dark:border-gray-800">
          <div className="hidden grid-cols-12 gap-6 border-b border-ink-200 bg-ink-50 px-6 py-4 md:grid dark:border-gray-800 dark:bg-gray-900">
            <span className="col-span-4" />
            <span className="col-span-4 text-sm leading-5 font-bold text-primary-700 dark:text-primary-400">
              {compare.columns.relining}
            </span>
            <span className="col-span-4 text-sm leading-5 font-bold text-ink-600 dark:text-gray-300">
              {compare.columns.openCut}
            </span>
          </div>

          {COMPARE_ROWS.map((row, index) => (
            <ComparisonRow key={row.label} row={row} index={index} />
          ))}

          <div className="border-t border-ink-200 px-6 py-5 dark:border-gray-800">
            <p className="max-w-3xl text-sm leading-6 text-ink-500 dark:text-gray-400">
              {compare.counting}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-400 dark:text-gray-500">
              {compare.finePrint}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
