import { Heart, Layers, MapPin } from 'lucide-react'
import { JOB_LOCATION, JOBS } from '../data'

/* Featured jobs list on the light #f8f9fa band: nine stacked white job
   cards — uppercase blue badge, 28px title, company + location, a round
   heart button and a blue "Apply Job" button. */
export function FeaturedJobs() {
  return (
    <section className="bg-mist py-[6em]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[2px] text-brand">
            Recently Added Jobs
          </p>
          <h2 className="mt-2 text-[28px] font-medium text-black md:text-[38px]">
            Featured Jobs Posts For This Week
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          {JOBS.map((job) => (
            <article
              key={job.id}
              className="flex flex-col gap-4 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
                <span className="text-[14px] font-medium uppercase tracking-wide text-brand">
                  {job.badge}
                </span>
                <div>
                  <h3 className="text-[28px] font-medium leading-tight text-black">{job.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-black/50">
                    <Layers className="h-4 w-4" aria-hidden="true" />
                    {job.company}
                    <MapPin className="ml-2 h-4 w-4" aria-hidden="true" />
                    {JOB_LOCATION}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label={`Save ${job.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-peach text-accent transition-colors hover:bg-brand hover:text-white"
                >
                  <Heart className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="#"
                  className="rounded-[5px] bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand"
                >
                  Apply Job
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
