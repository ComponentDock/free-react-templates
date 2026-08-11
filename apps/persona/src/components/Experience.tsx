import { experience, experienceTitle } from '../data'

/** Frost-tinted experience section: a vertical timeline with a connecting
 *  line, newest entry first — period, role and company per entry. */
export function Experience() {
  return (
    <section id="experience" aria-label={experienceTitle} className="bg-frost py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">{experienceTitle}</h2>
        <ol className="mx-auto mt-12 max-w-2xl space-y-0 border-l-2 border-accent/20 pl-8">
          {experience.map((entry) => (
            <li key={entry.role} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-white"
              />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {entry.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{entry.role}</h3>
              <p className="mt-1 text-sm text-body">{entry.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
