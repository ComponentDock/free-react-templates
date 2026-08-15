import { schedule } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Schedule() {
  return (
    <section id="schedule" aria-label="Classes schedule" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Classes Schedule</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Monday — the week starts here. Pick a session and join us on the mat.
          </p>
        </div>
        <div className="mt-14 divide-y divide-gray-200 border-y border-gray-200">
          {schedule.map((row) => (
            <div
              key={row.name}
              className="flex flex-col items-start gap-4 py-8 md:flex-row md:items-center md:gap-8"
            >
              <p className="w-44 shrink-0 font-semibold text-brand-dark">{row.time}</p>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-ink">{row.name}</h3>
                <p className="mt-1 text-muted">{row.copy}</p>
              </div>
              <ButtonLink
                href="#contact"
                className="shrink-0 rounded bg-brand px-5 py-3 text-base text-ink hover:bg-brand-dark"
              >
                Join now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
