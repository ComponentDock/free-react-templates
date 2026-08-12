import { Download } from 'lucide-react'
import { EDUCATION, EXPERIENCE, RESUME_BLURB, type ResumeEntry } from '../data'

/* Resume section recreated from the ColorLib "Clark" resume: a faint
   "Resume" watermark behind the heading, six dark cards in a two-column
   grid (three education + three experience entries, each with an amber
   date, white 26px title and amber uppercase institution) and a centered
   amber "Download CV" pill below. */

function ResumeCard({ entry }: { entry: ResumeEntry }) {
  return (
    <article className="rounded-[5px] bg-card p-[30px] shadow-[0px_20px_69px_-27px_rgba(0,0,0,0.17)]">
      <p className="text-[26px] font-black text-brand">{entry.date}</p>
      <h3 className="mt-2 text-[26px] font-semibold text-white">{entry.title}</h3>
      <p className="mt-1 text-[12px] font-semibold uppercase tracking-[3px] text-brand">
        {entry.institution}
      </p>
      <p className="mt-3 text-[16px] text-muted">{entry.blurb}</p>
    </article>
  )
}

export function Resume() {
  return (
    <section id="resume-section" className="relative overflow-hidden bg-black py-24 lg:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[7vw] font-black text-watermark"
      >
        Resume
      </span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">Resume</p>
          <h2 className="text-[50px] font-bold text-white">Resume</h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] text-muted">{RESUME_BLURB}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-[30px]">
            {EDUCATION.map((entry) => (
              <ResumeCard key={entry.title} entry={entry} />
            ))}
          </div>
          <div className="space-y-[30px]">
            {EXPERIENCE.map((entry) => (
              <ResumeCard key={entry.title} entry={entry} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 rounded-[40px] bg-brand px-6 py-3 text-[16px] font-semibold text-black transition-colors hover:bg-brand-dark"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
