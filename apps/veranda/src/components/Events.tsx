import { EVENTS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/** Four dated cards with a 64 px indigo date tile and a seat chip. */
export function Events() {
  return (
    <section id="events" className="scroll-mt-24 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHead
          eyebrow="Events"
          tone="accent"
          title="Show up live, or catch the recording"
          lede="Critique sessions, member talks and reading groups. Every session is recorded."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {EVENTS.map((event, index) => (
            <Reveal key={event.title} delay={index * 70}>
              <article className="flex h-full gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-xl bg-primary-600 text-white">
                  <span className="text-xl font-bold tabular-nums">{event.day}</span>
                  <span className="text-[10px] tracking-wider uppercase">{event.month}</span>
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-accent-700 uppercase">
                    {event.type}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{event.meta}</p>
                  <span className="mt-3 inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    {event.seats}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#pricing" className="btn btn-primary">
            View the full calendar
          </a>
        </div>
      </div>
    </section>
  )
}
