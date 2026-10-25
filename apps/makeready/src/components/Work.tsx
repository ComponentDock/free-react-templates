import { cn } from '@free-react-templates/ui'
import { work } from '../content'
import { MonoLabel, Reveal, SectionIntro, containerClass, sectionClass } from './ui'

/**
 * Three case studies in the only structure that proves the page's claim:
 * Brief · Approach · Outcome, each closed by one hard number under a lime rule.
 */
export function Work() {
  return (
    <section id="work" className={cn(sectionClass, 'bg-white dark:bg-gray-950')}>
      <div className={containerClass}>
        <SectionIntro eyebrow={work.eyebrow} title={work.title} lead={work.lead} />

        <div className="mt-16 flex flex-col gap-16">
          {work.cases.map((item, index) => (
            <Reveal key={item.company} delay={index * 100}>
              <article className="grid items-center gap-14 lg:grid-cols-2">
                <figure className={cn('relative m-0', index % 2 === 1 ? 'lg:order-2' : '')}>
                  <div className="overflow-hidden rounded-lg bg-primary-100 dark:bg-primary-800">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={700}
                      height={525}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <figcaption className="absolute top-4 left-4 bg-accent-400 px-3 py-1 font-mono text-[11px] leading-5 font-bold tracking-[0.55px] text-primary-900 uppercase">
                    {item.discipline} · {item.year}
                  </figcaption>
                </figure>

                <div>
                  <MonoLabel className="text-primary-500">{item.company}</MonoLabel>
                  <h3 className="mt-3 text-2xl leading-9 font-bold text-primary-900 sm:text-3xl sm:leading-9 dark:text-primary-50">
                    {item.title}
                  </h3>
                  <dl className="mt-6 border-l-2 border-accent-400 pl-5">
                    <dt className="font-mono text-xs leading-4 tracking-[0.55px] text-primary-500 uppercase">
                      {work.labels.brief}
                    </dt>
                    <dd className="mt-1 mb-4 text-base leading-[26px] text-primary-700 dark:text-primary-300">
                      {item.brief}
                    </dd>
                    <dt className="font-mono text-xs leading-4 tracking-[0.55px] text-primary-500 uppercase">
                      {work.labels.approach}
                    </dt>
                    <dd className="mt-1 mb-4 text-base leading-[26px] text-primary-700 dark:text-primary-300">
                      {item.approach}
                    </dd>
                    <dt className="font-mono text-xs leading-4 tracking-[0.55px] text-primary-500 uppercase">
                      {work.labels.outcome}
                    </dt>
                    <dd className="mt-1 text-base leading-[26px] text-primary-700 dark:text-primary-300">
                      {item.outcome}
                    </dd>
                  </dl>
                  <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
                    <span className="text-3xl leading-10 font-bold text-primary-900 sm:text-4xl dark:text-primary-50">
                      {item.metric}
                    </span>
                    <span className="text-sm leading-5 text-primary-500 dark:text-primary-300">
                      {item.metricCaption}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
