import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { calendar } from '../content'

/** Four season cards; the header tints darken as the year does. */
export function Calendar() {
  return (
    <section id="calendar" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold tracking-wider text-primary-800 uppercase">
            {calendar.chip}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {calendar.title}
          </h2>
          <p className="mt-3 text-gray-600">{calendar.lede}</p>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {calendar.seasons.map((season) => (
            <li
              key={season.name}
              className="overflow-hidden rounded-2xl border border-accent-200 bg-white"
            >
              <div className={cn('px-5 py-4', season.header)}>
                <h3 className="font-serif text-xl font-semibold">{season.name}</h3>
                <p className="text-xs font-semibold tracking-wider uppercase opacity-80">
                  {season.months}
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 italic">{season.summary}</p>
                <ul className="mt-4 space-y-2 border-t border-accent-100 pt-4">
                  {season.jobs.map((job) => (
                    <li key={job} className="flex gap-2 text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                      />
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-500">
          {calendar.note}
        </p>
      </div>
    </section>
  )
}
