import { MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { MODE_STYLES, type Job } from '../data/jobs'
import { SaveButton } from './SaveButton'

interface JobCardProps {
  job: Job
  saved: boolean
  onToggle: () => void
}

/**
 * One hiring notice. Everything above the footer answers who is hiring, how
 * long ago, which role, where and how it is worked; the footer answers what it
 * pays and what kind of contract it is. The saved state repaints the whole
 * card from React state — a pressed toggle tints the ground and the border, it
 * does not just fill the glyph.
 */
export function JobCard({ job, saved, onToggle }: JobCardProps) {
  return (
    <article
      id={job.id}
      className={cn(
        'relative flex flex-col rounded-[18px] border bg-white p-[20px_20px_18px] text-[14.5px] leading-[1.45] text-ink transition-[border-color,box-shadow] duration-200 hover:shadow-[0_14px_30px_-22px_rgba(19,32,26,.5)] motion-reduce:transition-none',
        saved ? 'border-saved-line bg-saved hover:border-saved-line' : 'border-line hover:border-[#b8c6bd]',
      )}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          style={{ backgroundColor: job.logoColor }}
          className="grid size-11 flex-none place-items-center rounded-xl text-[16px] font-extrabold tracking-[-.02em] text-white"
        >
          {job.initials}
        </span>
        <div className="flex min-w-0 flex-1 flex-col leading-[1.3]">
          <span className="font-bold">{job.company}</span>
          <span className="text-[13px] text-muted">{job.postedLabel}</span>
        </div>
        <SaveButton saved={saved} title={job.title} company={job.company} onToggle={onToggle} />
      </div>

      <h2 className="mt-4 mr-0 mb-2 ml-0 text-[19px] leading-[1.3] font-bold tracking-[-.01em]">
        <a
          href={job.href}
          className="shortlist-card-link text-inherit no-underline after:absolute after:inset-0 after:z-[1] after:rounded-[18px] hover:underline hover:decoration-2 hover:underline-offset-[3px]"
        >
          {job.title}
        </a>
      </h2>

      <p className="m-0 flex flex-wrap items-center gap-[10px] text-muted">
        <span className="inline-flex items-center gap-1">
          <MapPin aria-hidden="true" size={16} strokeWidth={2} className="flex-none" />
          {job.location}
        </span>
        <span
          className={cn(
            'rounded-full px-[9px] py-[2px] text-[12.5px] font-bold',
            MODE_STYLES[job.mode.variant],
          )}
        >
          {job.mode.label}
        </span>
      </p>

      <ul aria-label="Skills" className="mt-[14px] mr-0 mb-[18px] ml-0 flex list-none flex-wrap gap-1.5 p-0">
        {job.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-line px-[10px] py-1 text-[13px] font-medium text-[#2c3a33]"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-[10px] border-t border-line pt-[14px]">
        <p className="m-0 text-muted">
          <strong className="text-[16px] font-bold text-ink">{job.pay.amount}</strong>{' '}
          {job.pay.suffix}
        </p>
        <span className="text-[13px] font-semibold text-muted">{job.contract}</span>
      </div>
    </article>
  )
}
