import { useState } from 'react'
import { JOBS, initialSavedIds, type Job } from './data/jobs'
import { JobCard } from './components/JobCard'
import { PageFooter } from './components/PageFooter'
import { PageHead } from './components/PageHead'
import { StatusLine } from './components/StatusLine'

/**
 * Shortlist — a hiring board: one head over a four-card grid on a sage-grey
 * ground. The only behaviour is the bookmark per card; the head counter and
 * the announcement are both derived from the saved set, so no state is ever
 * read back out of the DOM.
 */
export function App() {
  const [savedIds, setSavedIds] = useState<string[]>(initialSavedIds)
  const [status, setStatus] = useState('')

  function toggleSave(job: Job) {
    const isSaved = savedIds.includes(job.id)
    setSavedIds(isSaved ? savedIds.filter((id) => id !== job.id) : [...savedIds, job.id])
    setStatus(`${job.title} ${isSaved ? 'removed from' : 'saved to'} your list.`)
  }

  return (
    <main className="mx-auto max-w-[1072px] px-4 py-[clamp(32px,6vw,72px)] text-ink">
      <PageHead savedCount={savedIds.length} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-4">
        {JOBS.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            saved={savedIds.includes(job.id)}
            onToggle={() => toggleSave(job)}
          />
        ))}
      </div>
      <StatusLine message={status} />
      <PageFooter />
    </main>
  )
}
