import { WORK, WORK_COPY } from '../content'
import { BandHeading, Container, Reveal } from './ui'

/**
 * Three case studies: a 4:3 photograph with a category chip, the blurb, then an
 * `Area / Time / Cost` grid. The card is not a link — the reference pointed
 * each `h3` at the section the card already sits in.
 */
export function Work() {
  return (
    <section id="work" className="section bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <BandHeading
          pill={WORK_COPY.pill}
          tone="dark"
          heading={WORK_COPY.heading}
          lede={WORK_COPY.lede}
          centered
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WORK.map((job, index) => (
            <Reveal key={job.title} delay={index * 100} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={job.photo}
                    alt={`${job.title} in ${job.area}`}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-primary-600 px-2 py-1 text-[10px] font-bold uppercase leading-3 tracking-wider text-white">
                    {job.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-6 text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-5 text-gray-600 dark:text-gray-300">
                    {job.blurb}
                  </p>

                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div>
                      <dt className="text-xs text-gray-500 dark:text-gray-400">
                        {WORK_COPY.labels.area}
                      </dt>
                      <dd className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                        {job.area}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 dark:text-gray-400">
                        {WORK_COPY.labels.time}
                      </dt>
                      <dd className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                        {job.time}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 dark:text-gray-400">
                        {WORK_COPY.labels.cost}
                      </dt>
                      <dd className="text-xs font-semibold tabular-nums text-primary-700 dark:text-primary-300">
                        {job.cost}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
