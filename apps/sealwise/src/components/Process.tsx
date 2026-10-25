import { process } from '../content'
import { Reveal, SectionIntro, containerClass } from './ui'

/** Three numbered cells, each with a hairline rule and a duration underneath. */
export function Process() {
  return (
    <section id="process" className="section scroll-mt-20 bg-white dark:bg-gray-950">
      <div className={containerClass}>
        <SectionIntro kicker={process.kicker} title={process.title} lead={process.lead} width="max-w-3xl" />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {process.steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 100}>
              <li>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm leading-5 font-bold text-primary-600 tabular-nums dark:text-primary-400">
                    {step.num}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100 dark:bg-gray-800" />
                </div>
                <h3 className="mt-4 text-lg leading-6 font-bold text-ink-800 dark:text-ink-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-ink-600 dark:text-ink-300">{step.body}</p>
                <p className="mt-3 text-sm leading-5 font-semibold text-primary-700 dark:text-primary-400">
                  {step.duration}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
