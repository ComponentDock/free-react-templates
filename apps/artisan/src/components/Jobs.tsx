import { jobs } from '../data'
import { SectionTitle } from './SectionTitle'

const jobIntro =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.'

export function Jobs() {
  return (
    <section id="jobs" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Job History" intro={jobIntro} />
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <article key={job.role + job.company} className="job-card rounded-[10px] bg-mist p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-[21px] font-bold text-ink">{job.role}</h3>
                  <p className="mt-1 font-body text-[15px] text-body">{job.company}</p>
                </div>
                <span className="rounded-full border border-periwinkle bg-white px-7 py-2 font-sans text-sm font-medium text-ink">
                  {job.date}
                </span>
              </div>
              <p className="mt-8 font-body text-[15px] leading-[1.7] text-body">
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
