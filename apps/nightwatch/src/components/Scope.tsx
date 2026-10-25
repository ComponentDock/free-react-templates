import { cn } from '@free-react-templates/ui'
import { SCOPE } from '../content'
import { containerClass, SectionHeading } from './ui'

/** The one band whose eyebrow is neutral: it is a document, not a pitch. */
export function Scope() {
  return (
    <section id="scope" className="bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading title={SCOPE.title} lead={SCOPE.lead} eyebrow={SCOPE.eyebrow} tone="neutral" />

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-200 dark:border-gray-700">
          <p className="border-b border-ink-200 bg-ink-50 px-6 py-4 text-sm leading-5 font-semibold text-ink-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            {SCOPE.header}
          </p>
          <dl>
            {SCOPE.rows.map(([task, frequency], index) => (
              <div
                key={task}
                data-testid="scope-row"
                className={cn(
                  'grid gap-1 px-6 py-4 sm:grid-cols-5',
                  index % 2 === 1 ? 'bg-ink-50/60 dark:bg-gray-900/60' : '',
                )}
              >
                <dt className="text-base leading-6 font-bold text-ink-800 sm:col-span-2 dark:text-white">
                  {task}
                </dt>
                <dd className="font-mono text-sm leading-5 text-ink-500 sm:col-span-3 dark:text-gray-400">
                  {frequency}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400">{SCOPE.note}</p>
      </div>
    </section>
  )
}
