import { process } from '../content'
import { SectionHeading, containerClass, sectionClass } from './ui'

/**
 * Four steps in a three-column grid: 3 + 1 at every width from 640 up. The orphan
 * fourth cell is the reference's rhythm, not a bug to balance away.
 */
export function Process() {
  return (
    <section id="process" className={`bg-white ${sectionClass} dark:bg-gray-950`}>
      <div className={containerClass}>
        <SectionHeading title={process.title} lead={process.lead} eyebrow={process.eyebrow} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm leading-5 font-bold text-primary-600 tabular-nums dark:text-primary-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-ink-100 dark:bg-gray-800" />
              </div>
              <h3 className="mt-4 text-lg leading-7 font-bold tracking-[-0.45px] text-ink-800 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-ink-500 dark:text-gray-400">{step.body}</p>
              <p className="mt-3 text-sm leading-5 font-semibold text-primary-700 dark:text-primary-400">
                {step.tag}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
