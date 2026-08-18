import { ExternalLink } from 'lucide-react'
import type { ResumeRow } from '../data'

export interface ResumeSectionProps {
  title: string
  rows: ResumeRow[]
}

/**
 * Shared list section for Experience and Education (reference:
 * .may-about > .single-about). Rows are divided by 1px top borders and show
 * a role title, a grey period/company line with an external-link icon, and a
 * blurb paragraph.
 */
export function ResumeSection({ title, rows }: ResumeSectionProps) {
  return (
    <section aria-label={title} className="pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-10 font-heading text-[40px] font-normal leading-[1.3] text-ink">
          {title}
        </h2>
        <div>
          {rows.map((row) => (
            <article key={row.role + row.company} className="border-t border-divider py-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-ink">{row.role}</h3>
                <p className="flex items-center gap-2 text-[20px] text-date-grey">
                  {row.period} · at {row.company}
                  <a
                    href="#contact"
                    aria-label={`Details about ${row.role}`}
                    className="ml-2 text-ink transition-colors hover:text-link-blue"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{row.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
