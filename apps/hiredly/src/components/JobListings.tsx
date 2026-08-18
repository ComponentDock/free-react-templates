import { useState } from 'react'
import { Globe } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  allCategoryJobs,
  jobCategories,
  jobs,
  tagByCategoryKey,
  type Job,
  type TagColor,
} from '../data'

const tagClasses: Record<TagColor, string> = {
  orange: 'bg-tag-orange/25 text-tag-orange',
  blue: 'bg-tag-blue/25 text-tag-blue',
  green: 'bg-tag-green/25 text-tag-green',
  indigo: 'bg-tag-indigo/25 text-tag-indigo',
  pink: 'bg-tag-pink/25 text-tag-pink',
}

function JobCard({ job }: { job: Job }) {
  const tag = tagByCategoryKey[job.categoryKey]
  return (
    <li className="group rounded-[5px] border border-transparent bg-white p-[30px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-colors hover:border-brand">
      <span className={cn('inline-block rounded px-3 py-1 text-xs font-bold', tagClasses[tag])}>
        {job.category}
      </span>
      <h3 className="mt-4 text-2xl font-semibold leading-snug text-ink-dark">{job.title}</h3>
      <p className="mt-2 text-sm text-muted">
        {job.location} <span aria-hidden="true">|</span> {job.type}
      </p>
      <div className="mt-6 flex items-center gap-2 border-t border-hairline pt-4 text-sm">
        <Globe aria-hidden="true" className="size-4 text-muted" />
        <span className="font-medium text-ink/80">{job.company}</span>
        <span className="ml-auto text-xs text-muted">{job.time}</span>
      </div>
    </li>
  )
}

export function JobListings() {
  const [activeKey, setActiveKey] = useState('all')

  const visibleJobs =
    activeKey === 'all' ? allCategoryJobs : jobs.filter((job) => job.categoryKey === activeKey)

  return (
    <section aria-label="Discover jobs for you" id="jobs" className="bg-white pb-[90px] pt-[110px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
            Discover jobs for you
          </h2>
          <p className="mt-3 text-muted">Browse 200+ top jobs in your local city.</p>
        </div>

        <div
          role="tablist"
          aria-label="Job categories"
          className="mb-8 flex flex-wrap justify-center gap-2 border-b border-[rgba(164,172,169,0.4)]"
        >
          {jobCategories.map((category) => {
            const isActive = category.key === activeKey
            return (
              <button
                key={category.key}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveKey(category.key)}
                className={cn(
                  'border-b-4 px-5 pb-4 pt-2 text-lg font-bold transition-colors',
                  isActive
                    ? 'border-brand text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <ul role="list" aria-label="Job cards" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleJobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </ul>
      </div>
    </section>
  )
}
