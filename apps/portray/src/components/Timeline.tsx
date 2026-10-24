import { ArrowUpRight } from 'lucide-react'
import type { TimelineEntry } from '../data'

export interface TimelineProps {
  id?: string
  heading: string
  entries: TimelineEntry[]
  /** Bottom padding only, matching the reference's experience block. */
  compact?: boolean
}

/** Serif 60px heading over an indented 9-of-12 column of hairline-separated rows. */
export function Timeline({ id, heading, entries, compact = false }: TimelineProps) {
  return (
    <section
      id={id}
      aria-label={heading}
      className={compact ? 'bg-white pb-[70px] lg:pb-[120px]' : 'bg-white py-[70px] lg:py-[120px]'}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="text-[40px] leading-[1.3] text-ink md:text-[60px]">{heading}</h2>
        <div className="lg:ml-[16.666%]">
          <ul>
            {entries.map((entry, index) => (
              <li
                key={`${entry.role}-${entry.period}`}
                className={
                  index === 0
                    ? 'flex flex-wrap items-center justify-between gap-x-8 border-t border-hair py-[15px] pb-[10px]'
                    : 'flex flex-wrap items-center justify-between gap-x-8 py-[15px] pb-[10px]'
                }
              >
                <div>
                  <h3 className="mb-[19px] text-[26px] leading-[1.3] text-ink md:text-[30px]">
                    {entry.role}
                  </h3>
                  <p className="text-[16px] font-light text-ink">{entry.period}</p>
                </div>
                <p className="text-[20px] text-ink">
                  <span className="text-muted">at </span>
                  <a
                    href={entry.orgHref}
                    className="tracking-[0.2px] transition-colors hover:text-neon"
                  >
                    {entry.org}
                    <ArrowUpRight aria-hidden="true" className="ml-[10px] inline size-4" />
                  </a>
                </p>
                <p className="w-full text-[16px] font-light text-ink">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
