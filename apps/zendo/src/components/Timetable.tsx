import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { timetable } from '../data'

/** 7-day class timetable: pink header row (Mon–Sun), ✕ icons in empty
 *  cells, class entries with circular thumbnails, and a month navigation
 *  row below. Scrolls horizontally on small screens. */
export function Timetable() {
  return (
    <section id="schedule-section" aria-label="Class Time Table" className="py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="section-title">Class Time Table</h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-center">
            <thead>
              <tr>
                {timetable.days.map((day) => (
                  <th
                    key={day}
                    scope="col"
                    className="border border-line bg-brand px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-line px-2 py-4 align-middle">
                      {cell ? (
                        <div className="flex flex-col items-center gap-1">
                          <img
                            src={cell.image}
                            alt=""
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <a
                            href="#schedule-section"
                            className="text-xs font-bold text-ink transition-colors hover:text-brand"
                          >
                            {cell.name}
                          </a>
                          <span className="text-[10px] font-light text-muted">{cell.time}</span>
                        </div>
                      ) : (
                        <X className="mx-auto h-4 w-4 text-ink/30" aria-hidden="true" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous month"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold text-ink">{timetable.months[0]}</span>
          <span aria-hidden="true" className="text-sm text-muted">
            …
          </span>
          <span className="text-sm font-semibold text-ink">{timetable.months[1]}</span>
          <button
            type="button"
            aria-label="Next month"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
